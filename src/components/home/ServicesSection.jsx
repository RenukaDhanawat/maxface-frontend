'use client'
import Link from 'next/link'

const services = [
  { icon:'biotech',    title:'Dental Implants',           desc:'Advanced Zirconia and Titanium solutions for permanent restoration with 3D-guided surgical placement.', slug:'dental-implants', color:'rgba(20,184,166,0.1)', iconColor:'#14b8a6' },
  { icon:'psychology', title:'Endodontics',                desc:'Painless root canal treatments using rotary endodontics with single-sitting procedures for rapid relief.', slug:'endodontics', color:'rgba(36,99,235,0.1)', iconColor:'#2463eb' },
  { icon:'face',       title:'Oral & Maxillofacial Surgery', desc:'Orthognathic corrective procedures to improve breathing, chewing, and facial alignment using virtual planning.', slug:'surgery', color:'rgba(20,184,166,0.1)', iconColor:'#14b8a6' },
  { icon:'volunteer_activism', title:'Prosthodontics', desc:'Complete dentures, crowns, bridges and advanced prosthetic solutions with precision craftsmanship.', slug:'prosthodontics', color:'rgba(36,99,235,0.1)', iconColor:'#2463eb' },
  { icon:'straighten', title:'Orthodontics',               desc:'Metal braces, ceramic braces and invisible aligners for perfectly aligned teeth and confident smiles.', slug:'orthodontics', color:'rgba(20,184,166,0.1)', iconColor:'#14b8a6' },
  { icon:'theater_comedy', title:'Maxillofacial Prosthodontics', desc:'Specialized anaplastology and facial prosthetics — a unique clinical expertise at Maxface Clinic.', slug:'maxillofacial-prosthodontics', color:'rgba(36,99,235,0.1)', iconColor:'#2463eb' },
]

export default function ServicesSection() {
  return (
    <section style={{padding:'96px 24px', background:'rgba(248,250,252,0.5)'}}>
      <div style={{maxWidth:'1280px', margin:'0 auto'}}>

        {/* Header */}
        <div style={{textAlign:'center', marginBottom:'72px'}}>
          <p style={{fontSize:'11px', fontWeight:'700', color:'#2463eb', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'16px'}}>
            OUR EXPERTISE
          </p>
          <h2 style={{fontSize:'clamp(32px, 4vw, 48px)', fontWeight:'900', color:'#0f172a', marginBottom:'16px', letterSpacing:'-1.5px'}}>
            Clinical excellence in every procedure.
          </h2>
          <p style={{fontSize:'16px', color:'#64748b', maxWidth:'540px', margin:'0 auto', lineHeight:'1.7'}}>
            We blend surgical mastery with artistic precision to restore functionality and aesthetic balance to your face and smile.
          </p>
        </div>

        {/* Grid */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'24px'}}>
          {services.map(service => (
            <div key={service.slug} style={{
              background:'white', padding:'40px', borderRadius:'24px',
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
                marginBottom:'28px', fontSize:'28px', transition:'transform 0.3s'
              }}>
                <span style={{color: service.iconColor}}>
                  {service.slug === 'dental-implants' && '⚙️'}
                  {service.slug === 'endodontics' && '🔬'}
                  {service.slug === 'surgery' && '🏥'}
                  {service.slug === 'prosthodontics' && '🦷'}
                  {service.slug === 'orthodontics' && '😁'}
                  {service.slug === 'maxillofacial-prosthodontics' && '🎭'}
                </span>
              </div>
              <h4 style={{fontSize:'18px', fontWeight:'700', color:'#0f172a', marginBottom:'12px', letterSpacing:'-0.3px'}}>
                {service.title}
              </h4>
              <p style={{fontSize:'14px', color:'#64748b', lineHeight:'1.7', marginBottom:'28px'}}>
                {service.desc}
              </p>
              <Link href={`/treatments/${service.slug}`} style={{
                display:'inline-flex', alignItems:'center', gap:'6px',
                color:'#2463eb', fontWeight:'700', fontSize:'14px', textDecoration:'none'
              }}>
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* View All */}
        <div style={{textAlign:'center', marginTop:'48px'}}>
          <Link href="/treatments" style={{
            display:'inline-block',
            border:'1.5px solid #DBEAFE', color:'#2463eb',
            padding:'12px 32px', borderRadius:'10px',
            textDecoration:'none', fontWeight:'700', fontSize:'14px',
            background:'white'
          }}>
            View All Treatments →
          </Link>
        </div>
      </div>
    </section>
  )
}