import useMutate from "../../../../hooks/api/useMutate";

const useCreateChat = () => {
  const { query } = useMutate<unknown>({
    url: ["chat"],
  });

  const createChat = (formData: Record<string, unknown>) => {
    return query.mutateAsync(formData);
  };

  return {
    createChat,
    isLoading: query.isPending,
    ...query,
  };
};

export default useCreateChat;
