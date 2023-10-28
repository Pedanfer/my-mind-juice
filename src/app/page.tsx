import { ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import ResponsiveAppBar from "../components/nav-bar";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <ResponsiveAppBar />
      </main>
    </ThemeProvider>
  );
}
