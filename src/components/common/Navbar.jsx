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
        boxShadow: scrolled ? '0 8px 32px rgba(36,99,235,0.08)' : '0 4px 16px rgba(0,0,0,0.06)',
        flexWrap: 'wrap'
      }}>
        {/* Logo */}
        <Link href="/">
          <img 
            src="/logo.svg" 
            alt="MaxFace Logo"
            style={{
              height: 'clamp(40px, 8vw, 55px)',
              width:'auto',
              objectFit:'contain',
              borderRadius:'6px',
              cursor:'pointer'
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{marginLeft: 'auto'}}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* CTA - Desktop */}
        <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
          <Link href="/portal" style={{
            color:'#2463eb', fontWeight:'700', fontSize:'clamp(11px, 2vw, 13px)',
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
            textDecoration:'none', fontSize:'clamp(11px, 2vw, 13px)', fontWeight:'700',
            boxShadow:'0 4px 14px rgba(36,99,235,0.3)',
            transition:'all 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1e3a8a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2463eb'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu" style={{width: '100%', position: 'absolute', top: '100%', left: 0, right: 0, borderRadius: '0 0 12px 12px', marginTop: '8px'}}>
            {navLinks.map(link => (
              <Link 
                key={link.name}
                href={link.href} 
                className="mobile-menu-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr style={{margin: '8px 0', border: 'none', borderTop: '1px solid #e2e8f0'}} />
            <Link href="/portal" className="mobile-menu-link">
              Log In
            </Link>
            <Link href="/appointment" className="mobile-menu-link" style={{borderTop: '1px solid #e2e8f0'}}>
              📞 Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}