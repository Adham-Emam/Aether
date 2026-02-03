import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="container py-50">
      <div
        className="absolute top-1/2 left-1/2 -z-10 h-100 w-150 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[120px] bg-primary rounded-full"
        aria-hidden="true"
      />

      <div className="flex items-center gap-2 bg-primary/20 px-5 py-1 uppercase text-sm font-bold rounded-full w-fit border border-ring mx-auto">
        <span className="aether-box-pulse block w-3 h-3 bg-primary rounded-full" />
        <p className="text-primary">The Intelligence Layer for Creators</p>
      </div>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Content that <span className="text-gradient">actually</span> converts.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground dark:text-muted-foreground/70 sm:text-xl md:text-2xl">
          Generate platform-native content in seconds. Aether understands
          nuance, tone, and formatting—so you don't have to.
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="secondary"
          className="bg-foreground text-background hover:text-foreground"
          asChild
        >
          <Link href="/register">
            Start Generating Free <ArrowRight />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#playground">View Examples</Link>
        </Button>
      </div>
    </section>
  )
}
