import { useParams, useNavigate } from "react-router-dom";
import { Spinner, Button, TextInput, Label } from "flowbite-react";
import { useState } from "react";
import useGetServiceById from "./hook/useServiceById";
import useOrderByServiceId from "./hook/useOrder";
import { useTranslation } from "react-i18next";

const OrderFormPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { service, isLoading, error } = useGetServiceById(id);
  const { mutate: postOrder, isPending: isSubmitting } =
    useOrderByServiceId(id);

  const [formData, setFormData] = useState<Record<string, string | number>>({});

  const handleChange = (name: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await postOrder(formData);
      setTimeout(() => {
        navigate("/services");
      }, 1000);
    } catch (err) {
      console.error(t("orderError"), err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner aria-label={t("loadingService")} size="xl" />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="flex h-64 items-center justify-center text-red-500">
        {error?.message || t("serviceNotFound")}
      </div>
    );
  }

  return (
    <div className="relative mx-auto mt-8 max-w-3xl rounded bg-white p-6 shadow dark:bg-gray-800">
      <div className="mb-4 flex justify-end">
        <Button
          onClick={() => navigate(-1)}
          size="sm"
          color="light"
          className="mb-4 dark:text-gray-200"
        >
          {t("back")}
        </Button>
      </div>

      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
        {t("orderService")}
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {service.orderSchema?.fields?.map((field, index) => (
          <div key={index}>
            <Label
              htmlFor={field.name}
              value={field.name}
              className="mb-1 block text-gray-900 dark:text-gray-200"
            />
            <TextInput
              id={field.name}
              type={field.type === "number" ? "number" : "text"}
              required={field.required}
              onChange={(e) =>
                handleChange(
                  field.name,
                  field.type === "number"
                    ? Number(e.target.value)
                    : e.target.value,
                )
              }
              placeholder={field.name}
              className="dark:bg-gray-700 dark:text-white"
            />
          </div>
        ))}

        <Button
          type="submit"
          color="blue"
          className="mt-4"
          isProcessing={isSubmitting}
        >
          {isSubmitting ? t("submitting") : t("submit")}
        </Button>
      </form>
    </div>
  );
};

export default OrderFormPage;
