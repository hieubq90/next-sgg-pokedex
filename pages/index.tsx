import Head from 'next/head'

export default function Home() {
  return (
      <div className="">
          <Head>
              <title>Pokédex - Nuxt SGG</title>
              <meta name="description" content="A Pokédex web application which built with Nuxt 12 - SGG Mode" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="">
              <h1 className="text-3xl font-bold underline">
                  Hello world!
              </h1>
          </main>
      </div>
  )
}