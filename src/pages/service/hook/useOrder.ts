import useMutate from "../../../core/hooks/api/useMutate.ts";
import { ServiceItem } from "../interface/service.interface.ts";

const useOrderByServiceId = (serviceId: string | undefined) => {
  const { query } = useMutate<ServiceItem>({
    url: ["order", serviceId || ""],
  });

  const postOrder = (formData: Record<string, never>) => {
    return query.mutateAsync({
      dynamicFields: formData,
    });
  };

  return {
    postOrder,
    ...query,
  };
};

export default useOrderByServiceId;
