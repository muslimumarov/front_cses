import useGetAll from "../../../core/hooks/api/useGetAll.ts";
import { ServiceResponse } from "../interface/service.interface.ts";
import { useState } from "react";

const useGetServices = () => {
  const [page, setPage] = useState(1);
  const limit = 12;

  const { data, isLoading, error } = useGetAll<ServiceResponse>({
    url: ["service"],
    queryKey: ["service", page],
    params: { page, limit },
  });

  return {
    services: data?.data || [],
    pagination: data?.pagination ?? { totalPages: 1 },
    isLoading,
    error,
    page,
    setPage,
  };
};

export default useGetServices;
