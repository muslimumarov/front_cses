import useNavbar from "../../../hooks/useNavbar.ts";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { FacebookIcon, SendIcon, YoutubeIcon } from "lucide-react";

const Navbar = () => {
  const { menuItems } = useNavbar();

  return (
    <div className={"hidden p-3 md:px-12 xl:block"}>
      <div
        className={
          "flex w-full shrink items-center justify-between gap-12 rounded-2xl bg-gray-200/60 dark:bg-gray-950"
        }
      >
        <ul
          className={"flex w-full max-w-[90rem] items-center justify-between"}
        >
          {menuItems.map((item) => (
            <li
              className={"p-3 font-semibold uppercase hover:text-blue-600"}
              key={item.path}
            >
              <Link to={item.path}>
                {item.children ? (
                  <Dropdown
                    trigger={"hover"}
                    label={<span className={"uppercase"}>{item.label}</span>}
                    inline
                  >
                    {item.children.map((child) => (
                      <Dropdown.Item
                        key={child.path}
                        className={
                          "max-w-96 text-start text-sm uppercase hover:text-blue-600"
                        }
                      >
                        {child.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                ) : (
                  item.label
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 gap-6 p-3">
          <a
            href="https://facebook.com/cyber_csec_uz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 transition-all duration-300 hover:scale-110 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            aria-label="Facebook"
          >
            <FacebookIcon
              size={24}
              className="transition-transform duration-500 hover:rotate-[360deg]"
            />
          </a>
          <a
            href="https://t.me/@cyber_csec_uz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 transition-all duration-300 hover:scale-110 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            aria-label="Telegram"
          >
            <SendIcon
              size={24}
              className="transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1"
            />
          </a>
          <a
            href="https://youtube.com/@kunuz_official"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 transition-all duration-300 hover:scale-110 hover:text-red-600 dark:text-white dark:hover:text-red-400"
            aria-label="YouTube"
          >
            <YoutubeIcon
              size={24}
              className="transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
