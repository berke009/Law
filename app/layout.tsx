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
    default: "Av. Ahmet Can Erendor",
    template: "%s | Av. Ahmet Can Erendor",
  },
  description:
    "Strategic legal counsel in Istanbul for corporate, technology, disputes, and real estate—clear advice for leaders who need momentum with defensibility.",
  openGraph: {
    title: "Av. Ahmet Can Erendor",
    description:
      "Modern, business-minded legal counsel in Istanbul. Corporate, technology, disputes, and projects—grounded in the real world.",
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
