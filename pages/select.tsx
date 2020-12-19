import * as React from 'react'
import styled from 'styled-components'
import SelectField from '../src/components/selectfieldgroup'

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
  const [value,
    setValue] = React.useState < string | number > ('MJackson')
  return <MainWrap>
    <div style={{
      width: '400px'
    }}>
      <SelectField.Group>
        {/* <SelectField.Label>Country of origin</SelectField.Label> */}
        <SelectField
          className='mb-4'
          name='country'
          value={value}
          onChange={(event, _value) => {
          setValue(event.target.value)
        }}
          menuItems={[
          {
            label: 'Michael Jackson',
            value: 'MJackson'
          }, {
            label: 'Michael Jordan',
            value: 'MJordan'
          }, {
            label: 'Mike Tyson',
            value: 'MTyson'
          }
        ]}
          placeholder='Select a country'/>
      </SelectField.Group>
    </div>
  </MainWrap>
}

export default TextFields;