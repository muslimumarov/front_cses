import { useState } from "react";
import useGetAll from "../../../core/hooks/api/useGetAll.ts";
import { DocumentResponse } from "../interface/document.interface.ts";

const useGetDocuments = () => {
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, isLoading, error } = useGetAll<DocumentResponse>({
    url: ["document"],
    queryKey: ["document", page],
    params: { page, limit },
  });

  return {
    documents: data?.data || [],
    pagination: data?.pagination ?? { totalPages: 1 },
    isLoading,
    error,
    page,
    setPage,
  };
};

export default useGetDocuments;
