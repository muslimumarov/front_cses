import MainServiceCard from "../../moleculas/cards/MainServiceCard.tsx";
import useServices from "./useServices.tsx";
import { Language } from "../../../enums/Language.ts";
import i18n from "i18next";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const MainServices = () => {
  const { services, isLoading } = useServices();
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/action");
  };
  const handleReportClic = () => {
    navigate("/recommendations");
  };
  const currentLang = i18n.language as Language;

  if (isLoading || isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label="Loading services" size="xl" />
      </div>
    );
  }
  return (
    <div className="mx-auto grid w-[1000px] max-w-[90%] shrink-0 grid-cols-2 gap-6 pt-6 lg:mx-6 lg:grid-cols-4 lg:pt-10">
      {services.slice(0, 2).map((service) => {
        const title = service.translations[currentLang]?.title || "";
        return (
          <MainServiceCard
            key={service.id}
            title={title.length > 30 ? title.slice(0, 35) + "..." : title}
            src={service.logo}
          />
        );
      })}
      <button
        onClick={handleReportClic}
        className="animate__animated animate__fadeIn flex items-center   gap-2 rounded-2xl border border-gray-200/30 p-2 transition-colors duration-300 hover:bg-white/10 lg:p-4"
      >
        <span className="ml-14 font-medium  ">TAVSIYALAR</span>
        <span className="absolute left-0 top-0 size-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>
      <button
        onClick={handleReportClick}
        className="animate__animated animate__fadeIn flex items-center   gap-2 rounded-2xl border border-gray-200/30 p-2 transition-colors duration-300 hover:bg-white/10 lg:p-4"
      >
        <span className="font-medium">HODISA HAQIDA XABAR BERISH</span>
        <span className="absolute left-0 top-0 size-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </button>
    </div>
  );
};

export default MainServices;
