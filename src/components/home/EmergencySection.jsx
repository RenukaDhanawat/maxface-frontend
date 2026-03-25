import Link from 'next/link'
import { AlertCircle, Phone, Calendar, Star, CheckCircle, Trophy } from 'lucide-react'

export default function EmergencySection() {
  return (
    <>
      {/* Emergency Banner */}
      <section style={{padding:'28px 24px', background:'white', borderTop:'1px solid #fee2e2', borderBottom:'1px solid #fee2e2'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'16px'}}>
          <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
            <div style={{width:'48px', height:'48px', background:'#fef2f2', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', color:'#ef4444', flexShrink:0}}>
              <AlertCircle size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 style={{fontSize:'16px', fontWeight:'700', color:'#0f172a', marginBottom:'2px'}}>Dental Emergency?</h3>
              <p style={{fontSize:'13px', color:'#ef4444'}}>Call us immediately — we're available for urgent dental care</p>
            </div>
          </div>
          <a href="tel:+919980477725" style={{
            background:'#ef4444', color:'white',
            padding:'11px 24px', borderRadius:'10px',
            textDecoration:'none', fontWeight:'700', fontSize:'14px',
            boxShadow:'0 4px 12px rgba(239,68,68,0.3)',
            display:'flex', alignItems:'center', gap:'8px', whiteSpace:'nowrap'
          }}>
            <Phone size={16} strokeWidth={2.5} />
            +91 99804 77725
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        margin:'0', padding:'96px 24px',
        background:'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e3a8a 100%)',
        textAlign:'center', position:'relative', overflow:'hidden'
      }}>
        {/* Background blobs */}
        <div style={{position:'absolute', top:'-80px', left:'10%', width:'300px', height:'300px', borderRadius:'50%', background:'rgba(36,99,235,0.12)', filter:'blur(60px)', pointerEvents:'none'}}/>
        <div style={{position:'absolute', bottom:'-60px', right:'10%', width:'250px', height:'250px', borderRadius:'50%', background:'rgba(20,184,166,0.08)', filter:'blur(50px)', pointerEvents:'none'}}/>

        <div style={{position:'relative', zIndex:1, maxWidth:'700px', margin:'0 auto'}}>
          <div style={{display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.8)', padding:'5px 14px', borderRadius:'9999px', fontSize:'11px', fontWeight:'700', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'20px'}}>
            <span style={{display:'flex', alignItems:'center', justifyContent:'center'}}>✦</span> Start Your Journey
          </div>
          <h2 style={{fontSize:'clamp(28px, 4vw, 48px)', fontWeight:'900', color:'white', marginBottom:'16px', letterSpacing:'-1.5px', lineHeight:'1.1'}}>
            Ready for Your<br/>
            <span style={{background:'linear-gradient(to right, #60a5fa, #34d399)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
              Perfect Smile?
            </span>
          </h2>
          <p style={{fontSize:'17px', color:'rgba(255,255,255,0.7)', marginBottom:'40px', lineHeight:'1.7'}}>
            Visit us at Kasturi Nagar, Bangalore or book your appointment online today. Dr. Srinivasa Rao and our team are ready to help.
          </p>
          <div style={{display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap'}}>
            <Link href="/appointment" style={{
              background:'linear-gradient(135deg, #2463eb, #0ea5e9)',
              color:'white', padding:'15px 36px', borderRadius:'12px',
              textDecoration:'none', fontWeight:'700', fontSize:'15px',
              boxShadow:'0 8px 24px rgba(36,99,235,0.4)',
              display:'flex', alignItems:'center', gap:'8px'
            }}>
              <Calendar size={18} strokeWidth={2.5} />
              Book Appointment
            </Link>
            <a href="tel:+919845655304" style={{
              background:'rgba(255,255,255,0.08)',
              border:'1px solid rgba(255,255,255,0.15)',
              color:'white', padding:'15px 36px', borderRadius:'12px',
              textDecoration:'none', fontWeight:'600', fontSize:'15px',
              display:'flex', alignItems:'center', gap:'8px'
            }}>
              <Phone size={18} strokeWidth={2.5} />
              +91 98456 55304
            </a>
          </div>

          {/* Trust badges */}
          <div style={{display:'flex', justifyContent:'center', gap:'24px', marginTop:'40px', flexWrap:'wrap'}}>
            {[
              { icon: Star, text: '4.9 Google Rating' },
              { icon: CheckCircle, text: '5,000+ Happy Patients' },
              { icon: Trophy, text: 'Certified Implantologists' },
            ].map((item, idx) => {
              const IconComponent = item.icon
              return (
                <span key={idx} style={{fontSize:'13px', color:'rgba(255,255,255,0.5)', fontWeight:'500', display:'flex', alignItems:'center', gap:'6px'}}>
                  <IconComponent size={16} strokeWidth={2} style={{color: 'rgba(255,255,255,0.4)'}} />
                  {item.text}
                </span>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}