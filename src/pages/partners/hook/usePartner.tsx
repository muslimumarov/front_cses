import useGetAll from "../../../core/hooks/api/useGetAll.ts";
import { PartnerResponse } from "../interface/partners.interface.ts";

const usePartner = () => {
  const { data, isLoading, error } = useGetAll<unknown>({
    url: ["partner"],
    queryKey: ["partner"],
  });

  const response = data as unknown as PartnerResponse;

  return {
    partners: response?.data || [],
    pagination: response?.pagination,
    isLoading,
    error,
  };
};

export default usePartner;
