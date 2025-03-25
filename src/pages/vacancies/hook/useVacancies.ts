import useGetAll from "../../../core/hooks/api/useGetAll";
import { VacancyResponse } from "../interface/vacancies.interface.ts";

const useGetVacancies = () => {
  const { data, isLoading, error } = useGetAll<unknown>({
    url: ["vacancy"],
    queryKey: ["vacancies"],
  });

  const response = data as unknown as VacancyResponse;

  return {
    vacancies: response?.data || [],
    pagination: response?.pagination,
    isLoading,
    error,
  };
};

export default useGetVacancies;
