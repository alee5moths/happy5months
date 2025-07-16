import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import FallingHearts from "@/components/falling-hearts"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Para mi amorcito",
    description: "Una página especial para mi novia, hecha con mucho amor.",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
        <body className={cn(inter.className, "bg-white text-gray-900")}>
        <FallingHearts />
        {children}
        </body>
        </html>
    )
}
