if (typeof window !== "undefined") {
  if (
    (localStorage.darkTheme === "true") ||
    (!("darkTheme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
