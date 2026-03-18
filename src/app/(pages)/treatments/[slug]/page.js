import Link from 'next/link'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const treatmentData = {
  'dental-implants': {
    icon:'⚙️', title:'Dental Implants', cost:'₹25,000 - ₹80,000', time:'2-3 months',
    description:'Dental implants are titanium posts surgically placed into the jawbone to replace missing teeth roots. They provide a permanent, natural-looking solution for missing teeth.',
    benefits:['Looks and feels like natural teeth','Permanent long-lasting solution','Prevents bone loss','No slipping or discomfort','Easy to maintain'],
    procedure:['Initial consultation and X-rays','Implant placement surgery','Healing period (2-3 months)','Abutment placement','Crown attachment'],
    faqs:[
      { q:'Are dental implants painful?', a:'The procedure is done under local anaesthesia. You may feel mild discomfort for a few days after surgery.' },
      { q:'How long do implants last?', a:'With proper care, dental implants can last a lifetime.' },
    ]
  },
  'root-canal': {
    icon:'🔬', title:'Root Canal Treatment', cost:'₹3,000 - ₹8,000', time:'1-2 sittings',
    description:'Root canal treatment removes infected pulp from inside the tooth, cleans the root canals, and seals the tooth to prevent future infection.',
    benefits:['Saves the natural tooth','Eliminates pain and infection','Quick recovery','Cost-effective','Long-lasting results'],
    procedure:['X-ray to assess infection','Local anaesthesia','Pulp removal','Canal cleaning and shaping','Filling and crown placement'],
    faqs:[
      { q:'Is root canal painful?', a:'With modern techniques and anaesthesia, root canal is virtually painless.' },
      { q:'How many sittings are needed?', a:'Usually 1-2 sittings depending on infection severity.' },
    ]
  },
}

// Default data for other treatments
const defaultData = {
  icon:'🦷', title:'Dental Treatment', cost:'Consult for pricing', time:'Varies',
  description:'We provide world-class dental treatments using the latest technology and techniques for the best results.',
  benefits:['Expert specialists','Latest technology','Pain-free procedures','Affordable pricing','Guaranteed results'],
  procedure:['Initial consultation','Diagnosis and treatment planning','Treatment procedure','Follow-up care','Maintenance guidance'],
  faqs:[
    { q:'How do I prepare for the treatment?', a:'Our team will guide you through all preparation steps during consultation.' },
    { q:'What is the recovery time?', a:'Recovery time varies by treatment. Our doctor will advise you accordingly.' },
  ]
}

