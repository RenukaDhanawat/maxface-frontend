import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      {/* Hero with dark overlay */}
      <section style={{position:'relative', overflow:'hidden', minHeight:'400px', display:'flex', alignItems:'flex-end'}}>
        <div style={{
          position:'absolute', top:0, left:0, right:0, bottom:0,
          backgroundImage:'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&h=500&fit=crop&auto=format)',
          backgroundSize:'cover', backgroundPosition:'center',
          filter:'brightness(0.25)'
        }}/>
        <div style={{position:'absolute', top:0, left:0, right:0, bottom:0, background:'linear-gradient(to bottom, rgba(15,23,42,0.3), rgba(15,23,42,0.85))'}}/>
        <div style={{maxWidth:'1280px', margin:'0 auto', padding:'160px 24px 60px', position:'relative', zIndex:1, width:'100%'}}>
          <div style={{display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.15)', color:'rgba(255,255,255,0.9)', padding:'5px 14px', borderRadius:'9999px', fontSize:'11px', fontWeight:'700', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'20px'}}>
            ABOUT OUR PRACTICE
          </div>
          <h1 style={{fontSize:'clamp(32px, 5vw, 56px)', fontWeight:'900', color:'white', letterSpacing:'-2px', marginBottom:'16px', maxWidth:'700px', lineHeight:'1.1'}}>
            Precision Artistry in Maxillofacial & Dental Excellence
          </h1>
          <p style={{fontSize:'17px', color:'rgba(255,255,255,0.7)', maxWidth:'560px', lineHeight:'1.7'}}>
            Redefining dental healthcare through advanced technology, surgical expertise, and a patient-first philosophy that spans over a decade.
          </p>
        </div>
      </section>

      {/* Story + Stats */}
      <section style={{padding:'80px 24px', background:'white'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px', alignItems:'start'}}>

          {/* Story */}
          <div style={{background:'white', borderRadius:'20px', padding:'40px', border:'1px solid #f1f5f9', boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
            <h2 style={{fontSize:'22px', fontWeight:'800', color:'#0f172a', marginBottom:'20px', letterSpacing:'-0.5px'}}>Our Story</h2>
            <p style={{fontSize:'15px', color:'#64748b', lineHeight:'1.8', marginBottom:'16px'}}>
              Founded in 2016, Maxface Dental Implant & Anaplastology Clinic emerged from a vision to bridge the gap between aesthetic dentistry and complex maxillofacial surgery.
            </p>
            <p style={{fontSize:'15px', color:'#64748b', lineHeight:'1.8', marginBottom:'24px'}}>
              Located in Kasturi Nagar, East Bangalore, we have spent years perfecting the balance between medical precision and the art of a perfect smile.
            </p>
            <div style={{display:'flex', alignItems:'center', gap:'8px', color:'#2463eb', fontSize:'13px', fontWeight:'700'}}>
              <span style={{fontSize:'16px'}}>🏢</span>
              <span>Established · Since 2016</span>
            </div>
          </div>

          {/* Stats grid */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px'}}>
            <div style={{background:'linear-gradient(135deg, #2463eb, #1e3a8a)', borderRadius:'20px', padding:'32px', color:'white'}}>
              <div style={{fontSize:'11px', fontWeight:'700', letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.7, marginBottom:'12px'}}>HAPPY PATIENTS</div>
              <div style={{fontSize:'44px', fontWeight:'900', letterSpacing:'-2px'}}>5,000+</div>
            </div>
            <div style={{background:'linear-gradient(135deg, #14b8a6, #0ea5e9)', borderRadius:'20px', padding:'32px', color:'white'}}>
              <div style={{fontSize:'11px', fontWeight:'700', letterSpacing:'0.15em', textTransform:'uppercase', opacity:0.7, marginBottom:'12px'}}>SUCCESS RATE</div>
              <div style={{fontSize:'44px', fontWeight:'900', letterSpacing:'-2px'}}>99%</div>
            </div>
            <div style={{background:'linear-gradient(135deg, #1e3a8a, #2463eb)', borderRadius:'20px', padding:'28px', color:'white', gridColumn:'1 / -1'}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'20px'}}>
                {[
                  { label:'EXPERIENCE', value:'8+ Years' },
                  { label:'SPECIALISTS', value:'Expert Team' },
                  { label:'AWARDS',     value:'4.9 ★ Google' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div style={{fontSize:'10px', fontWeight:'700', letterSpacing:'0.15em', opacity:0.6, marginBottom:'6px'}}>{stat.label}</div>
                    <div style={{fontSize:'18px', fontWeight:'800'}}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{padding:'80px 24px', background:'#f8fafc'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px'}}>
          <div style={{background:'linear-gradient(135deg, #2463eb, #1e3a8a)', borderRadius:'24px', padding:'48px', color:'white'}}>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.1)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px', marginBottom:'24px'}}>👁️</div>
            <h3 style={{fontSize:'24px', fontWeight:'800', marginBottom:'16px', letterSpacing:'-0.5px'}}>Our Vision</h3>
            <p style={{fontSize:'15px', lineHeight:'1.8', opacity:0.9}}>
              To be the global benchmark for maxillofacial excellence, where every patient receives transformative care powered by innovation and delivered with compassion.
            </p>
          </div>
          <div style={{background:'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius:'24px', padding:'48px', color:'white'}}>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.08)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px', marginBottom:'24px'}}>🚀</div>
            <h3 style={{fontSize:'24px', fontWeight:'800', marginBottom:'16px', letterSpacing:'-0.5px'}}>Our Mission</h3>
            <p style={{fontSize:'15px', lineHeight:'1.8', opacity:0.9}}>
              Providing world-class oral and maxillofacial treatments through rigorous training, ethical practice, and the seamless integration of surgical expertise with restorative aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section style={{padding:'80px 24px', background:'white'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto', display:'grid', gridTemplateColumns:'420px 1fr', gap:'64px', alignItems:'start'}}>

          {/* Photo */}
          <div style={{borderRadius:'24px', overflow:'hidden', position:'relative', height:'500px'}}>
            <img
              src="drsrinivasrao.png"
              alt="Dr. Srinivasa Rao"
              style={{width:'100%', height:'100%', objectFit:'cover'}}
            />
            <div style={{position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(to top, rgba(15,23,42,0.9), transparent)', padding:'24px'}}>
              <div style={{color:'white', fontWeight:'800', fontSize:'18px'}}>Dr. Srinivasa Rao</div>
              <div style={{color:'rgba(255,255,255,0.7)', fontSize:'13px'}}>Chief Oral & Maxillofacial Surgeon</div>
            </div>
          </div>

          {/* Info */}
          <div style={{paddingTop:'20px'}}>
            <p style={{fontSize:'11px', fontWeight:'700', color:'#2463eb', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'16px'}}>
              THE EXPERT BEHIND YOUR SMILE
            </p>
            <h2 style={{fontSize:'clamp(28px, 3vw, 40px)', fontWeight:'900', color:'#0f172a', marginBottom:'8px', letterSpacing:'-1px'}}>
              Meet Our Chief Surgeon,<br/>Dr. Srinivasa Rao
            </h2>
            <p style={{fontSize:'15px', color:'#64748b', lineHeight:'1.8', marginBottom:'16px'}}>
              With over 8 years of clinical experience, Dr. Rao is a board-certified Maxillofacial Surgeon renowned for his innovative approach to reconstructive procedures and cosmetic enhancements.
            </p>
            <p style={{fontSize:'15px', color:'#64748b', lineHeight:'1.8', marginBottom:'32px'}}>
              He has pioneered multiple surgical techniques and serves as a mentor to emerging specialists through the Maxface Implantology Academy. His philosophy centers on "Conservative Intervention" — achieving the best results with minimal invasion.
            </p>

            {/* Credentials */}
            <div style={{display:'flex', gap:'24px', marginBottom:'32px', paddingBottom:'32px', borderBottom:'1px solid #f1f5f9'}}>
              <div style={{borderLeft:'3px solid #2463eb', paddingLeft:'16px'}}>
                <div style={{fontSize:'13px', fontWeight:'700', color:'#0f172a'}}>MDS, FDSRCS</div>
                <div style={{fontSize:'12px', color:'#94a3b8'}}>Education Background</div>
              </div>
              <div style={{borderLeft:'3px solid #14b8a6', paddingLeft:'16px'}}>
                <div style={{fontSize:'13px', fontWeight:'700', color:'#0f172a'}}>8+ Years</div>
                <div style={{fontSize:'12px', color:'#94a3b8'}}>Clinical Expertise</div>
              </div>
            </div>

            {/* CTA Card */}
            <div style={{background:'#f8fafc', borderRadius:'16px', padding:'24px', border:'1px solid #f1f5f9', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px'}}>
              <div>
                <div style={{fontWeight:'700', color:'#0f172a', fontSize:'15px', marginBottom:'4px'}}>Ready for a transformation?</div>
                <div style={{fontSize:'13px', color:'#64748b'}}>Schedule a private 1-on-1 consultation with Dr. Rao.</div>
              </div>
              <Link href="/appointment" style={{
                background:'#2463eb', color:'white',
                padding:'11px 24px', borderRadius:'10px',
                textDecoration:'none', fontWeight:'700', fontSize:'13px',
                boxShadow:'0 4px 12px rgba(36,99,235,0.3)', whiteSpace:'nowrap'
              }}>
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Academy */}
      <section style={{padding:'60px 24px', background:'#f8fafc'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto', background:'linear-gradient(135deg, #0f172a, #1e3a8a)', borderRadius:'24px', padding:'48px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'24px'}}>
          <div>
            <div style={{display:'inline-block', background:'rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.8)', padding:'4px 12px', borderRadius:'9999px', fontSize:'11px', fontWeight:'700', letterSpacing:'0.1em', marginBottom:'14px'}}>
              IMPLANTOLOGY TRAINING
            </div>
            <h3 style={{fontSize:'26px', fontWeight:'800', color:'white', marginBottom:'8px', letterSpacing:'-0.5px'}}>
              Maxface Implantology Academy
            </h3>
            <p style={{color:'rgba(255,255,255,0.6)', fontSize:'14px', maxWidth:'480px', lineHeight:'1.6'}}>
              Basic to Advanced Comprehensive Implantology Course for dental professionals. Download our brochure to learn more.
            </p>
          </div>
          <a href="http://maxface.in/wp-content/uploads/2023/05/Maxface-Academy-Final-Brochure_compressed.pdf" target="_blank" rel="noreferrer" style={{
            background:'white', color:'#2463eb',
            padding:'13px 28px', borderRadius:'10px',
            textDecoration:'none', fontWeight:'700', fontSize:'14px',
            whiteSpace:'nowrap'
          }}>
            📥 Download Brochure
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding:'80px 24px', textAlign:'center',
        background:'linear-gradient(135deg, #1e3a8a, #2463eb, #0ea5e9)'
      }}>
        <h2 style={{fontSize:'clamp(28px, 4vw, 44px)', fontWeight:'900', color:'white', marginBottom:'16px', letterSpacing:'-1px'}}>
          Start Your Journey to a Perfect Smile Today
        </h2>
        <p style={{color:'rgba(255,255,255,0.8)', fontSize:'17px', marginBottom:'36px'}}>
          Visit us at Kasturi Nagar, Bangalore or book your appointment online.
        </p>
        <div style={{display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap'}}>
          <Link href="/appointment" style={{background:'white', color:'#2463eb', padding:'14px 36px', borderRadius:'10px', textDecoration:'none', fontWeight:'700', fontSize:'15px'}}>
            Schedule Appointment
          </Link>
          <Link href="/contact" style={{background:'rgba(255,255,255,0.1)', color:'white', padding:'14px 36px', borderRadius:'10px', textDecoration:'none', fontWeight:'600', fontSize:'15px', border:'1px solid rgba(255,255,255,0.2)'}}>
            Our Locations
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}