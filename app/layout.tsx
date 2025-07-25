/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import BackgroundEffect from "@/components/BackgroundEffect";

const APPLICATION_NAME = "Micro Pump Bot";
const APPLICATION_DESCRIPTION =
  "Hello everyone! I developed the MicroPump Bot, a Telegram bot designed to boost your token's volume during pump events, helping it appear on the front page of Pump Fun. It's secure, user-friendly, and perfect for anyone looking to enhance their token's visibility. Try it out here: MicroPump Bot on Telegram.";

export const metadata: Metadata = {
  metadataBase: new URL("https://micropump.fun"),
  title: APPLICATION_NAME,
  description: APPLICATION_DESCRIPTION,
  applicationName: APPLICATION_NAME,
  robots: "index, follow",
  openGraph: {
    title: APPLICATION_NAME,
    description: APPLICATION_DESCRIPTION,
    images: "https://micropump.fun/images/logo.webp",
  },
  twitter: {
    title: APPLICATION_NAME,
    description: APPLICATION_DESCRIPTION,
    images: "https://micropump.fun/images/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <head>
        <script data-preload src="https://terminal.jup.ag/main-v1.js"></script>
      </head>
      <body className="text-base-content text-lg font-custom w-full">
        <BackgroundEffect />
        <div className="relative z-10 w-full flex flex-col items-center">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
