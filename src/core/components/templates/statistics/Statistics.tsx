import { Globe, Bug, Landmark } from "lucide-react";
import StatCard from "./StatisticsCards.tsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const iconClass = "text-gray-900 dark:text-white";
  const { t } = useTranslation();
  const stats = [
    {
      icon: <Globe size={60} className={iconClass} />,
      value: 102,
      description:
        "2024 Yil 1-Yarim Yillikda Ekspertiza O‘tkazilgan Veb-Saytlar Soni",
    },
    {
      icon: <Bug size={60} className={iconClass} />,
      value: 82,
      description:
        "2024 Yil 1-Yarim Yillikda Milliy 'UZ' Domeni Hududida Topilgan Axborot Xavfsizligi Hodisalari Soni",
    },
    {
      icon: <Landmark size={60} className={iconClass} />,
      value: 42,
      description:
        "2024 Yil 1-Yarim Yillikda Davlat Tashkilotlari Veb Saytlarida Aniqlangan Axborot Xavfsizligi Hodisalari Soni",
    },
  ];

  return (
    <div className="mb-20 bg-blue-50 dark:bg-gray-900">
      <div className="mx-auto max-w-[90%] py-32">
        <div className="relative mb-12 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("Statistika")}
          </h2>
          <motion.div
            className="mt-2 h-1 bg-blue-600 dark:bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "3.5rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
