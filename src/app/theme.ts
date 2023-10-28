"use client";
import "./globals.css";

import { createTheme } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface Palette {
//     custom: Palette["primary"];
//   }

//   interface PaletteOptions {
//     custom?: PaletteOptions["primary"];
//   }
// }

// declare module "@mui/material/SvgIcon" {
//   interface SvgIconPropsColorOverrides {
//     fadedWhite: true;
//     white: true;
//   }
// }

let theme = createTheme({
  palette: {
    text: { primary: "#3D3D3D", secondary: "#317A67" },
    primary: {
      main: "#C9EADB",
    },
    secondary: {
      main: "#A1D6DF",
    },
  },
  typography: {
    // allVariants: { color: "black" },
    fontFamily: "Nunito",
    fontSize: 14,
    fontWeightRegular: 300,
    fontWeightBold: 700,
  },
});

// Custom colors

// theme = createTheme(theme, {
//   palette: {
//     white: theme.palette.augmentColor({
//       color: {
//         main: "#FFFFFF",
//       },
//       name: "white",
//     }),
//   },
// });

export default theme;
