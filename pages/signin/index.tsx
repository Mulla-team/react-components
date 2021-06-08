import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import SignInForm from './_form'
import Modal from '@Components/modal/styled'
import OTPVerificationForm from '@Components/otpverification'
import useLoginUser from '@Hooks/use-login'
import useGenerateOtp from '@Hooks/use-generate-otp'

const WrapperRight = styled.div `
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #0035a6;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width='100%25' height='100%25' viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'%3E %3Cdefs%3E %3Cpattern id='pattern-svg' x='0' y='0' width='78' height='78' patternUnits='userSpaceOnUse' patternTransform='rotate(-49) translate(0, 0) skewX(0) skewY(0)' %3E %3Csvg width='78' height='78' viewBox='0 0 100 100' %3E %3Cg opacity='.4'%3E %3Cg %3E %3Cpath opacity='0.6' d='M50.5521 50.052C50.4759 37.2924 45.5702 24.5564 35.8349 14.8211C26.0996 5.08585 13.3636 0.180073 0.604004 0.10392C0.680156 12.8635 5.58593 25.5995 15.3212 35.3348C25.0565 45.0701 37.7925 49.9759 50.5521 50.052Z' fill='%234887fa'%3E%3C/path%3E %3Cpath opacity='0.1' d='M50.5521 100.104C50.4759 87.3444 45.5702 74.6083 35.8349 64.8731C26.0996 55.1378 13.3636 50.232 0.604004 50.1559C0.680156 62.9154 5.58593 75.6515 15.3212 85.3867C25.0565 95.122 37.7925 100.028 50.5521 100.104Z' fill='%234887fa'%3E%3C/path%3E %3Cpath opacity='0.4' d='M100.105 0.103943C100.028 12.8635 95.1226 25.5996 85.3874 35.3348C75.6521 45.0701 62.9161 49.9759 50.1565 50.052C50.2326 37.2925 55.1384 24.5564 64.8737 14.8211C74.609 5.08587 87.345 0.180095 100.105 0.103943Z' fill='%234887fa'%3E%3C/path%3E %3Cpath opacity='0.2' d='M100.105 50.1559C100.028 62.9154 95.1226 75.6515 85.3874 85.3868C75.6521 95.122 62.9161 100.028 50.1565 100.104C50.2326 87.3444 55.1384 74.6084 64.8737 64.8731C74.609 55.1378 87.345 50.232 100.105 50.1559Z' fill='%234887fa'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E %3C/pattern%3E %3C/defs%3E %3Crect x='0' y='0' width='100%25' height='100%25' fill='%230035a6' /%3E %3Cg %3E %3Cg %3E %3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23pattern-svg)' /%3E %3C/g%3E %3C/g%3E %3C/svg%3E");
`

const FormWrap = styled.div `
  max-width: 440px;
  height: 50%;
`

const FormHeader = styled.h1 `
  font-family: var(--font-family-semibold);
  font-size: 2.1em;
  color: var(--opalBlue);
  line-height: 2em;
`

interface LoginResponseData {
  [s:string]: any
}

export const SignIn = () => {
  const [isModalVisible,
    setIsModalVisible] = React.useState<boolean|undefined>(false);
  const [responseError,
    setResponseError] = React.useState<{code?: number, message: string} | undefined>(undefined);

  const onSuccess = (loginData: LoginResponseData) => {
    console.log({loginData})
  }

  const onError = (responseError: {
    code?: number,
    message: string
  }) => {
    setResponseError(responseError)
    console.log({responseError})
  }
  const {mutate: handleLoginUser, isLoading: isLogingIn, isError: isLoginError, error} = useLoginUser(onSuccess, onError)
  return <div className='w-full flex min-h-screen'>
    <Modal.Group>
      <Modal
        isVisible={isModalVisible}
        onHide={() => {
        setIsModalVisible(!isModalVisible)
      }}>
        <Modal.Header>
          <OTPVerificationForm isVisible={isModalVisible}/>
        </Modal.Header>
      </Modal>
    </Modal.Group>
    <div className="w-full px-5 lg:px-0 lg:w-3/5 xl:w-2/5 flex justify-center">
      <FormWrap className='w-full flex flex-col justify-between'>
        <div className='mt-8'>
          <Image src="/static/mulla-logo-01.svg" alt="wallet" width={118} height={32}/>
        </div>
        <div className="w-full">
          <FormHeader className='mb-4'>Let’s sign you in</FormHeader>
          <SignInForm isError={isLoginError} error={responseError} isLoading={isLogingIn} onSubmit={handleLoginUser}/>
        </div>
      </FormWrap>
    </div>
    <WrapperRight className="flex-1 min-h-screen">
    </WrapperRight>
  </div>
}

export default SignIn