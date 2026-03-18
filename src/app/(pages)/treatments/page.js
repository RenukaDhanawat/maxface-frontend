'use client'
import Link from 'next/link'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const treatments = [
  {
    image:'Orthodontics.jpg',
    slug:'dental-implants', title:'Dental Implants',
    desc:'Advanced Zirconia and Titanium solutions for permanent restoration with 3D-guided surgical placement.',
    time:'2-3 months', tag:'Speciality', category:'Implants'
  },
  {
    image:'/gallery/Prosthodontics.webp',
    slug:'prosthodontics', title:'Prosthodontics',
    desc:'Complete dentures, crowns, bridges and advanced prosthetic solutions for missing teeth.',
    time:'2-4 weeks', tag:'', category:'Restorative'
  },
  {
    image:'/gallery/endodontics.webp',
    slug:'endodontics', title:'Endodontics',
    desc:'Painless root canal treatments using rotary endodontics with single-sitting procedures.',
    time:'1-2 sittings', tag:'Pain Free', category:'Restorative'
  },
  {
    image:'/gallery/periodontic.jpeg',
    slug:'periodontics', title:'Periodontics',
    desc:'Comprehensive gum disease treatment, scaling, flap surgery and laser periodontal therapy.',
    time:'2-3 visits', tag:'', category:'Gum Care'
  },
  {
    image:'/gallery/oralsurgery.jpg',
    slug:'surgery', title:'Oral Surgery',
    desc:'Wisdom tooth removal, dental extractions and minor oral surgical procedures with precision.',
    time:'30-60 mins', tag:'', category:'Surgery'
  },
  {
    image:'/gallery/aligners.png',
    slug:'orthodontics', title:'Orthodontics',
    desc:'Metal braces, ceramic braces and invisible aligners for perfectly aligned teeth.',
    time:'6-18 months', tag:'', category:'Alignment'
  },
  {
    image:'/gallery/hygineguide.jpg',
    slug:'pedodontics', title:'Pedodontics',
    desc:'Specialized gentle dental care for children including preventive and restorative treatments.',
    time:'30-45 mins', tag:'Kids', category:'Pediatric'
  },
  {
    image:'/gallery/implant2.webp',
    slug:'restorative-dentistry', title:'Restorative Dentistry',
    desc:'Tooth colored fillings, inlays, onlays and complete smile restoration procedures.',
    time:'1-2 visits', tag:'', category:'Restorative'
  },
  {
    image:'maxillofacial.jpg',
    slug:'maxillofacial-prosthodontics', title:'Maxillofacial Prosthodontics',
    desc:'Specialized anaplastology and facial prosthetics — a unique clinical expertise at Maxface Clinic.',
    time:'Custom', tag:'Unique', category:'Specialty'
  },
]

const categories = ['All Treatments', 'Implants', 'Restorative', 'Gum Care', 'Surgery', 'Alignment', 'Pediatric', 'Specialty']

