import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Spinner } from "flowbite-react";
import useGetVacancies from "./hook/useVacancies.ts";
import { Language } from "../../core/enums/Language.ts";
import { useNavigate } from "react-router-dom";

const VacancyList = () => {
  const { vacancies, isLoading } = useGetVacancies();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [openDropdowns, setOpenDropdowns] = useState<Record<number, boolean>>(
    {},
  );
  const reversedVacancies = vacancies.slice().reverse();

  const toggleDropdown = (id: number) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const stripHTML = (htmlString: string) => {
    return htmlString.replace(/<[^>]+>/g, "").trim();
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center dark:bg-gray-800">
        <Spinner aria-label="Loading vacancies" size="xl" />
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6 dark:bg-gray-800 dark:text-white">
      {reversedVacancies
        .slice()
        .reverse()
        .map((vacancy) => {
          const isOpen = openDropdowns[vacancy.id] || false;
          const translation =
            vacancy.translations?.[i18n.language as Language] || {};

          const requirementsText = stripHTML(translation.requirements || "");
          const workConditionsText = stripHTML(
            translation.workConditions || "",
          );
          const responsibilitiesText = stripHTML(
            translation.responsibilities || "",
          );

          const isActive = vacancy.status === "ACTIVE";
          return (
            <div
              key={vacancy.id}
              className="flex flex-col   gap-4 rounded-lg border-b p-4 pb-6 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] md:flex-row md:items-start"
            >
              <div className="flex-1 text-center md:text-left ">
                <h3 className="mb-1 text-lg font-semibold">
                  {translation.title || t("No title")}
                </h3>

                <p className="mb-3 text-sm  text-gray-500 dark:text-white">
                  {translation.location || t("No location")}
                </p>

                <div className="flex flex-col space-y-3 text-sm  text-gray-700 dark:text-white md:flex-row md:items-center md:space-x-8 md:space-y-0">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium  text-gray-800 dark:text-white">
                      {t("Maosh")}:
                    </span>
                    <span>{vacancy.salary}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-medium  text-gray-800 dark:text-white">
                      {t("Bandlik turi")}:
                    </span>
                    <span>{vacancy.employmentType}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-800">
                      {t("Holati")}:
                    </span>
                    <span
                      className={`inline-flex items-center space-x-1 ${
                        isActive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <span
                        className={`size-3 rounded-full ${
                          isActive ? "bg-green-500" : "bg-red-500"
                        }`}
                      />
                      <span>{isActive ? t("Faol") : t("Faol emas")}</span>
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 space-y-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-700 dark:bg-gray-600 dark:text-white">
                    <div>
                      <h4 className="mb-1 font-semibold">{t("Talablar")}:</h4>
                      <p>{requirementsText || t("Talablar mavjud emas")}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold">
                        {t("Ish sharoitlari")}:
                      </h4>
                      <p>
                        {workConditionsText || t("Ish sharoitlari mavjud emas")}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold">
                        {t("Mas'uliyatlar")}:
                      </h4>
                      <p>
                        {responsibilitiesText || t("Mas'uliyatlar mavjud emas")}
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-center text-white shadow-md transition hover:from-blue-600 hover:to-indigo-700 dark:from-blue-600 dark:to-indigo-700 dark:hover:from-blue-700 dark:hover:to-indigo-800"
                        onClick={() =>
                          navigate(`/company/vacancy/${vacancy.id}`)
                        }
                      >
                        {t("Ariza yuborish")}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => toggleDropdown(vacancy.id)}
                  className="flex items-center justify-center rounded-full border p-2 transition hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default VacancyList;
