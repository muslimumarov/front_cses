import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Spinner } from "flowbite-react";
import useGetNewsById from "./hook/useGetNewsById";

const NewsViewPage = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const { newsItem, isLoading } = useGetNewsById(id);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label="Loading news item" size="xl" />
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="p-6 text-center text-red-500">News item not found.</div>
    );
  }

  const title = newsItem.translations?.[i18n.language]?.title || "";
  const content = newsItem.translations?.[i18n.language]?.content || "";
  const categoryTitle =
    newsItem.newsCategory?.translations?.[i18n.language]?.title || "";

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-4 flex justify-end">
        <Button
          onClick={() => navigate(-1)}
          size="sm"
          color="light"
          className="mb-4"
        >
          Ortga →
        </Button>
      </div>
      <img
        src={`/${newsItem.image}`}
        alt={title}
        className="mb-4 w-full rounded-lg object-cover"
      />
      <h1 className="mb-2 text-2xl font-bold">{title}</h1>
      <p className="mb-4 text-sm text-gray-600">{categoryTitle}</p>
      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default NewsViewPage;
