'use client'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Link from 'next/link'

const doctors = [
  {
    name:'Dr. B Srinivas Rao',
    image:'/doctorphoto.jpg',
    role:'Maxillofacial Prosthodontist & Implantologist',
    about:'Academician and practitioner with extensive experience. Branemark trained specialist providing advanced prosthetic and implant solutions.',
    fallback:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&auto=format'
  },
  {
    name:'Dr. Mahantesh',
    image:'/mahantesh.jpg',
    role:'Periodontist & Implantologist',
    about:'Fellow of ICOI (USA) with specialized focus on gum health and implant dentistry, ensuring long-term oral stability.',
    fallback:'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&auto=format'
  },
  {
    name:'Dr. Dhanush',
    image:'/dhanush.jpg',
    role:'Maxillofacial Surgeon',
    about:'Specialist in Microvascular Free Flap reconstruction and complex facial surgeries, bringing high-precision surgical care.',
    fallback:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&auto=format'
  },
  {
    name:'Dr. Naveen Raj',
    image:'/naveen.png',
    role:'Oral Implantologist',
    about:'Holding a postgraduate diploma from RGUHS, specializing in advanced oral implantology and restorative dentistry.',
    fallback:'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&auto=format'
  },
  {
    name:'Dr. Deepak Kumar',
    image:'/deepakkumar.jpg',
    role:'Oral & Maxillofacial Surgeon',
    about:'Tata Memorial trained specialist with deep expertise in surgical oncology and complex oral surgeries.',
    fallback:'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&auto=format'
  },
  {
    name:'Dr. Manish',
    image:'/manish.png',
    role:'Oral & Maxillofacial Surgeon',
    about:'Expert in complex full mouth rehabilitation and advanced surgical techniques for functional and aesthetic restoration.',
    fallback:'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&auto=format'
  },
]



export default function DoctorSection() {
  return (
    <section style={{padding:'96px 0', background:'#f8fafc', overflow:'hidden'}}>
      <div style={{maxWidth:'1280px', margin:'0 auto', padding:'0 24px'}}>

      <Navbar />    
        {/* Header */}
        <div style={{marginBottom:'48px'}}>
          <p style={{fontSize:'11px', fontWeight:'700', color:'#2463eb', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'12px'}}>
            OUR SPECIALISTS
          </p>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'16px'}}>
            <div>
              <h2 style={{fontSize:'clamp(28px, 4vw, 44px)', fontWeight:'900', color:'#0f172a', letterSpacing:'-1px', marginBottom:'10px'}}>
                Meet Our Specialists
              </h2>
              <div style={{width:'60px', height:'4px', background:'#2463eb', borderRadius:'9999px', marginBottom:'16px'}}/>
              <p style={{fontSize:'16px', color:'#64748b', maxWidth:'560px', lineHeight:'1.7'}}>
                World-class expertise delivered with a gentle touch. Our diverse team of specialists is dedicated to your oral health.
              </p>
            </div>
            <Link href="/doctor" style={{
              display:'inline-flex', alignItems:'center', gap:'6px',
              color:'#2463eb', fontWeight:'700', fontSize:'14px',
              textDecoration:'none', whiteSpace:'nowrap',
              padding:'10px 20px', borderRadius:'10px',
              border:'1.5px solid #dbeafe', background:'white'
            }}>
              View All Doctors →
            </Link>
          </div>
        </div>

      </div>

      {/* Horizontal Scroll Row */}
      <div style={{
        display:'flex', overflowX:'auto', gap:'20px',
        padding:'16px 24px 40px',
        scrollSnapType:'x mandatory',
        msOverflowStyle:'none', scrollbarWidth:'none',
        paddingLeft:'max(24px, calc((100vw - 1280px) / 2 + 24px))'
      }}
        className="no-scrollbar"
      >
        {doctors.map((doc, i) => (
          <div key={doc.name} style={{
            flexShrink:0, width:'300px',
            background:'white', borderRadius:'16px',
            border:'1px solid #f1f5f9',
            boxShadow:'0 2px 8px rgba(0,0,0,0.04)',
            padding:'28px 24px',
            scrollSnapAlign:'center',
            display:'flex', flexDirection:'column', alignItems:'center',
            textAlign:'center',
            transition:'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(36,99,235,0.12)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
            }}
          >
            {/* Circular Photo */}
            <div style={{
              width:'100px', height:'100px', borderRadius:'50%',
              overflow:'hidden', marginBottom:'20px',
              border:'4px solid white',
              boxShadow:'0 4px 12px rgba(0,0,0,0.1), 0 0 0 2px rgba(36,99,235,0.15)'
            }}>
              <img
                src={doc.image}
                alt={doc.name}
                style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'top'}}
                onError={e => { e.target.src = doc.fallback }}
              />
            </div>

            {/* Name */}
            <h3 style={{fontSize:'17px', fontWeight:'800', color:'#0f172a', marginBottom:'4px', letterSpacing:'-0.3px'}}>
              {doc.name}
            </h3>

            {/* Role */}
            <p style={{fontSize:'11px', fontWeight:'700', color:'#2463eb', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'14px', lineHeight:'1.4'}}>
              {doc.role}
            </p>

            {/* About */}
            <p style={{
              fontSize:'13px', color:'#64748b', lineHeight:'1.6',
              marginBottom:'24px',
              display:'-webkit-box', WebkitLineClamp:3,
              WebkitBoxOrient:'vertical', overflow:'hidden'
            }}>
              {doc.about}
            </p>

            {/* Book Button */}
            <Link href="/appointment" style={{
              display:'block', width:'100%', textAlign:'center',
              padding:'12px',
              background:'linear-gradient(135deg, #2463eb, #0ea5e9)',
              color:'white', borderRadius:'10px',
              textDecoration:'none', fontWeight:'700', fontSize:'13px',
              boxShadow:'0 4px 12px rgba(36,99,235,0.25)',
              marginTop:'auto'
            }}>
              Book Appointment
            </Link>
          </div>
        ))}

        {/* End spacer */}
        <div style={{flexShrink:0, width:'24px'}}/>
      </div>

      {/* Scroll hint dots — mobile */}
      <div style={{display:'flex', justifyContent:'center', gap:'6px', marginTop:'8px'}}>
        <div style={{width:'28px', height:'4px', background:'#2463eb', borderRadius:'9999px'}}/>
        <div style={{width:'8px', height:'4px', background:'#e2e8f0', borderRadius:'9999px'}}/>
        <div style={{width:'8px', height:'4px', background:'#e2e8f0', borderRadius:'9999px'}}/>
      </div>

       

    </section>

    
  )
}