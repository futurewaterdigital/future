import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Futurewater Digital Marketing Company",
  description: "Performance marketing agency based in Bangalore",
  metadataBase: new URL("https://healthcareinternational.in/"),
  openGraph: {
    url: "https://www.futurewaterdigital.com/",
    title: "Futurewater Digital Marketing Company",
    description: "Performance marketing agency based in Bangalore",
    images: [
      {
        url: "images/about-us.png",
        width: 800,
        height: 600,
        alt: "Performance marketing agency based in Bangalore",
      },
    ],
  },
  icons: {
    icon: "/favicon_io/favicon-32x32.png",
    shortcut: "/favicon_io/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>

      <body>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
