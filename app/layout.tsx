import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lari França - Body Piercer | Piercing como Arte",
  description:
    "Larissa França transforma o detalhe em identidade. Piercing como arte, estilo como expressão. Agende sua consulta em Santos.",
  keywords: ["body piercer", "piercing", "Santos", "Larissa França", "piercing feminino", "arte corporal"],
  authors: [{ name: "Larissa França" }],
  creator: "Larissa França",
  publisher: "Larissa França",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Lari França - Body Piercer | Piercing como Arte",
    description: "Larissa França transforma o detalhe em identidade. Piercing como arte, estilo como expressão.",
    url: "https://larifranca.com",
    siteName: "Lari França Body Piercer",
    images: [
      {
        url: "/images/lari-franca-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Lari França Body Piercer Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lari França - Body Piercer | Piercing como Arte",
    description: "Larissa França transforma o detalhe em identidade. Piercing como arte, estilo como expressão.",
    images: ["/images/lari-franca-logo-new.png"],
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#800000" />
        <meta name="msapplication-TileColor" content="#800000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
