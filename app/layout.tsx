import "./globals.css";
import type { Metadata } from "next";
import { source_sans_3, source_serif_4, inter } from "./fonts";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Environmental Humanities",
  description: `This website showcases student perspectives from Stanford University's Fall 2022 course: "Environmental Humanities: Finding Our Place on a Changing Planet” [SUSTAIN 140 | BIO 184 | ENGLISH 140D]`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${source_sans_3.variable} ${source_serif_4.variable} ${inter.variable} `}
    >
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="bg-beige">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
