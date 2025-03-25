import { Slide, toast, ToastOptions } from "react-toastify";
import { ReactNode, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "../components/moleculas/toast";

interface ToastProps {
  message?: ReactNode;
  title?: ReactNode;
  icon?: string | null;
}

const useToast = () => {
  const { t } = useTranslation();

  const defaultConfig: ToastOptions = useMemo(
    () => ({
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: false,
      transition: Slide,
      closeButton: false,
      bodyClassName: "w-full",
      theme: "light",
    }),
    [],
  );

  const error = ({
    title = t("Xatolik mavjud"),
    message = t("Xatolik yuz berdi! Tizim administratori bilan bog'laning."),
  }: ToastProps) =>
    toast.error(<ToastContainer message={message} title={title} />, {
      ...defaultConfig,
    });

  const success = ({
    title = t("Muvaffaqiyatli bajarildi"),
    message = "",
  }: ToastProps) =>
    toast.success(<ToastContainer message={message} title={title} />, {
      ...defaultConfig,
    });

  const warning = ({ title = t("Ogohlantirish"), message = "" }: ToastProps) =>
    toast.warning(<ToastContainer message={message} title={title} />, {
      ...defaultConfig,
    });

  const info = ({ title = t("Xabar"), message = "" }: ToastProps) =>
    toast.info(<ToastContainer message={message} title={title} />, {
      ...defaultConfig,
    });

  return { error, success, warning, info };
};

export default useToast;
