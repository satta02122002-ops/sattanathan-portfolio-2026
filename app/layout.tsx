import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sattanathan | Supply Chain Data Analyst & Automation Builder",
  description:
    "Logistics Coordinator based in Dubai transitioning into Supply Chain Data Analyst & Automation Builder. Expert in Power BI, SQL, Excel dashboards and supply chain optimization.",
  keywords: [
    "Supply Chain Data Analyst",
    "Logistics Coordinator Dubai",
    "Power BI Dashboard",
    "Supply Chain Analytics",
    "Warehouse Management",
    "Freight Tracking",
    "SQL Analytics",
    "Logistics Technology",
    "Dubai Data Analyst",
    "3PL Software",
  ],
  authors: [{ name: "Sattanathan" }],
  creator: "Sattanathan",
  metadataBase: new URL("https://sattanathan.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sattanathan.com",
    title: "Sattanathan | Supply Chain Data Analyst",
    description:
      "Turning logistics data into smart supply chain decisions. Based in Dubai.",
    siteName: "Sattanathan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sattanathan - Supply Chain Data Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sattanathan | Supply Chain Data Analyst",
    description: "Turning logistics data into smart supply chain decisions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0a0f] text-gray-100">
        {children}
      </body>
    </html>
  );
}
