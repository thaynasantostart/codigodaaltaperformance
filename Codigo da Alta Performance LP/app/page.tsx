import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { CostOfWaiting } from "@/components/sections/cost-of-waiting"
import { BigIdea } from "@/components/sections/big-idea"
import { WhatIs } from "@/components/sections/what-is"
import { Journey } from "@/components/sections/journey"
import { Access } from "@/components/sections/access"
import { Networking } from "@/components/sections/networking"
import { Guests } from "@/components/sections/guests"
import { Bonus } from "@/components/sections/bonus"
import { Offer } from "@/components/sections/offer"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CostOfWaiting />
        <BigIdea />
        <WhatIs />
        <Journey />
        <Access />
        <Networking />
        <Guests />
        <Bonus />
        <Offer />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
