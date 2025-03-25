import { useTranslation } from "react-i18next";
import { Spinner, Pagination } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { RecommendationItem } from "./interface/recom.interface";
import useGetEducationRecommendations from "./hook/useEduRoom";
import { Language } from "../../core/enums/Language.ts";

const RecommendationList = () => {
  const { recommendations, isLoading, pagination, page, setPage } =
    useGetEducationRecommendations();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label="Loading recommendations" size="xl" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((item: RecommendationItem) => {
          const title =
            item.translations?.[i18n.language as Language]?.text || "";
          const description =
            item.translations?.[i18n.language as Language]?.description || "";

          return (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-lg border transition-transform hover:scale-105 dark:border-gray-700"
              onClick={() => navigate(`/recommendations/${item.id}`)}
            >
              <img
                src={`/${item.image}`}
                alt={title}
                className="h-64 w-full rounded-t-lg object-cover"
              />
              <div className="bg-white p-4 dark:bg-gray-900">
                <h3 className="mb-1 text-lg font-bold text-gray-800 dark:text-gray-100">
                  {title}
                </h3>
                <div
                  className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Пагинация */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex justify-center">
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

export default RecommendationList;
