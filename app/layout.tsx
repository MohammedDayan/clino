import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Clino - Hourly Jobs for Ghanaian Students",
  description: "Find hourly jobs for students in Ghanaian Universities",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={inter.className}>
        <div className="container mx-auto ">
        <main className="min-h-screen ">{children}</main>
        <Footer />
        </div>
                
      </body>
    </html>
  )
}

