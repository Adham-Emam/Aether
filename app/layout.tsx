import type { Metadata } from 'next'
import './globals.css'

import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'AETHER — Platform-Aware AI Content Repurposer for Creators',
  description:
    'Create, repurpose, and refine content for LinkedIn, X, and newsletters with platform-aware AI. Edit, customize tone, and manage all your content in one workspace.',

  keywords: [
    'AI content repurposer',
    'social media content generator',
    'LinkedIn post generator',
    'X thread generator',
    'newsletter AI writer',
    'content workspace',
    'AI writing tool',
  ],

  applicationName: 'AETHER',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
