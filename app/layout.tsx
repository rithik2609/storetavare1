import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: { default: "Tavare — Happiness Through Thread", template: "%s | Tavare" },
  description: "Tavare is an online saree store that brings you elegant, premium and timeless sarees for every occasion. Shop Silk, Cotton, Banarasi, Kanjivaram sarees.",
  keywords: ["saree", "silk saree", "banarasi saree", "kanjivaram saree", "tavare", "indian clothing", "ethnic wear"],
  openGraph: { siteName: "Tavare", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='16' fill='%239B5C61'/><ellipse cx='16' cy='20' rx='3.5' ry='6' fill='white' opacity='0.95'/><ellipse cx='10' cy='18' rx='3' ry='5.5' fill='white' opacity='0.85' transform='rotate(-20 10 18)'/><ellipse cx='22' cy='18' rx='3' ry='5.5' fill='white' opacity='0.85' transform='rotate(20 22 18)'/></svg>" />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: { fontFamily: "'Jost',sans-serif", fontSize: "0.88rem", background: "var(--text)", color: "white" },
            success: { iconTheme: { primary: "var(--primary)", secondary: "white" } },
          }}
        />
      </body>
    </html>
  );
}
