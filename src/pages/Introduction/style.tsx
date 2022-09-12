import { Container } from "../../styles/Global";
import { styled } from "../../styles/stitches.config";

export const IntroWrapper = styled("main", {
  width: "100%",
  minHeight: "100vh",
  background: "$grey1",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

export const Section = styled("section", {
  maxWidth: "80%",
  "*": {
    margin: "$1 0",
  },
  "@mobile": {
    maxWidth: "100%",
  },
});

export const HomeCard = styled("figure", {
  "@mobile": {
    display: "none",
  },
  "& img": {
    maxWidth: "30rem",
  },
});
