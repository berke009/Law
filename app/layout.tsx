import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Ahmet Can Erendor Attorneys-at-Law",
    template: "%s | Ahmet Can Erendor Attorneys-at-Law",
  },
  description:
    "Ahmet Can Erendor Attorneys-at-Law | Kilis-based Turkish firm for corporate, M&A, competition, compliance, disputes & TMT. Top-tier directory rankings.",
  openGraph: {
    title: "Ahmet Can Erendor Attorneys-at-Law",
    description:
      "Sophisticated Turkish legal counsel from Kilis to clients worldwide. Corporate, M&A, competition, compliance, disputes & TMT.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${body.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
