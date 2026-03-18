'use client'
import { useState } from 'react'

const testimonials = [
  {
    name:'Chandrakala Jayanthi',
    initials:'CJ',
    treatment:'Dental Implants',
    rating:5,
    review:'I got my smile back! From the very first consultation, Dr. Srinivas explained every step with patience and clarity. His expertise and attention to detail truly stand out. The results are excellent — my smile feels natural and comfortable again.',
    time:'4 months ago'
  },
  {
    name:'Ganga Jayaraman',
    initials:'GJ',
    treatment:'Teeth Cleaning',
    rating:5,
    review:'I had a wonderful experience at Max Face Dental with Dr. Srinivas. The entire process was smooth and completely painless. Dr. Srinivas is very gentle, patient, and explains every step clearly. The clinic is clean, well-equipped, and has a calm atmosphere.',
    time:'4 months ago'
  },
  {
    name:'HARLEEN',
    initials:'HL',
    treatment:'Smile Design',
    rating:5,
    review:'As a dentist myself, I\'m naturally cautious about trusting another professional — but with Dr. Shrinivas, the choice was simple. His expertise is unmatched. All my requirements were met and how! I was very particular about my tooth colour and shape requirements.',
    time:'1 year ago'
  },
  {
    name:'Amarnadh Chavallam',
    initials:'AC',
    treatment:'Dental Treatment',
    rating:5,
    review:'I couldn\'t be happier with the experience. The care I received was outstanding. What truly stood out was the level of personal attention I received. The follow-up care was exceptional, making me feel valued as a patient.',
    time:'1 year ago'
  },
  {
    name:'Kiran',
    initials:'KR',
    treatment:'Smile Makeover',
    rating:5,
    review:'After a small accident, I had lost confidence in my smile. Thanks to the amazing smile design and implant treatment, I got my beautiful smile back! The entire process was smooth, comfortable, and personalized. The results look completely natural.',
    time:'1 month ago'
  },
]

