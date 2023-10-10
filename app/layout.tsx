import "./globals.css";
import type { Metadata } from "next";
import { source_sans_3, source_serif_4, inter } from "./fonts";
import Navbar from "../components/Navbar";


export const metadata: Metadata = {
  title: "Environmental Humanities",
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
      </body>
    </html>
  );
}
