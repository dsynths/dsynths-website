import { useState } from 'react'

import Logo from '../Logo'
import * as componentClasses from '../styles'
import { Sidebar } from './Sidebar'

const NavLinks = () => (
  <>
    <a href="#" className={componentClasses.link}>
      Products
    </a>
    <a href="#" className={componentClasses.link}>
      Learn
    </a>
    <a href="#" className={componentClasses.link}>
      Developers
    </a>
  </>
)

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = (isOpen) => {
    setSidebarOpen((prev) => isOpen ?? !prev)
  }

  return (
    <div className="sticky flex justify-between px-5 py-3">
      <div className="flex items-center">
        <Logo width={32} height={32} className="mr-2" />
        <span className="hidden md:inline text-lg">dSYNTHS</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <NavLinks />
      </nav>
      <div className="flex">
        <a href="#" className={componentClasses.button}>
          Launch App
        </a>
      </div>
      <button
        className="flex items-center md:hidden hover:cursor-pointer"
        onClick={() => {
          toggleSidebar()
        }}
      >
        <svg
          width={24}
          height={14}
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginLeft: 10,
            alignSelf: 'center',
          }}
        >
          <path
            d="M1 1h22M1 6.5h22M1 12.5h22"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Sidebar toggled={sidebarOpen} handleToggled={toggleSidebar}>
        <nav className="flex flex-col py-8 px-4 gap-4">
          <div>Products</div>
          <div className="flex flex-col px-6 gap-4">
            <a href="#">Exchange</a>
            <a href="#">iFrame Integration</a>
            <a href="#">Synth API</a>
            <a href="#">Fiat On-Ramp</a>
          </div>
          <a href="#">Learn</a>
          <a href="#">Developers</a>
        </nav>
      </Sidebar>
    </div>
  )
}

export default Navbar
