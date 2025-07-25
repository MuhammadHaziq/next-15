export const metadata: Metadata = {
  title: {
    default: 'Next.js',
    template: '%s | Next.js',
  },
  description: 'Generated by Next.js',
}
import Header from '@/component/Header'
import '@/styles/globals.css'
import { Metadata } from 'next'
import { ErrorWrapper } from './error-wrapper'
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header />
        <div className="flex flex-col min-h-[calc(100vh-152px)] space-y-auto py-10">
        <ErrorWrapper>
          {children}
        </ErrorWrapper>
        </div>
        <footer className="bg-gray-800 text-white p-4 ">
          <h1 className="text-2xl font-bold">Footer</h1>
        </footer>
        </body>
    </html>
  )
}
 