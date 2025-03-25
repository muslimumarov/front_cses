import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaGlobeAsia, FaBook, FaUser, FaChevronRight } from "react-icons/fa";
import Footer from "../../core/components/templates/footer/Footer";
import ChatBot from "../../core/components/templates/chatBot/ChatBot";
import { Home } from "lucide-react";

const AboutCenterRecom = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const tabItems = {
    path: "/recommendations",
    label: t("Tavsiyalar"),
    children: [
      {
        path: "professional",
        label: t("Professional"),
        icon: FaGlobeAsia,
      },
      {
        path: "personal",
        label: t("Shaxsiy"),
        icon: FaUser,
      },
      {
        path: "education",
        label: t("Talim"),
        icon: FaBook,
      },
    ],
  };

  const activeChild = tabItems.children.find((child) =>
    location.pathname.includes(`/recommendations/${child.path}`),
  );

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
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
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-1 text-sm">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="flex items-center text-white/80 transition-colors hover:text-white"
                  >
                    <Home className="mr-1 size-4" />
                    <span>{t("Bosh sahifa")}</span>
                  </button>
                </li>
                <li className="flex items-center">
                  <FaChevronRight className="mx-1 size-4 text-white/60" />
                  <button
                    onClick={() => navigate("/recommendations")}
                    className={`${
                      !activeChild
                        ? "font-medium text-white"
                        : "text-white/80 hover:text-white"
                    } transition-colors`}
                  >
                    {tabItems.label}
                  </button>
                </li>
                {activeChild && (
                  <li className="flex items-center">
                    <FaChevronRight className="mx-1 size-4 text-white/60" />
                    <span className="font-medium text-white">
                      {activeChild.label}
                    </span>
                  </li>
                )}
              </ol>
            </nav>
          </div>

          {/* Title */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              {activeChild ? activeChild.label : tabItems.label}
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

      {/* Main Content */}
      <main className="grow bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            {/* Tabs */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-8 rounded-xl border border-gray-200 bg-white p-5 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="mb-4 px-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {t("Bo'limlar")}
                </h2>

                <div className="space-y-2">
                  {tabItems.children.map((item, index) => {
                    const isActive = location.pathname.includes(item.path);
                    const Icon = item.icon;

                    return (
                      <motion.button
                        key={index}
                        onClick={() =>
                          navigate(`/recommendations/${item.path}`)
                        }
                        className={`
                          relative flex w-full items-center gap-3 rounded-lg
                          p-3 transition-all duration-200
                          ${
                            isActive
                              ? "bg-[#036] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                          }
                        `}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div
                          className={`
                          flex size-8 items-center justify-center rounded-full 
                          ${isActive ? "bg-white/20" : "bg-white dark:bg-gray-600"}
                        `}
                        >
                          <Icon
                            className={`size-4 ${isActive ? "text-white" : "text-[#036] dark:text-white"}`}
                          />
                        </div>

                        <span className="font-medium">{item.label}</span>

                        {isActive && (
                          <motion.div
                            className="ml-auto"
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronRight className="size-4" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="w-full lg:w-3/4">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default AboutCenterRecom;
