import * as React from 'react'
import styled from 'styled-components'
import Progress from '../src/components/progresss/styled'

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

export const ProgresBar = () => {
  const [activeStep,
    setActiveStep] = React.useState(1);
  const handleNextStep = () => {
    setActiveStep(activeStep === 4
      ? 0
      : activeStep + 1)
  }
  return <MainWrap>
    <div style={{
      maxWidth: '100%'
    }}>
      <Progress
        onClick={() => handleNextStep()}
        steps={[
        {
          label: 'Personal Information',
          isActive: activeStep === 0
        }, {
          label: 'Jambo Jimbo',
          isActive: activeStep === 1
        }, {
          label: 'Address',
          isActive: activeStep === 2
        }, {
          label: 'Corporate profiles',
          isActive: activeStep === 3
        }, {
          label: 'Assign permissions',
          isActive: activeStep === 4
        }
      ]}/>
    </div>
  </MainWrap>
}

export default ProgresBar;