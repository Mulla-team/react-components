import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Button from '../../src/components/button'

const OuterWrap = styled.div `
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InnerWrap = styled.div `
  width: 100%;
  max-width: ${props => props.theme.xLargeWindowSize};
  padding: 60px 0;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    padding: 80px 32px 96px;
  }
`

const ContentWrap = styled.div `
  max-width: 600px;
  width: 100%;
  box-shadow: rgba(9, 30, 66, 0.28) 0px 4px 8px -2px, rgba(9, 30, 66, 0.3) 0px 0px 1px;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const HeadText = styled.h1 `
  font-family: var(--font-family-semibold);
  font-size: 1.6em;
  line-height: 36px;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.darkPrimary};
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 2em;
    line-height: 56.88px;
  }
`

const SubHeadText = styled.h4 `
  font-family: var(--font-family-regular);
  font-size: 1.05em;
  color: ${props => props.theme.defaultTextColor};
  width: 100%;
  text-align: center;
  line-height: 26px;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
		font-size: 1.23em;
		line-height: 28px;
  }
`

export const RegisterSuccess = () => {
	React.useEffect(() => {
    // @ts-ignore
    document
      .body
      .classList
      .remove("bg-ocean-blue-trans", "pattern-bg");
  }, [])
	return <OuterWrap>
		<InnerWrap className='flex justify-center'>
			<ContentWrap>
					<div className='w-full flex justify-center'>
						<Image src="/static/email.svg" alt="email" width={118} height={120}/>
					</div>
					<HeadText className='mt-3'>Confirmation link on the way</HeadText>
					<SubHeadText className='mt-3'>For security reasons we’ve sent you am email that contains a link to confirm confirm your identity.</SubHeadText>
					<div className='w-full my-6 flex justify-center'>
					<Button
						onClick={() => {}}
						type='submit'
						size='lg'
						className='mt-4'>Back to mulla.app
					</Button>
					</div>
			</ContentWrap>
		</InnerWrap>
	</OuterWrap>
}

export default RegisterSuccess
