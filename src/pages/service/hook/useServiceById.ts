import useGetOne from "../../../core/hooks/api/useGetOne.ts";
import { ServiceItem } from "../interface/service.interface.ts";

const useGetServiceById = (id: string | undefined) => {
  const { data, isLoading, error } = useGetOne<ServiceItem>({
    id: id || "",
    url: ["service"],
    options: {
      enabled: !!id,
    },
  });

  return {
    service: data,
    isLoading,
    error,
  };
};

export default useGetServiceById;
