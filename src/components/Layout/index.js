import Footer from './Footer'
import Navbar from './NavBar'

const Layout = ({ children }) => {
  return (
    <div className="h-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-auto px-6">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
