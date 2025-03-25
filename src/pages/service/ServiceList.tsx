import { useTranslation } from "react-i18next";
import { Spinner, Pagination } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import useGetServices from "./hook/useService.ts";

const ServiceList = () => {
  const { services, isLoading, pagination, page, setPage } = useGetServices();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label="Loading services" size="xl" />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((item) => {
          const title = item.translations?.[i18n.language]?.title || "";
          return (
            <div
              key={item.id}
              className="group flex h-[250px] cursor-pointer flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-900"
              onClick={() => navigate(`/services/${item.id}`)}
            >
              <div className="flex h-[180px]  w-full items-center justify-center bg-white dark:bg-gray-800">
                <img
                  src={`/${item.logo}`}
                  alt={title}
                  className="size-16 object-contain"
                />
              </div>

              <div className="flex flex-1  flex-col justify-between bg-white p-3 dark:bg-gray-900">
                  <h3 className="mb-1 flex items-center justify-center text-center font-semibold text-gray-800 dark:text-gray-100 h-full">
                      {title}
                  </h3>

              </div>
            </div>
          );
        })}
      </div>

      {pagination?.totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination
            currentPage={page}
            totalPages={pagination.totalPages}
            onPageChange={setPage}
            showIcons
          />
        </div>
      )}
    </>
  );
};

export default ServiceList;
