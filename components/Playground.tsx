'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardAction,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from './ui/textarea'
import ShadowOverlay from './ui/shadowOverlay'
import { Skeleton } from './ui/skeleton'
import { Badge } from './ui/badge'
import { motion } from 'motion/react'

const ResultCard = () => {
  return (
    <Card className="aether-float aether-glow relative w-[90%] lg:w-1/2 z-41">
      <CardHeader className="flex items-center gap-4">
        <Skeleton className="w-12 h-12 rounded-full box-gradient aether-gradient" />

        <div className="space-y-2">
          <Skeleton className="w-30 h-4" />
          <Skeleton className="w-12 h-3" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4 " />
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Skeleton className="w-4 h-4 rounded-[5px]" />
          <Skeleton className="w-4 h-4 rounded-[5px]" />
        </div>
        <Badge className="bg-primary/20 text-foreground font-semibold">
          OPTIMIZED
        </Badge>
      </CardFooter>
    </Card>
  )
}

export default function Playground() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('Twitter')

  const platforms = ['Twitter', 'LinkedIn', 'Instagram', 'Blog']

  return (
    <motion.section
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay: 0.3 }}
      id="playground"
      className="container py-30"
    >
      <Card className="flex flex-col lg:flex-row justify-between gap-4 px-5">
        <div className="flex-1">
          <CardHeader>
            <CardTitle className="mb-4 text-lg font-semibold">
              Interactive Playground
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-8">
              <div>
                <Label className="mb-2 font-semibold text-muted-foreground/60 text-sm">
                  YOUR VISION
                </Label>
                <Textarea
                  className="min-h-25 placeholder:text-muted-foreground/50 w-full lg:max-w-112.5"
                  placeholder="Write a thought-provoking post about the future of of remote work..."
                />
              </div>
              <div>
                <Label className="mb-2 font-semibold text-muted-foreground/60 text-sm">
                  PLATFORM
                </Label>
                <div className="grid grid-cols-2 gap-2 ">
                  {platforms.map((platform) => (
                    <Button
                      key={platform}
                      type="button"
                      variant={
                        platform === selectedPlatform ? 'default' : 'outline'
                      }
                      className="cursor-pointer"
                      onClick={() => setSelectedPlatform(platform)}
                    >
                      {platform}
                    </Button>
                  ))}
                </div>
              </div>
              <CardAction className="text-lg font-semibold w-full">
                <Button
                  type="submit"
                  className="py-8 rounded-2xl cursor-pointer w-full"
                >
                  Generate Sample
                </Button>
              </CardAction>
            </form>
          </CardContent>
        </div>
        <div className="relative flex items-center justify-center min-h-125 flex-2 bg-background backdrop-blur-2xl rounded-2xl overflow-hidden">
          <ShadowOverlay color="bg-accent" zIndex="z-40" />
          <ResultCard />
        </div>
      </Card>
    </motion.section>
  )
}
