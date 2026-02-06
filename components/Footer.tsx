import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container relative flex flex-col lg:flex-row items-center justify-between gap-5">
        <Logo />

        <nav className="flex justify-center items-center gap-4 lg:absolute left-1/2 top-1/2 lg:-translate-1/2">
          <Link href="#" className="hover:text-primary">
            Privacy
          </Link>
          <Link href="#" className="hover:text-primary">
            Terms
          </Link>
          <Link href="#" className="hover:text-primary">
            Security
          </Link>
          <Link href="#" className="hover:text-primary">
            Twitter
          </Link>
        </nav>

        <p className="text-xs font-semibold text-muted-foreground/50">
          &copy; {new Date().getFullYear()} AETHER SOLUTIONS LABS. ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </footer>
  )
}
