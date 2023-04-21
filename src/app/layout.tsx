import './globals.css'

export const metadata = {
  title: 'Spoyify Clone',
  description: 'Listem to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-zinc-900 text-zinc-50'>
      <body>{children}</body>
    </html>
  )
}
