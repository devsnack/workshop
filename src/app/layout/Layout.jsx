import { useState } from "react";
import {
  CalendarIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Ex1 from "../exos/1";
import Solu1 from "../solutions/1";
import Ex5 from "../exos/5";
import FEx5 from "../solutions/5";
import FEx52 from "../solutions/05.extra-2";
import FEx51 from "../solutions/05.extra-1";

// Navigation items for the sidebar
const navigation = [
  { name: "Jsx", section: "jsx", icon: HomeIcon },
  { name: "Props", section: "props", icon: UsersIcon },
  { name: "Form", section: "form", icon: FolderIcon },
  { name: "Hooks", section: "hooks", icon: CalendarIcon },
  { name: "Api", section: "api", icon: DocumentDuplicateIcon },
];

// Tabs configuration for each section
const sectionTabs = {
  jsx: [
    { name: "exercice", component: () => <Ex1 /> },
    { name: "Final", component: () => <Solu1 /> },
  ],
  props: [
    { name: "Props Basics", component: () => <Ex5 /> },
    {
      name: "final",
      component: () => <FEx5></FEx5>,
    },
    {
      name: "final 2 ",
      component: () => <FEx51 />,
    },
    {
      name: "final 3",
      component: () => <FEx52 />,
    },
  ],
  form: [
    { name: "Form Handling", component: () => <div>Form Handling Basics</div> },
    {
      name: "Validation",
      component: () => <div>Form Validation Techniques</div>,
    },
  ],
  hooks: [
    { name: "useState", component: () => <div>How to useState</div> },
    { name: "useEffect", component: () => <div>How to useEffect</div> },
  ],
  api: [
    { name: "REST API", component: () => <div>Working with REST APIs</div> },
    { name: "GraphQL", component: () => <div>GraphQL Basics</div> },
  ],
};

// Utility for className
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Sidebar Component
function Sidebar({ onSectionSelect }) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center pt-4">
          <img
            className="h-16 w-auto rounded-lg cursor-pointer"
            src="https://media.licdn.com/dms/image/v2/D4E0BAQEfbZqfkkV1Ng/company-logo_200_200/company-logo_200_200/0/1700828927850?e=1740614400&v=beta&t=uiwdfbVbSJw4eqshyoMUcNOZF6sTik5OhDGSEsE2Qnk"
            alt="Logo"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            {navigation.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => onSectionSelect(item.section)}
                  className={classNames(
                    "text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full text-left"
                  )}
                >
                  <item.icon className="h-6 w-6 shrink-0 text-indigo-200" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

// Tabs Component
function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name);

  const ActiveComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={classNames(
                tab.name === activeTab
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
              )}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Active Tab Content */}
      <div className="mt-4">{ActiveComponent && <ActiveComponent />}</div>
    </div>
  );
}

// Main Layout Component
export default function MainLayout() {
  const [selectedSection, setSelectedSection] = useState("jsx"); // Default section

  const tabs = sectionTabs[selectedSection] || [];

  return (
    <div className="h-full w-full">
      <Sidebar onSectionSelect={setSelectedSection} />
      <div className="lg:pl-72">
        <main className="py-2">
          <div className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
              {selectedSection} Section
            </h1>
            {tabs.length > 0 ? (
              <Tabs tabs={tabs} />
            ) : (
              <div>No tabs available for this section.</div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
