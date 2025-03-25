import { useParams, useNavigate } from "react-router-dom";
import { Spinner, Badge, Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import useGetRecommendationById from "./hook/useRecomById";
import { Language } from "../../core/enums/Language.ts";

const RecommendationViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const { recommendation, isLoading, error } = useGetRecommendationById(id);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label="Loading recommendation" size="xl" />
      </div>
    );
  }

  if (error || !recommendation) {
    return (
      <div className="flex h-64 items-center justify-center text-red-500 dark:text-red-400">
        {error?.message || "Recommendation not found"}
      </div>
    );
  }

  const translation = recommendation.translations[i18n.language as Language];

  return (
    <div className="mx-auto mt-8 w-full max-w-screen-xl px-4 lg:px-8">
      <div className="mb-4 flex justify-end">
        <Button
          onClick={() => navigate(-1)}
          size="sm"
          color="light"
          className="mb-4 dark:border dark:bg-gray-800 dark:text-white"
        >
          ← {i18n.language === "uz" ? "Ortga" : "Back"}
        </Button>
      </div>

      <div className="rounded bg-white p-4 shadow-sm dark:bg-gray-900 dark:text-gray-100 md:p-6">
        <img
          src={`/${recommendation.image}`}
          alt={translation?.text || ""}
          className="mb-6 max-h-[500px] w-full rounded object-cover"
        />

        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          {translation?.text}
        </h1>

        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">{/* Optional label */}</span>{" "}
          {recommendation.category}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {recommendation.tags.map((tag, idx) => (
            <Badge key={idx} color="info">
              {tag}
            </Badge>
          ))}
        </div>

        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: translation?.description || "<p>No description</p>",
          }}
        />

        {recommendation.readMoreLink && (
          <a
            href={recommendation.readMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-blue-600 hover:underline dark:text-blue-400"
          >
            {i18n.language === "uz" ? "Ko‘proq o‘qish →" : "Read more →"}
          </a>
        )}
      </div>
    </div>
  );
};

export default RecommendationViewPage;
