import * as React from 'react'
import styled from 'styled-components'
import TextField from '../src/components/textfieldgroup'
import Button from '../src/components/button'

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

export const TextFields = () => {
  return <MainWrap>
    <div style={{
      width: '400px'
    }}>
      <TextField.Group>
        <TextField.Label>Username *</TextField.Label>
        <TextField className='mb-4' placeholder='Enter your username'/>
      </TextField.Group>
      <TextField.Group>
        <TextField.Label>Password *</TextField.Label>
        <TextField placeholder='Enter a password' type={'password'}/>
      </TextField.Group>
      <Button className='mt-4' fill>Sign In</Button>
    </div>
  </MainWrap>
}

export default TextFields;