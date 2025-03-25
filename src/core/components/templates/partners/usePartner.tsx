import useGetAll from "../../../hooks/api/useGetAll.ts";
import { PartnersResponse } from "./interface/partners.interface.ts";

const usePartners = () => {
  const query = useGetAll<PartnersResponse>({
    url: ["partner"],
    queryKey: ["partners"],
  });

  const responseData = Array.isArray(query.data) ? query.data[0] : query.data;

  return {
    ...query,
    data: responseData?.data || [],
  };
};

export default usePartners;
