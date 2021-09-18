import { Fragment, useState } from 'react'
import Link from 'next/link'
import { classnames } from 'tailwindcss-classnames'
import { Menu, Transition } from '@headlessui/react'

import Logo from '../Logo'
import * as componentClasses from '../styles'
import { Sidebar } from './Sidebar'
import { ChevronDown } from '../Icons'

const NavLinks = () => (
  <>
    <Menu as="div" className="relative">
      <Menu.Button
        className={classnames(
          componentClasses.link,
          'flex items-center space-x-2 cursor-pointer focus:outline-none'
        )}
      >
        <span>Products</span>
        <ChevronDown className="w-3 h-3" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Menu.Items className="absolute w-max max-w-sm px-4 mt-6 transform -translate-x-1/2 left-1/2 sm:px-0 focus:outline-none">
          <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
            <div className="relative bg-white px-6 py-3">
              <ul className="flex flex-col space-y-2">
                <Menu.Item>
                  {({ active }) => (
                    <li>
                      <Link href="/products/exchange">
                        <a className={componentClasses.menuLink(active)}>Exchange</a>
                      </Link>
                    </li>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <li>
                      <Link href="/products/iframe">
                        <a className={componentClasses.menuLink(active)}>iFrame Integration</a>
                      </Link>
                    </li>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <li>
                      <Link href="/products/api">
                        <a className={componentClasses.menuLink(active)}>Synth API</a>
                      </Link>
                    </li>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <li>
                      <Link href="/products/fiat">
                        <a className={componentClasses.menuLink(active)}>Fiat On-Ramp</a>
                      </Link>
                    </li>
                  )}
                </Menu.Item>
              </ul>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

    <ul className="flex items-center space-x-8">
      <li>
        <Link href="/learn">
          <a className={componentClasses.link}>Learn</a>
        </Link>
      </li>
      <li>
        {/* TODO change the link once we have it */}
        <Link href="/learn">
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
    <div className="sticky z-20 flex justify-between px-5 py-3 shadow-nav">
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
              <Link href="/products/exchange">
                <a className={componentClasses.link} onClick={() => toggleSidebar()}>
                  Exchange
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products/iframe">
                <a className={componentClasses.link} onClick={() => toggleSidebar()}>
                  iFrame Integration
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products/api">
                <a className={componentClasses.link} onClick={() => toggleSidebar()}>
                  Synth API
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products/fiat">
                <a className={componentClasses.link} onClick={() => toggleSidebar()}>
                  Fiat On-Ramp
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/learn">
                <a className={componentClasses.link} onClick={() => toggleSidebar()}>
                  Learn
                </a>
              </Link>
            </li>
            <li>
              {/* TODO change link once we have it */}
              <Link href="/learn">
                <a className={componentClasses.link} onClick={() => toggleSidebar()}>
                  Developers
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </Sidebar>
    </div>
  )
}

export default Navbar
