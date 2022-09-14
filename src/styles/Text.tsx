import { colors } from "./Global";
import { styled } from "./stitches.config";

export const textBaseStyles = {
  color: "$white",
  fontSize: "$regular",
  fontWeight: 400,
};

export const Heading = styled("h2", {
  ...textBaseStyles,
  fontSize: "$large",
  fontWeight: "700",
});

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
  fontWeight: 100,
  fontSize: "$small",
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

export const Link = styled("a", {
  ...textBaseStyles,
  fontWeight: "600",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  variants: {
    ...colors,
  },
});
