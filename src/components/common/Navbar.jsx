'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { name:'Services', href:'/treatments' },
  { name:'About', href:'/about' },
  { name:'Specialists', href:'/doctor' },
  { name:'Gallery', href:'/gallery' },
  { name:'Blog', href:'/blog' },
  { name:'Contact', href:'/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[1280px] z-50">
      <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all 
        ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>

        {/* Logo */}
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className="h-12 cursor-pointer" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href}
              className="text-sm font-semibold px-4 py-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition">
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/portal" className="text-blue-600 font-semibold text-sm px-4 py-2 rounded-full hover:bg-blue-50">
            Log In
          </Link>
          <Link href="/appointment" className="bg-blue-600 text-white text-sm font-bold px-5 py-2 rounded-full shadow-md hover:bg-blue-800">
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-3 glass rounded-xl p-4 flex flex-col gap-3 md:hidden">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-slate-700">
              {link.name}
            </Link>
          ))}

          <Link href="/portal" className="text-blue-600 font-semibold">
            Log In
          </Link>

          <Link href="/appointment" className="bg-blue-600 text-white text-center py-2 rounded-lg font-bold">
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  )
}