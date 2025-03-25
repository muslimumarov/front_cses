import useMutate from "../../../core/hooks/api/useMutate.ts";
import { ActionItem } from "../interface/action.interface.ts";

const useAction = () => {
  const { query } = useMutate<ActionItem>({
    url: ["action"],
  });

  const postAction = (formData: ActionItem) => {
    return query.mutateAsync(formData);
  };

  return {
    postAction,
    ...query,
  };
};

export default useAction;
