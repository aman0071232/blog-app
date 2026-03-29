import React from 'react'
import Hero from '../Home/Hero'
import Creator from '../Home/Creator'
import Trending from '../Home/Trending'
import Devotional from '../Home/Devotional'

export default function Home() {
  return (
    <div>
     <Hero/>
     <Trending/>
     <Devotional/>
     <Creator/>
    </div>
  )
}
