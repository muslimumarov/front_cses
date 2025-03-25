import { useState } from "react";
import { AxiosError, AxiosRequestConfig } from "axios";
import { request } from "../../../request.ts";

export type Url = string | number;

export interface RequestProps {
  options?: AxiosRequestConfig;
}

export interface GetProps extends RequestProps {
  params?: AxiosRequestConfig["params"];
}

export interface MutateProps extends RequestProps {
  data: AxiosRequestConfig["data"];
  url?: Url[];
}

export function useApi(url: Url[] = []) {
  const baseUrl = ["/api"];
  const [loading, setLoading] = useState(false);

  async function get<TData>({ params, options }: GetProps) {
    try {
      setLoading(true);
      const response = await request.get<TData>(routeFormat(), {
        ...options,
        params,
      });
      return response.data;
    } catch (err: unknown) {
      catchError(err as AxiosError);
      throw err;
    } finally {
      catchFinally();
    }
  }

  async function mutate<TData>({ data, options, url = [] }: MutateProps) {
    try {
      setLoading(true);
      const response = await request<TData>(routeFormat(url), {
        ...options,
        data,
      });
      return response.data;
    } catch (err: unknown) {
      catchError(err as AxiosError);
      throw err;
    } finally {
      catchFinally();
    }
  }

  function catchError(err: AxiosError) {
    console.log(err);
  }

  function catchFinally() {
    setLoading(false);
  }

  function routeFormat(path: Url[] = []) {
    return [...baseUrl, ...url, ...path].join("/");
  }

  return {
    loading,
    get,
    mutate,
  };
}
