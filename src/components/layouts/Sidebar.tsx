"use client";
import {
  faBook,
  faChartBar,
  faChevronRight,
  faGear,
  faHome,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { div } from "framer-motion/m";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Home",
    icon: faHome,
    link: "/",
  },
  {
    title: "Dashboard",
    icon: faChartBar,
    link: "/dashboard",
  },
  {
    title: "Courses",
    icon: faBook,
    link: "/courses",
  },
  {
    title: "Profile",
    icon: faUser,
    link: "/profile",
  },
];

const Sidebar = ({ open }: { open: boolean }) => {
  const pathname = usePathname();

  return (
    <div
      className={`px-4 py-8 fixed top-20 left-0 ${open ? "w-64" : "w-20"} transition-all duration-300 h-full bg-white dark:bg-gray-900 shadow-md flex flex-col`}
    >
      {sidebarItems.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          className={`flex items-center gap-4 mb-4 p-3 rounded-lg cursor-pointer group
                ${pathname === item.link ? "bg-blue-50 dark:bg-gray-700 text-primary" : "text-gray-600 dark:text-gray-300"}
                `}
        >
          <i>
            <FontAwesomeIcon
              icon={item.icon}
              className="text-gray-600 dark:text-gray-300 group-hover:text-primary"
            />
          </i>
          {open && (
            <div className="text-gray-800 dark:text-gray-200 font-medium flex items-center w-full group-hover:text-primary transition-all duration-300">
              {item.title}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-600 dark:text-gray-300 ml-auto transition-transform group-hover:translate-x-1 group-hover:text-primary"
              />
            </div>
          )}
        </Link>
      ))}
      <Link href={"/settings"} className="mt-auto h-12">
        <div
          className={`flex items-center gap-4 mt-auto p-3 rounded-lg cursor-pointer group
                ${pathname === "/settings" ? "bg-blue-50 dark:bg-gray-700 text-primary" : "text-gray-600 dark:text-gray-300"}
                `}
        >
          <i>
            <FontAwesomeIcon
              icon={faGear}
              className="text-gray-600 dark:text-gray-300 group-hover:text-primary"
            />
          </i>
          {open && (
            <div className="text-gray-800 dark:text-gray-200 font-medium flex items-center w-full group-hover:text-primary">
              Settings
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-600 dark:text-gray-300 ml-auto transition-transform group-hover:translate-x-1 group-hover:text-primary"
              />
            </div>
          )}
        </div>
      </Link>
      <button className="flex items-center gap-4 mt-2 mb-16 p-3 rounded-lg cursor-pointer group h-12">
        <i>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="text-gray-600 dark:text-gray-300 group-hover:text-primary"
          />
        </i>
        {open && (
          <div className="text-gray-800 dark:text-gray-200 font-medium flex items-center w-full group-hover:text-primary">
            Logout
          </div>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
