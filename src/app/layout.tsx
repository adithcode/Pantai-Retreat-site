import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pantai Retreat Villa Azhikode | Beachfront Event & Stay Venue in Thrissur, Kerala",
  description: "Welcome to Pantai Retreat Villa, an exclusive private beachfront property next to Munakkal Beach, Azhikode, Thrissur, Kerala. Designed specifically for hosting events, intimate weddings, pre-wedding celebrations, and private parties.",
  keywords: ["Pantai Retreat Villa", "Azhikode Event Venue", "Thrissur Beachfront Villa", "Kerala Wedding Beach Villa", "Private Event Space Kerala", "Beach Villa Rental Thrissur", "Haldi Mehendi Venue Kerala"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="bg-sand-50 text-ocean-900 min-h-screen flex flex-col antialiased selection:bg-gold-200 selection:text-ocean-900">
        {children}
      </body>
    </html>
  );
}
