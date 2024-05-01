import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next Movie Community",
    description: "Next Movie Community",
};

type Props = {
    children: React.ReactNode;
    modal: React.ReactNode;
};

export default function RootLayout({ children, modal }: Props) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <div className="pt-[64px]">
                {modal}
                {children}
                </div>
                
            </body>
        </html>
    );
}
