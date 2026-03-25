'use client'
import Link from 'next/link'
import { Phone, CheckCircle, Calendar, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="hero-section" style={{
      position:'relative', paddingTop:'clamp(80px, 15vw, 160px)', paddingBottom:'clamp(48px, 12vw, 96px)',
      overflow:'hidden', background:'#f8fafc'
    }}>
      {/* Background blobs */}
      <div style={{position:'absolute', top:'-10%', right:'-5%', width:'clamp(300px, 50vw, 600px)', height:'clamp(300px, 50vw, 600px)', borderRadius:'50%', background:'rgba(36,99,235,0.08)', filter:'blur(80px)', pointerEvents:'none'}}/>
      <div style={{position:'absolute', bottom:'10%', right:'15%', width:'clamp(200px, 40vw, 400px)', height:'clamp(200px, 40vw, 400px)', borderRadius:'50%', background:'rgba(20,184,166,0.08)', filter:'blur(60px)', pointerEvents:'none'}}/>

      <div className="hero-grid" style={{
        maxWidth:'1280px', margin:'0 auto', padding:'0 clamp(16px, 5vw, 24px)', 
        display:'grid', 
        gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',
        gap:'clamp(32px, 8vw, 80px)', 
        alignItems:'center'
      }}>

        {/* Left */}
        <div>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            padding:'6px 14px', borderRadius:'9999px',
            background:'rgba(36,99,235,0.08)', border:'1px solid rgba(36,99,235,0.15)',
            color:'#2463eb', fontSize:'clamp(10px, 2vw, 11px)', fontWeight:'700',
            letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'clamp(16px, 4vw, 28px)'
          }}>
            <span style={{width:'6px', height:'6px', borderRadius:'50%', background:'#2463eb', display:'inline-block'}}/>
            Now Accepting Digital Referrals
          </div>

          <h1 style={{
            fontSize:'clamp(28px, 7vw, 68px)', fontWeight:'900',
            lineHeight:'1.05', letterSpacing:'-2px',
            color:'#0f172a', marginBottom:'clamp(16px, 4vw, 24px)'
          }}>
            Precision care<br/>
            for your{' '}
            <span style={{
              background:'linear-gradient(to right, #2463eb, #14b8a6)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
            }}>
              Maxillofacial
            </span>{' '}
            health.
          </h1>

          <p style={{
            fontSize:'clamp(14px, 3vw, 17px)', color:'#64748b', lineHeight:'1.75',
            marginBottom:'clamp(24px, 5vw, 40px)', maxWidth:'480px'
          }}>
            Experience world-class dental implants and reconstructive surgery at Kasturi Nagar, Bangalore. Led by Dr. B Srinivas Rao — certified implantologist trained at Branemark Osseointegration Center, Sweden.
          </p>

          <div style={{display:'flex', gap:'clamp(10px, 3vw, 14px)', flexWrap:'wrap', marginBottom:'clamp(24px, 5vw, 48px)'}}>
            <Link href="/appointment" style={{
              background:'linear-gradient(135deg, #2463eb, #0ea5e9)',
              color:'white', padding:'clamp(12px, 2vw, 15px) clamp(20px, 4vw, 32px)', borderRadius:'12px',
              textDecoration:'none', fontSize:'clamp(13px, 2.5vw, 15px)', fontWeight:'700',
              boxShadow:'0 8px 24px rgba(36,99,235,0.3)',
              transition:'all 0.2s', display:'inline-block'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(36,99,235,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(36,99,235,0.3)' }}
            >
              Start Your Journey
            </Link>
            <a href="tel:+919980477725" style={{
              background:'white',
              border:'1.5px solid #e2e8f0',
              color:'#0f172a', padding:'clamp(12px, 2vw, 15px) clamp(20px, 4vw, 32px)',
              borderRadius:'12px', textDecoration:'none',
              fontSize:'clamp(13px, 2.5vw, 15px)', fontWeight:'700',
              display:'inline-flex', alignItems:'center', gap:'8px',
              boxShadow:'0 2px 8px rgba(0,0,0,0.06)', transition:'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#dbeafe'; e.currentTarget.style.color = '#2463eb' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a' }}
            >
              <Phone size={18} strokeWidth={2.5} />
              +91 99804 77725
            </a>
          </div>

          {/* Stats */}
          <div style={{display:'flex', gap:'clamp(16px, 4vw, 32px)', paddingTop:'clamp(16px, 4vw, 32px)', borderTop:'1px solid #e2e8f0', flexWrap:'wrap'}}>
            {[
              { value:'5,000+', label:'Patients Treated' },
              { value:'8+',     label:'Years Experience' },
              { value: <div style={{display:'flex', alignItems:'center', gap:'4px'}}><span>4.9</span><Star size={16} strokeWidth={2.5} fill="currentColor" /></div>, label:'Google Rating' },
            ].map(stat => (
              <div key={typeof stat.label === 'string' ? stat.label : 'rating'}>
                <div style={{fontSize:'clamp(18px, 4vw, 24px)', fontWeight:'900', color:'#0f172a', letterSpacing:'-1px'}}>{stat.value}</div>
                <div style={{fontSize:'clamp(10px, 2vw, 12px)', color:'#94a3b8', fontWeight:'500', marginTop:'2px'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{position:'relative'}}>

          {/* Main image */}
          <div style={{borderRadius:'28px', overflow:'hidden', boxShadow:'0 40px 80px rgba(36,99,235,0.15)', aspectRatio:'1/1'}}>
            <img
              src="/Dentistry.jpg"
              alt="Maxface Dental Clinic"
              style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s'}}
              onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              onError={e => {
                e.target.src = 'https://images.unsplash.com/photo-1588776814546-1ffedbe47425?w=600&h=600&fit=crop&auto=format'
              }}
            />
          </div>

          {/* Floating card - top right - Hide on mobile */}
          <div style={{
            display: 'none',
            position:'absolute', top:'-20px', right:'-20px',
            background:'rgba(255,255,255,0.92)',
            backdropFilter:'blur(12px)',
            border:'1px solid rgba(255,255,255,0.6)',
            borderRadius:'16px', padding:'16px 20px',
            boxShadow:'0 8px 32px rgba(0,0,0,0.08)',
            maxWidth:'190px',
            '@media (min-width: 768px)': {
              display: 'block'
            }
          }} className="hidden md:block">
            <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'6px'}}>
              <CheckCircle size={32} strokeWidth={2} color="#14b8a6" style={{flexShrink: 0}} />
              <span style={{fontWeight:'800', fontSize:'11px', textTransform:'uppercase', letterSpacing:'0.5px', color:'#0f172a'}}>
                Gold Standard
              </span>
            </div>
            <p style={{fontSize:'11px', color:'#94a3b8', lineHeight:'1.5'}}>
              Accredited Maxillofacial Implant Center — Branemark, Sweden
            </p>
          </div>

          {/* Floating card - bottom left - Hide on mobile */}
          <div style={{
            display: 'none',
            position:'absolute', bottom:'-24px', left:'-24px',
            background:'rgba(255,255,255,0.95)',
            backdropFilter:'blur(12px)',
            border:'1px solid rgba(255,255,255,0.6)',
            borderRadius:'16px', padding:'20px',
            boxShadow:'0 8px 32px rgba(0,0,0,0.08)',
            width:'230px',
            '@media (min-width: 768px)': {
              display: 'block'
            }
          }} className="hidden md:block">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px'}}>
              <span style={{fontSize:'13px', fontWeight:'800', color:'#0f172a'}}>Next Availability</span>
              <span style={{
                background:'rgba(36,99,235,0.08)', color:'#2463eb',
                padding:'3px 8px', borderRadius:'6px',
                fontSize:'10px', fontWeight:'700', letterSpacing:'0.5px'
              }}>
                LIVE
              </span>
            </div>
            <div style={{
              background:'#f8fafc', borderRadius:'10px', padding:'10px',
              marginBottom:'10px', display:'flex', alignItems:'center', gap:'10px',
              border:'1px solid #f1f5f9'
            }}>
              <Calendar size={20} strokeWidth={2} color="#2463eb" style={{flexShrink: 0}} />
              <div>
                <div style={{fontSize:'12px', fontWeight:'700', color:'#0f172a'}}>Mon – Sat</div>
                <div style={{fontSize:'11px', color:'#94a3b8'}}>9:00 AM – 8:00 PM</div>
              </div>
            </div>
            <Link href="/appointment" style={{
              display:'block', textAlign:'center',
              background:'linear-gradient(135deg, #0f172a, #1e3a8a)',
              color:'white', padding:'9px', borderRadius:'8px',
              textDecoration:'none', fontSize:'12px', fontWeight:'700',
              letterSpacing:'0.3px'
            }}>
              Claim Slot →
            </Link>
          </div>

          {/* Floating card - middle right - Hide on mobile */}
          <div style={{
            display: 'none',
            position:'absolute', top:'45%', right:'-32px',
            background:'linear-gradient(135deg, #2463eb, #0ea5e9)',
            borderRadius:'14px', padding:'14px 18px',
            boxShadow:'0 8px 24px rgba(36,99,235,0.3)',
            color:'white',
            '@media (min-width: 768px)': {
              display: 'block'
            }
          }} className="hidden md:block">
            <div style={{display:'flex', alignItems:'center', gap:'6px', marginBottom:'4px'}}>
              <span style={{fontSize:'22px', fontWeight:'900', letterSpacing:'-1px'}}>4.9</span>
              <Star size={18} strokeWidth={2.5} fill="currentColor" />
            </div>
            <div style={{fontSize:'11px', opacity:0.85}}>Google Rating</div>
            <div style={{fontSize:'10px', opacity:0.7}}>500+ reviews</div>
          </div>

        </div>
      </div>
    </section>
  )
}
