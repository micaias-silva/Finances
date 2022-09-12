import { colors } from "./Global";
import { styled } from "./stitches.config";

export const Button = styled("button", {
  padding: "0 4rem",
  height: "2rem",
  border: "2px solid transparent",
  borderRadius: 5,
  color: "$white",
  background: "$primary",
  fontWeight: 600,
  cursor: "pointer",
  "&:hover": {
    filter: "brightness(0.8)",
  },
  variants: {
    type: {
      circle: {
        borderRadius: 9999,
      },
      fullSize: {
        width: "100%",
        height: "3rem",
      },
    },
    ...colors,
  },
});
