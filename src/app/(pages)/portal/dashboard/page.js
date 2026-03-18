'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const mockAppointments = [
  { id:1, treatment:'Teeth Whitening',  date:'March 20, 2026', time:'10:00 AM', status:'confirmed', doctor:'Dr. Rajesh Sharma' },
  { id:2, treatment:'Dental Checkup',   date:'February 10, 2026', time:'11:30 AM', status:'completed', doctor:'Dr. Rajesh Sharma' },
  { id:3, treatment:'Root Canal',       date:'January 15, 2026', time:'3:00 PM',  status:'completed', doctor:'Dr. Rajesh Sharma' },
]

const statusColors = {
  confirmed: { bg:'#DCFCE7', color:'#16A34A' },
  completed:  { bg:'#DBEAFE', color:'#2563EB' },
  cancelled:  { bg:'#FEE2E2', color:'#EF4444' },
  pending:    { bg:'#FEF3C7', color:'#D97706' },
}

export default function DashboardPage() {
  const [user,        setUser]        = useState(null)
  const [activeTab,   setActiveTab]   = useState('overview')
  const router = useRouter()

  useEffect(() => {
    const stored = sessionStorage.getItem('maxface_user')
    if (!stored) {
      router.push('/portal')
      return
    }
    setUser(JSON.parse(stored))
  }, [router])

  const handleLogout = () => {
    sessionStorage.removeItem('maxface_user')
    router.push('/portal')
  }

  if (!user) return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div style={{fontSize:'32px'}}>⏳ Loading...</div>
    </div>
  )

  const tabs = [
    { id:'overview',     label:'Overview',     icon:'🏠' },
    { id:'appointments', label:'Appointments', icon:'📅' },
    { id:'profile',      label:'My Profile',   icon:'👤' },
  ]

  return (
    <>
      <Navbar />
      <div style={{minHeight:'100vh', background:'#F8FAFF', paddingTop:'80px'}}>
        <div style={{maxWidth:'1200px', margin:'0 auto', padding:'40px 24px'}}>

          {/* Header */}
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'32px', flexWrap:'wrap', gap:'16px'}}>
            <div>
              <h1 style={{fontSize:'28px', fontWeight:'800', color:'#1A1A2E', marginBottom:'4px'}}>
                Welcome back, {user.name}! 👋
              </h1>
              <p style={{color:'#6B7280', fontSize:'15px'}}>{user.email}</p>
            </div>
            <div style={{display:'flex', gap:'12px'}}>
              <Link href="/appointment" style={{
                background:'linear-gradient(135deg, #3B9EFF, #2563EB)',
                color:'white', padding:'10px 22px', borderRadius:'50px',
                textDecoration:'none', fontWeight:'600', fontSize:'14px'
              }}>
                📅 Book Appointment
              </Link>
              <button onClick={handleLogout} style={{
                background:'white', color:'#EF4444', padding:'10px 22px',
                borderRadius:'50px', border:'2px solid #FEE2E2',
                fontWeight:'600', fontSize:'14px', cursor:'pointer'
              }}>
                🚪 Logout
              </button>
            </div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'240px 1fr', gap:'24px', alignItems:'start'}}>

            {/* Sidebar */}
            <div style={{background:'white', borderRadius:'20px', padding:'16px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}>
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                  width:'100%', padding:'12px 16px', borderRadius:'12px',
                  border:'none', cursor:'pointer', textAlign:'left',
                  display:'flex', alignItems:'center', gap:'10px',
                  background: activeTab === tab.id ? '#EFF6FF' : 'transparent',
                  color: activeTab === tab.id ? '#3B9EFF' : '#6B7280',
                  fontWeight: activeTab === tab.id ? '600' : '400',
                  fontSize:'14px', marginBottom:'4px', transition:'all 0.2s'
                }}>
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div>

              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  {/* Stats */}
                  <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', gap:'16px', marginBottom:'24px'}}>
                    {[
                      { icon:'📅', label:'Total Appointments', value:'3',        color:'#3B9EFF' },
                      { icon:'✅', label:'Completed',          value:'2',        color:'#16A34A' },
                      { icon:'⏳', label:'Upcoming',           value:'1',        color:'#D97706' },
                      { icon:'⭐', label:'My Rating',          value:'5.0',      color:'#7C3AED' },
                    ].map(stat => (
                      <div key={stat.label} style={{
                        background:'white', borderRadius:'16px', padding:'20px',
                        boxShadow:'0 4px 20px rgba(0,0,0,0.06)', textAlign:'center'
                      }}>
                        <div style={{fontSize:'28px', marginBottom:'8px'}}>{stat.icon}</div>
                        <div style={{fontSize:'24px', fontWeight:'800', color:stat.color, marginBottom:'4px'}}>{stat.value}</div>
                        <div style={{fontSize:'12px', color:'#6B7280'}}>{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Upcoming Appointment */}
                  <div style={{background:'linear-gradient(135deg, #3B9EFF, #2563EB)', borderRadius:'20px', padding:'28px', color:'white', marginBottom:'24px'}}>
                    <h3 style={{fontSize:'16px', fontWeight:'600', opacity:0.9, marginBottom:'12px'}}>
                      Next Appointment
                    </h3>
                    <h2 style={{fontSize:'22px', fontWeight:'800', marginBottom:'8px'}}>
                      {mockAppointments[0].treatment}
                    </h2>
                    <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
                      <span style={{opacity:0.9, fontSize:'14px'}}>📅 {mockAppointments[0].date}</span>
                      <span style={{opacity:0.9, fontSize:'14px'}}>🕐 {mockAppointments[0].time}</span>
                      <span style={{opacity:0.9, fontSize:'14px'}}>👨‍⚕️ {mockAppointments[0].doctor}</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div style={{background:'white', borderRadius:'20px', padding:'24px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}>
                    <h3 style={{fontSize:'18px', fontWeight:'700', color:'#1A1A2E', marginBottom:'16px'}}>Quick Actions</h3>
                    <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:'12px'}}>
                      {[
                        { icon:'📅', label:'Book Appointment', href:'/appointment' },
                        { icon:'🦷', label:'View Treatments',  href:'/treatments' },
                        { icon:'📞', label:'Contact Clinic',   href:'/contact' },
                        { icon:'💬', label:'Chat with AI',     href:'#' },
                      ].map(action => (
                        <Link key={action.label} href={action.href} style={{
                          textDecoration:'none', background:'#F8FAFF',
                          borderRadius:'12px', padding:'16px', textAlign:'center',
                          border:'2px solid #E5EDFF', display:'block'
                        }}>
                          <div style={{fontSize:'24px', marginBottom:'8px'}}>{action.icon}</div>
                          <div style={{fontSize:'13px', fontWeight:'600', color:'#374151'}}>{action.label}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Appointments Tab */}
              {activeTab === 'appointments' && (
                <div style={{background:'white', borderRadius:'20px', padding:'24px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px'}}>
                    <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1A1A2E'}}>My Appointments</h3>
                    <Link href="/appointment" style={{
                      background:'linear-gradient(135deg, #3B9EFF, #2563EB)',
                      color:'white', padding:'8px 18px', borderRadius:'50px',
                      textDecoration:'none', fontSize:'13px', fontWeight:'600'
                    }}>
                      + Book New
                    </Link>
                  </div>
                  <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                    {mockAppointments.map(apt => (
                      <div key={apt.id} style={{
                        display:'flex', justifyContent:'space-between', alignItems:'center',
                        padding:'20px', background:'#F8FAFF', borderRadius:'14px',
                        border:'1px solid #E5EDFF', flexWrap:'wrap', gap:'12px'
                      }}>
                        <div style={{display:'flex', gap:'16px', alignItems:'center'}}>
                          <div style={{
                            width:'48px', height:'48px', background:'linear-gradient(135deg, #EFF6FF, #F0FDFA)',
                            borderRadius:'12px', display:'flex', alignItems:'center',
                            justifyContent:'center', fontSize:'24px'
                          }}>🦷</div>
                          <div>
                            <div style={{fontWeight:'700', color:'#1A1A2E', marginBottom:'4px'}}>{apt.treatment}</div>
                            <div style={{fontSize:'13px', color:'#6B7280'}}>{apt.date} • {apt.time}</div>
                            <div style={{fontSize:'13px', color:'#6B7280'}}>{apt.doctor}</div>
                          </div>
                        </div>
                        <span style={{
                          padding:'6px 14px', borderRadius:'20px', fontSize:'12px', fontWeight:'600',
                          background: statusColors[apt.status]?.bg,
                          color: statusColors[apt.status]?.color
                        }}>
                          {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div style={{background:'white', borderRadius:'20px', padding:'32px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}>
                  <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1A1A2E', marginBottom:'28px'}}>My Profile</h3>

                  {/* Avatar */}
                  <div style={{display:'flex', alignItems:'center', gap:'20px', marginBottom:'32px', padding:'24px', background:'#F8FAFF', borderRadius:'16px'}}>
                    <div style={{
                      width:'80px', height:'80px', borderRadius:'50%',
                      background:'linear-gradient(135deg, #3B9EFF, #4ECDC4)',
                      display:'flex', alignItems:'center', justifyContent:'center', fontSize:'36px'
                    }}>👤</div>
                    <div>
                      <div style={{fontSize:'22px', fontWeight:'800', color:'#1A1A2E'}}>{user.name}</div>
                      <div style={{color:'#6B7280', fontSize:'14px'}}>{user.email}</div>
                      <div style={{color:'#3B9EFF', fontSize:'13px', fontWeight:'600', marginTop:'4px'}}>✓ Verified Patient</div>
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                    {[
                      { label:'Full Name',    value:user.name,  icon:'👤' },
                      { label:'Email',        value:user.email, icon:'📧' },
                      { label:'Phone',        value:'+91 XXXXX XXXXX', icon:'📞' },
                      { label:'Member Since', value:'March 2026',      icon:'📅' },
                    ].map(field => (
                      <div key={field.label} style={{
                        display:'flex', justifyContent:'space-between', alignItems:'center',
                        padding:'16px', background:'#F8FAFF', borderRadius:'12px',
                        border:'1px solid #E5EDFF'
                      }}>
                        <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
                          <span style={{fontSize:'20px'}}>{field.icon}</span>
                          <span style={{color:'#6B7280', fontSize:'14px'}}>{field.label}</span>
                        </div>
                        <span style={{fontWeight:'600', color:'#1A1A2E', fontSize:'14px'}}>{field.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}