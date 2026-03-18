'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const mockAppointments = [
  { id:1, patient:'Priya Mehta',   treatment:'Smile Makeover',  date:'Mar 20, 2026', time:'10:00 AM', status:'confirmed', phone:'+91 98765 43210' },
  { id:2, patient:'Rahul Verma',   treatment:'Dental Implants', date:'Mar 21, 2026', time:'11:30 AM', status:'pending',   phone:'+91 87654 32109' },
  { id:3, patient:'Sneha Patel',   treatment:'Teeth Whitening', date:'Mar 22, 2026', time:'2:00 PM',  status:'confirmed', phone:'+91 76543 21098' },
  { id:4, patient:'Amit Kumar',    treatment:'Root Canal',      date:'Mar 23, 2026', time:'3:30 PM',  status:'pending',   phone:'+91 65432 10987' },
  { id:5, patient:'Kavya Sharma',  treatment:'Braces',          date:'Mar 24, 2026', time:'5:00 PM',  status:'cancelled', phone:'+91 54321 09876' },
]

const mockContacts = [
  { id:1, name:'Ravi Kumar',    email:'ravi@gmail.com',   message:'I need info about dental implants pricing', date:'Mar 12, 2026', read:false },
  { id:2, name:'Anita Singh',   email:'anita@gmail.com',  message:'When is the earliest appointment available?', date:'Mar 11, 2026', read:true },
  { id:3, name:'Suresh Patil',  email:'suresh@gmail.com', message:'Do you provide EMI options for treatments?', date:'Mar 10, 2026', read:false },
]