export default function TreatmentDetailPage({ params }) {
  const data = treatmentData[params.slug] || { ...defaultData, title: params.slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop:'140px', paddingBottom:'60px', paddingLeft:'24px', paddingRight:'24px',
        background:'linear-gradient(135deg, #EFF6FF, #F0FDFA)'
      }}>
        <div style={{maxWidth:'900px', margin:'0 auto'}}>
          <Link href="/treatments" style={{color:'#3B9EFF', textDecoration:'none', fontSize:'14px', display:'inline-block', marginBottom:'20px'}}>
            ← Back to Treatments
          </Link>
          <div style={{display:'flex', alignItems:'center', gap:'20px', marginBottom:'20px'}}>
            <div style={{
              width:'80px', height:'80px', background:'white', borderRadius:'20px',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'40px', boxShadow:'0 8px 24px rgba(0,0,0,0.1)'
            }}>
              {data.icon}
            </div>
            <div>
              <h1 style={{fontSize:'clamp(28px, 4vw, 48px)', fontWeight:'800', color:'#1A1A2E'}}>
                {data.title}
              </h1>
              <div style={{display:'flex', gap:'16px', marginTop:'8px'}}>
                <span style={{background:'#DBEAFE', color:'#3B9EFF', padding:'4px 12px', borderRadius:'20px', fontSize:'13px', fontWeight:'500'}}>
                  💰 {data.cost}
                </span>
                <span style={{background:'#DCFCE7', color:'#16A34A', padding:'4px 12px', borderRadius:'20px', fontSize:'13px', fontWeight:'500'}}>
                  ⏱ {data.time}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{padding:'60px 24px', background:'white'}}>
        <div style={{maxWidth:'900px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 340px', gap:'40px', alignItems:'start'}}>

          {/* Left */}
          <div>
            {/* Description */}
            <div style={{marginBottom:'40px'}}>
              <h2 style={{fontSize:'22px', fontWeight:'700', color:'#1A1A2E', marginBottom:'16px'}}>About This Treatment</h2>
              <p style={{fontSize:'16px', color:'#6B7280', lineHeight:'1.8'}}>{data.description}</p>
            </div>

            {/* Benefits */}
            <div style={{marginBottom:'40px'}}>
              <h2 style={{fontSize:'22px', fontWeight:'700', color:'#1A1A2E', marginBottom:'16px'}}>Benefits</h2>
              <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                {data.benefits.map((b) => (
                  <div key={b} style={{display:'flex', gap:'12px', alignItems:'center', background:'#F0FDF4', padding:'14px 18px', borderRadius:'12px'}}>
                    <span style={{color:'#16A34A', fontSize:'18px'}}>✓</span>
                    <span style={{color:'#374151', fontSize:'15px'}}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedure */}
            <div style={{marginBottom:'40px'}}>
              <h2 style={{fontSize:'22px', fontWeight:'700', color:'#1A1A2E', marginBottom:'16px'}}>Procedure Steps</h2>
              <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                {data.procedure.map((step, i) => (
                  <div key={i} style={{display:'flex', gap:'16px', alignItems:'center'}}>
                    <div style={{
                      width:'36px', height:'36px', flexShrink:0,
                      background:'linear-gradient(135deg, #3B9EFF, #2563EB)',
                      borderRadius:'50%', display:'flex', alignItems:'center',
                      justifyContent:'center', color:'white', fontWeight:'700', fontSize:'14px'
                    }}>
                      {i + 1}
                    </div>
                    <span style={{color:'#374151', fontSize:'15px'}}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 style={{fontSize:'22px', fontWeight:'700', color:'#1A1A2E', marginBottom:'16px'}}>Frequently Asked Questions</h2>
              <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                {data.faqs.map((faq, i) => (
                  <div key={i} style={{background:'#F8FAFF', borderRadius:'14px', padding:'20px', border:'1px solid #E5EDFF'}}>
                    <h4 style={{fontWeight:'700', color:'#1A1A2E', marginBottom:'8px', fontSize:'15px'}}>❓ {faq.q}</h4>
                    <p style={{color:'#6B7280', fontSize:'14px', lineHeight:'1.6'}}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Booking Card */}
          <div style={{
            background:'linear-gradient(135deg, #EFF6FF, #F0FDFA)',
            borderRadius:'20px', padding:'28px',
            border:'2px solid #DBEAFE', position:'sticky', top:'100px'
          }}>
            <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1A1A2E', marginBottom:'8px'}}>
              Book This Treatment
            </h3>
            <p style={{color:'#6B7280', fontSize:'14px', marginBottom:'24px'}}>
              Schedule your appointment with Dr. Rajesh Sharma today.
            </p>
            <div style={{display:'flex', flexDirection:'column', gap:'12px', marginBottom:'24px'}}>
              <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid #DBEAFE'}}>
                <span style={{color:'#6B7280', fontSize:'14px'}}>Cost Range</span>
                <span style={{fontWeight:'600', color:'#1A1A2E', fontSize:'14px'}}>{data.cost}</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid #DBEAFE'}}>
                <span style={{color:'#6B7280', fontSize:'14px'}}>Duration</span>
                <span style={{fontWeight:'600', color:'#1A1A2E', fontSize:'14px'}}>{data.time}</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0'}}>
                <span style={{color:'#6B7280', fontSize:'14px'}}>Doctor</span>
                <span style={{fontWeight:'600', color:'#1A1A2E', fontSize:'14px'}}>Dr. Rajesh Sharma</span>
              </div>
            </div>
            <Link href="/appointment" style={{
              display:'block', textAlign:'center',
              background:'linear-gradient(135deg, #3B9EFF, #2563EB)',
              color:'white', padding:'14px', borderRadius:'12px',
              textDecoration:'none', fontWeight:'700', fontSize:'15px',
              marginBottom:'12px'
            }}>
              📅 Book Appointment
            </Link>
            <a href="tel:+911234567890" style={{
              display:'block', textAlign:'center',
              background:'white', color:'#3B9EFF', padding:'14px',
              borderRadius:'12px', textDecoration:'none',
              fontWeight:'600', fontSize:'15px', border:'2px solid #3B9EFF'
            }}>
              📞 Call Us
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}