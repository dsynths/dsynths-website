import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  height: 40px;
  background: green;
  text-align: center;
`

export const Footer = () => {
  return (
    <Wrapper>
      This is the footer.
    </Wrapper>
  )
}
