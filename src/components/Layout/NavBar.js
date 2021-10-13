import { Fragment, useState } from 'react'
import Link from 'next/link'
import { classnames } from 'tailwindcss-classnames'
import { Menu, Transition } from '@headlessui/react'

import Logo from '../Logo'
import * as componentClasses from '../styles'
import { Sidebar } from './Sidebar'
import { ChevronDown } from '../Icons'

import { navigationMapping } from '../../constants/data/navbar'

const NavLinks = () => (
  <ul className="flex items-center space-x-8">
    {navigationMapping.length && navigationMapping.map(o => {
      const { category, items } = o
      const isMenu = items.length > 1 ? true : false

      return isMenu ? (
        <li key={category}>
          <Menu as="div" className="relative">
            <Menu.Button
              className={classnames(
                componentClasses.link,
                'flex items-center space-x-2 cursor-pointer focus:outline-none'
              )}
            >
              <span>{category}</span>
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
                      {items.map((item, index) => {
                        const { title, href } = item
                        return (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <li>
                                <Link href={href}>
                                  <a className={componentClasses.menuLink(active)}>{title}</a>
                                </Link>
                              </li>
                            )}
                          </Menu.Item>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
      ) : (
        <li key={category}>
          <Link href={o.items[0].href}>
            <a className={componentClasses.link}>{o.items[0].title}</a>
          </Link>
        </li>
      )
    })}
  </ul>
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
        <a href="https://app.dsynths.com" className={componentClasses.button} target="_blank" rel="noreferrer noopener">
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
          {navigationMapping.map(o => {
            const { category, items } = o
            const isMenu = items.length > 1 ? true : false
            return isMenu ? (
              <div key={category}>
                <div>{category}</div>
                <ul className="flex flex-col px-6 space-y-4">
                  {items.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.href}>
                          <a className={componentClasses.link} onClick={() => toggleSidebar()}>
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              <Link href={items[0].href} key={category}>
                <a className={componentClasses.link} onClick={() => toggleSidebar()}>
                  {items[0].title}
                </a>
              </Link>
            )
          })}
        </nav>
      </Sidebar>
    </div>
  )
}

export default Navbar
