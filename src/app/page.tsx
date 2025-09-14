import HomeHero from '@/components/sections/HomeHero'
import HomeFeatures from '@/components/sections/HomeFeatures'
import HomeProductgrid from '@/components/sections/HomeProductgrid'
import HomeCta from '@/components/sections/HomeCta'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeProductgrid />
      <HomeCta />
    </>
  )
}