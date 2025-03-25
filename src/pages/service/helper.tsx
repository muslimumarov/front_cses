import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import Footer from "../../core/components/templates/footer/Footer";
import ChatBot from "../../core/components/templates/chatBot/ChatBot";

const AboutCenterService = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const translations = {
    home:
      i18n.language === "uz"
        ? "Bosh sahifa"
        : i18n.language === "ru"
          ? "Главная"
          : "Home",
    services:
      i18n.language === "uz"
        ? "Xizmatlar"
        : i18n.language === "ru"
          ? "Услуги"
          : "Services",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative overflow-hidden bg-[#036] px-6 py-12">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        ></div>

        <div className="container relative z-10 mx-auto">
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-1 text-sm">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="flex items-center text-white/80 transition-colors hover:text-white"
                  >
                    <Home className="mr-1 size-4" />
                    <span>{translations.home}</span>
                  </button>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mx-1 size-4 text-white/60" />
                  <span className="font-medium text-white">
                    {translations.services}
                  </span>
                </li>
              </ol>
            </nav>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              {translations.services}
            </h1>
            <motion.div
              className="mx-auto mt-3 h-1 w-16 rounded-full bg-white/30"
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
          </motion.div>
        </div>
      </div>

      <main className="grow bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default AboutCenterService;
