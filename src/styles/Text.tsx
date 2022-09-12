import { colors } from "./Global";
import { styled } from "./stitches.config";

export const textBaseStyles = {
  color: "$grey1",
  fontSize: "$regular",
  fontWeight: 400,
};

export const Logo = styled("h1", {
  ...textBaseStyles,
  fontWeight: 700,
  fontSize: "$text1",
  variants: {
    ...colors,
  },
});

export const Label = styled("label", {
  ...textBaseStyles,
  variants: {
    ...colors,
  },
});

export const Text = styled("p", {
  ...textBaseStyles,
  variants: {
    type: {
      larger: {
        fontWeight: 700,
        fontSize: "$text2",
        lineHeight: "$title1",
      },
    },
    ...colors,
  },
});
