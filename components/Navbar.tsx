'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'

import { useTheme } from '@/contexts/ThemeContext'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { Menu, Moon, Sun } from 'lucide-react'

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Playground', href: '#playground' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '#blog' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  const animateClass = scrolled
    ? 'bg-foreground/10 backdrop-blur-sm top-4 rounded-2xl w-[90%] border'
    : 'bg-transparent backdrop-blur-0 top-0 w-full'

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 top-0 z-50 py-4 ${animateClass}`}
    >
      <div className="container relative flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary font-semibold duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {/* Dark Mode */}
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>

          {/* Auth */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="text-muted-foreground hover:text-primary font-semibold duration-300"
            >
              Log in
            </Link>

            <Button asChild>
              <motion.div whileTap={{ scale: 0.8 }}>
                <Link href="/register" className="font-bold">
                  Start Generating
                </Link>
              </motion.div>
            </Button>
          </div>

          {/* Mobile Navigation */}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="lg:hidden" asChild>
              <Button size="icon" variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="grid gap-3">
                  <nav className="flex flex-col overflow-y-auto h-[75vh]">
                    {navLinks.map((link) => (
                      <div key={link.name} className="not-last:border-b">
                        <Link
                          href={link.href}
                          className="block py-4 w-full text-muted-foreground hover:text-primary font-semibold duration-300"
                          onClick={() => setOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
              <SheetFooter>
                <Button variant="outline" asChild>
                  <Link href="/login" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild>
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <Link
                      href="/register"
                      className="font-bold"
                      onClick={() => setOpen(false)}
                    >
                      Start Generating
                    </Link>
                  </motion.div>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
