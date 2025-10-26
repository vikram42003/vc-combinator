import "./globals.css";
import { workSans } from "./fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VC Combinator",
  description: "A startup acceleration platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>{children}</body>
    </html>
  );
}
