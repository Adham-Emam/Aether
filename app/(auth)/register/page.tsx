import { Metadata } from 'next'
import Link from 'next/link'

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import ShadowOverlay from '@/components/ui/shadowOverlay'

import { SlEnvolope } from 'react-icons/sl'
import { IoLockClosed } from 'react-icons/io5'
import { FaGoogle, FaGithub } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Register | Perflecta',
}

export default function RegisterPage() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center pt-20 px-4">
      <ShadowOverlay
        className="top-0 left-0"
        size="w-75 h-100"
        opacity="opacity-10"
      />
      <ShadowOverlay
        className="bottom-0 right-0"
        size="w-75 h-100"
        color="bg-accent"
        opacity="opacity-10"
      />

      <Card className="w-full max-w-md lg:max-w-2xl py-8 bg-card/50 backdrop-blur-2xl">
        <CardHeader>
          <CardTitle className="text-5xl font-extrabold">
            Welcome to <br />
            <span className="text-primary text-gradient perflecta-gradient">
              the Machine.
            </span>
          </CardTitle>
          <CardDescription className="max-w-75">
            Connect your identity to begin orchestrating content with precision.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full flex flex-col justify-center gap-4 mt-4">
            <Button variant="outline" className="font-semibold py-6">
              <FaGoogle className="text-2xl" />
              Continue with Google
            </Button>
            <Button variant="outline" className="font-semibold py-6">
              <FaGithub className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>
          </div>
          <div className="relative my-12">
            <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-border dark:bg-[#302d59] p-2 rounded-md font-bold text-muted-foreground/60 text-sm lg:text-md">
              OR USING EMAIL
            </div>
            <Separator />
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border px-3 py-2 rounded-lg bg-background/50">
              <SlEnvolope className="text-muted-foreground/50" />
              <Input
                type="text"
                className="placeholder:text-muted-foreground/60"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center gap-4 border px-3 py-2 rounded-lg bg-background/50">
              <IoLockClosed className="text-muted-foreground/50" />
              <Input
                type="password"
                className="placeholder:text-muted-foreground/60"
                placeholder="Password"
              />
            </div>
            <Button>Start Generating</Button>
            <p className="w-fit mx-auto text-xs text-muted-foreground/70 mt-2">
              Already inside the system?{' '}
              <Link
                href="/login"
                className="text-primary font-semibold hover:underline underline-offset-4"
              >
                Log in instead
              </Link>
            </p>
          </form>
        </CardContent>
        <Separator />
        <CardFooter>
          <p className="w-fit mx-auto text-xs text-muted-foreground/70 mt-2 italic">
            By signing up, you agree to our{' '}
            <span className="text-primary font-semibold">Terms of Service</span>{' '}
            and{' '}
            <span className="text-primary font-semibold">Privacy Policy</span>.
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}
