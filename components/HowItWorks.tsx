'use client'

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from './ui/card'
import { Separator } from './ui/separator'
import { motion } from 'motion/react'
import { Layers } from 'lucide-react'

interface StepProps {
  id: number
  title: string
  description: string
  microHint: string
}

export const howItWorksSteps = [
  {
    id: 1,
    title: 'Generate once',
    description:
      'Write your idea once. Aether instantly transforms it into platform-optimized content for Twitter, LinkedIn, Instagram, Email, and more.',
    microHint: 'No prompts. No formatting headaches.',
  },
  {
    id: 2,
    title: 'Preview everywhere',
    description:
      'See exactly how your content looks on every platform — tone, length, emojis, spacing — before you post.',
    microHint: 'What you see is what you publish.',
  },
  {
    id: 3,
    title: 'Save & reuse',
    description:
      'Every generated post is saved automatically. Reuse, remix, or filter past content by platform, date, or campaign.',
    microHint: 'Your personal content library, always growing.',
  },
  {
    id: 4,
    title: 'Ship consistently',
    description:
      'Consistency beats inspiration. Aether helps you stay visible without burning out or repeating yourself.',
    microHint: 'Creators who show up win.',
  },
]

const Step = (step: StepProps) => {
  return (
    <Card className="bg-card">
      <CardHeader>
        <span className="mb-5 font-semibold text-3xl text-white bg-primary rounded-lg w-10 h-10 flex items-center justify-center">
          {step.id}
        </span>
        <CardTitle className="font-semibold">{step.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground mt-1">
          {step.description}
        </CardDescription>
      </CardContent>
      <Separator />
      <CardFooter>
        <p className="text-xs text-muted-foreground/70 mt-2 italic">
          {step.microHint}
        </p>
      </CardFooter>
    </Card>
  )
}

export default function HowItWorks() {
  return (
    <section className="container pt-15 pb-30 flex items-center justify-center gap-8">
      <motion.div
        initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.3 }}
        className="hidden lg:block flex-1"
      >
        <Layers
          width={400}
          height={400}
          className="bg-primary/10 hover:bg-primary/50 p-25 rounded-3xl"
        />
      </motion.div>
      <div className="flex-2">
        <h2 className="section-title text-center lg:text-left">
          How <span>Aether</span> Works
        </h2>
        <p className="text-center lg:text-left mx-auto lg:mx-0">
          Create platform-ready content in seconds — without switching tools,
          tabs, or brain modes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ delay: index * 0.2 }}
              key={step.id}
            >
              <Step {...step} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
