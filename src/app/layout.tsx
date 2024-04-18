import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karen Félix",
  description: "Meu portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row justify-center items-center gap-8 h-10 bg-zinc-600 font-bold text-gray-300">
          <Link href={"/"} className="hover:text-gray-900">
            Início
          </Link>
          <Link href={"/sobre-mim"} className="hover:text-gray-900">
            Um pouco sobre mim
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
