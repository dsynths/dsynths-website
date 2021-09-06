import styled from 'styled-components'

import { Footer } from './Footer'
import Navbar from './NavBar'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  overflow: auto;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

export default Layout
