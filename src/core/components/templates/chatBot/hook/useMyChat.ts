import useGetAll from "../../../../hooks/api/useGetAll.ts";
import { ChatItem } from "../interface/bot.interface.ts";
import { AxiosError } from "axios";

const useGetChat = () => {
  const { data, isLoading, error } = useGetAll<unknown>({
    url: ["chat/my/chat"],
    queryKey: ["chat"],
  });

  const axiosError = error as AxiosError<never>;
  const isNotFound = axiosError?.response?.status === 404;
  const response = !isNotFound ? (data as unknown as ChatItem) : null;

  return {
    chat: response,
    isLoading,
    error: isNotFound ? null : axiosError,
    isNotFound,
  };
};

export default useGetChat;
