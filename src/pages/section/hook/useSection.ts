import useGetAll from "../../../core/hooks/api/useGetAll.ts";
import { SectionResponse } from "../interface/section.interface.ts";

const useSection = () => {
  const { data, isLoading, error } = useGetAll<unknown>({
    url: ["management"],
    queryKey: ["staff"],
  });

  const response = data as unknown as SectionResponse;

  return {
    staff: response?.data || [],
    pagination: response?.pagination,
    isLoading,
    error,
  };
};

export default useSection;