const avatarColors = [
  'linear-gradient(135deg, #2463eb, #0ea5e9)',
  'linear-gradient(135deg, #7c3aed, #a78bfa)',
  'linear-gradient(135deg, #059669, #14b8a6)',
  'linear-gradient(135deg, #ea580c, #fbbf24)',
  'linear-gradient(135deg, #db2777, #f43f5e)',
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => c === 0 ? testimonials.length - 1 : c - 1)
  const next = () => setCurrent(c => c === testimonials.length - 1 ? 0 : c + 1)

  return (
    <section style={{padding:'96px 24px', background:'#0f172a', position:'relative', overflow:'hidden'}}>

      {/* Background decorations */}
      <div style={{position:'absolute', top:'-100px', left:'-100px', width:'400px', height:'400px', borderRadius:'50%', background:'rgba(36,99,235,0.08)', filter:'blur(60px)', pointerEvents:'none'}}/>
      <div style={{position:'absolute', bottom:'-100px', right:'-100px', width:'300px', height:'300px', borderRadius:'50%', background:'rgba(20,184,166,0.06)', filter:'blur(60px)', pointerEvents:'none'}}/>
      <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'600px', height:'600px', borderRadius:'50%', background:'rgba(36,99,235,0.03)', filter:'blur(80px)', pointerEvents:'none'}}/>

      <div style={{maxWidth:'1280px', margin:'0 auto'}}>

        {/* Header */}
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'56px', flexWrap:'wrap', gap:'24px'}}>
          <div>
            <p style={{fontSize:'11px', fontWeight:'700', color:'#2463eb', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'12px'}}>
              PATIENT STORIES
            </p>
            <h2 style={{fontSize:'clamp(28px, 4vw, 44px)', fontWeight:'900', color:'white', letterSpacing:'-1px', maxWidth:'500px', lineHeight:'1.15'}}>
              Trusted by thousands for{' '}
              <span style={{background:'linear-gradient(to right, #60a5fa, #34d399)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
                transformative results.
              </span>
            </h2>
          </div>

          {/* Nav arrows */}
          <div style={{display:'flex', gap:'10px'}}>
            <button onClick={prev} style={{
              width:'44px', height:'44px', borderRadius:'50%',
              border:'1px solid rgba(255,255,255,0.15)',
              background:'rgba(255,255,255,0.05)',
              color:'white', fontSize:'18px', cursor:'pointer',
              transition:'all 0.2s', display:'flex', alignItems:'center', justifyContent:'center'
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
            >←</button>
            <button onClick={next} style={{
              width:'44px', height:'44px', borderRadius:'50%',
              border:'1px solid rgba(255,255,255,0.15)',
              background:'rgba(255,255,255,0.05)',
              color:'white', fontSize:'18px', cursor:'pointer',
              transition:'all 0.2s', display:'flex', alignItems:'center', justifyContent:'center'
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
            >→</button>
          </div>
        </div>

        {/* Cards */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'20px', marginBottom:'40px'}}>
          {[-1, 0, 1].map(offset => {
            const idx   = (current + offset + testimonials.length) % testimonials.length
            const item  = testimonials[idx]
            const isCenter = offset === 0

            return (
              <div key={`${idx}-${offset}`} onClick={() => setCurrent(idx)} style={{
                background: isCenter
                  ? 'rgba(36,99,235,0.12)'
                  : 'rgba(255,255,255,0.03)',
                border: isCenter
                  ? '1px solid rgba(36,99,235,0.35)'
                  : '1px solid rgba(255,255,255,0.06)',
                borderRadius:'20px', padding:'28px 32px',
                transition:'all 0.4s ease',
                opacity: isCenter ? 1 : 0.55,
                transform: isCenter ? 'scale(1)' : 'scale(0.97)',
                cursor: isCenter ? 'default' : 'pointer',
                position:'relative', overflow:'hidden'
              }}>

                {/* Glow for center card */}
                {isCenter && (
                  <div style={{position:'absolute', top:'-40px', right:'-40px', width:'120px', height:'120px', borderRadius:'50%', background:'rgba(36,99,235,0.15)', filter:'blur(30px)', pointerEvents:'none'}}/>
                )}

                {/* Quote mark */}
                <div style={{fontSize:'48px', lineHeight:'1', color:'rgba(255,255,255,0.06)', fontFamily:'Georgia', fontWeight:'900', marginBottom:'4px', userSelect:'none'}}>
                  "
                </div>

                {/* Stars */}
                <div style={{display:'flex', gap:'3px', marginBottom:'16px'}}>
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} style={{color:'#fbbf24', fontSize:'15px'}}>★</span>
                  ))}
                </div>

                {/* Review */}
                <p style={{
                  fontSize:'14px', color: isCenter ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.6)',
                  lineHeight:'1.75', marginBottom:'24px', fontStyle:'italic',
                  position:'relative', zIndex:1
                }}>
                  "{item.review}"
                </p>

                {/* Divider */}
                <div style={{height:'1px', background:'rgba(255,255,255,0.06)', marginBottom:'20px'}}/>

                {/* Patient info */}
                <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                  {/* Avatar with initials */}
                  <div style={{
                    width:'42px', height:'42px', borderRadius:'50%', flexShrink:0,
                    background: avatarColors[idx % avatarColors.length],
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'14px', fontWeight:'800', color:'white',
                    boxShadow:'0 4px 12px rgba(0,0,0,0.3)',
                    letterSpacing:'0.5px'
                  }}>
                    {item.initials}
                  </div>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{fontWeight:'700', color:'white', fontSize:'14px', letterSpacing:'-0.2px'}}>{item.name}</div>
                    <div style={{color:'#2463eb', fontSize:'12px', fontWeight:'600', marginTop:'1px'}}>{item.treatment}</div>
                  </div>
                  <div style={{
                    fontSize:'10px', color:'rgba(255,255,255,0.25)',
                    flexShrink:0, textAlign:'right'
                  }}>
                    {item.time}
                  </div>
                </div>

                {/* Google verified badge for center */}
                {isCenter && (
                  <div style={{
                    position:'absolute', top:'16px', right:'16px',
                    display:'flex', alignItems:'center', gap:'4px',
                    background:'rgba(255,255,255,0.06)',
                    border:'1px solid rgba(255,255,255,0.08)',
                    padding:'4px 8px', borderRadius:'6px'
                  }}>
                    <img src="https://cdn.simpleicons.org/google/EA4335" width="10" height="10" alt="Google" />
                    <span style={{fontSize:'9px', color:'rgba(255,255,255,0.4)', fontWeight:'600'}}>Verified</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Dots */}
        <div style={{display:'flex', justifyContent:'center', gap:'6px', marginBottom:'28px'}}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? '24px' : '6px',
              height:'6px', borderRadius:'3px', border:'none',
              background: i === current ? '#2463eb' : 'rgba(255,255,255,0.15)',
              cursor:'pointer', transition:'all 0.3s ease',
              padding:0
            }}/>
          ))}
        </div>

        {/* Google Rating */}
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'10px'}}>
          <div style={{display:'flex', alignItems:'center', gap:'8px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', padding:'10px 20px', borderRadius:'9999px'}}>
            <img src="https://cdn.simpleicons.org/google/EA4335" width="16" height="16" alt="Google" />
            <span style={{color:'white', fontWeight:'800', fontSize:'15px'}}>4.9</span>
            <div style={{display:'flex', gap:'2px'}}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{color:'#fbbf24', fontSize:'14px'}}>★</span>
              ))}
            </div>
            <span style={{color:'rgba(255,255,255,0.4)', fontSize:'13px'}}>· 500+ verified reviews on Google</span>
          </div>
        </div>

      </div>
    </section>
  )
}