export default function TreatmentsPage() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={{position:'relative', overflow:'hidden', minHeight:'380px', display:'flex', alignItems:'flex-end'}}>
        <div style={{
          position:'absolute', top:0, left:0, right:0, bottom:0,
          backgroundImage:'url(https://images.unsplash.com/photo-1588776814546-1ffedbe47425?w=1400&h=500&fit=crop&auto=format)',
          backgroundSize:'cover', backgroundPosition:'center',
          filter:'brightness(0.2)'
        }}/>
        <div style={{position:'absolute', top:0, left:0, right:0, bottom:0, background:'linear-gradient(to bottom, rgba(15,23,42,0.3), rgba(15,23,42,0.9))'}}/>

        <div style={{maxWidth:'1280px', margin:'0 auto', padding:'160px 24px 56px', position:'relative', zIndex:1, width:'100%'}}>
          <div style={{display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.15)', color:'rgba(255,255,255,0.9)', padding:'5px 14px', borderRadius:'9999px', fontSize:'11px', fontWeight:'700', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'20px'}}>
            PREMIUM DENTAL SERVICES
          </div>
          <h1 style={{fontSize:'clamp(32px, 5vw, 60px)', fontWeight:'900', color:'white', letterSpacing:'-2px', marginBottom:'16px', lineHeight:'1.05'}}>
            Comprehensive{' '}
            <span style={{background:'linear-gradient(to right, #60a5fa, #34d399)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
              Dental Care
            </span>{' '}
            for Every Smile
          </h1>
          <p style={{fontSize:'17px', color:'rgba(255,255,255,0.7)', maxWidth:'580px', lineHeight:'1.7', marginBottom:'28px'}}>
            Experience precision dental treatments powered by state-of-the-art technology and a team of world-class oral surgeons.
          </p>
          {/* Trust badges */}
          <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
            {['✓ Advanced 3D Imaging', '✓ Pain-Free Procedures', '✓ Global Standards'].map(b => (
              <div key={b} style={{display:'flex', alignItems:'center', gap:'6px', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', padding:'6px 14px', borderRadius:'9999px', color:'rgba(255,255,255,0.8)', fontSize:'12px', fontWeight:'600'}}>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{padding:'64px 24px 96px', background:'#f8fafc'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto'}}>

          {/* Filter tabs */}
          <div style={{display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'48px', alignItems:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
              {categories.map(cat => (
                <button key={cat} style={{
                  padding:'8px 18px', borderRadius:'9999px', border:'1.5px solid #e2e8f0',
                  background: cat === 'All Treatments' ? '#2463eb' : 'white',
                  color: cat === 'All Treatments' ? 'white' : '#64748b',
                  fontWeight:'600', fontSize:'13px', cursor:'pointer',
                  transition:'all 0.2s'
                }}
                  onMouseEnter={e => { if (cat !== 'All Treatments') { e.currentTarget.style.borderColor = '#2463eb'; e.currentTarget.style.color = '#2463eb' }}}
                  onMouseLeave={e => { if (cat !== 'All Treatments') { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#64748b' }}}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', gap:'24px', marginBottom:'64px'}}>
            {treatments.map(t => (
              <div key={t.slug} style={{
                background:'white', borderRadius:'20px', overflow:'hidden',
                border:'1px solid #f1f5f9',
                boxShadow:'0 2px 8px rgba(0,0,0,0.04)',
                transition:'all 0.3s ease'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(36,99,235,0.1)'
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.borderColor = '#dbeafe'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = '#f1f5f9'
                }}
              >
                {/* Image */}
                <div style={{position:'relative', height:'220px', overflow:'hidden'}}>
                  <img
                    src={t.image}
                    alt={t.title}
                    style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s ease'}}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{position:'absolute', bottom:0, left:0, right:0, height:'80px', background:'linear-gradient(to top, rgba(0,0,0,0.35), transparent)'}}/>
                  {/* Category badge */}
                  <div style={{position:'absolute', top:'12px', left:'12px', background:'rgba(15,23,42,0.75)', color:'white', padding:'4px 10px', borderRadius:'6px', fontSize:'10px', fontWeight:'700', letterSpacing:'0.5px', backdropFilter:'blur(4px)'}}>
                    {t.category.toUpperCase()}
                  </div>
                  {t.tag && (
                    <div style={{position:'absolute', top:'12px', right:'12px', background:'linear-gradient(135deg, #2463eb, #0ea5e9)', color:'white', padding:'4px 10px', borderRadius:'9999px', fontSize:'10px', fontWeight:'700'}}>
                      {t.tag}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{padding:'24px'}}>
                  <h3 style={{fontSize:'17px', fontWeight:'700', color:'#0f172a', marginBottom:'8px', letterSpacing:'-0.3px'}}>
                    {t.title}
                  </h3>
                  <p style={{fontSize:'13px', color:'#64748b', lineHeight:'1.6', marginBottom:'16px'}}>
                    {t.desc}
                  </p>

                  {/* Duration + Book */}
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <span style={{display:'flex', alignItems:'center', gap:'5px', fontSize:'12px', color:'#64748b', background:'#f8fafc', padding:'5px 10px', borderRadius:'6px', border:'1px solid #f1f5f9'}}>
                      ⏱ {t.time}
                    </span>
                    <div style={{display:'flex', gap:'8px'}}>
                      <Link href={`/treatments/${t.slug}`} style={{
                        padding:'8px 16px',
                        background:'linear-gradient(135deg, #2463eb, #0ea5e9)',
                        color:'white', borderRadius:'8px', textDecoration:'none',
                        fontSize:'12px', fontWeight:'700',
                        boxShadow:'0 4px 10px rgba(36,99,235,0.2)'
                      }}>
                        Learn More
                      </Link>
                      <Link href="/appointment" style={{
                        padding:'8px 16px',
                        background:'white', color:'#2463eb', borderRadius:'8px',
                        textDecoration:'none', fontSize:'12px', fontWeight:'600',
                        border:'1.5px solid #dbeafe'
                      }}>
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            background:'linear-gradient(135deg, #1e3a8a, #2463eb)',
            borderRadius:'24px', padding:'48px',
            display:'grid', gridTemplateColumns:'1fr auto', gap:'32px',
            alignItems:'center', flexWrap:'wrap'
          }}>
            <div>
              <h3 style={{fontSize:'clamp(22px, 3vw, 32px)', fontWeight:'900', color:'white', marginBottom:'10px', letterSpacing:'-0.5px'}}>
                Ready for a transformation?
              </h3>
              <p style={{color:'rgba(255,255,255,0.75)', fontSize:'15px', lineHeight:'1.6', maxWidth:'480px'}}>
                Book a digital consultation today and get a personalized treatment plan from Dr. Srinivasa Rao.
              </p>
            </div>
            <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
              <Link href="/appointment" style={{
                background:'white', color:'#2463eb',
                padding:'13px 28px', borderRadius:'10px',
                textDecoration:'none', fontWeight:'700', fontSize:'14px',
                whiteSpace:'nowrap'
              }}>
                Book Online Now →
              </Link>
              <a href="tel:+919980477725" style={{
                background:'rgba(255,255,255,0.1)', color:'white',
                padding:'13px 28px', borderRadius:'10px',
                textDecoration:'none', fontWeight:'600', fontSize:'14px',
                border:'1px solid rgba(255,255,255,0.2)', whiteSpace:'nowrap'
              }}>
                Talk to a Specialist
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}