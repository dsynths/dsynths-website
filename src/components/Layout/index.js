import React, { useState } from 'react'
import styled from 'styled-components'

import { DesktopNavbar } from './Navigation/Desktop'
import { MobileNavbar } from './Navigation/Mobile'
import { Sidebar } from './Navigation/Sidebar'
import { Footer } from './Footer'

import { useWindowSize } from '../../hooks/useWindowSize'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  overflow: auto;
`

export const Layout = ({ children }) => {
  const size = useWindowSize()
  const [toggled, setToggled] = useState(false)

  const handleToggled = (state) => {
    setToggled(state)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .btn:hover {
          cursor: pointer;
        }
      `}} />
      <Wrapper>
        {size.width > 600 && <DesktopNavbar handleToggled={handleToggled}/>}
        {size.width <= 600 && <MobileNavbar handleToggled={handleToggled}/>}
        <Content isDesktop={size.width > 600}>{children}</Content >
        <Footer />
        <Sidebar toggled={toggled} handleToggled={handleToggled}/>
      </Wrapper>
    </>
  )
}
