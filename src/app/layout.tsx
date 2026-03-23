import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header/Header";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata = {
    title: "Hop Forge | Пивоваренный конструктор",
    description: "Создай свое идеальное крафтовое пиво",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={cn("font-sans", geist.variable)}>
            <body className={inter.className}>
                <ReduxProvider>
                    <Header/>
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}