'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { CreditCard, Sparkles, Zap, Crown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { delay } from 'motion'

const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    interval: 'forever',
    description: 'Try Aether and feel the flow.',
    icon: Sparkles,
    highlighted: false,
    features: [
      '10 content generations',
      'Up to 2 platforms',
      'Basic formatting',
      'Preview before posting',
    ],
    cta: 'Get started',
    footnote: 'No credit card required',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$19',
    interval: 'month',
    description: 'Everything you need to publish consistently.',
    icon: Zap,
    highlighted: true,
    features: [
      'Unlimited generations',
      'All platforms supported',
      'Smart tone optimization',
      'Saved content library',
      'Filter & reuse posts',
    ],
    cta: 'Start generating',
    footnote: 'Most popular for solo creators',
  },
  {
    id: 'studio',
    name: 'Studio',
    price: '$39',
    interval: 'month',
    description: 'For creators, teams, and serious output.',
    icon: Crown,
    highlighted: false,
    features: [
      'Everything in Pro',
      'Team access',
      'Advanced formatting control',
      'Priority generation speed',
      'Early access to new features',
    ],
    cta: 'Upgrade to Studio',
    footnote: 'Built for scale',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-background">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Simple pricing</h2>
          <p className="text-muted-foreground">
            No credits. No hidden limits. Just create.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              Cancel anytime
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              No usage tricks
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              Built for creators
            </li>
          </ul>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon

            return (
              <motion.div
                initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ delay: index * 0.2 }}
                key={plan.id}
              >
                <Card
                  className={cn(
                    'relative flex flex-col',
                    plan.highlighted && 'border-primary shadow-lg scale-[1.02]',
                  )}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most popular
                    </div>
                  )}

                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-muted">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {plan.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-sm text-muted-foreground mb-1">
                        / {plan.interval}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3 text-sm">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-3">
                    <Button
                      className="w-full"
                      variant={plan.highlighted ? 'default' : 'outline'}
                      asChild
                    >
                      <Link href="/">{plan.cta}</Link>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      {plan.footnote}
                    </p>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
