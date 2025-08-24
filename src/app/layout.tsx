import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-providers"
import { LanguageProvider } from "@/components/providers/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reteck Solutions - E-Waste Recycling Platform",
  description: "Transform your electronic waste into rewards. Join the sustainable future of technology recycling.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
