import useGetOne from "../../../core/hooks/api/useGetOne.ts";
import { Vacancy } from "../interface/vacancies.interface.ts";

const useGetVacancyById = (id: string | undefined) => {
  const { data, isLoading, error } = useGetOne<Vacancy>({
    id: id || "",
    url: ["vacancy"],
    options: {
      enabled: !!id,
    },
  });

  return {
    vacancy: data,
    isLoading,
    error,
  };
};

export default useGetVacancyById;
