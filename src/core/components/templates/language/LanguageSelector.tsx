import { Button, Dropdown } from "flowbite-react";
import { LANGUAGES } from "../../../constants/langulage.constants.ts";
import { useTranslation } from "react-i18next";
import { Language } from "../../../enums/Language.ts";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <Dropdown
      inline
      label={""}
      placement={"bottom-end"}
      renderTrigger={() => (
        <Button size={"xs"} color={"light"}>
          {LANGUAGES.find(({ value }) => value === i18n.language)?.label}
        </Button>
      )}
    >
      {LANGUAGES.map(({ value, label }) => (
        <Dropdown.Item
          key={value}
          className={"uppercase"}
          onClick={() => i18n.changeLanguage(value as Language)}
        >
          {label}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default LanguageSelector;
