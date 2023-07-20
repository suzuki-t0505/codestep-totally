import Image from 'next/image'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Items } from './components/Items'

export default function Home() {
  return (
    <div className='max-w-[1000px] mx-auto text-[#333333]'>
      <Header />
      <main className='max-w-[800px] sm:max-w-full mx-auto'>
        <Items />
      </main>
      <Footer />
    </div>
  )
}
