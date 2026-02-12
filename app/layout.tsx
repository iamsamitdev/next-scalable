import type { Metadata } from "next"
import { Inter, Anuphan } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
})

export const metadata: Metadata = {
  title: "ระบบจัดการคลังสินค้า",
  description: "ระบบจัดการคลังสินค้า",
  keywords: ["ระบบจัดการคลังสินค้า", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
  openGraph: {
    title: "ระบบจัดการคลังสินค้า",
    description: "ระบบจัดการคลังสินค้า",
    url: "https://smartstore.com",
    siteName: "Smart Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "ระบบจัดการคลังสินค้า",
    description: "ระบบจัดการคลังสินค้า",
    images: ["https://smartstore.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartstore.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${anuphan.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
