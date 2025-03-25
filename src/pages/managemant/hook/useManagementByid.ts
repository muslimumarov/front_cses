import useGetOne from "../../../core/hooks/api/useGetOne.ts";
import { StaffMember } from "../interface/management.interface.ts";

const useGetManagementById = (id: string | undefined) => {
  const { data, isLoading, error } = useGetOne<StaffMember>({
    id: id || "",
    url: ["management"],
    options: {
      enabled: !!id,
    },
  });

  return {
    management: data,
    isLoading,
    error,
  };
};

export default useGetManagementById;
