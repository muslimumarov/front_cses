import useGetAll from "../../../core/hooks/api/useGetAll.ts";
import { StaffResponse } from "../interface/management.interface.ts";

const useGetStaff = () => {
  const { data, isLoading, error } = useGetAll<unknown>({
    url: ["management"],
    queryKey: ["staff"],
  });

  const response = data as unknown as StaffResponse;

  return {
    staff: response?.data || [],
    pagination: response?.pagination,
    isLoading,
    error,
  };
};

export default useGetStaff;
