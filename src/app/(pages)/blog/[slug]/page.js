'use client'
import { use } from 'react'
import Link from 'next/link'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const blogData = {
  'how-to-care-for-teeth': {
    title:'10 Essential Tips for Healthy Teeth',
    category:'Dental Hygiene',
    date:'March 5, 2026',
    readTime:'5 min read',
    image:'/gallery/hygineguide.jpg',
    content:[
      { heading:'1. Brush Twice Daily', text:'Brush your teeth at least twice a day using a soft-bristled toothbrush and fluoride toothpaste. Brush for at least 2 minutes each time, covering all surfaces of your teeth.' },
      { heading:'2. Floss Every Day', text:'Flossing removes plaque and food particles from between teeth where your toothbrush cannot reach. Make it a daily habit before bedtime.' },
      { heading:'3. Use Mouthwash', text:'An antibacterial mouthwash helps kill bacteria that cause gum disease and bad breath. Use it after brushing and flossing.' },
      { heading:'4. Limit Sugary Foods', text:'Sugar feeds the bacteria in your mouth that produce acid, leading to tooth decay. Limit sweets, sodas, and processed foods.' },
      { heading:'5. Drink Plenty of Water', text:'Water helps wash away food particles and bacteria. Fluoridated water also helps strengthen tooth enamel.' },
      { heading:'6. Visit Your Dentist Regularly', text:'Schedule dental checkups every 6 months for professional cleaning and early detection of any issues. At Maxface Dental Clinic, we offer comprehensive dental checkups in Bangalore.' },
      { heading:'7. Replace Your Toothbrush', text:'Replace your toothbrush every 3-4 months or sooner if the bristles are frayed.' },
      { heading:'8. Avoid Tobacco Products', text:'Smoking and chewing tobacco cause gum disease, tooth decay, and oral cancer. Quitting is the best thing you can do for your oral health.' },
      { heading:'9. Wear a Mouthguard', text:'If you play contact sports or grind your teeth at night, wear a mouthguard to protect your teeth from damage.' },
      { heading:'10. Eat a Balanced Diet', text:'Calcium-rich foods like dairy, leafy greens, and nuts help strengthen teeth. Vitamin C supports healthy gums.' },
    ]
  },
  'complete-braces-guide': {
    title:'Complete Guide to Braces & Aligners',
    category:'Orthodontics',
    date:'February 28, 2026',
    readTime:'8 min read',
    image:'/gallery/aligners.png',
    content:[
      { heading:'What is Orthodontic Treatment?', text:'Orthodontic treatment straightens or moves teeth to improve their appearance and the way they work. It can also help look after the long-term health of your teeth, gums and jaw joints.' },
      { heading:'Types of Braces Available at Maxface', text:'At Maxface Dental Clinic, Bangalore, we offer metal braces, ceramic braces, lingual braces and clear invisible aligners. Dr. Srinivasa Rao will recommend the best option based on your case.' },
      { heading:'How Long Does Treatment Take?', text:'Treatment time varies from 6 months to 2 years depending on the complexity of your case. Most patients see significant improvement within the first few months.' },
      { heading:'Invisible Aligners', text:'Clear aligners are a popular choice for adults as they are virtually invisible, removable, and comfortable. They use a series of custom-made trays to gradually move your teeth.' },
      { heading:'Care During Treatment', text:'Proper oral hygiene is essential during orthodontic treatment. Brush after every meal, floss daily, and avoid hard or sticky foods that can damage your braces.' },
      { heading:'Post Treatment Retainers', text:'After braces are removed, retainers are essential to maintain your new smile. At Maxface, we provide custom retainers and follow-up care to ensure lasting results.' },
    ]
  },
  'dental-implants-guide': {
    title:'Are Dental Implants Right for You?',
    category:'Implants',
    date:'February 20, 2026',
    readTime:'6 min read',
    image:'/gallery/blog-implants.jpg',
    content:[
      { heading:'What are Dental Implants?', text:'Dental implants are titanium posts surgically placed into the jawbone to replace missing teeth roots. They provide a permanent, natural-looking solution that functions just like your natural teeth.' },
      { heading:'Why Choose Maxface for Implants?', text:'Dr. Srinivasa Rao at Maxface Dental Clinic, Bangalore, is a certified implantologist with expertise in basic to advanced implant procedures including bone grafting and guided implant surgery.' },
      { heading:'Are You a Good Candidate?', text:'Most adults with good general health are candidates for dental implants. You need sufficient bone density and healthy gums. Dr. Srinivasa Rao will assess your suitability during a consultation.' },
      { heading:'The Implant Procedure', text:'The process involves a consultation and X-rays, implant placement surgery, a healing period of 2-3 months, followed by placement of the crown. Most patients report minimal discomfort.' },
      { heading:'Success Rate', text:'Dental implants have a success rate of over 95%. With proper care, they can last a lifetime. Maxface has successfully placed hundreds of implants in Bangalore.' },
      { heading:'Cost of Implants', text:'The cost varies depending on the number of implants and complexity of the case. Contact Maxface Dental Clinic for a personalized treatment plan and transparent pricing.' },
    ]
  },
  'tooth-pain-causes': {
    title:'Understanding Tooth Pain: Causes & Solutions',
    category:'Dental Health',
    date:'February 15, 2026',
    readTime:'4 min read',
    image:'/gallery/blog-tooth-pain.webp',
    content:[
      { heading:'Common Causes of Tooth Pain', text:'Tooth pain can be caused by tooth decay, cracked teeth, gum disease, exposed roots, or dental abscesses. It is important to identify the cause to get the right treatment.' },
      { heading:'Tooth Decay', text:'Cavities are one of the most common causes of tooth pain. When decay reaches the inner pulp of the tooth, it can cause severe pain. Early treatment with fillings can prevent further damage.' },
      { heading:'Gum Disease', text:'Periodontal disease can cause pain, swelling, and bleeding gums. At Maxface, our periodontics specialists provide comprehensive gum disease treatment in Bangalore.' },
      { heading:'Cracked Teeth', text:'A cracked tooth can cause sharp pain when biting. Depending on the severity, treatment may include bonding, a crown, or in serious cases, extraction and implant placement.' },
      { heading:'When to See a Dentist', text:'Do not ignore tooth pain. If pain persists for more than 2 days, is severe, or accompanied by fever or swelling, visit Maxface Dental Clinic immediately. Call +91 99804 77725.' },
      { heading:'Emergency Dental Care', text:'Maxface Dental Clinic in Kasturi Nagar, Bangalore provides emergency dental care. Contact us at +91 98456 55304 or +91 99804 77725 for urgent dental treatment.' },
    ]
  },
  'teeth-whitening-guide': {
    title:'Professional vs Home Teeth Whitening',
    category:'Cosmetic',
    date:'February 10, 2026',
    readTime:'5 min read',
    image:'/gallery/whitening.avif',
    content:[
      { heading:'Why Whiten Your Teeth?', text:'Teeth naturally darken over time due to food, drinks, and aging. Professional teeth whitening can brighten your smile by several shades, boosting confidence and appearance.' },
      { heading:'Professional Whitening at Maxface', text:'At Maxface Dental Clinic, Bangalore, we offer professional in-office whitening treatments that deliver safe, effective, and long-lasting results under the supervision of Dr. Srinivasa Rao.' },
      { heading:'Home Whitening Kits', text:'Over-the-counter whitening kits are cheaper but less effective. They can also cause sensitivity if not used correctly. Professional guidance ensures the best and safest results.' },
      { heading:'How Long Do Results Last?', text:'Professional whitening results can last 1-2 years with proper care. Avoid staining foods and drinks, maintain good oral hygiene, and schedule regular cleanings at Maxface.' },
      { heading:'Is Whitening Safe?', text:'Professional teeth whitening is completely safe when performed by a qualified dentist. At Maxface, we use approved whitening agents and customize the treatment to minimize sensitivity.' },
      { heading:'Who Should Avoid Whitening?', text:'Whitening is not recommended for pregnant women, people with severe sensitivity, or those with crowns and veneers. Consult Dr. Srinivasa Rao for a personalized assessment.' },
    ]
  },
  'dental-hygiene-tips': {
    title:'Best Practices for Daily Dental Hygiene',
    category:'Dental Hygiene',
    date:'February 1, 2026',
    readTime:'4 min read',
    image:'/gallery/blog-hygiene-tips.webp',
    content:[
      { heading:'The Perfect Brushing Technique', text:'Hold your brush at a 45-degree angle to your gums. Use gentle circular motions and brush for 2 minutes. Do not scrub hard as this can damage enamel and gums.' },
      { heading:'Flossing the Right Way', text:'Use about 18 inches of floss, winding most around your middle fingers. Gently slide it between teeth and curve it around each tooth in a C shape.' },
      { heading:'Choosing the Right Toothbrush', text:'A soft-bristled brush is recommended by dentists. Electric toothbrushes can be more effective at removing plaque. Replace your brush every 3-4 months.' },
      { heading:'Diet and Dental Health', text:'Reduce sugary and acidic foods. Eat more calcium-rich foods like milk, cheese, and leafy greens. Drink plenty of water throughout the day.' },
      { heading:'Regular Dental Checkups', text:'Visit Maxface Dental Clinic in Bangalore every 6 months for professional cleaning and checkups. Early detection saves time, money, and discomfort.' },
      { heading:'Tongue Cleaning', text:'Clean your tongue daily using a tongue scraper or the back of your toothbrush. This removes bacteria that cause bad breath and improves overall oral hygiene.' },
    ]
  },
}

