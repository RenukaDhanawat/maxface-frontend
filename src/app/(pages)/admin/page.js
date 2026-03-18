'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email:'', password:'' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      setError('Please fill all fields!')
      return
    }
    // Demo credentials
    if (form.email !== 'admin@maxface.com' || form.password !== 'admin123') {
      setError('Invalid credentials! Use admin@maxface.com / admin123')
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    sessionStorage.setItem('maxface_admin', JSON.stringify({ name:'Admin', email: form.email }))
    router.push('/admin/dashboard')
  }

  return (
    <div style={{
      minHeight:'100vh', background:'linear-gradient(135deg, #0F172A, #1E293B)',
      display:'flex', alignItems:'center', justifyContent:'center', padding:'24px'
    }}>
      <div style={{width:'100%', maxWidth:'420px'}}>

        {/* Logo */}
        <div style={{textAlign:'center', marginBottom:'32px'}}>
          <div style={{fontSize:'48px', marginBottom:'12px'}}>🛡️</div>
          <h1 style={{fontSize:'28px', fontWeight:'800', color:'white', marginBottom:'8px'}}>
            Admin Panel
          </h1>
          <p style={{color:'#94A3B8', fontSize:'14px'}}>MaxFace Dental Clinic</p>
        </div>

        {/* Card */}
        <div style={{background:'#1E293B', borderRadius:'24px', padding:'40px', border:'1px solid #334155'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>

            <div>
              <label style={{display:'block', fontSize:'13px', fontWeight:'600', color:'#94A3B8', marginBottom:'8px'}}>
                Email Address
              </label>
              <input
                value={form.email}
                onChange={e => setForm({...form, email:e.target.value})}
                placeholder="admin@maxface.com"
                style={{width:'100%', padding:'12px 16px', borderRadius:'12px', border:'1px solid #334155', background:'#0F172A', color:'white', fontSize:'15px', outline:'none', boxSizing:'border-box'}}
              />
            </div>

            <div>
              <label style={{display:'block', fontSize:'13px', fontWeight:'600', color:'#94A3B8', marginBottom:'8px'}}>
                Password
              </label>
              <input
                type="password"
                value={form.password}
                onChange={e => setForm({...form, password:e.target.value})}
                placeholder="Enter password"
                style={{width:'100%', padding:'12px 16px', borderRadius:'12px', border:'1px solid #334155', background:'#0F172A', color:'white', fontSize:'15px', outline:'none', boxSizing:'border-box'}}
              />
            </div>

            {error && (
              <div style={{background:'#FEE2E2', color:'#EF4444', padding:'12px 16px', borderRadius:'10px', fontSize:'13px'}}>
                ⚠️ {error}
              </div>
            )}

            {/* Demo hint */}
            <div style={{background:'#0F172A', borderRadius:'10px', padding:'12px 16px', border:'1px solid #334155'}}>
              <p style={{color:'#64748B', fontSize:'12px', marginBottom:'4px'}}>Demo Credentials:</p>
              <p style={{color:'#94A3B8', fontSize:'12px'}}>📧 admin@maxface.com</p>
              <p style={{color:'#94A3B8', fontSize:'12px'}}>🔑 admin123</p>
            </div>

            <button
              onClick={handleSubmit} disabled={loading}
              style={{
                width:'100%', padding:'14px',
                background: loading ? '#334155' : 'linear-gradient(135deg, #3B9EFF, #2563EB)',
                color:'white', border:'none', borderRadius:'12px',
                fontSize:'16px', fontWeight:'700', cursor: loading ? 'not-allowed' : 'pointer',
                marginTop:'8px'
              }}
            >
              {loading ? '⏳ Signing in...' : '🔐 Sign In to Admin'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}