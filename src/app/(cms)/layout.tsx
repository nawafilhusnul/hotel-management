import React from "react"

export const metadata = {
  title: 'CMS Hotel Management',
  description: 'Content Management System for Hotel Management App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
