import { useEffect, useState } from "react";
import { Header } from "./core/components/templates/header";
import Router from "./router.tsx";
import { ToastContainer } from "react-toastify";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  return (
    <div className="relative bg-white text-black transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <Header onToggleTheme={toggleTheme} darkMode={darkMode} />
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
