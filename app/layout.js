import './globals.css'

export const metadata = {
  title: 'Kisko.live - Your Ultimate Train Schedule Companion',
  description: 'Find train schedules with ease using Kisko.live, the open-source web application for travelers in Finland. Enjoy real-time schedules, a sleek interface, and community contributions. Join the Kisko.live train today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ial,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
