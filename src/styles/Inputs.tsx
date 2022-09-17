import { styled } from "./stitches.config";
import { textBaseStyles } from "./Text";

export const Input = styled("input", {
  ...textBaseStyles,
  display: "block",
  border: "$grey3 2px solid",
  background: "$grey3",
  padding: "$1",
  borderRadius: 10,
  width: "100%",
  "&:focus": {},
});

export const Select = styled("select", {
  ...textBaseStyles,
  display: "block",
  border: "$grey3 2px solid",
  background: "$grey3",
  padding: "$1",
  borderRadius: 10,
  width: "100%",
});
