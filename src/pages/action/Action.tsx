import type React from "react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Label, TextInput, Button, Select, Textarea } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import useAction from "./hook/useAction";
import type { ActionItem } from "./interface/action.interface";
import { NCity } from "../../core/enums/Region";
import Footer from "../../core/components/templates/footer/Footer";

const ActionFormPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { postAction, isPending } = useAction();

  const [formData, setFormData] = useState<ActionItem>({
    producer: "LEGAL",
    fullname: "",
    region: "",
    phone: "",
    email: "",
    action_date: new Date().toISOString().split("T")[0],
    description: "",
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCalendar = () => setIsCalendarOpen((prev) => !prev);

  const handleDateClick = (day: number) => {
    const current = new Date(formData.action_date);
    const selectedDate = new Date(
      current.getFullYear(),
      current.getMonth(),
      day,
    );
    const isoDate = selectedDate.toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, action_date: isoDate }));
    setIsCalendarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postAction(formData);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error(t("submitError"), err);
    }
  };

  const getDaysInMonth = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  };

  const currentDate = new Date(formData.action_date);
  const days = getDaysInMonth(formData.action_date);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-1 items-center justify-center px-8 py-10 sm:px-6 md:py-12">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="overflow-hidden rounded-2xl bg-white shadow-2xl transition-all dark:bg-gray-800"
          >
            <div className="bg-blue-800 p-6 dark:bg-blue-700">
              <h2 className="text-center text-2xl font-bold text-white">
                {t("Hodisa haqida xabar")}
              </h2>
            </div>

            <div className="space-y-5 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="fullname"
                    value={t("fullname")}
                    className="mb-1.5 block text-sm font-medium"
                  />
                  <TextInput
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="region"
                    value={t("region")}
                    className="mb-1.5 block text-sm font-medium"
                  />
                  <Select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                    className="w-full"
                  >
                    <option value="">{t("selectRegion")}</option>
                    {Object.entries(NCity).map(([key, value]) => (
                      <option key={key} value={value}>
                        {value}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="phone"
                    value={t("phone")}
                    className="mb-1.5 block text-sm font-medium"
                  />
                  <TextInput
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    value={t("email")}
                    className="mb-1.5 block text-sm font-medium"
                  />
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div className="relative" ref={calendarRef}>
                <Label
                  value={t("actionDate")}
                  className="mb-1.5 block text-sm font-medium"
                />
                <div
                  className="flex w-full cursor-pointer items-center rounded-lg border bg-white p-2.5 text-sm transition-all hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  onClick={toggleCalendar}
                >
                  <span>
                    {new Date(formData.action_date).toLocaleDateString()}
                  </span>
                  <svg
                    className="ml-auto size-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                {isCalendarOpen && (
                  <div className="absolute z-10 mt-1 w-64 origin-top-right rounded-lg border bg-white p-4 shadow-lg transition-all dark:border-gray-600 dark:bg-gray-700">
                    <div className="mb-3 flex items-center justify-between text-center">
                      <button
                        type="button"
                        className="inline-flex rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-600"
                        onClick={() => {
                          const newDate = new Date(formData.action_date);
                          newDate.setMonth(newDate.getMonth() - 1);
                          setFormData((prev) => ({
                            ...prev,
                            action_date: newDate.toISOString().split("T")[0],
                          }));
                        }}
                      >
                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div className="text-sm font-medium dark:text-white">
                        {currentDate.toLocaleString("default", {
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <button
                        type="button"
                        className="inline-flex rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-600"
                        onClick={() => {
                          const newDate = new Date(formData.action_date);
                          newDate.setMonth(newDate.getMonth() + 1);
                          setFormData((prev) => ({
                            ...prev,
                            action_date: newDate.toISOString().split("T")[0],
                          }));
                        }}
                      >
                        <svg
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-xs">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <div
                          key={day}
                          className="font-medium text-gray-500 dark:text-gray-400"
                        >
                          {day}
                        </div>
                      ))}
                      {Array.from({
                        length: new Date(
                          currentDate.getFullYear(),
                          currentDate.getMonth(),
                          1,
                        ).getDay(),
                      }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {days.map((day) => {
                        const isToday =
                          day === new Date().getDate() &&
                          currentDate.getMonth() === new Date().getMonth() &&
                          currentDate.getFullYear() ===
                            new Date().getFullYear();
                        const isSelected =
                          day === new Date(formData.action_date).getDate();

                        return (
                          <div
                            key={day}
                            className={`flex size-8 cursor-pointer items-center justify-center rounded-full text-sm transition-colors ${
                              isSelected
                                ? "bg-blue-600 text-white"
                                : isToday
                                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-600"
                            }`}
                            onClick={() => handleDateClick(day)}
                          >
                            {day}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <Label
                  htmlFor="description"
                  value={t("description")}
                  className="mb-1.5 block text-sm font-medium"
                />
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                color="blue"
                isProcessing={isPending}
                className="w-full rounded-lg py-2.5 text-sm font-medium"
              >
                {isPending ? t("submitting") : t("submit")}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <footer className="relative z-10 w-full bg-white shadow-md dark:bg-gray-800">
        <Footer />
      </footer>
    </div>
  );
};

export default ActionFormPage;
