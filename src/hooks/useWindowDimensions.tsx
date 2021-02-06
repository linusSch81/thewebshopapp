import { useState, useEffect } from "react";

/** gets innerWidth and innerHeight from window */
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { height, width };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    /** Remove EventListener so to reduce memory leak, so that it is not run all the time  */
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};
