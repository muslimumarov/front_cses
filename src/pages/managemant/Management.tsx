"use client";

import type React from "react";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import useGetStaff from "./hook/useManagement";
import type { StaffMember } from "./interface/management.interface.ts";

const StaffList = () => {
  const { staff, isLoading } = useGetStaff();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [openDropdowns, setOpenDropdowns] = useState<Record<number, boolean>>(
    {},
  );

  const filteredStaff = staff.filter(
    (member: StaffMember) =>
      (!member.department || Object.keys(member.department).length === 0) &&
      (!member.section || Object.keys(member.section).length === 0),
  );

  const toggleDropdown = (id: number) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNavigateToDetail = (id: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering other click events
    navigate(`/company/staff/${id}`);
  };

  const stripHTML = (htmlString: string) => {
    return htmlString.replace(/<[^>]+>/g, "").trim();
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label="Loading staff members" size="xl" />
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6">
      {filteredStaff
        .slice()
        .reverse()
        .map((member) => {
          const isOpen = openDropdowns[member.id] || false;
          const tasksRaw = member.translations?.[i18n.language]?.tasks || "";
          const tasksText = stripHTML(tasksRaw);
          const fullName =
            member.translations?.[i18n.language]?.fullname || t("No name");
          const positionTitle =
            member.position?.translations?.[i18n.language]?.title || "";

          return (
            <div
              key={member.id}
              className="flex flex-col gap-4 rounded-lg border-b p-4 pb-6 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] md:flex-row md:items-start"
            >
              {/* Avatar with clickable overlay */}
              <div className="relative flex justify-center md:block">
                <img
                  src={`/${member.avatar}`}
                  alt={fullName}
                  className="size-28 rounded-full border object-cover md:size-32"
                />
                <div
                  onClick={(e) => handleNavigateToDetail(member.id, e)}
                  className="absolute inset-x-0 bottom-0 cursor-pointer rounded-b-full bg-gradient-to-t from-black/70 to-transparent p-2 text-center text-xs text-white opacity-0 transition-opacity hover:opacity-100"
                >
                  {t("View Details")}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center dark:text-white md:text-left">
                <h3
                  className="cursor-pointer text-lg font-semibold transition-colors hover:text-blue-600"
                  onClick={(e) => handleNavigateToDetail(member.id, e)}
                >
                  {fullName}
                </h3>

                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {positionTitle}
                </p>

                <div className="flex flex-col space-y-2 text-sm text-gray-600 md:flex-row md:items-center md:space-x-8 md:space-y-0">
                  <div className={"dark:text-gray-400"}>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {t("E-mail")}:{" "}
                    </p>
                    {member.email}
                  </div>
                  <div className={"dark:text-gray-400"}>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {t("Telefon")}:{" "}
                    </p>
                    {member.phone}
                  </div>
                  <div className={"dark:text-gray-400"}>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {t("Qabul kuni va vaqtlari")}:
                    </p>
                    {member.translations?.[i18n.language]?.acceptance || "-"}
                  </div>
                </div>

                {/* Dropdown Content */}
                {isOpen && (
                  <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-200 ">
                    <h4 className="mb-2 font-semibold dark:text-white">
                      {t("Vazifalari")}:
                    </h4>
                    <p>{tasksText || "Vazifa mavjud emas"}</p>
                  </div>
                )}
              </div>

              {/* Dropdown Toggle */}
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => toggleDropdown(member.id)}
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

export default StaffList;
