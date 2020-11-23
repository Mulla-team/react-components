import * as React from 'react'
import styled from 'styled-components'
import Button from '../src/components/button/styled'

const MainWrap = styled.div `
  min-height: 100vh;
  padding: 100px;
  display: flex;
  flex-direction: column;
  .separator {
    margin: 20px 0;
    width: 100%;
  }
`

export const Buttons = () => {
  return <MainWrap>
    <Button onClick={() => alert('HEEEYYY')} variant='primary' size='sm'>Hello</Button>
    <div className="separator"></div>
    <Button onClick={() => alert('HEEEYYY')} variant='secondary' className='my-4'>Hello</Button>
    <div className="separator"></div>
    <Button onClick={() => alert('HEEEYYY')} variant='accent' className='my-4'>Hello</Button>
    <div className="separator"></div>
    <Button
      onClick={() => alert('HEEEYYY')}
      variant='danger'
      className='my-4'
      size='sm'>Hello</Button>
  </MainWrap>
}

export default Buttons;