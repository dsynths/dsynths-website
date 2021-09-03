import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: block;
  position: sticky;
  height: 60px;
  background: green;
`

const SidebarToggle = styled.div`
  display: flex;
  height: 20px;
  width: auto;
  background: blue;

  &:hover {
    cursor: pointer;
  }
`

export const MobileNavbar = ({ handleToggled }) => {
  return (
    <Wrapper>
      <SidebarToggle onClick={() => handleToggled(true)}>Click me to toggle sidebar via mobile</SidebarToggle>
    </Wrapper>
  )
}
