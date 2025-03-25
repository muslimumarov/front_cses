import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Spinner, Button } from "flowbite-react";
import { FaFilePdf } from "react-icons/fa";
import useGetServiceById from "./hook/useServiceById";

const ServiceViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { service, isLoading, error } = useGetServiceById(id);

  const lang = i18n.language;

  const translations = {
    documents:
      lang === "uz" ? "Hujjatlar" : lang === "ru" ? "Документы" : "Documents",
    contactInfo:
      lang === "uz"
        ? "Aloqa ma'lumotlari"
        : lang === "ru"
          ? "Контактная информация"
          : "Contact Info",
    tags: lang === "uz" ? "Teglar" : lang === "ru" ? "Теги" : "Tags",
    price: lang === "uz" ? "Narx" : lang === "ru" ? "Цена" : "Price",
    orderButton:
      lang === "uz"
        ? "Xizmatni buyurtma qilish"
        : lang === "ru"
          ? "Заказать услугу"
          : "Order Service",
    loadingService:
      lang === "uz"
        ? "Xizmat yuklanmoqda..."
        : lang === "ru"
          ? "Загрузка услуги..."
          : "Loading service...",
    serviceNotFound:
      lang === "uz"
        ? "Xizmat topilmadi"
        : lang === "ru"
          ? "Услуга не найдена"
          : "Service not found",
    backButton:
      lang === "uz" ? "Ortga →" : lang === "ru" ? "Назад →" : "Back →",
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label={translations.loadingService} size="xl" />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="flex h-64 items-center justify-center text-red-500">
        {error?.message || translations.serviceNotFound}
      </div>
    );
  }

  const translation = service.translations[lang] ||
    service.translations["en"] ||
    Object.values(service.translations)[0] || { title: "", description: "" };

  const { title, description } = translation;

  return (
    <div className="mx-auto mt-8 max-w-7xl p-4">
      <div className="mb-4 flex justify-end">
        <Button
          onClick={() => navigate(-1)}
          size="sm"
          color="light"
          className="mb-4"
        >
          {translations.backButton}
        </Button>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src={`/${service.logo}`}
          alt={title}
          className="max-h-[400px] w-full rounded-lg  object-contain p-4 shadow invert-0 dark:border-gray-700 dark:bg-gray-800 dark:invert-0"
        />
      </div>
      <div className="mb-6 flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          {translations.documents}
        </h2>
        {service.documents.map((doc, index) => {
          const fileName = doc.replace(/^uploads\//, "");
          return (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3 shadow-sm dark:bg-gray-700"
            >
              <div className="flex items-center gap-3">
                <FaFilePdf className="text-2xl text-red-500" />
                <span className="truncate text-sm text-gray-800 dark:text-gray-100">
                  {fileName}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <div
        className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {translations.contactInfo}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {service.contactInfo}
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {translations.tags}
        </h2>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-blue-100 px-2 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {translations.price}
        </h2>
        <p className="text-lg font-bold text-green-600">${service.price}</p>
      </div>
      <div className="mt-8">
        <Button
          color="blue"
          size="lg"
          onClick={() => navigate(`/services/${service.id}/order`)}
        >
          {translations.orderButton}
        </Button>
      </div>
    </div>
  );
};

export default ServiceViewPage;
