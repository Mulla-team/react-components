import * as React from 'react'
import styled from 'styled-components'
import FormContainer from '../src/components/formcontainer/styled'

export const FormContainers = () => {
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
  return <MainWrap>
    <FormContainer.Group>
      <FormContainer>
        <FormContainer.Header>
          Permission management
        </FormContainer.Header>
        <FormContainer.Body>
          ANAN
        </FormContainer.Body>
      </FormContainer>
    </FormContainer.Group>
  </MainWrap>
}

export default FormContainers;