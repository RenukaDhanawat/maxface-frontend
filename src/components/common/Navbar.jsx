'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { name:'Services',    href:'/treatments' },
  { name:'About',       href:'/about' },
  { name:'Specialists', href:'/doctor' },
  { name:'Gallery',     href:'/gallery' },
  { name:'Blog',        href:'/blog' },
  { name:'Contact',     href:'/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen,   setIsOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position:'fixed', top:'20px', left:'50%',
      transform:'translateX(-50%)', width:'90%',
      maxWidth:'1280px', zIndex:50
    }}>
      <div style={{
        background:'rgba(255,255,255,0.75)',
        backdropFilter:'blur(12px)',
        WebkitBackdropFilter:'blur(12px)',
        border:'1px solid rgba(255,255,255,0.3)',
        borderRadius:'9999px',
        padding:'10px 24px',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        boxShadow: scrolled ? '0 8px 32px rgba(36,99,235,0.08)' : '0 4px 16px rgba(0,0,0,0.06)'
      }}>
{/* Logo */}
<Link href="/" style={{textDecoration:'none', display:'flex', alignItems:'center', gap:'10px'}}>
  <div style={{
    width:'38px', height:'38px',
    background:'linear-gradient(135deg, #2463eb, #0ea5e9)',
    borderRadius:'10px',
    display:'flex', alignItems:'center', justifyContent:'center',
    fontSize:'20px',
    boxShadow:'0 4px 12px rgba(36,99,235,0.3)'
  }}>
    🦷
  </div>
  <div>
    <div style={{fontSize:'18px', fontWeight:'900', letterSpacing:'-0.5px', lineHeight:'1.1'}}>
      <span style={{color:'#2463eb'}}>MAX</span>
      <span style={{color:'#0f172a'}}>FACE</span>
    </div>
    <div style={{fontSize:'9px', color:'#94a3b8', letterSpacing:'1.5px', textTransform:'uppercase', lineHeight:'1'}}>
      Dental & Implant Clinic
    </div>
  </div>
</Link>

        {/* Desktop Links */}
        <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} style={{
              textDecoration:'none', color:'#475569', fontSize:'13px',
              fontWeight:'600', padding:'7px 14px', borderRadius:'9999px',
              transition:'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#2463eb'; e.currentTarget.style.background = 'rgba(36,99,235,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'transparent' }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
          <Link href="/portal" style={{
            color:'#2463eb', fontWeight:'700', fontSize:'13px',
            padding:'7px 16px', borderRadius:'9999px',
            textDecoration:'none', transition:'all 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(36,99,235,0.06)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Log In
          </Link>
          <Link href="/appointment" style={{
            background:'#2463eb', color:'white',
            padding:'9px 22px', borderRadius:'9999px',
            textDecoration:'none', fontSize:'13px', fontWeight:'700',
            boxShadow:'0 4px 14px rgba(36,99,235,0.3)',
            transition:'all 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1e3a8a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2463eb'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </nav>
  )
}