import type { Metadata } from "next";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/700.css";
import "./globals.css";
import ResponsiveAppBar from "@/components/nav-bar/nav-bar";
import CustomThemeProvider from "./theme";

export const metadata: Metadata = {
  title: "Mymindjuice.com",
  description:
    "Search and rate your favorite writers or content creators filtered by tags. Read summaries on famous creators. Everything is voted by the user, from summaries to best creations, and tags are added by you too!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CustomThemeProvider>
        <body>
          <ResponsiveAppBar />
          {children}
        </body>
      </CustomThemeProvider>
    </html>
  );
}
