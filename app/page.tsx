import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GenericCarousel from '@/components/ui/GenericCarousel'

import { posts } from '@/constants/posts'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GenericCarousel items={posts} />
      </main>
    </>
  )
}
