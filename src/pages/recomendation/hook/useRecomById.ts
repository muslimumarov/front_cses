import useGetOne from "../../../core/hooks/api/useGetOne.ts";
import { RecommendationItem } from "../interface/recom.interface.ts";

const useGetRecommendationById = (id: string | undefined) => {
  const { data, isLoading, error } = useGetOne<RecommendationItem>({
    id: id || "",
    url: ["recommendation"],
    options: {
      enabled: !!id,
    },
  });

  return {
    recommendation: data,
    isLoading,
    error,
  };
};

export default useGetRecommendationById;
