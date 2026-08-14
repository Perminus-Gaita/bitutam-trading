import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bitutam-trading.vercel.app"),
  title: {
    default: "Bitutam International | Integrated Trading, Procurement & Supply Solutions",
    template: "%s | Bitutam International",
  },
  description:
    "Bitutam International is a Kenya-based trading and supply business delivering construction materials, bitumen, solar equipment and general merchandise through dependable sourcing, procurement and delivery.",
  keywords: [
    "construction materials supplier Kenya",
    "cement ballast supplier Nairobi",
    "bitumen supplier Kenya",
    "solar equipment supplier Kenya",
    "procurement services Nairobi",
    "general merchandising Kenya",
    "Bitutam International",
  ],
  openGraph: {
    title: "Bitutam International — Trading, Procurement & Supply",
    description:
      "Building reliable supply chains. Construction materials, bitumen, solar equipment and general merchandise sourced and delivered across Kenya.",
    url: "https://bitutam-trading.vercel.app",
    siteName: "Bitutam International",
    locale: "en_KE",
    type: "website",
    images: [{ url: "/img/hero-site.jpg", width: 1600, height: 1067 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitutam International — Trading, Procurement & Supply",
    description:
      "Construction materials, bitumen, solar equipment and general merchandise sourced and delivered across Kenya.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230f1417'/%3E%3Ctext x='16' y='22' font-family='sans-serif' font-size='16' font-weight='700' fill='%23e9a13b' text-anchor='middle'%3EB%3C/text%3E%3C/svg%3E"
        />
        <meta name="theme-color" content="#0f1417" />
      </head>
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
