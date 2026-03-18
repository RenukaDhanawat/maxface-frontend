'use client'
import { useState } from 'react'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const services = ['General Checkup','Dental Implants','Root Canal','Teeth Whitening','Braces & Aligners','Oral Surgery','Prosthodontics','Orthodontics','Periodontics']

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', date:'', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async () => {
    if (!form.name || !form.phone) { alert('Please fill required fields!'); return }
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ name:form.name, email:form.email, phone:form.phone, message:`Service: ${form.service} | Date: ${form.date} | ${form.message}` })
      })
      const data = await res.json()
      if (data.success) setSubmitted(true)
      else alert('Something went wrong!')
    } catch { alert('Cannot connect to server!') }
    setLoading(false)
  }

  return (
    <div>
      <Navbar />

      <div style={{minHeight:'100vh', background:'#f8fafc', paddingTop:'100px', paddingBottom:'80px', position:'relative', overflow:'hidden'}}>

        {/* Background decorations */}
        <div style={{position:'absolute', top:'60px', right:'-60px', width:'200px', height:'200px', borderRadius:'50%', background:'rgba(20,184,166,0.08)', filter:'blur(40px)', pointerEvents:'none'}}/>
        <div style={{position:'absolute', bottom:'100px', left:'-40px', width:'180px', height:'180px', borderRadius:'50%', background:'rgba(36,99,235,0.06)', filter:'blur(40px)', pointerEvents:'none'}}/>

        <div style={{maxWidth:'1200px', margin:'0 auto', padding:'0 24px'}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px', alignItems:'start'}}>

            {/* Left */}
            <div>
              <div style={{display:'inline-block', background:'#EFF6FF', color:'#2463eb', padding:'5px 14px', borderRadius:'9999px', fontSize:'11px', fontWeight:'700', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'20px'}}>
                PREMIUM CARE
              </div>
              <h1 style={{fontSize:'clamp(36px, 5vw, 56px)', fontWeight:'900', color:'#0f172a', marginBottom:'16px', letterSpacing:'-2px', lineHeight:'1.1'}}>
                Get in{' '}
                <span style={{background:'linear-gradient(to right, #2463eb, #14b8a6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
                  Touch
                </span>
              </h1>
              <p style={{fontSize:'16px', color:'#64748b', lineHeight:'1.7', marginBottom:'40px', maxWidth:'420px'}}>
                Experience the future of dentistry. Our dedicated specialists are here to guide you toward your perfect smile.
              </p>

              {/* Info Cards */}
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px'}}>
                <div style={{background:'white', borderRadius:'16px', padding:'20px', border:'1px solid #f1f5f9', boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
                  <div style={{fontSize:'22px', marginBottom:'10px'}}>📍</div>
                  <div style={{fontWeight:'700', color:'#0f172a', fontSize:'14px', marginBottom:'6px'}}>Visit Us</div>
                  <div style={{fontSize:'13px', color:'#64748b', lineHeight:'1.5'}}>Kasturi Nagar, East of NGEF Layout, Bangalore - 560043</div>
                </div>
                <div style={{background:'white', borderRadius:'16px', padding:'20px', border:'1px solid #f1f5f9', boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
                  <div style={{fontSize:'22px', marginBottom:'10px'}}>📞</div>
                  <div style={{fontWeight:'700', color:'#0f172a', fontSize:'14px', marginBottom:'6px'}}>Call Us</div>
                  <div style={{fontSize:'13px', color:'#64748b', lineHeight:'1.6'}}>
                    +91 98456 55304<br/>+91 99804 77725<br/>Mon–Sat, 9am–8pm
                  </div>
                </div>
              </div>
              <div style={{background:'white', borderRadius:'16px', padding:'20px', border:'1px solid #f1f5f9', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', display:'flex', alignItems:'center', gap:'14px', marginBottom:'14px'}}>
                <div style={{fontSize:'22px'}}>📧</div>
                <div>
                  <div style={{fontWeight:'700', color:'#0f172a', fontSize:'14px', marginBottom:'2px'}}>Email Us</div>
                  <a href="mailto:maxface.in@gmail.com" style={{fontSize:'13px', color:'#2463eb', textDecoration:'none'}}>maxface.in@gmail.com</a>
                </div>
              </div>

              {/* Map */}
              <div style={{borderRadius:'20px', overflow:'hidden', border:'1px solid #f1f5f9', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', position:'relative'}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.6609!3d13.0037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zS2FzdHVyaSBOYWdhciwgQmFuZ2Fsb3Jl!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="220"
                  style={{border:0, display:'block', filter:'grayscale(20%)'}}
                  allowFullScreen="" loading="lazy"
                />
                <div style={{position:'absolute', bottom:'12px', left:'12px', background:'white', borderRadius:'10px', padding:'8px 14px', boxShadow:'0 4px 12px rgba(0,0,0,0.1)', display:'flex', alignItems:'center', gap:'6px'}}>
                  <span style={{fontSize:'14px'}}>🦷</span>
                  <span style={{fontSize:'12px', fontWeight:'700', color:'#0f172a'}}><span style={{color:'#2463eb'}}>Max</span>Face Dental HQ</span>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div style={{background:'white', borderRadius:'24px', padding:'40px', border:'1px solid #f1f5f9', boxShadow:'0 8px 32px rgba(0,0,0,0.06)'}}>
              {submitted ? (
                <div style={{textAlign:'center', padding:'48px 0'}}>
                  <div style={{fontSize:'64px', marginBottom:'20px'}}>✅</div>
                  <h3 style={{fontSize:'24px', fontWeight:'800', color:'#0f172a', marginBottom:'12px', letterSpacing:'-0.5px'}}>Request Received!</h3>
                  <p style={{color:'#64748b', marginBottom:'28px', lineHeight:'1.7'}}>
                    Thank you! We will confirm your appointment within 2 hours. Our team will contact you at the provided number.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({name:'', phone:'', email:'', service:'', date:'', message:''}) }} style={{background:'linear-gradient(135deg, #2463eb, #0ea5e9)', color:'white', padding:'12px 28px', borderRadius:'10px', border:'none', fontWeight:'700', cursor:'pointer', fontSize:'14px'}}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{fontSize:'22px', fontWeight:'800', color:'#0f172a', marginBottom:'6px', letterSpacing:'-0.5px'}}>
                    Ready for Your Perfect Smile?
                  </h2>
                  <p style={{color:'#64748b', fontSize:'14px', marginBottom:'28px', lineHeight:'1.6'}}>
                    Fill in the details below and we'll confirm your spot within 2 hours.
                  </p>

                  <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px'}}>
                      <div>
                        <label style={{display:'block', fontSize:'12px', fontWeight:'700', color:'#374151', marginBottom:'8px', letterSpacing:'0.02em'}}>Full Name</label>
                        <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe"
                          style={{width:'100%', padding:'11px 14px', borderRadius:'10px', border:'1.5px solid #e2e8f0', fontSize:'14px', outline:'none', boxSizing:'border-box', background:'#f8fafc'}}
                          onFocus={e => e.target.style.borderColor = '#2463eb'}
                          onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                        />
                      </div>
                      <div>
                        <label style={{display:'block', fontSize:'12px', fontWeight:'700', color:'#374151', marginBottom:'8px'}}>Phone Number</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 99999 99999"
                          style={{width:'100%', padding:'11px 14px', borderRadius:'10px', border:'1.5px solid #e2e8f0', fontSize:'14px', outline:'none', boxSizing:'border-box', background:'#f8fafc'}}
                          onFocus={e => e.target.style.borderColor = '#2463eb'}
                          onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{display:'block', fontSize:'12px', fontWeight:'700', color:'#374151', marginBottom:'8px'}}>Service Required</label>
                      <select name="service" value={form.service} onChange={handleChange} style={{width:'100%', padding:'11px 14px', borderRadius:'10px', border:'1.5px solid #e2e8f0', fontSize:'14px', outline:'none', boxSizing:'border-box', background:'#f8fafc', color: form.service ? '#0f172a' : '#94a3b8'}}>
                        <option value="">General Checkup</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={{display:'block', fontSize:'12px', fontWeight:'700', color:'#374151', marginBottom:'8px'}}>Preferred Date</label>
                      <input type="date" name="date" value={form.date} onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        style={{width:'100%', padding:'11px 14px', borderRadius:'10px', border:'1.5px solid #e2e8f0', fontSize:'14px', outline:'none', boxSizing:'border-box', background:'#f8fafc'}}
                        onFocus={e => e.target.style.borderColor = '#2463eb'}
                        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>

                    <div>
                      <label style={{display:'block', fontSize:'12px', fontWeight:'700', color:'#374151', marginBottom:'8px'}}>Additional Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                        placeholder="Tell us about your dental concerns..."
                        style={{width:'100%', padding:'11px 14px', borderRadius:'10px', border:'1.5px solid #e2e8f0', fontSize:'14px', outline:'none', resize:'vertical', boxSizing:'border-box', background:'#f8fafc'}}
                        onFocus={e => e.target.style.borderColor = '#2463eb'}
                        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>

                    <button onClick={handleSubmit} disabled={loading} style={{
                      width:'100%', padding:'15px',
                      background: loading ? '#93c5fd' : 'linear-gradient(135deg, #2463eb, #0ea5e9)',
                      color:'white', border:'none', borderRadius:'10px',
                      fontSize:'15px', fontWeight:'700',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      boxShadow: loading ? 'none' : '0 4px 14px rgba(36,99,235,0.3)',
                      display:'flex', alignItems:'center', justifyContent:'center', gap:'8px'
                    }}>
                      📅 {loading ? 'Submitting...' : 'Request Appointment'}
                    </button>

                    <p style={{textAlign:'center', fontSize:'12px', color:'#94a3b8', lineHeight:'1.5'}}>
                      By submitting this form, you agree to our{' '}
                      <span style={{color:'#2463eb', cursor:'pointer'}}>Privacy Policy</span>
                      {' '}and{' '}
                      <span style={{color:'#2463eb', cursor:'pointer'}}>Terms of Service</span>.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}