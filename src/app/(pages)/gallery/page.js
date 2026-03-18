'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const categories = ['All Cases', 'Implants', 'Orthodontics', 'Whitening', 'Smile Makeover']

const galleryItems = [
  { id:1, category:'Implants',      image:'/gallery/blog-implants.jpg',    label:'Full Arch Implants',       desc:'Complete aesthetic overhaul using the latest titanium implant technology.', tag:'COSMETIC RECONSTRUCTION', case:'Case #4021', time:'2 Months',  badge:'Financing Available' },
  { id:2, category:'Orthodontics',  image:'/gallery/aligners.png',   label:'Advanced Invisalign',      desc:'Corrected severe spacing and bite issues without traditional metal braces.', tag:'ORTHODONTICS', case:'Case #3988', time:'9 Months',  badge:'Platinum Provider' },
  { id:3, category:'Smile Makeover',image:'/gallery/smile.webp',      label:'Full Mouth Implants',      desc:'Life-changing full mouth restoration using the latest titanium implant technology.', tag:'RESTORATIVE', case:'Case #5102', time:'6 Months',  badge:'3D Guided Surgery' },
  { id:4, category:'Whitening',     image:'/gallery/whitening.avif', label:'Laser Teeth Whitening',    desc:'Professional medical-grade whitening for a 10-shade improvement in a single session.', tag:'COSMETIC', case:'Case #2211', time:'90 Mins',   badge:'Pain Free' },
  { id:5, category:'Smile Makeover',image:'/gallery/veneers.webp',    label:'Composite Bonding',        desc:'Restored a chipped central incisor with multi-layered composite for a natural look.', tag:'RESTORATION', case:'Case #1043', time:'45 Mins',   badge:'Perfect Match' },
  { id:6, category:'Implants',      image:'/gallery/whitening2.jpg',   label:'Total Smile Makeover',     desc:'A combination of implants, veneers, and tissue recontouring for a life-changing smile.', tag:'FULL RECONSTRUCTION', case:'Case #7712', time:'12 Months', badge:'Multidisciplinary' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All Cases')

  const filtered = activeCategory === 'All Cases'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={{paddingTop:'140px', paddingBottom:'60px', paddingLeft:'24px', paddingRight:'24px', background:'#f8fafc', textAlign:'center'}}>
        <div style={{display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(20,184,166,0.08)', border:'1px solid rgba(20,184,166,0.2)', color:'#14b8a6', padding:'5px 14px', borderRadius:'9999px', fontSize:'11px', fontWeight:'700', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'20px'}}>
          ✦ Proven Results
        </div>
        <h1 style={{fontSize:'clamp(36px, 5vw, 64px)', fontWeight:'900', color:'#0f172a', letterSpacing:'-2px', marginBottom:'20px'}}>
          Smile Gallery{' '}
          <span style={{background:'linear-gradient(to right, #2463eb, #14b8a6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
            Transformations
          </span>
        </h1>
        <p style={{fontSize:'17px', color:'#64748b', maxWidth:'580px', margin:'0 auto', lineHeight:'1.7'}}>
          Discover the life-changing results of our premium dental procedures. From subtle enhancements to full restorative journeys, see how we rebuild confidence.
        </p>
      </section>

      {/* Filter */}
      <section style={{padding:'0 24px 32px', background:'#f8fafc'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto', display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center'}}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding:'9px 22px', borderRadius:'9999px', border:'1.5px solid',
              borderColor: activeCategory === cat ? '#2463eb' : '#e2e8f0',
              background: activeCategory === cat ? '#2463eb' : 'white',
              color: activeCategory === cat ? 'white' : '#64748b',
              fontWeight:'600', fontSize:'13px', cursor:'pointer', transition:'all 0.2s'
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{padding:'20px 24px 96px', background:'white'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(360px, 1fr))', gap:'24px'}}>
          {filtered.map(item => (
            <div key={item.id} style={{
              background:'white', borderRadius:'20px', overflow:'hidden',
              border:'1px solid #f1f5f9', transition:'all 0.3s',
              boxShadow:'0 2px 8px rgba(0,0,0,0.04)'
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 48px rgba(36,99,235,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Image */}
              <div style={{position:'relative', height:'220px', overflow:'hidden', background:'#f1f5f9'}}>
                <img
                  src={item.image}
                  alt={item.label}
                  style={{width:'100%', height:'100%', objectFit:'cover'}}
                  onError={e => { e.target.style.display='none' }}
                />
                <div style={{position:'absolute', top:'12px', left:'12px', background:'rgba(15,23,42,0.75)', color:'white', padding:'4px 10px', borderRadius:'6px', fontSize:'10px', fontWeight:'700', letterSpacing:'0.5px'}}>
                  {item.tag}
                </div>
                <div style={{position:'absolute', top:'12px', right:'12px', background:'rgba(255,255,255,0.9)', color:'#64748b', padding:'4px 10px', borderRadius:'6px', fontSize:'10px', fontWeight:'600'}}>
                  {item.case}
                </div>
              </div>

              {/* Content */}
              <div style={{padding:'24px'}}>
                <h3 style={{fontSize:'17px', fontWeight:'700', color:'#0f172a', marginBottom:'8px', letterSpacing:'-0.3px'}}>
                  {item.label}
                </h3>
                <p style={{fontSize:'13px', color:'#64748b', lineHeight:'1.6', marginBottom:'16px'}}>
                  {item.desc}
                </p>
                <div style={{display:'flex', gap:'10px'}}>
                  <span style={{display:'flex', alignItems:'center', gap:'5px', fontSize:'12px', color:'#64748b', background:'#f8fafc', padding:'5px 10px', borderRadius:'6px'}}>
                    ⏱ {item.time}
                  </span>
                  <span style={{display:'flex', alignItems:'center', gap:'5px', fontSize:'12px', color:'#2463eb', background:'rgba(36,99,235,0.06)', padding:'5px 10px', borderRadius:'6px', fontWeight:'600'}}>
                    ✓ {item.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        margin:'0 24px 96px', borderRadius:'24px',
        background:'linear-gradient(135deg, #1e3a8a, #2463eb)',
        padding:'64px 48px', textAlign:'center'
      }}>
        <h2 style={{fontSize:'clamp(28px, 4vw, 44px)', fontWeight:'900', color:'white', marginBottom:'16px', letterSpacing:'-1px'}}>
          Ready for your own transformation?
        </h2>
        <p style={{fontSize:'16px', color:'rgba(255,255,255,0.8)', marginBottom:'36px', maxWidth:'500px', margin:'0 auto 36px', lineHeight:'1.7'}}>
          Schedule a comprehensive consultation today. Our specialists will create a customized treatment plan tailored to your smile goals.
        </p>
        <div style={{display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap'}}>
          <Link href="/appointment" style={{
            background:'white', color:'#2463eb',
            padding:'14px 32px', borderRadius:'10px',
            textDecoration:'none', fontWeight:'700', fontSize:'15px'
          }}>
            📅 Book Your Consultation
          </Link>
          <Link href="/contact" style={{
            background:'rgba(255,255,255,0.1)', color:'white',
            padding:'14px 32px', borderRadius:'10px',
            textDecoration:'none', fontWeight:'600', fontSize:'15px',
            border:'1px solid rgba(255,255,255,0.2)'
          }}>
            View More Cases
          </Link>
        </div>
        <p style={{color:'rgba(255,255,255,0.6)', fontSize:'13px', marginTop:'20px'}}>
          Joined by 2,000+ happy patients
        </p>
      </section>

      <Footer />
    </div>
  )
}