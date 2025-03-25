import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import usePartners from "./usePartner.tsx";
import { Language } from "../../../enums/Language.ts";
import { useTranslation } from "react-i18next";

const SPEED = 1;

const Partners = () => {
  const { data: partners = [] } = usePartners();
  const x = useMotionValue(0);
  const animationRef = useRef<number | null>(null);

  const { i18n, t } = useTranslation();
  const currentLang = i18n.language as Language;

  const totalWidth = partners.length * (192 + 24);

  const animate = () => {
    const prev = x.get();
    let next = prev - SPEED;
    if (Math.abs(next) >= totalWidth) {
      next = 0;
    }
    x.set(next);
    animationRef.current = requestAnimationFrame(animate);
  };

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

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [totalWidth]);

  const handleDragEnd = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className="mb-40 overflow-hidden bg-white pt-10 dark:bg-gray-900 dark:text-white">
      <section className="mx-auto max-w-[90%]">
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("Hamkorlar")}
          </h2>
          <motion.div
            className="mt-2 h-1 bg-blue-600 dark:bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "3.5rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
        <div className="relative overflow-hidden p-5">
          <motion.div
            className="flex w-max space-x-6"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -Infinity, right: Infinity }}
            whileTap={{ cursor: "grabbing", scale: 1.05 }}
            onDragEnd={handleDragEnd}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="w-48 shrink-0 rounded-lg bg-white p-4 text-center shadow-lg dark:bg-gray-950 dark:text-white"
              >
                <img
                  src={partner.logo}
                  alt="d"
                  className="mx-auto mb-4 h-16 object-contain"
                />
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

                <p className="mt-2 text-sm text-gray-700">
                  {partner.translations?.[currentLang]?.organization
                    ? partner.translations[currentLang].organization
                    : t("Noma'lum tashkilot")}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