const statusColors = {
  confirmed: { bg:'#DCFCE7', color:'#16A34A' },
  pending:   { bg:'#FEF3C7', color:'#D97706' },
  cancelled: { bg:'#FEE2E2', color:'#EF4444' },
  completed: { bg:'#DBEAFE', color:'#2563EB' },
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [admin, setAdmin] = useState(null)
  const [appointments, setAppointments] = useState(mockAppointments)
  const router = useRouter()

  useEffect(() => {
    const stored = sessionStorage.getItem('maxface_admin')
    if (!stored) { router.push('/admin'); return }
    setAdmin(JSON.parse(stored))
  }, [router])

  const updateStatus = (id, status) => {
    setAppointments(prev => prev.map(a => a.id === id ? {...a, status} : a))
  }

  if (!admin) return (
    <div style={{minHeight:'100vh', background:'#0F172A', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div style={{color:'white', fontSize:'24px'}}>⏳ Loading...</div>
    </div>
  )

  const tabs = [
    { id:'overview',     label:'Overview',     icon:'📊' },
    { id:'appointments', label:'Appointments', icon:'📅' },
    { id:'contacts',     label:'Messages',     icon:'💬' },
    { id:'analytics',    label:'Analytics',    icon:'📈' },
  ]

  const stats = [
    { icon:'📅', label:'Total Appointments', value:'124',  change:'+12%', color:'#3B9EFF' },
    { icon:'✅', label:'Confirmed Today',    value:'8',    change:'+3',   color:'#16A34A' },
    { icon:'⏳', label:'Pending',            value:'5',    change:'-2',   color:'#D97706' },
    { icon:'💬', label:'New Messages',       value:'3',    change:'New',  color:'#7C3AED' },
    { icon:'👥', label:'Total Patients',     value:'523',  change:'+28',  color:'#EC4899' },
    { icon:'💰', label:'Revenue (Month)',    value:'₹2.4L', change:'+18%', color:'#059669' },
  ]

  return (
    <div style={{minHeight:'100vh', background:'#F8FAFF', display:'flex'}}>

      {/* Sidebar */}
      <div style={{
        width:'240px', flexShrink:0, background:'#0F172A',
        minHeight:'100vh', padding:'24px 16px',
        display:'flex', flexDirection:'column'
      }}>
        {/* Logo */}
        <div style={{marginBottom:'32px', padding:'0 8px'}}>
          <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'4px'}}>
            <div style={{fontSize:'24px'}}>🦷</div>
            <div>
              <span style={{color:'#3B9EFF', fontWeight:'800', fontSize:'18px'}}>Max</span>
              <span style={{color:'white', fontWeight:'800', fontSize:'18px'}}>Face</span>
            </div>
          </div>
          <div style={{color:'#64748B', fontSize:'12px', paddingLeft:'34px'}}>Admin Panel</div>
        </div>

        {/* Nav */}
        <div style={{flex:1, display:'flex', flexDirection:'column', gap:'4px'}}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              width:'100%', padding:'12px 16px', borderRadius:'12px',
              border:'none', cursor:'pointer', textAlign:'left',
              display:'flex', alignItems:'center', gap:'10px',
              background: activeTab === tab.id ? '#1E3A5F' : 'transparent',
              color: activeTab === tab.id ? '#3B9EFF' : '#94A3B8',
              fontWeight: activeTab === tab.id ? '600' : '400',
              fontSize:'14px', transition:'all 0.2s'
            }}>
              <span>{tab.icon}</span>{tab.label}
            </button>
          ))}
        </div>

        {/* Bottom */}
        <div style={{borderTop:'1px solid #1E293B', paddingTop:'16px'}}>
          <div style={{padding:'12px 16px', marginBottom:'8px'}}>
            <div style={{color:'white', fontWeight:'600', fontSize:'14px'}}>{admin.name}</div>
            <div style={{color:'#64748B', fontSize:'12px'}}>{admin.email}</div>
          </div>
          <button onClick={() => { sessionStorage.removeItem('maxface_admin'); router.push('/admin') }} style={{
            width:'100%', padding:'10px 16px', borderRadius:'10px',
            border:'none', background:'#1E293B', color:'#EF4444',
            fontSize:'13px', fontWeight:'600', cursor:'pointer', textAlign:'left'
          }}>
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{flex:1, overflow:'auto'}}>

        {/* Top Bar */}
        <div style={{background:'white', padding:'16px 32px', borderBottom:'1px solid #E5E7EB', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h1 style={{fontSize:'22px', fontWeight:'800', color:'#1A1A2E'}}>
            {tabs.find(t => t.id === activeTab)?.icon} {tabs.find(t => t.id === activeTab)?.label}
          </h1>
          <div style={{display:'flex', gap:'12px'}}>
            <Link href="/" style={{color:'#3B9EFF', textDecoration:'none', fontSize:'13px', fontWeight:'600'}}>
              ← View Website
            </Link>
          </div>
        </div>

        <div style={{padding:'32px'}}>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              {/* Stats Grid */}
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'16px', marginBottom:'32px'}}>
                {stats.map(stat => (
                  <div key={stat.label} style={{
                    background:'white', borderRadius:'16px', padding:'20px',
                    boxShadow:'0 4px 20px rgba(0,0,0,0.06)'
                  }}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'12px'}}>
                      <div style={{fontSize:'28px'}}>{stat.icon}</div>
                      <span style={{
                        background:'#F0FDF4', color:'#16A34A',
                        padding:'3px 8px', borderRadius:'20px', fontSize:'11px', fontWeight:'600'
                      }}>
                        {stat.change}
                      </span>
                    </div>
                    <div style={{fontSize:'28px', fontWeight:'800', color:stat.color, marginBottom:'4px'}}>
                      {stat.value}
                    </div>
                    <div style={{fontSize:'13px', color:'#6B7280'}}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent Appointments */}
              <div style={{background:'white', borderRadius:'20px', padding:'24px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)', marginBottom:'24px'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
                  <h3 style={{fontSize:'18px', fontWeight:'700', color:'#1A1A2E'}}>Recent Appointments</h3>
                  <button onClick={() => setActiveTab('appointments')} style={{color:'#3B9EFF', background:'none', border:'none', cursor:'pointer', fontSize:'13px', fontWeight:'600'}}>
                    View All →
                  </button>
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
                  {appointments.slice(0,3).map(apt => (
                    <div key={apt.id} style={{
                      display:'flex', justifyContent:'space-between', alignItems:'center',
                      padding:'16px', background:'#F8FAFF', borderRadius:'12px', flexWrap:'wrap', gap:'8px'
                    }}>
                      <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
                        <div style={{width:'40px', height:'40px', background:'linear-gradient(135deg, #EFF6FF, #F0FDFA)', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px'}}>
                          👤
                        </div>
                        <div>
                          <div style={{fontWeight:'600', color:'#1A1A2E', fontSize:'14px'}}>{apt.patient}</div>
                          <div style={{color:'#6B7280', fontSize:'12px'}}>{apt.treatment} • {apt.date} {apt.time}</div>
                        </div>
                      </div>
                      <span style={{
                        padding:'5px 12px', borderRadius:'20px', fontSize:'12px', fontWeight:'600',
                        background:statusColors[apt.status]?.bg, color:statusColors[apt.status]?.color
                      }}>
                        {apt.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats Row */}
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px'}}>
                <div style={{background:'linear-gradient(135deg, #3B9EFF, #2563EB)', borderRadius:'20px', padding:'24px', color:'white'}}>
                  <div style={{fontSize:'32px', marginBottom:'8px'}}>📅</div>
                  <div style={{fontSize:'36px', fontWeight:'800', marginBottom:'4px'}}>8</div>
                  <div style={{opacity:0.9, fontSize:'14px'}}>Appointments Today</div>
                </div>
                <div style={{background:'linear-gradient(135deg, #4ECDC4, #059669)', borderRadius:'20px', padding:'24px', color:'white'}}>
                  <div style={{fontSize:'32px', marginBottom:'8px'}}>💰</div>
                  <div style={{fontSize:'36px', fontWeight:'800', marginBottom:'4px'}}>₹2.4L</div>
                  <div style={{opacity:0.9, fontSize:'14px'}}>Revenue This Month</div>
                </div>
              </div>
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <div style={{background:'white', borderRadius:'20px', padding:'24px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px'}}>
                <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1A1A2E'}}>All Appointments</h3>
                <div style={{display:'flex', gap:'8px'}}>
                  {['all','confirmed','pending','cancelled'].map(s => (
                    <button key={s} style={{
                      padding:'6px 14px', borderRadius:'20px', border:'1px solid #E5E7EB',
                      background:'white', color:'#6B7280', fontSize:'12px',
                      fontWeight:'600', cursor:'pointer', textTransform:'capitalize'
                    }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div style={{overflowX:'auto'}}>
                <table style={{width:'100%', borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'2px solid #F3F4F6'}}>
                      {['Patient','Treatment','Date & Time','Phone','Status','Actions'].map(h => (
                        <th key={h} style={{padding:'12px 16px', textAlign:'left', fontSize:'12px', fontWeight:'700', color:'#6B7280', textTransform:'uppercase', letterSpacing:'0.5px'}}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map(apt => (
                      <tr key={apt.id} style={{borderBottom:'1px solid #F9FAFB'}}>
                        <td style={{padding:'16px', fontWeight:'600', color:'#1A1A2E', fontSize:'14px'}}>{apt.patient}</td>
                        <td style={{padding:'16px', color:'#6B7280', fontSize:'14px'}}>{apt.treatment}</td>
                        <td style={{padding:'16px', color:'#6B7280', fontSize:'13px'}}>{apt.date}<br/>{apt.time}</td>
                        <td style={{padding:'16px', color:'#6B7280', fontSize:'13px'}}>{apt.phone}</td>
                        <td style={{padding:'16px'}}>
                          <span style={{
                            padding:'5px 12px', borderRadius:'20px', fontSize:'12px', fontWeight:'600',
                            background:statusColors[apt.status]?.bg, color:statusColors[apt.status]?.color
                          }}>
                            {apt.status}
                          </span>
                        </td>
                        <td style={{padding:'16px'}}>
                          <div style={{display:'flex', gap:'6px'}}>
                            <button onClick={() => updateStatus(apt.id, 'confirmed')} style={{
                              padding:'5px 10px', borderRadius:'8px', border:'none',
                              background:'#DCFCE7', color:'#16A34A', fontSize:'11px',
                              fontWeight:'600', cursor:'pointer'
                            }}>✓ Confirm</button>
                            <button onClick={() => updateStatus(apt.id, 'cancelled')} style={{
                              padding:'5px 10px', borderRadius:'8px', border:'none',
                              background:'#FEE2E2', color:'#EF4444', fontSize:'11px',
                              fontWeight:'600', cursor:'pointer'
                            }}>✕ Cancel</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'contacts' && (
            <div style={{background:'white', borderRadius:'20px', padding:'24px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}>
              <h3 style={{fontSize:'20px', fontWeight:'700', color:'#1A1A2E', marginBottom:'24px'}}>Patient Messages</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
                {mockContacts.map(contact => (
                  <div key={contact.id} style={{
                    padding:'20px', borderRadius:'14px', border:'1px solid #E5E7EB',
                    background: contact.read ? 'white' : '#F0F9FF',
                    borderLeft: contact.read ? '1px solid #E5E7EB' : '4px solid #3B9EFF'
                  }}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'8px'}}>
                      <div>
                        <span style={{fontWeight:'700', color:'#1A1A2E', fontSize:'15px'}}>{contact.name}</span>
                        {!contact.read && (
                          <span style={{marginLeft:'8px', background:'#3B9EFF', color:'white', padding:'2px 8px', borderRadius:'10px', fontSize:'11px', fontWeight:'600'}}>
                            New
                          </span>
                        )}
                      </div>
                      <span style={{fontSize:'12px', color:'#9CA3AF'}}>{contact.date}</span>
                    </div>
                    <div style={{color:'#6B7280', fontSize:'13px', marginBottom:'8px'}}>{contact.email}</div>
                    <div style={{color:'#374151', fontSize:'14px', lineHeight:'1.6'}}>{contact.message}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px'}}>

                {/* Popular Treatments */}
                <div style={{background:'white', borderRadius:'20px', padding:'24px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}>
                  <h3 style={{fontSize:'18px', fontWeight:'700', color:'#1A1A2E', marginBottom:'20px'}}>Popular Treatments</h3>
                  {[
                    { name:'Teeth Whitening', count:45, percent:85 },
                    { name:'Dental Implants', count:38, percent:72 },
                    { name:'Root Canal',      count:32, percent:60 },
                    { name:'Smile Makeover', count:28, percent:53 },
                    { name:'Braces',          count:21, percent:40 },
                  ].map(t => (
                    <div key={t.name} style={{marginBottom:'16px'}}>
                      <div style={{display:'flex', justifyContent:'space-between', marginBottom:'6px'}}>
                        <span style={{fontSize:'13px', color:'#374151', fontWeight:'500'}}>{t.name}</span>
                        <span style={{fontSize:'13px', color:'#6B7280'}}>{t.count} patients</span>
                      </div>
                      <div style={{background:'#F3F4F6', borderRadius:'4px', height:'8px'}}>
                        <div style={{
                          background:'linear-gradient(135deg, #3B9EFF, #2563EB)',
                          height:'8px', borderRadius:'4px', width:`${t.percent}%`,
                          transition:'width 0.5s ease'
                        }}/>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Monthly Stats */}
                <div style={{background:'white', borderRadius:'20px', padding:'24px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)'}}>
                  <h3 style={{fontSize:'18px', fontWeight:'700', color:'#1A1A2E', marginBottom:'20px'}}>Monthly Overview</h3>
                  {[
                    { month:'October',  appointments:89,  revenue:'₹1.8L' },
                    { month:'November', appointments:102, revenue:'₹2.1L' },
                    { month:'December', appointments:118, revenue:'₹2.3L' },
                    { month:'January',  appointments:124, revenue:'₹2.4L' },
                    { month:'February', appointments:131, revenue:'₹2.6L' },
                    { month:'March',    appointments:140, revenue:'₹2.8L' },
                  ].map(m => (
                    <div key={m.month} style={{
                      display:'flex', justifyContent:'space-between', alignItems:'center',
                      padding:'12px 0', borderBottom:'1px solid #F3F4F6'
                    }}>
                      <span style={{fontSize:'14px', color:'#374151', fontWeight:'500'}}>{m.month}</span>
                      <div style={{display:'flex', gap:'16px'}}>
                        <span style={{fontSize:'13px', color:'#6B7280'}}>📅 {m.appointments}</span>
                        <span style={{fontSize:'13px', color:'#16A34A', fontWeight:'600'}}>{m.revenue}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Patient Growth */}
                <div style={{background:'linear-gradient(135deg, #0F172A, #1E293B)', borderRadius:'20px', padding:'24px', color:'white'}}>
                  <h3 style={{fontSize:'18px', fontWeight:'700', marginBottom:'20px'}}>Clinic Summary</h3>
                  {[
                    { label:'Total Patients',      value:'523' },
                    { label:'New This Month',       value:'28' },
                    { label:'Avg Rating',           value:'4.9 ⭐' },
                    { label:'Treatments Done',      value:'1,240' },
                    { label:'Success Rate',         value:'98.5%' },
                    { label:'Years in Service',     value:'10+' },
                  ].map(item => (
                    <div key={item.label} style={{
                      display:'flex', justifyContent:'space-between',
                      padding:'12px 0', borderBottom:'1px solid #334155'
                    }}>
                      <span style={{color:'#94A3B8', fontSize:'13px'}}>{item.label}</span>
                      <span style={{color:'white', fontWeight:'700', fontSize:'14px'}}>{item.value}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}