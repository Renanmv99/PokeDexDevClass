import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fab
      color="error"
      size="medium"
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        display: isVisible ? "flex" : "none",
      }}
    >
      <KeyboardArrowUp />
    </Fab>
  );
};

export default ScrollToTopButton;
