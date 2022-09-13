import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      grey1: "#212529",
      grey2: "#121618",
      grey3: "#43434a",
      white: "#f8f9fa",
      primary: "#fd337e",
    },
    fontSizes: {
      small: "0.875rem",
      regular: "1rem",
      large: "1.25rem",
      text1: "1.5rem",
      text2: "2rem",
    },
    lineHeights: {
      title1: "2.5rem",
      line: "2rem",
    },
    sizes: {
      container: "75rem",
      containerMobile: "40rem",
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
    laptop: "(min-width: 1024px)",
  },
});
