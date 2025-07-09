//for routing pages to top of page
import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const handleHashChange = () => {
      // Scroll to top when hash changes
      window.scrollTo(0, 0);
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
