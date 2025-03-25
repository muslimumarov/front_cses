import useNavbar from "../../../hooks/useNavbar.ts";
import { Drawer, Sidebar } from "flowbite-react";
import {
  AlignLeftIcon,
  ChevronRight,
  ChevronUp,
  EyeIcon,
  PhoneIcon,
  SearchIcon,
} from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { LanguageSelector } from "../language";
import { useTranslation } from "react-i18next";

const SideNavbar = () => {
  const { t } = useTranslation();
  const { menuItems } = useNavbar();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AlignLeftIcon
        className={"cursor-pointer"}
        onClick={() => setIsOpen(!isOpen)}
      />
      <Drawer
        className={"h-screen min-w-96 overflow-hidden"}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Drawer.Header
          className={"h-20 shrink-0 border-b border-gray-300/30"}
          titleIcon={() => (
            <img src={"/images/logo.png"} width={80} alt={"CSEC"} />
          )}
        />
        <Drawer.Items
          className={
            "h-[calc(100%-8rem)] shrink overflow-y-auto  scrollbar-thin"
          }
        >
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            theme={{
              root: {
                base: "h-full",
                collapsed: {
                  off: "w-full",
                },
                inner: "bg-transparent",
              },
              item: {
                base: "flex items-center justify-center rounded-lg py-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
                collapsed: {
                  insideCollapse: "group w-full pl-4 transition duration-75",
                },
              },
              collapse: {
                button:
                  "group flex w-full items-center rounded-lg py-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
              },
            }}
          >
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {menuItems.map((item) =>
                  item.children ? (
                    <Sidebar.Collapse
                      key={item.path}
                      label={item.label}
                      renderChevronIcon={(theme, open) => {
                        const IconComponent = open ? ChevronUp : ChevronRight;
                        return (
                          <IconComponent
                            size={16}
                            color={"#7f7f83"}
                            aria-hidden
                            className={twMerge(
                              theme.label.icon.open[open ? "on" : "off"],
                            )}
                          />
                        );
                      }}
                    >
                      {item.children.map((child) => (
                        <Sidebar.Item
                          key={child.path}
                          href={`${item.path}/${child.path}`}
                        >
                          <div className={"whitespace-break-spaces"}>
                            {child.label}
                          </div>
                        </Sidebar.Item>
                      ))}
                    </Sidebar.Collapse>
                  ) : (
                    <Sidebar.Item key={item.path} href={item.path}>
                      {item.label}
                    </Sidebar.Item>
                  ),
                )}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
        <div className={"h-10 shrink-0 border-t border-gray-300/30 py-3"}>
          <ul className={"flex items-center justify-between gap-2"}>
            <li>
              <PhoneIcon strokeWidth={1} size={32} />
            </li>
            <li>
              <span
                className={
                  "inline-block text-center text-sm font-bold uppercase"
                }
              >
                <span className={"inline-block"}>{t("ishonch telefoni")}</span>
                <br />
                <a href={"tel:+998555021010"}>555-02-1010</a>
              </span>
            </li>
            <li>
              <SearchIcon strokeWidth={1} size={32} />
            </li>
            <li>
              <EyeIcon strokeWidth={1} size={32} />
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default SideNavbar;
