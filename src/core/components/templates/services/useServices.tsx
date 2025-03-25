import useGetAll from "../../../hooks/api/useGetAll";
import { ServicesResponseInterface } from "./interface/services.interface.ts";

const useGetServices = () => {
  const { data, isLoading, error } = useGetAll<ServicesResponseInterface>({
    url: ["service"],
    queryKey: ["service"],
    params: {
      page: 1,
      limit: 12,
    },
  });

  const response = data as unknown as ServicesResponseInterface;

  return {
    services: response?.data ?? [],
    isLoading,
    error,
  };
};

export default useGetServices;
