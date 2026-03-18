import './globals.css'
import ChatBot from '@/components/common/ChatBot'

export const metadata = {
  title: 'MaxFace Dental Clinic | Premium Dental Care in Bangalore',
  description: 'Maxface Dental Implant & Anaplastology Clinic — advanced dental implants, root canal, teeth whitening and more in Kasturi Nagar, Bangalore.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ChatBot />
      </body>
    </html>
  )
}