import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xl");

  useEffect(() => {
    const calculateBreakpoint = () => {
      const width = window.innerWidth;

      if (width > 640) {
        setBreakpoint("sm");
      } else if (width > 768) {
        setBreakpoint("md");
      } else if (width > 1024) {
        setBreakpoint("lg");
      } else if (width > 1280) {
        setBreakpoint("xl");
      } else {
        setBreakpoint("2xl");
      }
    };

    const throttledCalculateBreakpoint = throttle(calculateBreakpoint, 200);
    window.addEventListener("resize", throttledCalculateBreakpoint);

    // call the function initially to set the breakpoint
    calculateBreakpoint();

    // cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", throttledCalculateBreakpoint);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
