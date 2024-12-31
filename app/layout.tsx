import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'White',
  description: 'Beauty Salon White',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
} 