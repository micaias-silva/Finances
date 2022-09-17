import { Button } from "../../styles/Buttons";
import { Container, Flex, Wrapper } from "../../styles/Global";
import { styled } from "../../styles/stitches.config";
import { Heading } from "../../styles/Text";

export const DashboardWrapper = styled("div", {
  ...Wrapper,
});

export const FinanceResume = styled("main", {
  margin: "0 0 $2 0",

  // [`& ${Heading}`]: {
  //   margin: "$2 0",
  // },
  "@tablet": {
    width: "70%",
  },
});

export const BalanceContainer = styled("div", {
  padding: "$2",
  margin: "$1 0 0 0",
  maxHeight: "4rem",
  background: "$grey2",
  [`& ${Flex}`]: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const Filters = styled("nav", {
  display: "flex",
  gap: "$1",
  marginBottom: "$1",
  "@mobile": {
    overflow: "auto",
  },
});

export const AsideContainer = styled("aside", {
  "@tablet": {
    width: "25%",
  },
});

export const LaptopFlex = styled("div", {
  "@tablet": {
    display: "flex",
    justifyContent: "space-between",
  },
});
