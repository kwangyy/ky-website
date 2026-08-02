import './globals.css'
import localFont from 'next/font/local'

const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
  weight: '300 600',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '400 500',
  display: 'swap',
})

export const metadata = {
  title: 'Kwang Yang Chia — AI Engineer',
  description: 'AI Engineer at Huawei, working on agentic systems and RAG.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

// Runs before paint so the stored theme applies with no flash of the wrong mode.
const themeScript = `
  try {
    var t = localStorage.getItem('ky-theme');
    if (t === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans text-body">{children}</body>
    </html>
  )
}
