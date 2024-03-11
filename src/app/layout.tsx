import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'rsuite/dist/rsuite.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bad UI",
  description: "nope",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
