import useGetOne from "../../../core/hooks/api/useGetOne.ts";
import { DocumentItem } from "../interface/document.interface.ts";

const useGetDocumentById = (id: string | undefined) => {
  const { data, isLoading, error } = useGetOne<DocumentItem>({
    id: id || "",
    url: ["document"],
    options: {
      enabled: !!id,
    },
  });

  return {
    document: data,
    isLoading,
    error,
  };
};

export default useGetDocumentById;
