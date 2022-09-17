import { colors } from "./Global";
import { styled } from "./stitches.config";

export const Button = styled("button", {
  padding: "0 $2",
  width: "fit-content",
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
    shape: {
      circle: {
        fontSize: "$small",
        borderRadius: 9999,
      },
      fullSize: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "3rem",
      },
    },
    disappearsOn: {
      tablet: {
        "@tablet": {
          display: "none",
        },
      },
    },
    ...colors,
  },
});
