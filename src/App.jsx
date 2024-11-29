import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tabs from "./app/layout/Tabs";

import Ex5 from "./app/exos/5";
import MainLayout from "./app/layout/Layout";
import MenuSideBar from "./app/layout/MenuSideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <MenuSideBar />
        <div className="lg:pl-72">
          <main className="py-2">
            <div className="px-4 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/jsx" element={<Tabs section="jsx" />} />
                <Route path="/props" element={<Tabs section="props" />} />
                <Route path="/form" element={<Tabs section="form" />} />
                <Route path="/list" element={<Tabs section="list" />} />
                <Route path="/hooks" element={<Tabs section="hooks" />} />
                <Route path="/api" element={<Tabs section="api" />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
      );
    </>
  );
}

export default App;
