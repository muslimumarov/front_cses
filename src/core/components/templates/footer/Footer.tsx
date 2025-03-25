import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { Trans } from "react-i18next";
import { PhoneIcon, MapPinIcon, ArrowRightIcon } from "lucide-react";
import logo from "../../../../assets/csec-white.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/action");
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#003366] to-[#002952] pb-8 pt-16 text-white dark:from-[#111827] dark:to-[#0f172a] dark:text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="mx-auto w-full max-w-[90%] px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Logo and Address */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 flex flex-col items-center gap-3 md:flex-row md:items-center">
              <div className="flex gap-3">
                <div className="shrink-0 transition-transform hover:scale-105">
                  <img
                    src={logo || "/placeholder.svg"}
                    alt="logo"
                    className="w-[125px] object-cover"
                  />
                </div>
                <div className="flex w-[2px] flex-col overflow-hidden rounded-full shadow">
                  <div className="w-full flex-1 bg-blue-500" />
                  <div className="w-full flex-1 border-y-4 border-red-600 bg-white" />
                  <div className="w-full flex-1 bg-green-600" />
                </div>
                <div className="flex flex-col justify-center font-montserrat font-semibold uppercase text-white sm:font-bold">
                  <Trans>
                    <h2 className="text-md tracking-tight sm:text-xl lg:text-2xl">
                      Kiberxavfsizlik markazi
                    </h2>
                    <h3 className="animate-[shimmer_6s_linear_infinite] bg-gradient-to-r from-blue-500 via-blue-900 via-50% to-blue-400 bg-[length:200%_auto] bg-clip-text text-sm text-transparent sm:text-lg lg:text-xl">
                      Davlat Unitar Korxonasi
                    </h3>
                  </Trans>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-lg bg-blue-900/30 px-3 py-2">
              <MapPinIcon size={16} className="mt-0.5 shrink-0 text-blue-300" />
              <p className="text-center text-xs leading-relaxed md:text-left">
                Manzilimiz: Toshkent shahar, Mirobod tumani, Taras Shevchenko
                ko'chasi, 20
              </p>
            </div>
          </div>

          {/* Action Button and Contact + Socials */}
          <div className="mt-8 flex flex-col items-center md:mt-0 md:flex-row md:items-center md:gap-8">
            <button
              onClick={handleReportClick}
              className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-white shadow-md transition-all hover:shadow-lg"
            >
              <span className="font-medium">Hodisa haqida xabar berish</span>
              <ArrowRightIcon
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              {/* Hover effect */}
              <span className="absolute left-0 top-0 size-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

            <div className="mt-6 text-center md:mt-0 md:text-right">
              {/* Phone */}
              <div className="mb-5 flex items-center gap-3 py-2">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-700/50 text-white shadow-inner">
                  <PhoneIcon strokeWidth={1.5} size={20} />
                </div>
                <div>
                  <span className="block text-sm font-bold uppercase text-blue-300">
                    Ishonch telefoni
                  </span>
                  <a
                    href="tel:+998555021010"
                    className="text-lg font-semibold transition-colors hover:text-blue-300"
                  >
                    555-02-1010
                  </a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div>
                <p className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-blue-300">
                  Ijtimoiy tarmoqlar
                </p>
                <div className="flex justify-center gap-5">
                  <a
                    href="https://t.me/yourtelegramchannel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full bg-blue-700/50 text-white transition-transform hover:scale-110 hover:shadow-md"
                  >
                    <FaTelegram className="text-xl" />
                  </a>
                  <a
                    href="https://facebook.com/yourfacebookpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full bg-blue-700/50 text-white transition-transform hover:scale-110 hover:shadow-md"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="https://youtube.com/youryoutubechannel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full bg-blue-700/50 text-white transition-transform hover:scale-110 hover:shadow-md"
                  >
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-10 border-t border-blue-800/50 pt-6 text-center">
          <div className="text-sm font-medium text-blue-200/90">
            "Kiberxavfsizlik markazi" davlat unitar korxonasi
          </div>
          <p className="mt-2 text-xs text-blue-300/70">
            ©2025 Barcha huquqlar himoyalangan. Ma'lumotdan foydalanish
            shartlari
          </p>
        </div>
      </div>

      {/* Shimmer Animation Keyframes */}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
