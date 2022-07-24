import { useEffect, useState } from "react";
/*
background: radial-gradient(currentColor 1px, transparent 1px);
color: white;
background-size: calc(10 * 1px) calc(10 * 1px);
 */
function getStorageValue(key, defaultValue) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial =
      saved !== null
        ? JSON.parse(saved)
        : defaultValue &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? defaultValue
        : !defaultValue;
    return initial;
  }
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    value
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default function Intro() {

  const [darkTheme, setTheme] = useLocalStorage("darkTheme", true);

  return (
    <>
      <section className="flex-col sm:flex-row items-start md:items-baseline flex sm:justify-between pt-12">
        <h1 className="text-6xl md:text-7xl font-mono tracking-tighter leading-tight md:pr-8">
          Ла_ла_блог
        </h1>
        <h4 className="flex flex-col md:flex-row items-start sm:items-end text-left text-lg mt-12 sm:mt-0">
          Цифровой дизайн блокнот.&nbsp;
          <button
            onClick={() => setTheme(!darkTheme)}
            className="h-fit underline font-mono hover:decoration-blue-600 dark:hover:decoration-accent-dark duration-200 transition-colors"
          >
            {darkTheme ? "Светлая " : "Темная "} тема
          </button>
        </h4>
      </section>
    </>
  );
}
