import './globals.css'

export const metadata = {
  title: 'Product Listing - mettā muse',
  description: 'Discover our premium products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
