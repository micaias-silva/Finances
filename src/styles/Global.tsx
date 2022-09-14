import { ReactNode } from "react";
import { globalCss, styled } from "./stitches.config";

interface GlobalStyleProps {
  children: ReactNode;
}

export const Wrapper = {
  minHeight: "100vh",
  background: "$grey1",
};

export const Flex = styled("div", {
  display: "flex",
  // maxWidth: "100%",
  alignItems: "center",
  gap: "$1",
});

export const colors = {
  color: {
    grey1: { color: "$grey1" },
    grey2: { color: "$grey2" },
    grey3: { color: "$grey3" },
    white: { color: "$white" },
    primary: { color: "$primary" },
  },
  background: {
    grey1: { background: "$grey1" },
    grey2: { background: "$grey2" },
    grey3: { background: "$grey3" },
    white: { background: "$white" },
    primary: { background: "$primary" },
  },
};

export const globalStyles = globalCss({
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;700&display=swap')",
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSize: "$regular",
  },
  html: {
    fontFamily: "Inter",
    scrollBehavior: "smooth",
  },
});

export const GlobalStyles: React.FC<GlobalStyleProps> = ({ children }) => {
  globalStyles();
  return <>{children}</>;
};

export const Container = styled("div", {
  margin: "0 auto",
  padding: "0 1rem",
  maxWidth: "$container",
  display: "block",
  "@mobile": {
    maxWidth: "$containerMobile",
  },
  variants: {
    type: {
      full: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50vw",
        maxWidth: "50vw",
        minHeight: "100vh",
        "@mobile": {
          margin: 0,
          minWidth: "100%",
        },
      },
    },
    disappearsOn: {
      mobile: {
        "@mobile": {
          display: "none",
        },
      },
    },
  },
});

export const ImgFrame = styled("figure", {
  textAlign: "center",
  minWidth: "100%",
});

export const Img = styled("img", {
  maxWidth: "20rem",
  "@laptop": {
    maxWidth: "30rem",
    transition: "0.4s",
  },
});
