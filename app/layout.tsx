import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Micro Pump Bot",
  description:
    "Hello everyone! I developed the MicroPump Bot, a Telegram bot designed to boost your token's volume during pump events, helping it appear on the front page of Pump Fun. It's secure, user-friendly, and perfect for anyone looking to enhance their token's visibility. Try it out here: MicroPump Bot on Telegram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body className="text-base-content text-lg font-custom">
        <Header />
        {children}
      </body>
    </html>
  );
}
