import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Label,
  TextInput,
  Textarea,
  FileInput,
  Button,
  Spinner,
} from "flowbite-react";
import useAddCandidate from "./hook/useApply.ts";

const VacanciesForm = ({ vacancyId = 0 }: { vacancyId?: number }) => {
  const { t } = useTranslation();
  const { postCandidate, isPending } = useAddCandidate(vacancyId);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    description: "",
    cv: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, cv: e.target.files?.[0] || null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.cv) {
      alert("Iltimos, CV faylini yuklang!");
      return;
    }

    try {
      await postCandidate({
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        description: formData.description,
        cv: formData.cv,
      });

      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        description: "",
        cv: null,
      });

      alert("Arizangiz muvaffaqiyatli yuborildi!");
    } catch (error) {
      console.error("Ariza yuborishda xatolik:", error);
      alert("Xatolik yuz berdi, iltimos qayta urinib ko‘ring.");
    }
  };

  return (
    <div className="mx-auto  rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="mb-6 text-center text-2xl font-bold dark:text-white">
        {t("Vakansiya uchun ariza yuborish")}
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <Label
            htmlFor="fullName"
            value={t("Full Name")}
            className="dark:text-white"
          />
          <TextInput
            id="fullName"
            name="fullName"
            type="text"
            placeholder={t("Ism va Familiya")}
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label
            htmlFor="phoneNumber"
            value={t("Phone Number")}
            className="dark:text-white"
          />
          <TextInput
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="+998 90 123 45 67"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="email" value="Email" className="dark:text-white" />
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="example@mail.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label
            htmlFor="description"
            value={t("Description")}
            className="dark:text-white"
          />
          <Textarea
            id="description"
            name="description"
            placeholder={t("O'zingiz haqingizda qisqacha")}
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label
            htmlFor="cv"
            value={t("Upload CV")}
            className="dark:text-white"
          />
          <FileInput
            id="cv"
            name="cv"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleFileChange}
          />
        </div>

        <div className="pt-4">
          <Button
            disabled={isPending}
            type="submit"
            gradientDuoTone="purpleToBlue"
            className="w-full text-white"
          >
            {isPending ? (
              <Spinner aria-label="Sending..." size="sm" />
            ) : (
              t("Ariza yuborish")
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VacanciesForm;
