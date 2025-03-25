"use client";

import { useTranslation } from "react-i18next";
import { Spinner, Pagination } from "flowbite-react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { NewsItem } from "./interface/news.interface";
import { useNavigate } from "react-router-dom";
import type { Language } from "../../core/enums/Language";
import useGetNews from "./hook/useNews";

const NewsList = () => {
  const { news, pagination, isLoading, page, setPage } = useGetNews();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language as Language;

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label="Loading news items" size="xl" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item: NewsItem) => {
          const title = item.translations?.[currentLang]?.title || "";
          const categoryTitle =
            item.newsCategory?.translations?.[currentLang]?.title || "";
          const date = item.createdAt
            ? new Date(item.createdAt).toLocaleDateString()
            : "";

          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800"
              onClick={() => navigate(`/news/list/${item.id}`)}
            >
              <div className="relative h-48 cursor-pointer overflow-hidden">
                <motion.img
                  src={`/${item.image}`}
                  alt={title}
                  className="size-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 pt-8">
                  {categoryTitle && (
                    <span className="inline-block rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                      {categoryTitle}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex cursor-pointer flex-col justify-between gap-2 p-4">
                <h3 className="line-clamp-2 text-base font-medium text-gray-900 dark:text-white">
                  {title}
                </h3>

                <div className="mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{date}</span>
                  <motion.span
                    className="flex items-center text-blue-600 dark:text-blue-400"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t("Batafsil")}
                    <ArrowRight size={14} className="ml-1" />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination */}
      {pagination?.totalPages > 1 && (
        <div className="flex justify-center pt-4">
          <Pagination
            currentPage={page}
            totalPages={pagination.totalPages}
            onPageChange={setPage}
            showIcons
          />
        </div>
      )}
    </div>
  );
};

export default NewsList;
