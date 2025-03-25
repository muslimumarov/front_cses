import { useTranslation } from "react-i18next";
import { Spinner } from "flowbite-react";
import { useState } from "react";
import useGetStaff from "./hook/useSection.ts";
import { StaffMember } from "./interface/section.interface.ts";
import { useNavigate } from "react-router-dom";

const StaffList = () => {
  const { staff, isLoading } = useGetStaff();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredStaff = staff.filter(
    (member: StaffMember) =>
      (member.department && Object.keys(member.department).length > 0) ||
      (member.section && Object.keys(member.section).length > 0),
  );

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label="Loading staff members" size="xl" />
      </div>
    );
  }

  const handleNavigateToDetail = (id: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering other click events
    navigate(`/company/departments/${id}`);
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {filteredStaff
        .slice()
        .reverse()
        .map((member) => {
          const departmentTitle =
            member.department?.translations?.[i18n.language]?.title || "";
          const sectionTitle =
            member.section?.translations?.[i18n.language]?.title || "";
          const name = member.translations?.[i18n.language]?.fullname;

          return (
            <div
              key={member.id}
              className="group relative overflow-hidden    transition-transform hover:scale-105"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={`/${member.avatar}`}
                alt={name}
                className="h-80 w-full rounded-xl border object-cover hover:shadow-md"
              />

              {/* Label */}
              <div className="relative bottom-6 left-1/2 flex w-[90%] -translate-x-1/2 flex-col items-center rounded-md bg-gray-50 p-2 text-center shadow-md dark:bg-gray-950">
                <div
                  className="cursor-pointer break-words text-sm font-semibold  dark:text-white"
                  onClick={(e) => handleNavigateToDetail(member.id, e)}
                >
                  {departmentTitle || sectionTitle}
                </div>

                {/* Tooltip Info */}
                <div
                  className={`absolute bottom-full z-10 mb-3 w-56 rounded-md bg-gray-50  p-4  text-xs text-gray-700 shadow-lg transition-all duration-300 dark:bg-gray-700 dark:text-white ${
                    hoveredId === member.id
                      ? "translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-2 scale-95 opacity-0"
                  }`}
                >
                  <div className="mb-1 font-semibold">{name}</div>
                  <div className="mb-1">
                    {member.position?.translations?.[i18n.language]?.title}
                  </div>
                  <div className="mb-1">{member.email}</div>
                  <div>{member.phone}</div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default StaffList;
