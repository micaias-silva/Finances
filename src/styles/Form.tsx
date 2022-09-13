import { Input } from "./Inputs";
import { styled } from "./stitches.config";

export const Form = styled("form", {
  margin: "$1 auto",
  [`& ${Input}`]: {
    margin: "$1 0",
  },
  "@mobile": {
    minWidth: "100%",
  },
});
