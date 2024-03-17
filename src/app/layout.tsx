import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'rsuite/dist/rsuite.min.css';
import { Navbar } from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bad UI",
    description: "Beautiful bad UI collection",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
