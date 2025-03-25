import useGetAll from "../../../hooks/api/useGetAll.ts";
import { NewsCarouselInterface } from "./interface/newsCarousel.interface.tsx";

interface NewsResponse {
  data: NewsCarouselInterface[];
  pagination?: unknown;
}

const useGetNews = () => {
  const { data, isLoading, error } = useGetAll<unknown>({
    url: ["news"],
    queryKey: ["news"],
    params: { limit: 10, page: 1 },
  });

  const response = data as unknown as NewsResponse;

  return {
    news: response?.data || [],
    isLoading,
    error,
  };
};

export default useGetNews;
