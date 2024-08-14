// hooks/useAOS.ts
import { useEffect } from "react";

const useAOS = () => {
  useEffect(() => {
    const AOS = require("aos"); // Dynamic import to avoid SSR issues
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });

    // This function handles any cleanup or refresh necessary when the component unmounts
    return () => {
      AOS.refresh();
    };
  }, []);
};

export default useAOS;
