import { Link } from "react-router-dom";
import {
  CalendarIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Jsx", path: "/jsx", icon: HomeIcon, current: true },
  { name: "Props", path: "/props", icon: UsersIcon, current: false },
  { name: "Form", path: "/form", icon: FolderIcon, current: false },
  { name: "List", path: "/list", icon: ListBulletIcon, current: false },

  { name: "Hooks", path: "/hooks", icon: CalendarIcon, current: false },
  { name: "Api", path: "/api", icon: DocumentDuplicateIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MenuSideBar() {
  return (
    <div>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center pt-4">
            <img
              className="h-16 w-auto rounded-lg cursor-pointer"
              src="https://media.licdn.com/dms/image/v2/D4E0BAQEfbZqfkkV1Ng/company-logo_200_200/company-logo_200_200/0/1700828927850?e=1740614400&v=beta&t=uiwdfbVbSJw4eqshyoMUcNOZF6sTik5OhDGSEsE2Qnk"
              alt="Codin"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={classNames(
                          item.current
                            ? "bg-indigo-700 text-white"
                            : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "text-indigo-200 group-hover:text-white",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
