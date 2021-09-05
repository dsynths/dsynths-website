import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  color: black;
`

export default function Home() {
  return (
    <Wrapper>
      <h1 className="font-bold text-3xl">dSynths</h1>
      This will be the home page. The navbar and footer are fixed in position, and the page content
      will automatically scroll on overflow. The page is not behind the navbar/footer nor uses a
      margin, thanks to flex-grow. Try zooming in on this page (500%) and you will see the effects
      when scrolling.
    </Wrapper>
  )
}
