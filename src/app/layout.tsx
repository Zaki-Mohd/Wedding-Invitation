import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Althaf & Sania — Wedding Invitation",
  description:
    "You are cordially invited to celebrate the union of Althaf & Sania. Join us for this joyous occasion.",
  openGraph: {
    title: "Althaf & Sania — Wedding Invitation",
    description: "Celebrating our love — Join us on our special day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google Fonts loaded via link tags to avoid CSS @import order issues */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Alex+Brush&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
