import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  EyeIcon,
  MoonIcon,
  PhoneIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react";
import { LanguageSelector } from "../language";
import { Navbar, SideNavbar } from "../navbar";
import { Link } from "react-router-dom";
import clsx from "clsx";

type HeaderProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
};

const Header = ({ darkMode, onToggleTheme }: HeaderProps) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={clsx(
          "sticky top-0 z-50 flex flex-col items-start justify-between gap-2 bg-white p-3 transition-all duration-300 dark:bg-gray-900 dark:text-white md:flex-row md:items-center md:px-12",
          isScrolled ? "py-2 shadow-md" : "py-4 shadow-none",
        )}
      >
        <div className="flex gap-3">
          <div className="flex shrink-0 items-center justify-center xl:hidden">
            <SideNavbar />
          </div>
          <div className="shrink-0">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" width={100} />
            </Link>
          </div>

          <div className="flex w-[2px] flex-col shadow">
            <div className="w-full flex-1 bg-blue-500"></div>
            <div className="w-full flex-1 border-y-4 border-red-600 bg-white"></div>
            <div className="w-full flex-1 bg-green-600"></div>
          </div>

          <div
            className={clsx(
              "flex flex-col justify-center font-montserrat font-semibold uppercase text-blue-900 transition-all duration-300 sm:font-bold",
              isScrolled
                ? "text-base sm:text-lg lg:text-xl"
                : "text-md sm:text-xl lg:text-2xl",
            )}
          >
            <Trans>
              <h2
                className="animate-shimmer bg-clip-text text-sm text-transparent sm:text-lg lg:text-2xl"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #3b82f6 0%, rgb(31,81,143) 25%, rgb(16,82,158) 50%, #60a5fa 75%, rgb(5,52,128) 100%)",
                  backgroundSize: "200% auto",
                }}
              >
                Kiberxavfsizlik markazi
              </h2>
              <h3 className={" t text-sm dark:text-white lg:text-xl"}>
                Davlat Unitar Korxonasi
              </h3>
            </Trans>
          </div>
        </div>

        <ul
          className={clsx(
            "hidden justify-between gap-2 transition-all duration-300 md:flex-col xl:flex",
            isScrolled ? "gap-1" : "gap-2",
          )}
        >
          <li className="text-md inline-flex items-center justify-between gap-2 font-bold">
            <SearchIcon strokeWidth={1} size={28} />
            <EyeIcon strokeWidth={1} size={28} />
            <button
              onClick={onToggleTheme}
              className="rounded-full p-1 text-gray-700 transition-transform hover:scale-110 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              title="Переключить тему"
            >
              {darkMode ? (
                <SunIcon size={28} strokeWidth={1.5} />
              ) : (
                <MoonIcon size={28} strokeWidth={1.5} />
              )}
            </button>
            <LanguageSelector />
          </li>
          <li>
            <a href="tel:+998555021010" className="inline-flex items-center">
              <span className="inline-block">
                <PhoneIcon strokeWidth={1} size={28} />
              </span>
              <span className="inline-block text-center font-bold uppercase">
                <span className="inline-block text-sm">
                  {t("ishonch telefoni")}
                </span>
                <br />
                <span>555-02-1010</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
