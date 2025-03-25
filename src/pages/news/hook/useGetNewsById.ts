import useGetOne from "../../../core/hooks/api/useGetOne.ts";
import { NewsItem } from "../interface/news.interface.ts";

const useGetNewsById = (id: string | undefined) => {
  const { data, isLoading, error } = useGetOne<NewsItem>({
    id: id || "",
    url: ["news"],
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

export default useGetNewsById;
