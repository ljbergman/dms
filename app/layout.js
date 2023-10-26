
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import './globals.css'
//import Link from 'next/link';

export const metadata = {
  title: 'J-DMS',
  description: 'Data Management System',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      
      <body>
      <Header/>
    
      <Main>
        {children}
      </Main>

      <Footer/>

      </body>

    </html>

  )
}

/* 

<Link href="/posts">All documents</Link>
<Link href="/add-post">Add new document</Link> 

*/