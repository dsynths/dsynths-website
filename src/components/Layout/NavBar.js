import { useState } from 'react'
import Link from 'next/link'
import { classnames } from 'tailwindcss-classnames'

import Logo from '../Logo'
import * as componentClasses from '../styles'
import { Sidebar } from './Sidebar'
import { ChevronDown } from '../Icons'
import Dropdown from '../Dropdown'

const NavLinks = () => (
  <>
    <Dropdown
      toggleComponent={
        <button
          className={classnames(
            componentClasses.link,
            'flex items-center space-x-2 cursor-pointer'
          )}
        >
          <span>Products</span>
          <ChevronDown className="w-3 h-3" />
        </button>
      }
    >
      <div className="relative bg-white px-6 py-3">
        <ul className="flex flex-col space-y-2">
          <li>
            <Link href="#">
              <a className={componentClasses.menuLink}>Exchange</a>
            </Link>
          </li>
          <li>
            <Link href="/products/iframe">
              <a className={componentClasses.menuLink}>iFrame Integration</a>
            </Link>
          </li>
          <li>
            <Link href="/products/api">
              <a className={componentClasses.menuLink}>Synth API</a>
            </Link>
          </li>
          <li>
            <Link href="/products/fiat">
              <a className={componentClasses.menuLink}>Fiat On-Ramp</a>
            </Link>
          </li>
        </ul>
      </div>
    </Dropdown>
    <ul className="flex items-center space-x-8">
      <li>
        <Link href="#">
          <a className={componentClasses.link}>Learn</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a className={componentClasses.link}>Developers</a>
        </Link>
      </li>
    </ul>
  </>
)

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = (isOpen) => {
    setSidebarOpen((prev) => isOpen ?? !prev)
  }

  return (
    <div className="sticky flex justify-between px-5 py-3 shadow-nav">
      <Link href="/">
        <a className="flex items-center space-x-2">
          <Logo width={32} height={32} />
          <span className="hidden md:block text-lg leading-none">dSYNTHS</span>
        </a>
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
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
        <nav className="flex flex-col py-8 px-6 space-y-4">
          <div>Products</div>
          <ul className="flex flex-col px-6 space-y-4">
            <li>
              <Link href="#">
                <a className={componentClasses.menuLink}>Exchange</a>
              </Link>
            </li>
            <li>
              <Link href="/products/iframe">
                <a className={componentClasses.menuLink}>iFrame Integration</a>
              </Link>
            </li>
            <li>
              <Link href="/products/api">
                <a className={componentClasses.menuLink}>Synth API</a>
              </Link>
            </li>
            <li>
              <Link href="/products/fiat">
                <a className={componentClasses.menuLink}>Fiat On-Ramp</a>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="#">
                <a className={componentClasses.menuLink}>Learn</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className={componentClasses.menuLink}>Developers</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Sidebar>
    </div>
  )
}

export default Navbar
