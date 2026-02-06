import Hero from '@/components/Hero'
import GenericCarousel from '@/components/ui/GenericCarousel'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Playground from '@/components/Playground'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

import { posts } from '@/constants/posts'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <GenericCarousel items={posts} />
        <Features />
        <HowItWorks />
        <Playground />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
