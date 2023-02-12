import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

import Format from '@/Layout/Format'
import Section1 from 'Components/Section1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
  <Format>
    <div className='container mx-auto'>
      <Section1/>
    </div>
  </Format>
   </>
  )
}
