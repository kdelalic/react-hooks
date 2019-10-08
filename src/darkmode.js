import { useState, useEffect } from "react";
import useMedia from "./media";

const useDarkMode = className => {
  if (typeof className !== "string" || !className) {
    className = "dark"
  }

  // Get dark mode state from local storage
  const [isDarkModeState, setStoredDarkModeState] = useState(() => {
    let storedDarkMode = false;

    if (typeof window !== 'undefined') {
      storedDarkMode = window.localStorage.getItem("isDarkMode");
    }

    return JSON.parse(storedDarkMode);
  });

  // Check for OS or browser dark mode preference
  const prefersDarkMode = usePrefersDarkMode();

  // Fallback to OS or browser preference if localstorage is empty
  const isDarkMode = isDarkModeState !== null ? isDarkModeState : prefersDarkMode;

  const setDarkMode = isDark => {
    setStoredDarkModeState(isDark);
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

  });

  return [isDarkMode, setDarkMode];
}

// Check dark mode preference on OS/browser level
const usePrefersDarkMode = () => {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

export default useDarkMode;