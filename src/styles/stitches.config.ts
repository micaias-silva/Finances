import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      grey1: "#212529",
      grey2: "#868e96",
      grey3: "#d4d4d4",
      white: "#f8f9fa",
      primary: "#fd337e",
    },
    fontSizes: {
      regular: "1rem",
      text1: "1.5rem",
      text2: "2rem",
    },
    lineHeights: {
      title1: "2.5rem",
      line: "2rem",
    },
    sizes: {
      container: "75rem",
      containerMobile: "40",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
      4: "4rem",
    },
  },
  media: {
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px)",
    laptop: "(min-width: 1024)",
  },
});
