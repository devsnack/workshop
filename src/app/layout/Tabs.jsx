import { useState } from "react";
import Ex1 from "../exos/1";
import Solu1 from "../solutions/1";
import Ex5 from "../exos/5";
import FEx5 from "../solutions/5";
import FEx52 from "../solutions/05.extra-2";
import FEx51 from "../solutions/05.extra-1";
import Ex6 from "../exos/6";
import Fex61 from "../solutions/06.extra-1";
import Fex62 from "../solutions/06.extra-2";
import Fex6 from "../solutions/6";
import Ex7 from "../exos/7";
import Ex9 from "../exos/9";
import FEx9 from "../solutions/9";
import Ex8 from "../exos/8";
import Fex8 from "../solutions/8";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Tabs configuration for each section
const sections = {
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
    { name: "Form Handling", component: () => <Ex6></Ex6> },
    {
      name: "final 1",
      component: () => <Fex6 />,
    },
    {
      name: "final 2",
      component: () => <Fex61 />,
    },
    {
      name: "final 3",
      component: () => <Fex62 />,
    },
  ],
  list: [{ name: "List", component: () => <Ex7 /> }],
  hooks: [
    { name: "states", component: () => <Ex8 /> },
    { name: "final", component: () => <Fex8 /> },
  ],
  api: [
    { name: "REST API", component: () => <Ex9 /> },
    { name: "final", component: () => <FEx9 /> },
  ],
};
function Tabs({ section }) {
  const [activeTab, setActiveTab] = useState(sections[section][0]?.name || "");

  const ActiveComponent =
    sections[section].find((tab) => tab.name === activeTab)?.component || null;

  return (
    <div>
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {sections[section].map((tab) => (
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

      {/* Render the active tab's component */}
      <div className="mt-4">{ActiveComponent && <ActiveComponent />}</div>
    </div>
  );
}

export default Tabs;
