import * as React from 'react'
import styled from 'styled-components'
import values from 'lodash/values'
import Button from '@Components/button'

const Input = styled.input `
  width: 38px;
  height: 46px;
  background-color: #FFFFFF;
  border-radius: 6px;
  line-height: 50px;
  text-align: center;
  font-size: 1.2em;
  font-family: var(--font-family-semibold);
  margin: 0 4px;
  box-shadow: 0px 3px 3px -2px rgba(157, 157, 157, 0.25);
  border: 1px solid ${ (props) => props.theme.inactiveGrey};
  color: ${props => props.theme.defaultTextColor};
  -moz-appearance: textfield;
  -webkit-appearance: none;
  appearance: none;
  &:focus {
    border: 2px solid ${props => props.theme.primary};
  }
  &:focus, &:hover {
    -moz-appearance: number-input;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
  }
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 1.4em;
    width: 44px;
    height: 50px;
  }
`

const HeaderTitle = styled.h1 `
  font-family: var(--font-family-semibold);
  font-size: 1.7em;
  color: ${props => props.theme.defaultTextColor};
`

const SubHeaderText = styled.h3 `
  font-family: var(--font-family-medium);
  font-size: 1.1em;
  color: ${props => props.theme.iconGrey};
`

const Separator = styled.div `
  margin: 0 4px;
  width: 12px;
  height: 2px;
  background-color: ${props => props.theme.defaultTextColor};
`

const LinkText = styled.p `
  font-size: 1em;
  color: ${props => props.theme.iconGrey};
  span {
    color: ${props => props.theme.primary};
    cursor: pointer;
    &:hover {
      text-decoration: underline
    }
  }
`

interface Props {
  otpLength?: number,
  isVisible?: boolean
}

export default function OTPVerification(props: Props) {
  const {otpLength = 6, isVisible} = props

  const initalOTPValues: {[n: number]: {value?: number, ref: React.MutableRefObject<HTMLInputElement>}} = [...Array(otpLength).keys()].reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: {
        ref: React.useRef()
      }
    }
  }, {})

  const [otpValues, setOTPValues] = React.useState<{[s: number]: {value?: number, ref: React.MutableRefObject<HTMLInputElement>}}>(initalOTPValues)
  // const inputFieldList: JSX.Element[] = values(otpValues).map((el, index) => {
  //   return <>
  //     <Input key={index} ref={el.ref} type='number' value={el.value}/>
  //   </>
  // })

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    let nextInputElement: HTMLInputElement | null = null
    let prevInputElement: HTMLInputElement | null = null
    if (otpValues[index + 1]) {
      nextInputElement = otpValues[index + 1].ref.current
    }
    if (index !== 0 && otpValues[index - 1]) {
      prevInputElement = otpValues[index - 1].ref.current
    }
    
    if ((e.keyCode === 8 || e.keyCode === 37) && prevInputElement) {
      prevInputElement.select()
    } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
      if (nextInputElement) {
        nextInputElement.select()
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const enteredValue = Number(`${e.target.value||''}`.substr(e.target.value.length - 1))
    const newValues = {
      ...otpValues[index],
      value: enteredValue ? enteredValue : undefined
    }
    
    setOTPValues({
      ...otpValues,
      [index]: newValues
    })
  }

  React.useEffect(() => {
    const {ref: {current: inputElement}} = otpValues[0]
    if (isVisible && inputElement) {
      setOTPValues(initalOTPValues)
      const {ref: {current: inputElement}} = otpValues[0]
      inputElement.select();
    }
  }, [isVisible])

  return <div className="flex flex-col w-full pt-4 items-center">
    <HeaderTitle className='w-full text-center'>Verification Code</HeaderTitle>
    <SubHeaderText className='mt-8 mb-10'>Enter OTP sent to +250787856487</SubHeaderText>
    <div className="flex items-center">
      {
        values(otpValues).map((el, index) => {
          return values(otpValues).length/2 === index + 1 ? <>
          <Input onChange={(e) => {handleChange(e, index)}} onKeyUp={(event) => handleKeyUp(event, index)} maxLength={1} key={index} ref={el.ref} type='number' value={el.value}/>
          <Separator key={'separator'}/>
          </> : <Input onChange={(e) => {handleChange(e, index)}} onKeyUp={(event) => handleKeyUp(event, index)} maxLength={1} key={index} ref={el.ref} type='number' value={el.value}/>
        })
      }
    </div>
    <div className="flex my-10 w-full justify-center mx-3">
      <Button fill>Verify and continue</Button>
    </div>
    <LinkText>Didn’t receive code? <span>Request again</span></LinkText>
  </div>
}
