import { ReactNode } from "react";
import { globalCss, styled } from "./stitches.config";

interface GlobalStyleProps {
  children: ReactNode;
}

export const Wrapper = styled("div", {
  minHeight: "100vh",
});

export const Flex = styled("div", {
  display: "flex",
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
  // maxWidth: "$container",
  // "@mobile": {
  //   maxWidth: "$containerMobile",
  // },
});
