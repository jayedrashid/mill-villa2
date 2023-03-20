import TransChart from '@/components/TransChart'
import ProfChart from '@/components/ProfChart'
import Header from '@/components/Header'
import TotalExp from '@/components/TotalExp'
import TopCards from '@/components/TopCards'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Millennium Villa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          {/* <BarChart4 />
          <TotalExp /> */}
          <TransChart />
          <ProfChart />
        </div>
      </main>
    </>
  )
}
