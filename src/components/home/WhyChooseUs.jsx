'use client'
import Link from 'next/link'

export default function WhyChooseUs() {
  return (
    <section style={{padding:'clamp(48px, 10vw, 96px) 16px', background:'white'}}>
      <div className="why-grid" style={{maxWidth:'1280px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'clamp(48px, 10vw, 96px)', alignItems:'center'}}>

        {/* Left — Images grid */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(12px, 3vw, 16px)'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'clamp(12px, 3vw, 16px)'}}>
            <div style={{borderRadius:'20px', overflow:'hidden', height:'clamp(150px, 25vw, 200px)'}}>
              <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&h=200&fit=crop&auto=format" style={{width:'100%', height:'100%', objectFit:'cover'}} alt="Dental" />
            </div>
            <div style={{background:'linear-gradient(135deg, #14b8a6, #0ea5e9)', borderRadius:'20px', padding:'clamp(20px, 4vw, 28px)', color:'white'}}>
              <div style={{fontSize:'clamp(28px, 6vw, 36px)', fontWeight:'900', letterSpacing:'-1px'}}>25+</div>
              <div style={{fontSize:'clamp(11px, 2vw, 13px)', opacity:0.9, marginTop:'4px'}}>Years of Clinical Experience</div>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'clamp(12px, 3vw, 16px)', marginTop:'clamp(16px, 4vw, 32px)'}}>
            <div style={{background:'linear-gradient(135deg, #1e3a8a, #2463eb)', borderRadius:'20px', padding:'clamp(20px, 4vw, 28px)', color:'white'}}>
              <div style={{fontSize:'clamp(28px, 6vw, 36px)', fontWeight:'900', letterSpacing:'-1px'}}>15k+</div>
              <div style={{fontSize:'clamp(11px, 2vw, 13px)', opacity:0.9, marginTop:'4px'}}>Successful Surgeries Performed</div>
            </div>
            <div style={{borderRadius:'20px', overflow:'hidden', height:'clamp(150px, 25vw, 200px)'}}>
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop&auto=format" style={{width:'100%', height:'100%', objectFit:'cover'}} alt="Dental" />
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div>
          <p style={{fontSize:'clamp(10px, 2vw, 11px)', fontWeight:'700', color:'#2463eb', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'16px'}}>
            THE MAXFACE STANDARD
          </p>
          <h2 style={{fontSize:'clamp(24px, 5vw, 44px)', fontWeight:'900', color:'#0f172a', marginBottom:'clamp(24px, 5vw, 40px)', letterSpacing:'-1px'}}>
            Redefining modern patient care.
          </h2>

          <div style={{display:'flex', flexDirection:'column', gap:'clamp(20px, 4vw, 28px)', marginBottom:'clamp(24px, 5vw, 40px)'}}>
            {[
              { icon:'🎯', title:'AI-Guided Precision', desc:'We utilize AI imaging software to map your facial structure with sub-millimeter accuracy before any incision is made.' },
              { icon:'🏆', title:'Certified Implantologists', desc:'Dr. Srinivasa Rao is internationally certified with expertise in basic to advanced implantology and anaplastology.' },
              { icon:'💎', title:'Lifetime Guarantee', desc:'We stand by our craftsmanship. Our dental implants come with a lifetime warranty on structural integrity.' },
              { icon:'❤️', title:'Patient-First Philosophy', desc:'Every treatment plan is personalized. We take time to explain every step and ensure your comfort throughout.' },
            ].map(item => (
              <div key={item.title} style={{display:'flex', gap:'16px', alignItems:'flex-start'}}>
                <div style={{
                  width:'44px', height:'44px', flexShrink:0,
                  background:'#f8fafc', borderRadius:'12px',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'20px', border:'1px solid #f1f5f9'
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{fontSize:'clamp(14px, 2.5vw, 15px)', fontWeight:'700', color:'#0f172a', marginBottom:'4px'}}>{item.title}</h4>
                  <p style={{fontSize:'clamp(13px, 2vw, 14px)', color:'#64748b', lineHeight:'1.6'}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/about" style={{
            display:'inline-block',
            background:'#0f172a', color:'white',
            padding:'clamp(11px, 2vw, 13px) clamp(20px, 4vw, 28px)', borderRadius:'10px',
            textDecoration:'none', fontWeight:'700', fontSize:'clamp(13px, 2vw, 14px)'
          }}>
            Learn About Our Approach →
          </Link>
        </div>
      </div>
    </section>
  )
}