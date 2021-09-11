import Footer from './Footer'
import Navbar from './NavBar'

const Layout = ({ children }) => {
  // TODO fix height on iphone (footer gets hidden behind Safari bottom menu)
  return (
    <div className="h-full min-h-screen flex flex-col">
      <Navbar />
      <div className="h-full max-h-full flex flex-col overflow-auto">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
