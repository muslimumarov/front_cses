import { useMemo } from "react";
import { createMenuItems } from "../helpers";
import { useTranslation } from "react-i18next";

const useNavbar = () => {
  const { t } = useTranslation();

  const menuItems = useMemo(() => createMenuItems(t), [t]);

  return {
    menuItems,
  };
};

export default useNavbar;
