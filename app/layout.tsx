import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Claude App",
  description: "Aplicación creada con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
