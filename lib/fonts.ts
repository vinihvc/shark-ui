import {
  JetBrains_Mono as FontMono,
  Outfit as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
