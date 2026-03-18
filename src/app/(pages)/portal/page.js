'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

export default function PortalPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', phone:'', password:'' })
  const router = useRouter()

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})

const handleSubmit = async () => {
  if (!form.email || !form.password) {
    alert('Please fill all required fields!')
    return
  }
  setLoading(true)
  try {
    const endpoint = isLogin ? 'login' : 'register'
    const body = isLogin
      ? { email: form.email, password: form.password }
      : { name: form.name, email: form.email, phone: form.phone, password: form.password }

    const response = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const data = await response.json()

    if (data.success) {
      sessionStorage.setItem('maxface_user', JSON.stringify({
        name: data.user.name,
        email: data.user.email,
        token: data.token
      }))
      router.push('/portal/dashboard')
    } else {
      alert(data.message || 'Something went wrong!')
    }
  } catch (error) {
    alert('Cannot connect to server!')
  }
  setLoading(false)
}

  return (
    <>
      <Navbar />
      <div style={{
        minHeight:'100vh', background:'linear-gradient(135deg, #EFF6FF, #F0FDFA)',
        display:'flex', alignItems:'center', justifyContent:'center',
        paddingTop:'80px', paddingBottom:'40px', padding:'100px 24px 40px'
      }}>
        <div style={{width:'100%', maxWidth:'460px'}}>

          {/* Logo */}
          <div style={{textAlign:'center', marginBottom:'32px'}}>
            <div style={{fontSize:'48px', marginBottom:'12px'}}>🦷</div>
            <h1 style={{fontSize:'28px', fontWeight:'800', color:'#1A1A2E', marginBottom:'8px'}}>
              Patient Portal
            </h1>
            <p style={{color:'#6B7280', fontSize:'15px'}}>
              {isLogin ? 'Welcome back! Sign in to your account.' : 'Create your account to get started.'}
            </p>
          </div>

          {/* Card */}
          <div style={{background:'white', borderRadius:'24px', padding:'40px', boxShadow:'0 20px 60px rgba(0,0,0,0.08)'}}>

            {/* Toggle */}
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', background:'#F3F4F6', borderRadius:'12px', padding:'4px', marginBottom:'28px'}}>
              <button onClick={() => setIsLogin(true)} style={{
                padding:'10px', borderRadius:'10px', border:'none', cursor:'pointer',
                background: isLogin ? 'white' : 'transparent',
                color: isLogin ? '#3B9EFF' : '#6B7280',
                fontWeight:'600', fontSize:'14px',
                boxShadow: isLogin ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                transition:'all 0.2s'
              }}>
                Sign In
              </button>
              <button onClick={() => setIsLogin(false)} style={{
                padding:'10px', borderRadius:'10px', border:'none', cursor:'pointer',
                background: !isLogin ? 'white' : 'transparent',
                color: !isLogin ? '#3B9EFF' : '#6B7280',
                fontWeight:'600', fontSize:'14px',
                boxShadow: !isLogin ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                transition:'all 0.2s'
              }}>
                Register
              </button>
            </div>

            {/* Form Fields */}
            <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>

              {!isLogin && (
                <div>
                  <label style={{display:'block', fontSize:'14px', fontWeight:'600', color:'#374151', marginBottom:'8px'}}>Full Name *</label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    placeholder="Enter your full name"
                    style={{width:'100%', padding:'12px 16px', borderRadius:'12px', border:'2px solid #E5E7EB', fontSize:'15px', outline:'none', boxSizing:'border-box'}}
                  />
                </div>
              )}

              <div>
                <label style={{display:'block', fontSize:'14px', fontWeight:'600', color:'#374151', marginBottom:'8px'}}>Email Address *</label>
                <input
                  name="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com" type="email"
                  style={{width:'100%', padding:'12px 16px', borderRadius:'12px', border:'2px solid #E5E7EB', fontSize:'15px', outline:'none', boxSizing:'border-box'}}
                />
              </div>

              {!isLogin && (
                <div>
                  <label style={{display:'block', fontSize:'14px', fontWeight:'600', color:'#374151', marginBottom:'8px'}}>Phone Number *</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    style={{width:'100%', padding:'12px 16px', borderRadius:'12px', border:'2px solid #E5E7EB', fontSize:'15px', outline:'none', boxSizing:'border-box'}}
                  />
                </div>
              )}

              <div>
                <label style={{display:'block', fontSize:'14px', fontWeight:'600', color:'#374151', marginBottom:'8px'}}>Password *</label>
                <input
                  name="password" value={form.password} onChange={handleChange}
                  placeholder="Enter your password" type="password"
                  style={{width:'100%', padding:'12px 16px', borderRadius:'12px', border:'2px solid #E5E7EB', fontSize:'15px', outline:'none', boxSizing:'border-box'}}
                />
              </div>

              <button
                onClick={handleSubmit} disabled={loading}
                style={{
                  width:'100%', padding:'14px',
                  background: loading ? '#93C5FD' : 'linear-gradient(135deg, #3B9EFF, #2563EB)',
                  color:'white', border:'none', borderRadius:'12px',
                  fontSize:'16px', fontWeight:'700', cursor: loading ? 'not-allowed' : 'pointer',
                  marginTop:'8px'
                }}
              >
                {loading ? '⏳ Please wait...' : isLogin ? '🔐 Sign In' : '🚀 Create Account'}
              </button>

            </div>

            {/* Divider */}
            <div style={{textAlign:'center', margin:'20px 0', color:'#9CA3AF', fontSize:'13px'}}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={() => setIsLogin(!isLogin)} style={{
                background:'none', border:'none', color:'#3B9EFF',
                fontWeight:'600', cursor:'pointer', marginLeft:'6px', fontSize:'13px'
              }}>
                {isLogin ? 'Register here' : 'Sign in here'}
              </button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}