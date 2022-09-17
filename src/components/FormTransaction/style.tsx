import { Button } from "../../styles/Buttons";
import { styled } from "../../styles/stitches.config";

export const FormContainer = styled("div", {
  "@mobile": {
    display: "none",
  },
  [`& ${Button}`]: {
    margin: "$2 0",
  },
});
