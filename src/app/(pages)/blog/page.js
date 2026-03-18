'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const blogs = [
  {
    slug:'how-to-care-for-teeth',
    title:'10 Essential Tips for Healthy Teeth',
    excerpt:'Discover the most effective daily habits that dental experts recommend for maintaining strong, healthy teeth throughout your life.',
    category:'Dental Hygiene',
    date:'March 5, 2026',
    readTime:'5 min read',
    image:'/gallery/blog-dental-hygiene.webp'
  },
  {
    slug:'complete-braces-guide',
    title:'Complete Guide to Braces & Aligners',
    excerpt:'Everything you need to know about orthodontic treatment — from traditional metal braces to modern invisible aligners.',
    category:'Orthodontics',
    date:'February 28, 2026',
    readTime:'8 min read',
    image:'/gallery/aligners.png'
  },
  {
    slug:'dental-implants-guide',
    title:'Are Dental Implants Right for You?',
    excerpt:'A comprehensive guide to dental implants — who is a good candidate, what to expect, and how to care for them.',
    category:'Implants',
    date:'February 20, 2026',
    readTime:'6 min read',
    image:'/gallery/blog-implants.jpg'
  },
  {
    slug:'tooth-pain-causes',
    title:'Understanding Tooth Pain: Causes & Solutions',
    excerpt:'Tooth pain can signal various dental issues. Learn about common causes and when you should see a dentist immediately.',
    category:'Dental Health',
    date:'February 15, 2026',
    readTime:'4 min read',
    image:'/gallery/blog-tooth-pain.webp'
  },
  {
    slug:'teeth-whitening-guide',
    title:'Professional vs Home Teeth Whitening',
    excerpt:'Comparing professional dental whitening with home kits — which one gives better results and is safer for your teeth?',
    category:'Cosmetic',
    date:'February 10, 2026',
    readTime:'5 min read',
    image:'/gallery/whitening.avif'
  },
  {
    slug:'dental-hygiene-tips',
    title:'Best Practices for Daily Dental Hygiene',
    excerpt:'From brushing technique to flossing and mouthwash — build the perfect dental hygiene routine recommended by experts.',
    category:'Dental Hygiene',
    date:'February 1, 2026',
    readTime:'4 min read',
    image:'/gallery/blog-hygiene-tips.webp'
  },
]

const categories = ['All', 'Dental Hygiene', 'Orthodontics', 'Implants', 'Dental Health', 'Cosmetic']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === activeCategory)

  return (
    <>
      <Navbar />
{/* Hero */}
<section style={{
  paddingTop:'140px', paddingBottom:'80px', paddingLeft:'24px', paddingRight:'24px',
  textAlign:'center', position:'relative', overflow:'hidden', minHeight:'360px',
  display:'flex', alignItems:'center', justifyContent:'center'
}}>
  {/* Background Image */}
  <div style={{
    position:'absolute', top:0, left:0, right:0, bottom:0,
    backgroundImage:'url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&h=400&fit=crop&auto=format)',
    backgroundSize:'cover', backgroundPosition:'center',
    filter:'brightness(0.2)'
  }}/>
  {/* Gradient overlay */}
  <div style={{
    position:'absolute', top:0, left:0, right:0, bottom:0,
    background:'linear-gradient(to bottom, rgba(15,23,42,0.4), rgba(15,23,42,0.7))'
  }}/>

  {/* Content */}
  <div style={{position:'relative', zIndex:1}}>
    <div style={{
      display:'inline-block',
      background:'rgba(255,255,255,0.15)',
      color:'white', padding:'6px 16px', borderRadius:'20px',
      fontSize:'13px', fontWeight:'600', marginBottom:'16px',
      letterSpacing:'0.5px', backdropFilter:'blur(10px)',
      border:'1px solid rgba(255,255,255,0.2)'
    }}>
      DENTAL BLOG
    </div>
    <h1 style={{fontSize:'clamp(28px, 4vw, 56px)', fontWeight:'900', color:'white', marginBottom:'16px', letterSpacing:'-1px'}}>
      Dental Health Education
    </h1>
    <p style={{fontSize:'18px', color:'rgba(255,255,255,0.85)', maxWidth:'600px', margin:'0 auto', lineHeight:'1.7'}}>
      Expert tips, guides and insights from Dr. Srinivasa Rao to help you maintain a healthy, beautiful smile.
    </p>
  </div>
</section>

      {/* Blog */}
      <section style={{padding:'80px 24px', background:'white'}}>
        <div style={{maxWidth:'1280px', margin:'0 auto'}}>

          {/* Filter */}
          <div style={{display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap', marginBottom:'48px'}}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding:'9px 22px', borderRadius:'50px', border:'1.5px solid',
                borderColor: activeCategory === cat ? '#1D4ED8' : '#E2E8F0',
                background: activeCategory === cat ? '#1D4ED8' : 'white',
                color: activeCategory === cat ? 'white' : '#64748B',
                fontWeight:'600', fontSize:'13px', cursor:'pointer',
                transition:'all 0.2s'
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', gap:'24px'}}>
            {filtered.map(blog => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} style={{textDecoration:'none'}}>
                <div style={{
                  background:'white', borderRadius:'20px', overflow:'hidden',
                  border:'1px solid #F1F5F9', transition:'all 0.3s',
                  boxShadow:'0 2px 8px rgba(0,0,0,0.04)', height:'100%'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#DBEAFE'
                    e.currentTarget.style.transform = 'translateY(-6px)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(29,78,216,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#F1F5F9'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{height:'200px', overflow:'hidden', position:'relative', background:'#EFF6FF'}}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.3s'}}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                      onError={e => {
                        e.target.style.display = 'none'
                        e.target.parentNode.style.display = 'flex'
                        e.target.parentNode.style.alignItems = 'center'
                        e.target.parentNode.style.justifyContent = 'center'
                        e.target.parentNode.innerHTML = '<span style="font-size:48px">🦷</span>'
                      }}
                    />
                    {/* Category badge on image */}
                    <div style={{
                      position:'absolute', top:'12px', left:'12px',
                      background:'rgba(29,78,216,0.9)', color:'white',
                      padding:'4px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:'700'
                    }}>
                      {blog.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{padding:'20px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}>
                      <span style={{fontSize:'12px', color:'#94A3B8'}}>{blog.date}</span>
                      <span style={{fontSize:'12px', color:'#94A3B8'}}>{blog.readTime}</span>
                    </div>

                    <h3 style={{fontSize:'17px', fontWeight:'700', color:'#0F172A', marginBottom:'10px', lineHeight:'1.4'}}>
                      {blog.title}
                    </h3>

                    <p style={{fontSize:'14px', color:'#64748B', lineHeight:'1.6', marginBottom:'16px'}}>
                      {blog.excerpt}
                    </p>

                    <div style={{display:'flex', alignItems:'center', gap:'6px', color:'#1D4ED8', fontSize:'13px', fontWeight:'600'}}>
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}