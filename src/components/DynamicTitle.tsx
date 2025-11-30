import react from "react";
import { useLocation } from "react-router-dom";

function DynamicTitle() {
  const location = useLocation();

  react.useEffect(() => {
    if (location.pathname === "/") {
      document.title = "DELTARUNE · WM Newsletter";
    } else if (location.pathname === "/june2023") {
      document.title = "DELTARUNE · WM Newsletter: Issue 1 - June 2023";
    } else if (location.pathname === "/q12025") {
      document.title = "DELTARUNE · WM Newsletter: Issue 2 - Q1 2025";
    } else if (location.pathname === "/december2025") {
      document.title = "DELTARUNE · WM Newsletter: Issue 3 - December 2025";
    }
  }, [location.pathname]);

  return null;
}

export default DynamicTitle;