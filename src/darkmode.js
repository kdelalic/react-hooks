import { useState, useEffect } from "react"

const useDarkMode = className => {
  if (typeof className !== "string" || !className) {
    className = "dark"
  }

  const [isDarkMode, setStoredDarkMode] = useState(() => {
    let storedDarkMode = false;

    if (typeof window !== 'undefined') {
      storedDarkMode = window.localStorage.getItem("isDarkMode");
    }

    return JSON.parse(storedDarkMode);
  });

  const setDarkMode = isDark => {
    setStoredDarkMode(isDark);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem("isDarkMode", JSON.stringify(isDark));
    }
  }

  useEffect(() => {
    const element = window.document.body;

    if (isDarkMode) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }

  }, [isDarkMode]);

  return [isDarkMode, setDarkMode];
}

export default useDarkMode;