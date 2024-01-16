import type { Metadata } from "next";
import localFont from "next/font/local";
import { ADLaM_Display } from "next/font/google";
import "./globals.css";

const maladroit = localFont({
  src: [
    {
      path: "../public/Maladorit-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/Maladorit-normal.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const bebas = ADLaM_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={maladroit.className}>{children}</body>
    </html>
  );
}
