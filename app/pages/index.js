import Link from 'next/link'
import Layout from '../components/Layout'
import Head from'next/head'

export default function Home() {
  //regler le padding général et responsive menu hamburger
  return (
     <Layout>
      <Head>
        <title>WebTech - Home</title>
        <meta name="description" content="WebTech home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main>
        <div className="relative px-6">
          <div className="mx-auto max-w-4xl"> 
            <div>
            <Link href="/about">
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 leading-6 ring-2 ring-gray-700/10 hover:ring-gray-700/20">
                  <span className="text-gray-600">
                    Announcing our motivation  {' '}
                    <a className="font-semibold text-bleu">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              </Link>
              <div>
                <h1 className="mt-12 text-5xl font-bold tracking-tight text-center ">
                    Presentation of our projects carried out during our studies
                </h1>
                <p className="mt-14 text-lg leading-8 text-gray-600 text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-12 flex gap-x-4 justify-center">
                  <Link href='/projects'>
                  <a className="inline-block rounded-lg bg-bleu px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-bleu hover:bg-indigo-500 hover:ring-indigo-500">
                    Discover our projects
                    <span className="text-white" aria-hidden="true">&rarr;</span>
                  </a>
                  </Link>
                  <Link href='/contact'>
                  <a className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-2 ring-gray-900/10 hover:ring-gray-900/30 dark:bg-gray-800 dark:text-gray-100">
                    Contact us
                    <span className="text-black" aria-hidden="true">&rarr;</span>
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
     </Layout>
   
  )
}


