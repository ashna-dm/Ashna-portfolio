import type { Metadata } from "next";
import { fontVars } from "./fonts";
import "./globals.css";

const GOOGLE_FONTS =
  "https://fonts.googleapis.com/css2?" +
  [
    "family=Poppins:wght@400;500;600;700;800",
    "family=Baloo+2:wght@500;700;800",
    "family=JetBrains+Mono:wght@400;500",
    "family=Caveat:wght@400;500;600;700",
    "family=Nunito+Sans:wght@400;600;700;800",
    "family=Lato:wght@400;700;900",
    "family=Space+Grotesk:wght@300;400;500;600;700",
    "family=Inter:wght@400;500;600;700",
  ].join("&") +
  "&display=swap";

export const metadata: Metadata = {
  title: "Ashna Damani — Product Designer + Storyteller",
  description:
    "Ashna Damani — AI-native product designer. Where the runway meets the roadmap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVars}>
      <body>
        {/* React 19 hoists these to <head>. Local fonts (Hagrid, Gajraj)
            are self-hosted via next/font; Google fonts load here. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={GOOGLE_FONTS} />
        {children}
      </body>
    </html>
  );
}
