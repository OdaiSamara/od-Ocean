import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { navlinks } from '../Constants/Nav-links'
import Navmobile from './Navmobile'


export const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30'>
      <div className='relative container py-6 flex justify-between transition-all'>
        <Logo />
        {/* desktop navigation */}
        <nav className='hidden md:flex gap-8 capitalize'>
          {navlinks.map((links, index) => (
            <Link key={index} href={`#${links}`} className='text-sm font-semibold tracking-wide text-slate-200'>{links}</Link>
          ))}

        </nav>
        {/* mobile navigation */}

        <Navmobile />
      </div>
    </header>
  )
}
