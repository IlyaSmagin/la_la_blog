import { useEffect, useState } from "react";
/*
background: radial-gradient(currentColor 1px, transparent 1px);
color: white;
background-size: calc(10 * 1px) calc(10 * 1px);
 */

export default function Intro() {
  const [isDarkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" && isDarkTheme === true ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setDarkTheme(true);
      } else {
        document.documentElement.classList.remove("dark");
        setDarkTheme(false);
      }
    }
  }, [isDarkTheme]);

  return (
    <>
      <section className="flex-col sm:flex-row items-start md:items-baseline flex sm:justify-between pt-12">
        <h1 className="text-6xl md:text-7xl font-mono tracking-tighter leading-tight md:pr-8">
          Ла_ла_блог
        </h1>
        <h4 className="flex flex-col md:flex-row items-start sm:items-end text-left text-lg mt-12 sm:mt-0">
          Цифровой дизайн блокнот.&nbsp;
          <button
            onClick={() => setDarkTheme(!isDarkTheme)}
            className="h-fit underline font-mono hover:decoration-accent-light dark:hover:decoration-accent-dark duration-200 transition-colors"
          >
            {isDarkTheme ? "Светлая " : "Темная "} тема
          </button>
        </h4>
      </section>
    </>
  );
}
