import { Wrapper } from "../../styles/Global";
import { styled } from "../../styles/stitches.config";
import { Heading } from "../../styles/Text";

export const RegisterWrapper = styled("div", {
  ...Wrapper,
});

export const FormSection = styled("section", {
  [`& ${Heading}`]: {
    textAlign: "center",
  },
  width: "70%",
  // margin: "0 auto",
  "@mobile": {
    maxWidth: 425,
  },
});
