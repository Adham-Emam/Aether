'use client'

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from './ui/card'
import { motion } from 'motion/react'

import { Megaphone, Pencil, Clock } from 'lucide-react'
import React from 'react'

interface FeatureProps {
  icon: React.ElementType
  color: string
  styles: string
  title: string
  description: string
}

const features = [
  {
    icon: Megaphone,
    color: 'hover:bg-[#6467f0]/10',
    styles:
      'bg-[#6467f0]/20 text-[#6467f0] group-hover:bg-[#6467f0] group-hover:text-white',
    title: 'Multi-Platform Mastery',
    description:
      'One prompt, infinite variations. Optimized for the specific algorithms of X, LinkedIn, Instagram, and more.',
  },
  {
    icon: Pencil,
    color: 'hover:bg-[#09b5d3]/10',
    styles:
      'bg-[#09b5d3]/20 text-[#09b5d3] group-hover:bg-[#09b5d3] group-hover:text-white',
    title: 'Surgical Editing',
    description:
      "Don't like a sentence? Regenerate just that part. Our AI respects your style while suggesting enhancements.",
  },
  {
    icon: Clock,
    color: 'hover:bg-[#a955f6]/10',
    styles:
      'bg-[#a955f6]/20 text-[#a955f6] group-hover:bg-[#a955f6] group-hover:text-white',
    title: 'Deep History',
    description:
      'Never lose a brilliant draft. Robust version control and a searchable library keep your workflow organized.',
  },
]

const FeatureCard = (feature: FeatureProps) => {
  return (
    <Card className={`group bg-card/50 duration-300 ${feature.color}`}>
      <CardHeader>
        <feature.icon
          className={`${feature.styles} w-12 h-12 p-3 mb-4 rounded-xl`}
        />
        <CardTitle className="font-bold text-md lg:text-xl">
          {feature.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-card-foreground/70">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="container flex items-center justify-center flex-wrap gap-4 py-30"
    >
      {features.map((feature, index) => (
        <motion.div
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ delay: index * 0.2 }}
          className="w-full md:w-1/3 lg:w-1/4"
          key={index}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </section>
  )
}
