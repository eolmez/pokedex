import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "neredekal.com test-case",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://raw.githubusercontent.com/eolmez/pokedex/master/src/app/favicon.ico"
      ></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
