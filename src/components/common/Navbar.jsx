'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name:'Services',    href:'/treatments' },
  { name:'About',       href:'/about' },
  { name:'Specialists', href:'/doctor' },
  { name:'Gallery',     href:'/gallery' },
  { name:'Blog',        href:'/blog' },
  { name:'Contact',     href:'/contact' },
]

export default function Navbar() {
  const pathname = usePathname() || '/' 
  const [scrolled, setScrolled] = useState(false)
  const [isOpen,   setIsOpen]   = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when scrolling up or near top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowNavbar(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide navbar when scrolling down
        setShowNavbar(false)
      }
      
      setLastScrollY(currentScrollY)
      setScrolled(currentScrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav style={{
      position:'fixed', top:0, left:'50%',
      transform:`translateX(-50%) translateY(${showNavbar ? '0' : '-120px'})`,
      width:'90%',
      maxWidth:'1280px', zIndex:50,
      transition:'transform 0.3s ease-in-out',
      marginTop:'20px'
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
        <div className="nav-links" style={{ display:'flex', alignItems:'center', gap:'1.25rem' }}>
          {navLinks.map(link => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link key={link.name} href={link.href}
                className={`nav-link${isActive ? ' active' : ''}`}
                style={{ color:'#0f172a', fontWeight:600, textDecoration:'none', fontSize:'clamp(14px, 1.2vw, 16px)', padding:'8px 4px' }}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button - with lucide-react icon */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          style={{
          marginLeft: 'auto',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0f172a',
          transition: 'transform 0.3s ease'
      }}
>
          {isOpen ? (
            <X size={24} strokeWidth={2.5} />
          ) : (
            <Menu size={24} strokeWidth={2.5} />
          )}
        </button>

        {/* CTA - Desktop */}
        <div className="desktop-cta" style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
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
          <div className="mobile-menu" style={{
            width: '100%', 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            right: 0, 
            borderRadius: '0 0 12px 12px', 
            marginTop: '8px',
            animation: 'slideDown 0.3s ease-in-out',
            zIndex: 40
          }}>
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
              Book Consultation
            </Link>
          </div>
        )}
      </div>
      
      <style>{`
        .nav-links { display: flex; }
        .desktop-cta { display: flex; }
        .mobile-menu-btn { display: none; }

        .nav-link {
          color: #0f172a;
          font-size: clamp(14px, 1.2vw, 16px);
          font-weight: 700;
          text-decoration: none;
          padding: 8px 4px;
          position: relative;
          transition: color 0.2s ease-out;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: #2463eb;
          transition: width 0.25s ease;
          border-radius: 2px;
        }

        .nav-link:hover {
          color: #1d4ed8;
        }

        .nav-link.active {
          color: #0b61d9;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .desktop-cta .nav-link {
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .desktop-cta { display: none; }
          .mobile-menu-btn { display: flex; }
          .mobile-menu { width: calc(100% - 30px); margin: 8px auto 0; border-radius: 0 0 12px 12px; }
          .mobile-menu-link { display: block; padding: 11px 16px; color: #0f172a; text-decoration: none; font-weight: 600; }
          .mobile-menu-link:hover { background: rgba(36,99,235,0.06); }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}