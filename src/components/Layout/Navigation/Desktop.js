import React from 'react'
import styled from 'styled-components'

import { useWindowSize } from '../../../hooks/useWindowSize'

const Wrapper = styled.nav`
  display: flex;
  position: sticky;
  height: 60px;
  background: green;
  justify-content: center;
`

const SidebarToggle = styled.div`
  display: flex;
  height: 20px;
  width: auto;
  background: red;

  &:hover {
    cursor: pointer;
  }
`

export const DesktopNavbar = ({ handleToggled }) => {
  const size = useWindowSize()
  return (
    <Wrapper>
      This is the navbar.
      {size.width < 920 && (
        <SidebarToggle onClick={() => handleToggled(true)}>Click me to toggle sidebar via desktop</SidebarToggle>
      )}
    </Wrapper>
  )
}
