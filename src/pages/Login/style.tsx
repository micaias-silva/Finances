import { Container, Flex, Wrapper } from "../../styles/Global";
import { styled } from "../../styles/stitches.config";
import { Heading } from "../../styles/Text";

export const LoginWrapper = styled("div", {
  ...Wrapper,
  [`& ${Flex}`]: {
    gap: 0,
  },
});

export const FormSection = styled("section", {
  [`& ${Heading}`]: {
    textAlign: "center",
  },
  width: "100%",
  // margin: "0 auto",
  "@mobile": {
    maxWidth: 425,
  },
});
