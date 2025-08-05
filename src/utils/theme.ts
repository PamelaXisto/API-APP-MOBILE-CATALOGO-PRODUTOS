const colors = {
  primary: "#2567E8",
  white: "#FFF",
  black: "#000",
  red: "#B91C1C",
  red_500: "#E63535",
  black_600: "#171717",
  background: "#747474",

  gray_100: "#656565",
  gray_200: "#BDBDBD",
  gray_400: "#454545",
  gray_500: "#8C8C8C",
};

const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

const fonts = {
  regular: "RobotoRegular",
  medium: "RobotoMedium",
  bold: "RobotoBold",
};

export const theme = {
  colors,
  fontSizes,
  fonts,
};

export type DefaultThemeType = typeof theme;