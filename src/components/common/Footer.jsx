'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{background:'#0f172a', color:'white', padding:'72px 24px 24px'}}>
      <div style={{maxWidth:'1280px', margin:'0 auto'}}>

        <div style={{display:'grid', gridTemplateColumns:'1.8fr 1fr 1fr 1fr', gap:'48px', marginBottom:'56px'}}>

          {/* Brand */}
          <div>
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px'}}>
              <div style={{width:'36px', height:'36px', background:'#2463eb', borderRadius:'9px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px'}}>
                🦷
              </div>
              <div>
                <div style={{fontWeight:'900', fontSize:'16px', letterSpacing:'-0.5px'}}>
                  <span style={{color:'#60a5fa'}}>MAX</span>FACE
                </div>
                <div style={{fontSize:'10px', color:'#475569', letterSpacing:'0.5px'}}>DENTAL & IMPLANT CLINIC</div>
              </div>
            </div>
            <p style={{color:'#475569', fontSize:'14px', lineHeight:'1.7', marginBottom:'24px', maxWidth:'260px'}}>
              Leading provider of advanced maxillofacial and oral surgery procedures in Bangalore. Committed to excellence, safety, and patient-centered care.
            </p>
            <div style={{display:'flex', gap:'10px'}}>
              <a href="https://www.facebook.com/profile.php?id=100086378576580" target="_blank" rel="noreferrer" style={{width:'36px', height:'36px', background:'#1877F2', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', textDecoration:'none'}}>
                <img src="https://cdn.simpleicons.org/facebook/white" width="16" height="16" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/maxface.dental/" target="_blank" rel="noreferrer" style={{width:'36px', height:'36px', background:'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', textDecoration:'none'}}>
                <img src="https://cdn.simpleicons.org/instagram/white" width="16" height="16" alt="Instagram" />
              </a>
              <a href="https://wa.me/919980477725" target="_blank" rel="noreferrer" style={{width:'36px', height:'36px', background:'#25D366', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', textDecoration:'none', fontSize:'18px'}}>
                💬
              </a>
            </div>
          </div>

          {/* Clinical Services */}
          <div>
            <h4 style={{fontWeight:'700', marginBottom:'20px', fontSize:'13px', color:'white', letterSpacing:'0.5px', textTransform:'uppercase'}}>
              Clinical Services
            </h4>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              {['Dental Implants','Endodontics','Prosthodontics','Orthodontics','Periodontics','Oral Surgery'].map(t => (
                <Link key={t} href="/treatments" style={{color:'#475569', textDecoration:'none', fontSize:'14px', transition:'color 0.2s'}}
                  onMouseEnter={e => e.target.style.color = '#94a3b8'}
                  onMouseLeave={e => e.target.style.color = '#475569'}
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>

          {/* Patient Resources */}
          <div>
            <h4 style={{fontWeight:'700', marginBottom:'20px', fontSize:'13px', color:'white', letterSpacing:'0.5px', textTransform:'uppercase'}}>
              Patient Resources
            </h4>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              {[
                { name:'About Us',        href:'/about' },
                { name:'Our Specialists', href:'/about' },
                { name:'Smile Gallery',   href:'/gallery' },
                { name:'Blog & Tips',     href:'/blog' },
                { name:'Book Appointment',href:'/appointment' },
                { name:'Patient Portal',  href:'/portal' },
              ].map(link => (
                <Link key={link.name} href={link.href} style={{color:'#475569', textDecoration:'none', fontSize:'14px'}}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 style={{fontWeight:'700', marginBottom:'20px', fontSize:'13px', color:'white', letterSpacing:'0.5px', textTransform:'uppercase'}}>
              Location
            </h4>
            <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
              <div style={{display:'flex', gap:'10px', alignItems:'flex-start'}}>
                <span style={{fontSize:'16px', flexShrink:0, marginTop:'1px'}}>📍</span>
                <span style={{color:'#475569', fontSize:'13px', lineHeight:'1.6'}}>
                  Reg No 14/268A, 1st Floor, RS Arcade, Kasturi Nagar, Bangalore - 560043
                </span>
              </div>
              <div style={{display:'flex', gap:'10px'}}>
                <span style={{fontSize:'16px'}}>📞</span>
                <div>
                  <a href="tel:+919845655304" style={{color:'#475569', textDecoration:'none', fontSize:'13px', display:'block'}}>+91 98456 55304</a>
                  <a href="tel:+919980477725" style={{color:'#475569', textDecoration:'none', fontSize:'13px', display:'block'}}>+91 99804 77725</a>
                </div>
              </div>
              <div style={{display:'flex', gap:'10px'}}>
                <span style={{fontSize:'16px'}}>📧</span>
                <a href="mailto:maxface.in@gmail.com" style={{color:'#475569', textDecoration:'none', fontSize:'13px'}}>
                  maxface.in@gmail.com
                </a>
              </div>
              <div style={{display:'flex', gap:'10px'}}>
                <span style={{fontSize:'16px'}}>🕐</span>
                <span style={{color:'#475569', fontSize:'13px', lineHeight:'1.6'}}>
                  Mon–Sat: 9:00–18:00<br/>
                  Sunday: Emergency Only
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div style={{
          borderTop:'1px solid #1e293b', paddingTop:'24px',
          display:'flex', justifyContent:'space-between',
          alignItems:'center', flexWrap:'wrap', gap:'12px'
        }}>
          <p style={{color:'#334155', fontSize:'13px'}}>
            © 2026 Maxface Dental Implant & Anaplastology Clinic. All rights reserved.
          </p>
          <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
            <span style={{color:'#334155', fontSize:'13px', cursor:'pointer'}}>Privacy Policy</span>
            <span style={{color:'#334155', fontSize:'13px', cursor:'pointer'}}>Terms of Service</span>
            <a href="/admin" style={{color:'#1e293b', fontSize:'13px', textDecoration:'none'}}>Admin</a>
          </div>
        </div>

      </div>
    </footer>
  )
}