import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { Url, useApi } from "./useApi.ts";
import { AxiosRequestConfig } from "axios";

interface MutateProps<TData> {
  url: Url[];
  options?: Omit<UseMutationOptions<TData>, "mutationFn" | "mutationKey">;
  isFormData?: boolean;
}

const useMutate = <TData = unknown>({
  url = [],
  options = {},
  isFormData = false,
}: MutateProps<TData>) => {
  const { mutate } = useApi(url);
  const query = useMutation<TData, Error, AxiosRequestConfig["data"], unknown>({
    mutationKey: url,
    mutationFn: (data) =>
      mutate<TData>({
        data,
        options: {
          method: "POST",
          headers: isFormData ? { "Content-Type": "multipart/form-data" } : {},
        },
      }),
    ...options,
  });
  return { query };
};

export default useMutate;
