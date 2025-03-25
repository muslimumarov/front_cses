import { useTranslation } from "react-i18next";
import { ServiceCard } from "../../moleculas/cards";
import useServices from "./useServices.tsx";
import { Language } from "../../../enums/Language.ts";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

const Services = () => {
  const { i18n, t } = useTranslation();
  const { services, isLoading } = useServices();
  const [isMobile, setIsMobile] = useState(false);

  const currentLang = i18n.language as Language;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center  dark:bg-gray-900">
        <Spinner aria-label="Loading staff members" size="xl" />
      </div>
    );
  }

  const displayedServices = isMobile
    ? services.slice(0, 4)
    : services.slice(0, 12);

  return (
    <div className={"mx-auto pb-32 shadow-md  dark:bg-gray-900  "}>
      <div className=" mx-auto max-w-[90%]">
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:pt-10 xl:grid-cols-4">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={
                service.translations[currentLang]?.title?.length > 50
                  ? service.translations[currentLang]?.title?.slice(0, 50) +
                    "..."
                  : service.translations[currentLang]?.title
              }
              src={service.logo}
            />
          ))}
        </div>

        {isMobile && (
          <div className="pt-4 text-right">
            <Link
              to="/services"
              className="rounded-lg bg-blue-900 px-4 py-2 text-white hover:bg-blue-700"
            >
              {t("Barcha xizmatlar")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
