'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function ErrorBoundary() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Something went wrong...
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          We apologize for the inconvenience, but a critical error occurred.
          Please try reloading the page.
        </p>
        <Button
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-40"
          onClick={() => router.refresh()}
        >
          Reload
        </Button>
      </main>
    </div>
  )
}
