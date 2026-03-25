'use client'
import { useState } from 'react'
import { Stethoscope, Send, X } from 'lucide-react'

export default function ChatBot() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [messages, setMessages] = useState([
    { role:'assistant', text:'Hello! Welcome to Maxface Dental Clinic. I\'m your AI dental assistant. How can I help you today?' }
  ])
  const [input,    setInput]    = useState('')
  const [loading,  setLoading]  = useState(false)
  const [hovered,  setHovered]  = useState(false)

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role:'user', text:userMessage }])
    setLoading(true)

    try {
      const response = await fetch('https://maxface-backend.onrender.com/api/chat', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ message: userMessage })
      })
      const data = await response.json()
      setMessages(prev => [...prev, {
        role:'assistant',
        text: data.reply || "Sorry, I couldn't process that. Please call +91 99804 77725."
      }])
    } catch {
      setMessages(prev => [...prev, {
        role:'assistant',
        text:"Sorry, I'm having trouble connecting. Please call +91 99804 77725 for assistance."
      }])
    }
    setLoading(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position:'fixed', bottom:'100px', right:'24px', zIndex:1000,
          width:'380px', height:'520px',
          background:'white', borderRadius:'24px',
          boxShadow:'0 24px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(36,99,235,0.12)',
          display:'flex', flexDirection:'column',
          border:'1px solid rgba(255,255,255,0.8)',
          overflow:'hidden',
          animation:'slideUp 0.3s ease'
        }}>

          {/* Header */}
          <div style={{
            background:'linear-gradient(135deg, #1e3a8a 0%, #2463eb 60%, #0ea5e9 100%)',
            padding:'16px 20px',
            display:'flex', alignItems:'center', justifyContent:'space-between',
            position:'relative', overflow:'hidden'
          }}>
            {/* Background decoration */}
            <div style={{position:'absolute', top:'-20px', right:'-20px', width:'80px', height:'80px', borderRadius:'50%', background:'rgba(255,255,255,0.08)'}}/>
            <div style={{position:'absolute', bottom:'-30px', left:'30%', width:'100px', height:'100px', borderRadius:'50%', background:'rgba(255,255,255,0.05)'}}/>

            <div style={{display:'flex', alignItems:'center', gap:'12px', position:'relative', zIndex:1}}>
              {/* Premium Logo */}
              <div style={{
                width:'44px', height:'44px', borderRadius:'14px',
                background:'rgba(255,255,255,0.15)',
                backdropFilter:'blur(10px)',
                border:'1px solid rgba(255,255,255,0.25)',
                display:'flex', alignItems:'center', justifyContent:'center',
                position:'relative', overflow:'hidden', color:'white'
              }}>
                <div style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))'
                }}/>
                <Stethoscope size={24} strokeWidth={2} style={{position:'relative', zIndex:1}} />
              </div>
              <div>
                <div style={{color:'white', fontWeight:'800', fontSize:'15px', letterSpacing:'-0.3px'}}>
                  MaxFace AI
                </div>
                <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                  <div style={{width:'6px', height:'6px', borderRadius:'50%', background:'#4ade80', boxShadow:'0 0 6px #4ade80'}}/>
                  <span style={{color:'rgba(255,255,255,0.8)', fontSize:'11px', fontWeight:'500'}}>Online · Typically replies instantly</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{
              background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.2)',
              color:'white', width:'32px', height:'32px', borderRadius:'50%',
              cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center',
              transition:'all 0.2s', position:'relative', zIndex:1,
              padding:0
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            >
              <X size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex:1, overflowY:'auto', padding:'16px',
            display:'flex', flexDirection:'column', gap:'10px',
            background:'#f8fafc'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display:'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                alignItems:'flex-end', gap:'8px'
              }}>
                {msg.role === 'assistant' && (
                  <div style={{
                    width:'28px', height:'28px', borderRadius:'8px', flexShrink:0,
                    background:'linear-gradient(135deg, #2463eb, #0ea5e9)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'white',
                    boxShadow:'0 2px 8px rgba(36,99,235,0.2)'
                  }}>
                    <Stethoscope size={14} strokeWidth={2.5} />
                  </div>
                )}
                <div style={{
                  maxWidth:'75%', padding:'11px 15px', borderRadius:'16px',
                  fontSize:'14px', lineHeight:'1.55',
                  background: msg.role === 'user'
                    ? 'linear-gradient(135deg, #2463eb, #0ea5e9)'
                    : 'white',
                  color: msg.role === 'user' ? 'white' : '#1e293b',
                  borderBottomRightRadius: msg.role === 'user' ? '4px' : '16px',
                  borderBottomLeftRadius:  msg.role === 'user' ? '16px' : '4px',
                  boxShadow: msg.role === 'user'
                    ? '0 4px 12px rgba(36,99,235,0.25)'
                    : '0 2px 8px rgba(0,0,0,0.06)',
                  border: msg.role === 'assistant' ? '1px solid #f1f5f9' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{display:'flex', justifyContent:'flex-start', alignItems:'flex-end', gap:'8px'}}>
                <div style={{width:'28px', height:'28px', borderRadius:'8px', background:'linear-gradient(135deg, #2463eb, #0ea5e9)', display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>
                  <Stethoscope size={14} strokeWidth={2.5} />
                </div>
                <div style={{background:'white', padding:'12px 16px', borderRadius:'16px', borderBottomLeftRadius:'4px', border:'1px solid #f1f5f9', boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
                  <div style={{display:'flex', gap:'4px', alignItems:'center'}}>
                    {[0,1,2].map(i => (
                      <div key={i} style={{
                        width:'6px', height:'6px', borderRadius:'50%', background:'#94a3b8',
                        animation:`bounce 1.2s ease infinite ${i * 0.2}s`
                      }}/>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div style={{padding:'8px 14px', background:'white', borderTop:'1px solid #f1f5f9', display:'flex', gap:'6px', overflowX:'auto'}}>
            {['Book appointment', 'Tooth pain', 'Implant cost', 'Timings'].map(q => (
              <button key={q} onClick={() => setInput(q)} style={{
                background:'#f0f9ff', color:'#2463eb', border:'1px solid #dbeafe',
                padding:'5px 12px', borderRadius:'9999px', fontSize:'11px',
                fontWeight:'600', cursor:'pointer', whiteSpace:'nowrap',
                transition:'all 0.2s'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#dbeafe' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f0f9ff' }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{
            padding:'12px 14px', background:'white',
            borderTop:'1px solid #f1f5f9',
            display:'flex', gap:'8px', alignItems:'center'
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your question..."
              style={{
                flex:1, padding:'10px 14px', borderRadius:'50px',
                border:'1.5px solid #e2e8f0', fontSize:'13px',
                outline:'none', background:'#f8fafc', color:'#0f172a',
                transition:'border-color 0.2s'
              }}
              onFocus={e => e.target.style.borderColor = '#2463eb'}
              onBlur={e => e.target.style.borderColor = '#e2e8f0'}
            />
            <button onClick={sendMessage} disabled={loading} style={{
              width:'38px', height:'38px', borderRadius:'50%', flexShrink:0,
              background: loading
                ? '#e2e8f0'
                : 'linear-gradient(135deg, #2463eb, #0ea5e9)',
              border:'none', color:'white', fontSize:'15px',
              cursor: loading ? 'not-allowed' : 'pointer',
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow: loading ? 'none' : '0 4px 12px rgba(36,99,235,0.3)',
              transition:'all 0.2s'
            }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = 'scale(1.08)' }}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div style={{position:'fixed', bottom:'24px', right:'24px', zIndex:1000}}>
        {/* Tooltip */}
        {!isOpen && hovered && (
          <div style={{
            position:'absolute', bottom:'72px', right:'0',
            background:'#0f172a', color:'white',
            padding:'8px 14px', borderRadius:'10px',
            fontSize:'12px', fontWeight:'600', whiteSpace:'nowrap',
            boxShadow:'0 4px 12px rgba(0,0,0,0.15)',
            pointerEvents:'none'
          }}>
            Chat with AI Assistant
            <div style={{position:'absolute', bottom:'-5px', right:'18px', width:'10px', height:'10px', background:'#0f172a', transform:'rotate(45deg)', borderRadius:'2px'}}/>
          </div>
        )}

        {/* Pulse ring */}
        {!isOpen && (
          <div style={{
            position:'absolute', inset:'-4px', borderRadius:'50%',
            background:'rgba(36,99,235,0.2)',
            animation:'pulseRing 2s ease infinite'
          }}/>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width:'60px', height:'60px', borderRadius:'50%',
            background: isOpen
              ? 'linear-gradient(135deg, #ef4444, #dc2626)'
              : 'linear-gradient(135deg, #1e3a8a, #2463eb, #0ea5e9)',
            border:'3px solid white',
            color:'white', cursor:'pointer',
            boxShadow:'0 8px 28px rgba(36,99,235,0.4)',
            display:'flex', alignItems:'center', justifyContent:'center',
            position:'relative', zIndex:1,
            transition:'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transform: hovered ? 'scale(1.12)' : 'scale(1)'
          }}
        >
          {isOpen ? (
            <span style={{fontSize:'20px', fontWeight:'700'}}>✕</span>
          ) : (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1px'}}>
              <span style={{fontSize:'22px', lineHeight:'1'}}>🦷</span>
            </div>
          )}
        </button>

        {/* Notification dot */}
        {!isOpen && (
          <div style={{
            position:'absolute', top:'0', right:'0',
            width:'14px', height:'14px', borderRadius:'50%',
            background:'#22c55e', border:'2px solid white',
            zIndex:2, boxShadow:'0 2px 6px rgba(34,197,94,0.4)'
          }}/>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideUp {
          from { opacity:0; transform:translateY(20px) scale(0.95); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes bounce {
          0%, 60%, 100% { transform:translateY(0); }
          30%           { transform:translateY(-6px); }
        }
        @keyframes pulseRing {
          0%   { transform:scale(1);   opacity:0.6; }
          50%  { transform:scale(1.2); opacity:0.2; }
          100% { transform:scale(1);   opacity:0.6; }
        }
      `}</style>
    </>
  )
}