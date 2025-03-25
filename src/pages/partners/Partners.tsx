import React from "react";
import { Card } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { motion } from "framer-motion";
import usePartner from "./hook/usePartner.tsx";
import { useTranslation } from "react-i18next";
import { Language } from "../../core/enums/Language.ts";

const PartnerList: React.FC = () => {
  const { partners, isLoading } = usePartner();

  const { i18n, t } = useTranslation();
  const currentLang = i18n.language as Language;

  const getHostname = (url: string | undefined) => {
    if (!url) return "Noma'lum";
    try {
      const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
      const { hostname } = new URL(formattedUrl);
      return hostname.replace("www.", "");
    } catch {
      return "Noma'lum";
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex h-40 items-center justify-center rounded-xl bg-gray-100"
            >
              <Spinner size="lg" />
            </div>
          ))
        : partners.map((partner) => (
            <motion.a
              key={partner.id}
              href={
                partner.url.startsWith("http")
                  ? partner.url
                  : `https://${partner.url}`
              }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center rounded-2xl bg-white p-4 shadow-md transition-shadow hover:shadow-xl"
            >
              <img
                src={`/${partner.logo}`}
                alt={partner.translations.uz.organization}
                className="mb-4 size-24 object-contain"
              />
              <Card className="w-full  text-center shadow-none">
                <h3 className="text-lg font-semibold">
                  {partner.translations?.[currentLang]?.organization
                    ? partner.translations[currentLang].organization
                    : t("Noma'lum tashkilot")}
                </h3>
                <a
                  href={
                    partner.url?.startsWith("http")
                      ? partner.url
                      : `https://${partner.url}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-700"
                >
                  {getHostname(partner.url)}
                </a>
              </Card>
            </motion.a>
          ))}
    </div>
  );
};

export default PartnerList;