const defaultBlog = {
  title:'Dental Health Article',
  category:'Dental Health',
  date:'March 2026',
  readTime:'5 min read',
  image:'/gallery/blog-dental-hygiene.webp',
  content:[
    { heading:'Introduction', text:'Welcome to the Maxface Dental Blog. Dr. Srinivasa Rao and our team share expert tips and guides to help you maintain a healthy, beautiful smile.' },
    { heading:'Key Takeaways', text:'Regular dental visits, proper brushing and flossing, and a healthy diet are the foundations of good oral health. Visit us at Kasturi Nagar, Bangalore.' },
  ]
}



export default function BlogPostPage({ params }) {
  const { slug } = use(params)
  const blog = blogData[slug] || { ...defaultBlog, title: slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop:'140px', paddingBottom:'0px', paddingLeft:'0px', paddingRight:'0px',
        background:'linear-gradient(160deg, #F8FAFF 0%, #EFF6FF 60%, #F0F9FF 100%)'
      }}>
        {/* Hero Image */}
        <div style={{maxWidth:'900px', margin:'0 auto', padding:'0 24px'}}>
          <Link href="/blog" style={{color:'#1D4ED8', textDecoration:'none', fontSize:'14px', fontWeight:'600', display:'inline-block', marginBottom:'24px'}}>
            ← Back to Blog
          </Link>
          <div style={{display:'flex', gap:'12px', marginBottom:'16px', flexWrap:'wrap'}}>
            <span style={{background:'#EFF6FF', color:'#1D4ED8', padding:'4px 14px', borderRadius:'20px', fontSize:'13px', fontWeight:'600'}}>
              {blog.category}
            </span>
            <span style={{color:'#94A3B8', fontSize:'13px', display:'flex', alignItems:'center'}}>{blog.date}</span>
            <span style={{color:'#94A3B8', fontSize:'13px', display:'flex', alignItems:'center'}}>⏱ {blog.readTime}</span>
          </div>
          <h1 style={{fontSize:'clamp(24px, 4vw, 48px)', fontWeight:'900', color:'#0F172A', lineHeight:'1.2', marginBottom:'32px', letterSpacing:'-1px'}}>
            {blog.title}
          </h1>
        </div>
        {/* Full width image */}
        <div style={{maxWidth:'900px', margin:'0 auto', padding:'0 24px', paddingBottom:'60px'}}>
          <div style={{borderRadius:'20px', overflow:'hidden', height:'360px'}}>
            <img
              src={blog.image}
              alt={blog.title}
              style={{width:'100%', height:'100%', objectFit:'cover'}}
              onError={e => { e.target.parentNode.style.background = '#EFF6FF'; e.target.style.display = 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{padding:'60px 24px', background:'white'}}>
        <div style={{maxWidth:'900px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 300px', gap:'48px', alignItems:'start'}}>

          {/* Article */}
          <div>
            {blog.content.map((section, i) => (
              <div key={i} style={{marginBottom:'32px', paddingBottom:'32px', borderBottom: i < blog.content.length - 1 ? '1px solid #F1F5F9' : 'none'}}>
                <h2 style={{fontSize:'20px', fontWeight:'700', color:'#0F172A', marginBottom:'12px', letterSpacing:'-0.3px'}}>
                  {section.heading}
                </h2>
                <p style={{fontSize:'16px', color:'#64748B', lineHeight:'1.8'}}>
                  {section.text}
                </p>
              </div>
            ))}

            {/* Author */}
            <div style={{
              background:'#F8FAFC', borderRadius:'16px', padding:'24px',
              display:'flex', gap:'16px', alignItems:'center',
              border:'1px solid #F1F5F9', marginTop:'40px'
            }}>
              <div style={{
                width:'60px', height:'60px', borderRadius:'50%',
                background:'linear-gradient(135deg, #1D4ED8, #0EA5E9)',
                display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', flexShrink:0
              }}>
                👨‍⚕️
              </div>
              <div>
                <div style={{fontWeight:'700', color:'#0F172A', marginBottom:'4px', fontSize:'16px'}}>Dr. Srinivasa Rao</div>
                <div style={{fontSize:'13px', color:'#64748B'}}>Oral & Maxillofacial Surgeon — Implantologist</div>
                <div style={{fontSize:'13px', color:'#1D4ED8', fontWeight:'500'}}>Maxface Dental Implant & Anaplastology Clinic, Bangalore</div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{position:'sticky', top:'100px', display:'flex', flexDirection:'column', gap:'16px'}}>
            {/* Book CTA */}
            <div style={{
              background:'linear-gradient(135deg, #EFF6FF, #F0F9FF)',
              borderRadius:'20px', padding:'24px', border:'1px solid #DBEAFE'
            }}>
              <h3 style={{fontSize:'17px', fontWeight:'700', color:'#0F172A', marginBottom:'12px'}}>
                Book a Consultation
              </h3>
              <p style={{fontSize:'13px', color:'#64748B', marginBottom:'16px', lineHeight:'1.6'}}>
                Have questions? Book a free consultation with Dr. Srinivasa Rao at Maxface Dental Clinic, Bangalore.
              </p>
              <Link href="/appointment" style={{
                display:'block', textAlign:'center',
                background:'linear-gradient(135deg, #1D4ED8, #0EA5E9)',
                color:'white', padding:'12px', borderRadius:'10px',
                textDecoration:'none', fontWeight:'700', fontSize:'14px',
                marginBottom:'10px'
              }}>
                Book Free Consultation
              </Link>
              <a href="tel:+919980477725" style={{
                display:'block', textAlign:'center',
                background:'white', color:'#1D4ED8', padding:'12px',
                borderRadius:'10px', textDecoration:'none',
                fontWeight:'600', fontSize:'14px', border:'1px solid #DBEAFE'
              }}>
                📞 +91 99804 77725
              </a>
            </div>

            {/* Clinic Info */}
            <div style={{background:'white', borderRadius:'16px', padding:'20px', border:'1px solid #F1F5F9'}}>
              <h4 style={{fontWeight:'700', color:'#0F172A', marginBottom:'12px', fontSize:'14px'}}>Maxface Dental Clinic</h4>
              <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                <div style={{fontSize:'13px', color:'#64748B', display:'flex', gap:'8px'}}>
                  <span>📍</span>
                  <span>Kasturi Nagar, East Bangalore - 560043</span>
                </div>
                <div style={{fontSize:'13px', color:'#64748B', display:'flex', gap:'8px'}}>
                  <span>🕐</span>
                  <span>Mon - Sat: 9AM - 8PM</span>
                </div>
                <div style={{fontSize:'13px', color:'#64748B', display:'flex', gap:'8px'}}>
                  <span>⭐</span>
                  <span>4.9 Google Rating</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}