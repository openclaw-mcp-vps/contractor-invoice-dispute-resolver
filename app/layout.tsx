import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DisputeKit — Automate Freelancer Payment Dispute Resolution',
  description: 'Compile evidence packages for payment disputes instantly. Timestamped work logs, communication exports, and contract breach documentation ready for platform submission or legal use.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7b3fbd2f-ff47-44e5-a100-7321164aa2d8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
