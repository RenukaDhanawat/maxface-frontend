'use client'
import Link from 'next/link'
import { Cog, FlaskConical, Hospital, Tooth, Smile, Mask } from 'lucide-react'

const iconComponents = {
  'dental-implants': Cog,
  'endodontics': FlaskConical,
  'surgery': Hospital,
  'prosthodontics': Tooth,
  'orthodontics': Smile,
  'maxillofacial-prosthodontics': Mask
}

const services = [
  { icon:'dental-implants',    title:'Dental Implants',           desc:'Advanced Zirconia and Titanium solutions for permanent restoration with 3D-guided surgical placement.', slug:'dental-implants', color:'rgba(20,184,166,0.1)', iconColor:'#14b8a6' },
  { icon:'endodontics', title:'Endodontics',                desc:'Painless root canal treatments using rotary endodontics with single-sitting procedures for rapid relief.', slug:'endodontics', color:'rgba(36,99,235,0.1)', iconColor:'#2463eb' },
  { icon:'surgery',       title:'Oral & Maxillofacial Surgery', desc:'Orthognathic corrective procedures to improve breathing, chewing, and facial alignment using virtual planning.', slug:'surgery', color:'rgba(20,184,166,0.1)', iconColor:'#14b8a6' },
  { icon:'prosthodontics', title:'Prosthodontics', desc:'Complete dentures, crowns, bridges and advanced prosthetic solutions with precision craftsmanship.', slug:'prosthodontics', color:'rgba(36,99,235,0.1)', iconColor:'#2463eb' },
  { icon:'orthodontics', title:'Orthodontics',               desc:'Metal braces, ceramic braces and invisible aligners for perfectly aligned teeth and confident smiles.', slug:'orthodontics', color:'rgba(20,184,166,0.1)', iconColor:'#14b8a6' },
  { icon:'maxillofacial-prosthodontics', title:'Maxillofacial Prosthodontics', desc:'Specialized anaplastology and facial prosthetics — a unique clinical expertise at Maxface Clinic.', slug:'maxillofacial-prosthodontics', color:'rgba(36,99,235,0.1)', iconColor:'#2463eb' },
]

export default function ServicesSection() {
  return (
    <section style={{padding:'clamp(48px, 10vw, 96px) 16px', background:'rgba(248,250,252,0.5)'}}>
      <div style={{maxWidth:'1280px', margin:'0 auto'}}>

        {/* Header */}
        <div style={{textAlign:'center', marginBottom:'clamp(48px, 10vw, 72px)'}}>
          <p style={{fontSize:'clamp(10px, 2vw, 11px)', fontWeight:'700', color:'#2463eb', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'16px'}}>
            OUR EXPERTISE
          </p>
          <h2 style={{fontSize:'clamp(26px, 6vw, 48px)', fontWeight:'900', color:'#0f172a', marginBottom:'16px', letterSpacing:'-1.5px'}}>
            Clinical excellence in every procedure.
          </h2>
          <p style={{fontSize:'clamp(14px, 3vw, 16px)', color:'#64748b', maxWidth:'540px', margin:'0 auto', lineHeight:'1.7'}}>
            We blend surgical mastery with artistic precision to restore functionality and aesthetic balance to your face and smile.
          </p>
        </div>

        {/* Grid */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'clamp(16px, 3vw, 24px)'}}>
          {services.map(service => (
            <div key={service.slug} style={{
              background:'white', padding:'clamp(24px, 5vw, 40px)', borderRadius:'24px',
              border:'1px solid #f1f5f9',
              boxShadow:'0 2px 8px rgba(0,0,0,0.04)',
              transition:'all 0.4s ease'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(36,99,235,0.08)'
                e.currentTarget.style.transform = 'translateY(-8px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width:'60px', height:'60px', borderRadius:'16px',
                background: service.color,
                display:'flex', alignItems:'center', justifyContent:'center',
                marginBottom:'28px', transition:'transform 0.3s'
              }}>
                {(() => {
                  const IconComponent = iconComponents[service.slug]
                  return <IconComponent size={32} strokeWidth={2} color={service.iconColor} />
                })()}
              </div>
              <h4 style={{fontSize:'clamp(16px, 3vw, 18px)', fontWeight:'700', color:'#0f172a', marginBottom:'12px', letterSpacing:'-0.3px'}}>
                {service.title}
              </h4>
              <p style={{fontSize:'clamp(13px, 2vw, 14px)', color:'#64748b', lineHeight:'1.7', marginBottom:'28px'}}>
                {service.desc}
              </p>
              <Link href={`/treatments/${service.slug}`} style={{
                display:'inline-flex', alignItems:'center', gap:'6px',
                color:'#2463eb', fontWeight:'700', fontSize:'clamp(13px, 2vw, 14px)', textDecoration:'none'
              }}>
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* View All */}
        <div style={{textAlign:'center', marginTop:'clamp(32px, 8vw, 48px)'}}>
          <Link href="/treatments" style={{
            display:'inline-block',
            border:'1.5px solid #DBEAFE', color:'#2463eb',
            padding:'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 32px)', borderRadius:'10px',
            textDecoration:'none', fontWeight:'700', fontSize:'clamp(13px, 2vw, 14px)',
            background:'white'
          }}>
            View All Treatments →
          </Link>
        </div>
      </div>
    </section>
  )
}