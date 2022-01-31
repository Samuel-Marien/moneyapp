import Head from 'next/head'
import MyNavbar from '../components/navbar'

import MyForm from '../components/form'

const NewData = () => {
  return (
    <div>
      <Head>
        <title>Add new datas</title>
        <meta name="money app" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyNavbar />
      <MyForm />
    </div>
  )
}

export default NewData