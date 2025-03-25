import useGetOne from "../../../core/hooks/api/useGetOne.ts";
import { NewsItem } from "../interface/news.interface.ts";

const useGetArticleById = (id: string | undefined) => {
  const { data, isLoading, error } = useGetOne<NewsItem>({
    id: id || "",
    url: ["article"],
    options: {
      enabled: !!id,
    },
  });

  return {
    newsItem: data,
    isLoading,
    error,
  };
};

export default useGetArticleById;
