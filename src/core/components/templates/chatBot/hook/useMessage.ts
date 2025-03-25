import useMutate from "../../../../hooks/api/useMutate";
import { MessageRes } from "../interface/bot.interface";

const useMessage = () => {
  const { query } = useMutate<MessageRes>({
    url: ["chat/message"],
  });

  const postMessage = (formData: Record<string, unknown>) => {
    return query.mutateAsync(formData);
  };

  return {
    postMessage,
    isLoading: query.isPending,
    ...query,
  };
};

export default useMessage;
