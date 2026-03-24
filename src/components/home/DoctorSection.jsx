'use client'
import Link from 'next/link'

export default function DoctorSection() {
  return (
    <section style={{padding:'clamp(48px, 10vw, 96px) 16px', background:'white'}}>
      <div style={{maxWidth:'1280px', margin:'0 auto'}}>

        {/* Header */}
        <div style={{marginBottom:'clamp(32px, 8vw, 48px)'}}>
          <div style={{display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(20,184,166,0.08)', border:'1px solid rgba(20,184,166,0.2)', color:'#14b8a6', padding:'5px 14px', borderRadius:'9999px', fontSize:'clamp(10px, 2vw, 11px)', fontWeight:'700', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'20px'}}>
            <span style={{width:'6px', height:'6px', borderRadius:'50%', background:'#14b8a6', display:'inline-block'}}/>
            Elite Care Delivery
          </div>
          <h2 style={{fontSize:'clamp(28px, 6vw, 52px)', fontWeight:'900', color:'#0f172a', letterSpacing:'-1.5px', marginBottom:'16px'}}>
            Meet Our{' '}
            <span style={{background:'linear-gradient(to right, #2463eb, #14b8a6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
              Specialist
            </span>
          </h2>
          <p style={{fontSize:'clamp(14px, 3vw, 16px)', color:'#64748b', maxWidth:'600px', lineHeight:'1.7'}}>
            Board-certified oral and maxillofacial surgeon dedicated to the art and science of restorative dentistry and implantology.
          </p>
        </div>

        {/* Main Doctor Card */}
        <div style={{
          background:'white', borderRadius:'24px', border:'1px solid #f1f5f9',
          boxShadow:'0 4px 24px rgba(0,0,0,0.06)',
          display:'grid', 
          gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',
          overflow:'hidden', marginBottom:'32px'
        }}>
          {/* Photo */}
          <div style={{position:'relative', height:'clamp(300px, 50vw, 420px)', overflow:'hidden'}}>
            <img
              src="drsrinivasrao.png"
              alt="Dr. B Srinivas Rao"
              style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', transition:'transform 0.5s'}}
              onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              onError={e => {
                e.target.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&auto=format'
              }}
            />
            <div style={{
              position:'absolute', bottom:0, left:0, right:0,
              background:'linear-gradient(to top, rgba(15,23,42,0.85), transparent)',
              padding:'24px 20px'
            }}>
              <div style={{color:'white', fontWeight:'800', fontSize:'clamp(14px, 3vw, 17px)', letterSpacing:'-0.3px'}}>Dr. B Srinivas Rao</div>
              <div style={{color:'rgba(255,255,255,0.7)', fontSize:'clamp(12px, 2vw, 13px)', marginTop:'2px'}}>Chief Medical Officer · Implantologist</div>
            </div>
          </div>

          {/* Info */}
          <div style={{padding:'clamp(20px, 5vw, 48px)'}}>
            <p style={{fontSize:'clamp(10px, 2vw, 11px)', fontWeight:'700', color:'#2463eb', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'16px'}}>
              CHIEF MEDICAL OFFICER
            </p>
            <h3 style={{fontSize:'clamp(20px, 5vw, 36px)', fontWeight:'900', color:'#0f172a', marginBottom:'8px', letterSpacing:'-1px'}}>
              Dr. B Srinivas Rao
            </h3>
            <p style={{fontSize:'clamp(13px, 2vw, 14px)', color:'#14b8a6', fontWeight:'600', marginBottom:'20px'}}>
              Maxillofacial Prosthodontist & Implantologist
            </p>
            <p style={{fontSize:'clamp(14px, 2vw, 15px)', color:'#64748b', lineHeight:'1.8', marginBottom:'32px'}}>
              Dr. B Srinivas Rao is an academician and practitioner specializing in Maxillofacial Prosthetics and Implantology. He trained at Branemark Osseointegration Center, Sweden and holds fellowship from the International Congress of Oral Implantologists (USA). He is the Course Director at Maxface Implantology Academy.
            </p>

            {/* Stats */}
            <div style={{display:'flex', gap:'clamp(20px, 4vw, 40px)', marginBottom:'32px', paddingBottom:'32px', borderBottom:'1px solid #f1f5f9', flexWrap:'wrap'}}>
              {[
                { value:'5,000+', label:'Successful Cases' },
                { value:'8+',     label:'Years Experience' },
                { value:'FICOI',  label:'Fellowship USA' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{fontSize:'clamp(18px, 4vw, 20px)', fontWeight:'900', color:'#0f172a', letterSpacing:'-0.5px'}}>{stat.value}</div>
                  <div style={{fontSize:'clamp(10px, 2vw, 12px)', color:'#94a3b8', fontWeight:'500', marginTop:'2px'}}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Specializations */}
            <div style={{display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'32px'}}>
              {['Dental Implants', 'Maxillofacial Prosthetics', 'Anaplastology', 'Oral Surgery', 'Implantology Academy'].map(spec => (
                <span key={spec} style={{
                  background:'#f8fafc', border:'1px solid #e2e8f0',
                  padding:'5px 14px', borderRadius:'9999px',
                  fontSize:'clamp(10px, 2vw, 12px)', fontWeight:'600', color:'#475569',
                  transition:'all 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#eff6ff'; e.currentTarget.style.borderColor = '#dbeafe'; e.currentTarget.style.color = '#2463eb' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#475569' }}
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Credentials */}
            <div style={{display:'flex', flexDirection:'column', gap:'6px', marginBottom:'32px'}}>
              {[
                '🏅 Branemark Osseointegration Center, Sweden',
                '🏅 FICOI — International Congress of Oral Implantologists, USA',
                '🎓 Course Director — Maxface Implantology Academy',
              ].map(c => (
                <div key={c} style={{display:'flex', alignItems:'center', gap:'8px', fontSize:'13px', color:'#475569'}}>
                  {c}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
              <Link href="/appointment" style={{
                background:'linear-gradient(135deg, #2463eb, #0ea5e9)',
                color:'white', padding:'12px 28px', borderRadius:'10px',
                textDecoration:'none', fontWeight:'700', fontSize:'14px',
                boxShadow:'0 4px 14px rgba(36,99,235,0.3)',
                transition:'all 0.2s'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Book Consultation
              </Link>
              <Link href="/doctors" style={{
                background:'white', color:'#0f172a',
                padding:'12px 28px', borderRadius:'10px',
                textDecoration:'none', fontWeight:'600', fontSize:'14px',
                border:'1.5px solid #e2e8f0', transition:'all 0.2s'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#dbeafe'; e.currentTarget.style.color = '#2463eb' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a' }}
              >
                View All Doctors →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}