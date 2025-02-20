import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "xjloh",
  description: "My personal portfolio",
};

const courierPrime = Courier_Prime({
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courierPrime.className}>{children}</body>
    </html>
  );
}
