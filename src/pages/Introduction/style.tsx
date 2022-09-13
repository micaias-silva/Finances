import { Container, Wrapper } from "../../styles/Global";
import { styled } from "../../styles/stitches.config";

export const IntroWrapper = styled("main", {
  ...Wrapper,
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
