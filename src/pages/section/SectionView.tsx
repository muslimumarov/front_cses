import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Spinner } from "flowbite-react";
import { ArrowLeft, Mail, Phone, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useGetManagementById from "../managemant/hook/useManagementByid.ts";

const StaffDetailPage = () => {
  const { id } = useParams();
  const { management, isLoading, error } = useGetManagementById(id);
  const { t, i18n } = useTranslation();
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const stripHTML = (htmlString = "") => {
    return htmlString.replace(/<[^>]+>/g, "").trim();
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label="Loading staff member" size="xl" />
      </div>
    );
  }

  if (error || !management) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {t("Error loading staff member")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t("Could not load the requested staff member information.")}
        </p>
        <Link
          to="/company/management"
          className="mt-4 flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          <ArrowLeft size={16} />
          {t("Back to Management")}
        </Link>
      </div>
    );
  }

  const currentTranslation = management.translations?.[i18n.language] || {};
  const positionTitle =
    management.position?.translations?.[i18n.language]?.title || "";
  const tasksText = stripHTML(currentTranslation.tasks || "");
  const departmentName =
    management.department?.translations?.[i18n.language]?.title || "";
  const sectionName =
    management.section?.translations?.[i18n.language]?.title || "";
  const sectionDescription =
    management.section?.translations?.[i18n.language]?.description || "";

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Link
        to="/company/departments"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
      >
        <ArrowLeft size={16} />
        {t("Back to Management")}
      </Link>

      <div className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800">
        {/* Header */}
        <div className="to-gray-150 dark:to-gray-150 relative bg-gradient-to-r from-gray-200 px-6 py-8 dark:from-gray-700">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="relative">
              <img
                src={`/${management.avatar}`}
                alt={currentTranslation.fullname || ""}
                className="size-36 rounded-full border-4 border-white object-cover shadow-md dark:border-gray-700 md:size-40"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                {currentTranslation.fullname || t("No name")}
              </h1>
              <p className="mt-1 text-lg font-medium text-blue-600 dark:text-blue-400">
                {positionTitle}
              </p>
              {(departmentName || sectionName) && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {departmentName && <span>{departmentName}</span>}
                  {departmentName && sectionName && <span> • </span>}
                  {sectionName && <span>{sectionName}</span>}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="grid gap-6 border-b border-gray-200 p-6 dark:border-gray-700 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {t("Phone")}
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {management.phone || "-"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {t("Email")}
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {management.email || "-"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {t("Reception Days")}
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {currentTranslation.acceptance || "-"}
              </p>
            </div>
          </div>
        </div>

        {tasksText && (
          <div className="border-b border-gray-200 p-6 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t("Tasks")}
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{tasksText}</p>
          </div>
        )}

        {/* Section description */}
        {sectionName && (
          <div className="p-6">
            <button
              onClick={() => setIsSectionOpen(!isSectionOpen)}
              className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-4 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              <span className="text-lg font-medium">{sectionName}</span>
              <ChevronRight
                size={20}
                className={`transition-transform ${
                  isSectionOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            {isSectionOpen && (
              <div className="mt-4 rounded-lg bg-gray-50 p-5 text-gray-700 dark:bg-gray-700/50 dark:text-gray-200">
                {sectionDescription || t("No description available")}
              </div>
            )}
          </div>
        )}

        {/* Last updated */}
        {/* <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400"> */}
        {/* <p> */}
        {/* {t("Last updated")}:{" "} */}
        {/* {new Date(management.updatedAt).toLocaleDateString()} */}
        {/* </p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default StaffDetailPage;
