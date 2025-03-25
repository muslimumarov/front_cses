import useGetAll from "../../../core/hooks/api/useGetAll.ts";
import { NewsResponse } from "../interface/news.interface.ts";
import { useState } from "react";

const useGetNews = () => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data, isLoading, error } = useGetAll<NewsResponse>({
    url: ["news"],
    queryKey: ["news", page],
    params: { page, limit },
  });

  return {
    news: data?.data || [],
    pagination: data?.pagination ?? { totalPages: 1 },
    isLoading,
    error,
    page,
    setPage,
  };
};

export default useGetNews;
