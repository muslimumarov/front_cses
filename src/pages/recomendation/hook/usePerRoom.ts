import { useState } from "react";
import useGetAll from "../../../core/hooks/api/useGetAll.ts";
import { RecommendationResponse } from "../interface/recom.interface.ts";

const useGetPersonalRecommendations = () => {
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, isLoading, error } = useGetAll<unknown>({
    url: ["recommendation"],
    queryKey: ["recommendations-personal", page],
    params: { category: "PERSONAL", page, limit },
  });

  const response = data as unknown as RecommendationResponse;

  return {
    recommendations: response?.data || [],
    pagination: response?.pagination,
    isLoading,
    error,
    page,
    setPage,
  };
};

export default useGetPersonalRecommendations;
