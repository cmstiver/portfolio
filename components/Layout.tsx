import Navbar from "./Navbar"
import Head from 'next/head'

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
    <Head>
      <title>Chayse Stiver</title>
    </Head>
    <Navbar />
    <div>{ children }</div>
    </>
  )
}

export default Layout;