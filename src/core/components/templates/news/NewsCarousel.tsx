import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useGetNews from "./useNewsCarousel";
import { useTranslation } from "react-i18next";
import { Language } from "../../../enums/Language";

const NewsCarousel = () => {
  const { news, isLoading, error } = useGetNews();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language as Language;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1084) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1350) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isLoading || error || isPaused) return;

    const startTimer = () => {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, 4000);
    };

    startTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isLoading, error, isPaused]);

  const nextSlide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= news.length ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, news.length - slidesToShow) : prevIndex - 1,
    );
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="size-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
      </div>
    );
  }

  if (error) return <p>{t("Xatolik yuz berdi!")}</p>;

  const visibleNews = news.slice(currentIndex, currentIndex + slidesToShow);
  if (visibleNews.length < slidesToShow && news.length > slidesToShow) {
    visibleNews.push(...news.slice(0, slidesToShow - visibleNews.length));
  }
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-16 transition-colors duration-300 dark:from-gray-900 dark:to-gray-950 dark:text-white">
      <div className="mx-auto max-w-[90%]">
        <div className="mb-12 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t("Yangiliklar")}
            </h2>
            <motion.div
              className="mt-2 h-1 bg-blue-600 dark:bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: "3.5rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <Link
            to="/news"
            className="group flex items-center space-x-1 text-blue-600 transition-colors dark:text-blue-400"
          >
            <span className="font-medium">{t("Barcha Yangiliklar")}</span>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.div>
          </Link>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-md transition hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeft size={20} className="text-gray-800 dark:text-white" />
          </motion.button>

          <div className="relative overflow-hidden px-16">
            <div className="flex">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                {visibleNews.map((newsItem, index) => (
                  <motion.div
                    key={`${newsItem.id}-${index}`}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 100 : -100,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4 },
                    }}
                    exit={{
                      opacity: 0,
                      x: direction < 0 ? 100 : -100,
                      transition: { duration: 0.4 },
                    }}
                    className="w-full px-3"
                    style={{ flex: `0 0 calc(100% / ${slidesToShow})` }}
                  >
                    <Link to={`/news/${newsItem.id}`}>
                      <motion.div
                        className="group h-full overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800"
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <motion.img
                            src={newsItem.image}
                            className="size-full object-cover"
                            alt="Yangilik rasmi"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 pt-8">
                            <span className="inline-block rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                              {newsItem.newsCategory?.translations?.[
                                currentLang
                              ]?.title || ""}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between gap-2 p-4">
                          <h3 className="line-clamp-2 text-base font-medium text-gray-900 dark:text-white">
                            {newsItem.translations?.[currentLang]?.title}
                          </h3>

                          <div className="mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center">
                              {new Date(
                                newsItem.createdAt,
                              ).toLocaleDateString()}
                            </span>
                            <motion.span
                              className="text-blue-600 dark:text-blue-400"
                              initial={{ opacity: 0, x: -10 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {t("Batafsil")} →
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-md transition hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={20} className="text-gray-800 dark:text-white" />
          </motion.button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({
            length: Math.min(5, Math.ceil(news.length / slidesToShow)),
          }).map((_, index) => {
            const isActive =
              index ===
              Math.floor(currentIndex / slidesToShow) %
                Math.ceil(news.length / slidesToShow);
            return (
              <motion.button
                key={index}
                className={`h-2 rounded-full ${isActive ? "w-8 bg-blue-600 dark:bg-blue-500" : "w-2 bg-gray-300 dark:bg-gray-700"}`}
                onClick={() => {
                  setCurrentIndex(index * slidesToShow);
                  if (timerRef.current) clearTimeout(timerRef.current);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;
