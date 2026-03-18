'use client'
import { useState } from 'react'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const treatments = [
  'Dental Implants', 'Endodontics (Root Canal)', 'Prosthodontics',
  'Periodontics', 'Oral Surgery', 'Orthodontics',
  'Pedodontics', 'Restorative Dentistry', 'Maxillofacial Prosthodontics'
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '2:00 PM',
  '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '7:00 PM',
]

export default function AppointmentPage() {
  const [form, setForm] = useState({
    patientName:'', phone:'', email:'',
    treatmentType:'', date:'', timeSlot:'', notes:''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async () => {
    if (!form.patientName || !form.phone || !form.email || !form.treatmentType || !form.date || !form.timeSlot) {
      alert('Please fill all required fields!')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/api/appointments', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.success) setSubmitted(true)
      else alert('Something went wrong. Please try again!')
    } catch { alert('Cannot connect to server. Please try again!') }
    setLoading(false)
  }

  if (submitted) {
    return (
      <div>
        <Navbar />
        <div style={{minHeight:'100vh', background:'#f8fafc', display:'flex', alignItems:'center', justifyContent:'center', padding:'100px 24px 40px'}}>
          <div style={{textAlign:'center', background:'white', borderRadius:'24px', padding:'64px 48px', boxShadow:'0 8px 40px rgba(0,0,0,0.08)', maxWidth:'520px', width:'100%', border:'1px solid #f1f5f9'}}>
            <div style={{width:'72px', height:'72px', background:'linear-gradient(135deg, #2463eb, #14b8a6)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'32px', margin:'0 auto 24px'}}>
              ✅
            </div>
            <h2 style={{fontSize:'28px', fontWeight:'900', color:'#0f172a', marginBottom:'12px', letterSpacing:'-0.5px'}}>
              Appointment Confirmed!
            </h2>
            <p style={{color:'#64748b', fontSize:'15px', lineHeight:'1.7', marginBottom:'8px'}}>
              Thank you, <strong style={{color:'#0f172a'}}>{form.patientName}</strong>!
            </p>
            <p style={{color:'#64748b', fontSize:'15px', lineHeight:'1.7', marginBottom:'32px'}}>
              Your <strong style={{color:'#0f172a'}}>{form.treatmentType}</strong> appointment is scheduled for{' '}
              <strong style={{color:'#0f172a'}}>{form.date}</strong> at{' '}
              <strong style={{color:'#0f172a'}}>{form.timeSlot}</strong>.
              A confirmation will be sent to <strong style={{color:'#0f172a'}}>{form.email}</strong>.
            </p>

            {/* Details card */}
            <div style={{background:'#f8fafc', borderRadius:'14px', padding:'20px', border:'1px solid #f1f5f9', marginBottom:'28px', textAlign:'left'}}>
              {[
                { label:'Patient', value:form.patientName },
                { label:'Treatment', value:form.treatmentType },
                { label:'Date', value:form.date },
                { label:'Time', value:form.timeSlot },
              ].map(item => (
                <div key={item.label} style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #f1f5f9'}}>
                  <span style={{fontSize:'13px', color:'#94a3b8', fontWeight:'600'}}>{item.label}</span>
                  <span style={{fontSize:'13px', color:'#0f172a', fontWeight:'700'}}>{item.value}</span>
                </div>
              ))}
            </div>

            <button onClick={() => { setSubmitted(false); setStep(1); setForm({patientName:'', phone:'', email:'', treatmentType:'', date:'', timeSlot:'', notes:''}) }} style={{
              background:'linear-gradient(135deg, #2463eb, #0ea5e9)',
              color:'white', padding:'13px 32px', borderRadius:'10px',
              border:'none', fontWeight:'700', fontSize:'14px', cursor:'pointer',
              boxShadow:'0 4px 14px rgba(36,99,235,0.3)'
            }}>
              Book Another Appointment
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Navbar />

      <div style={{minHeight:'100vh', background:'#f8fafc', paddingTop:'100px', paddingBottom:'80px'}}>
        <div style={{maxWidth:'1100px', margin:'0 auto', padding:'0 24px'}}>

          {/* Header */}
          <div style={{textAlign:'center', marginBottom:'48px'}}>
            <div style={{display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(36,99,235,0.08)', border:'1px solid rgba(36,99,235,0.15)', color:'#2463eb', padding:'5px 14px', borderRadius:'9999px', fontSize:'11px', fontWeight:'700', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'16px'}}>
              ONLINE BOOKING
            </div>
            <h1 style={{fontSize:'clamp(28px, 4vw, 48px)', fontWeight:'900', color:'#0f172a', marginBottom:'12px', letterSpacing:'-1.5px'}}>
              Schedule Your Visit
            </h1>
            <p style={{color:'#64748b', fontSize:'16px', maxWidth:'480px', margin:'0 auto', lineHeight:'1.7'}}>
              Book your appointment with Dr. Srinivasa Rao at Maxface Dental Clinic, Bangalore.
            </p>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 360px', gap:'32px', alignItems:'start'}}>

            {/* Form */}
            <div style={{background:'white', borderRadius:'24px', padding:'40px', border:'1px solid #f1f5f9', boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}}>

              {/* Patient Info */}
              <div style={{marginBottom:'32px', paddingBottom:'32px', borderBottom:'1px solid #f1f5f9'}}>
                <h3 style={{fontSize:'16px', fontWeight:'700', color:'#0f172a', marginBottom:'20px', display:'flex', alignItems:'center', gap:'8px'}}>
                  <span style={{width:'28px', height:'28px', background:'#2463eb', borderRadius:'8px', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'13px', fontWeight:'800'}}>1</span>
                  Patient Information
                </h3>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px'}}>
                  <div>
                    <label style={{display:'block', fontSize:'12px', fontWeight:'700', color:'#374151', marginBottom:'8px', letterSpacing:'0.02em'}}>Full Name *</label>
                    <input name="patientName" value={form.patientName} onChange={handleChange} placeholder="Your full name"
                      style={{width:'100%', padding:'11px 14px', borderRadius:'10px', border:'1.5px solid #e2e8f0', fontSize:'14px', outline:'none', boxSizing:'border-box', background:'#f8fafc'}}
                      onFocus={e => e.target.style.borderColor = '#2463eb'}
                      onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                  <div>
                    <label style={{display:'block', fontSize:'12px', fontWeight:'700', color:'#374151', marginBottom:'8px'}}>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 99999 99999"
                      style={{width:'100%', padding:'11px 14px', borderRadius:'10px', border:'1.5px solid #e2e8f0', fontSize:'14px', outline:'none', boxSizing:'border-box', background:'#f8fafc'}}
                      onFocus={e => e.target.style.borderColor = '#2463eb'}
                      onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                  <div style={{gridColumn:'1 / -1'}}>
                    <label style={{display:'block', fontSize:'12px', fontWeight:'700', color:'#374151', marginBottom:'8px'}}>Email Address *</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
                      style={{width:'100%', padding:'11px 14px', borderRadius:'10px', border:'1.5px solid #e2e8f0', fontSize:'14px', outline:'none', boxSizing:'border-box', background:'#f8fafc'}}
                      onFocus={e => e.target.style.borderColor = '#2463eb'}
                      onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                </div>
              </div>

              {/* Treatment */}
              <div style={{marginBottom:'32px', paddingBottom:'32px', borderBottom:'1px solid #f1f5f9'}}>
                <h3 style={{fontSize:'16px', fontWeight:'700', color:'#0f172a', marginBottom:'20px', display:'flex', alignItems:'center', gap:'8px'}}>
                  <span style={{width:'28px', height:'28px', background:'#2463eb', borderRadius:'8px', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'13px', fontWeight:'800'}}>2</span>
                  Select Treatment
                </h3>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:'10px'}}>
                  {treatments.map(t => (
                    <button key={t} onClick={() => setForm({...form, treatmentType:t})} style={{
                      padding:'11px 14px', borderRadius:'10px', border:'1.5px solid',
                      borderColor: form.treatmentType === t ? '#2463eb' : '#e2e8f0',
                      background: form.treatmentType === t ? '#EFF6FF' : '#f8fafc',
                      color: form.treatmentType === t ? '#2463eb' : '#475569',
                      fontWeight: form.treatmentType === t ? '700' : '500',
                      fontSize:'13px', cursor:'pointer', textAlign:'left',
                      transition:'all 0.15s'
                    }}>
                      {form.treatmentType === t && '✓ '}{t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div style={{marginBottom:'32px', paddingBottom:'32px', borderBottom:'1px solid #f1f5f9'}}>
                <h3 style={{fontSize:'16px', fontWeight:'700', color:'#0f172a', marginBottom:'20px', display:'flex', alignItems:'center', gap:'8px'}}>
                  <span style={{width:'28px', height:'28px', background:'#2463eb', borderRadius:'8px', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'13px', fontWeight:'800'}}>3</span>
                  Choose Date & Time
                </h3>
                <div style={{marginBottom:'16px'}}>
                  <label style={{display:'block', fontSize:'12px', fontWeight:'700', color:'#374151', marginBottom:'8px'}}>Preferred Date *</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    style={{width:'100%', padding:'11px 14px', borderRadius:'10px', border:'1.5px solid #e2e8f0', fontSize:'14px', outline:'none', boxSizing:'border-box', background:'#f8fafc'}}
                    onFocus={e => e.target.style.borderColor = '#2463eb'}
                    onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>
                <label style={{display:'block', fontSize:'12px', fontWeight:'700', color:'#374151', marginBottom:'12px'}}>Preferred Time *</label>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(90px, 1fr))', gap:'8px'}}>
                  {timeSlots.map(slot => (
                    <button key={slot} onClick={() => setForm({...form, timeSlot:slot})} style={{
                      padding:'9px', borderRadius:'8px', border:'1.5px solid',
                      borderColor: form.timeSlot === slot ? '#2463eb' : '#e2e8f0',
                      background: form.timeSlot === slot ? '#EFF6FF' : '#f8fafc',
                      color: form.timeSlot === slot ? '#2463eb' : '#64748b',
                      fontWeight: form.timeSlot === slot ? '700' : '500',
                      fontSize:'12px', cursor:'pointer', transition:'all 0.15s'
                    }}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div style={{marginBottom:'28px'}}>
                <h3 style={{fontSize:'16px', fontWeight:'700', color:'#0f172a', marginBottom:'16px', display:'flex', alignItems:'center', gap:'8px'}}>
                  <span style={{width:'28px', height:'28px', background:'#e2e8f0', borderRadius:'8px', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'#64748b', fontSize:'13px', fontWeight:'800'}}>4</span>
                  Additional Notes
                  <span style={{fontSize:'12px', color:'#94a3b8', fontWeight:'400'}}>(Optional)</span>
                </h3>
                <textarea name="notes" value={form.notes} onChange={handleChange}
                  placeholder="Describe your dental concern or any special requirements..."
                  rows={3}
                  style={{width:'100%', padding:'11px 14px', borderRadius:'10px', border:'1.5px solid #e2e8f0', fontSize:'14px', outline:'none', resize:'vertical', boxSizing:'border-box', background:'#f8fafc'}}
                  onFocus={e => e.target.style.borderColor = '#2463eb'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              {/* Submit */}
              <button onClick={handleSubmit} disabled={loading} style={{
                width:'100%', padding:'15px',
                background: loading ? '#93c5fd' : 'linear-gradient(135deg, #2463eb, #0ea5e9)',
                color:'white', border:'none', borderRadius:'12px',
                fontSize:'15px', fontWeight:'700',
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: loading ? 'none' : '0 4px 14px rgba(36,99,235,0.3)',
                display:'flex', alignItems:'center', justifyContent:'center', gap:'8px'
              }}>
                {loading ? '⏳ Booking...' : '📅 Confirm Appointment'}
              </button>
            </div>

            {/* Sidebar */}
            <div style={{display:'flex', flexDirection:'column', gap:'16px', position:'sticky', top:'100px'}}>

              {/* Summary */}
              <div style={{background:'white', borderRadius:'20px', padding:'24px', border:'1px solid #f1f5f9', boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
                <h4 style={{fontSize:'14px', fontWeight:'700', color:'#0f172a', marginBottom:'16px'}}>Appointment Summary</h4>
                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                  {[
                    { label:'Patient', value: form.patientName || '—' },
                    { label:'Treatment', value: form.treatmentType || '—' },
                    { label:'Date', value: form.date || '—' },
                    { label:'Time', value: form.timeSlot || '—' },
                  ].map(item => (
                    <div key={item.label} style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #f8fafc'}}>
                      <span style={{fontSize:'12px', color:'#94a3b8', fontWeight:'600'}}>{item.label}</span>
                      <span style={{fontSize:'13px', color: item.value === '—' ? '#cbd5e1' : '#0f172a', fontWeight:'600'}}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinic Info */}
              <div style={{background:'linear-gradient(135deg, #1e3a8a, #2463eb)', borderRadius:'20px', padding:'24px', color:'white'}}>
                <h4 style={{fontSize:'14px', fontWeight:'700', marginBottom:'16px'}}>Maxface Dental Clinic</h4>
                <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                  {[
                    { icon:'📍', text:'Kasturi Nagar, East Bangalore - 560043' },
                    { icon:'📞', text:'+91 98456 55304 / +91 99804 77725' },
                    { icon:'🕐', text:'Mon–Sat: 9AM – 8PM' },
                    { icon:'⭐', text:'4.9 Google Rating · 500+ Reviews' },
                  ].map(item => (
                    <div key={item.text} style={{display:'flex', gap:'10px', alignItems:'flex-start'}}>
                      <span style={{fontSize:'14px', flexShrink:0}}>{item.icon}</span>
                      <span style={{fontSize:'12px', opacity:0.85, lineHeight:'1.5'}}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/919980477725?text=Hello, I want to book an appointment at Maxface Dental Clinic" target="_blank" rel="noreferrer" style={{
                background:'#25D366', color:'white',
                padding:'14px 20px', borderRadius:'12px',
                textDecoration:'none', fontWeight:'700', fontSize:'14px',
                display:'flex', alignItems:'center', justifyContent:'center', gap:'10px',
                boxShadow:'0 4px 14px rgba(37,211,102,0.3)'
              }}>
                💬 Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}