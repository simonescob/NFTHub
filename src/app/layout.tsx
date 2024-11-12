import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Inter } from '@next/font/google';

export const metadata: Metadata = {
  title: "NFTHub",
  description: "High Quality NFT Collection",
};

export const inter = Inter({
  subsets: ['latin'], // Adjust subsets as needed
  variable: '--font-inter', // Customize variable name
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
