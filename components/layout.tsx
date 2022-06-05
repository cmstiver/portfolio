import Navbar from "./navbar"

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
    <Navbar />
    <div>{ children }</div>
    </>
  )
}

export default Layout;