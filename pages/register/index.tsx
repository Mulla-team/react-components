import * as React from 'react'
import styled from 'styled-components'
import TabMenu from '../../src/components/tabMenu/styled'
import IndividualForm from './individualform'
import BusinessForm from './businessform'
import Image from 'next/image'

import useRegisterUser from '../../src/hooks/use-register-user'

const OuterWrap = styled.div `
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavBar = styled.nav `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  .nav-bar__inner {
    width: 100%;
    padding: 20px 24px;
    max-width: ${props => props.theme.xLargeWindowSize};
    @media(min-width: ${props => props.theme.screenSize.tablet}) {
      padding: 20px 32px;
    }
  }
`

const InnerWrap = styled.div `
  width: 100%;
  max-width: ${props => props.theme.xLargeWindowSize};
  padding: 60px 0;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    padding: 80px 32px 96px;
  }
`

const HeadText = styled.h1 `
  font-family: var(--font-family-bold);
  font-size: 1.9em;
  line-height: 42px;
  color: ${props => props.theme.presentationTextColor};
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 2.7em;
    line-height: 56.88px;
  }
`

const SubHeadText = styled.h4 `
  font-family: var(--font-family-regular);
  font-size: 1.05em;
  color: ${props => props.theme.presentationTextColor};
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 1.23em;
  }
`

const FeatureHeadText = styled.strong `
  font-family: var(--font-family-medium);
  font-size: 1.05em;
  color: ${props => props.theme.presentationTextColor};
  line-height: 24px;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 1.20em;
  }
`

const FeatureDescText = styled.strong `
  font-family: var(--font-family-regular);
  font-size: 1.03em;
  color: ${props => props.theme.presentationTextColor};
  line-height: 24px;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 1.125em;
  }
`

const IlluCtn = styled.div `
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 5px 8px -2px rgba(157, 157, 157, 0.25);
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    min-width: 58px;
    height: 58px;
  }
`

const FormWrap = styled.div `
  width: 100px;
  padding: 32px;
  background: #FFFFFF;
  box-shadow: 0px 5px 8px -2px rgba(157, 157, 157, 0.25);
  align-self: start;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    border-radius: 7px;
    padding: 41px;
  }
`

interface IFormInput {
  firstname : string;
  lastname?: string;
  email : string;
  phonenumber : string;
  residence : string
}

export const CustomerRegistration = () => {

  const [registerUser,
    {isLoading}] = useRegisterUser()

  React.useEffect(() => {
    // @ts-ignore
    document
      .body
      .classList
      .add("bg-ocean-blue-trans", "pattern-bg");
  }, [])

  const handleSubmit = async(values : IFormInput, registrationType : 'INDIVIDUAL' | 'BUSINESS') => {
    const payload = {
      personalInfo: {
        firstName: values.firstname,
        lastName: values.lastname
      },
      profileDetails: {
        email: values.email,
        mobileNumber: values.phonenumber,
        residence: values.residence,
        registrationType
      }
    }
    //@ts-ignore
    await registerUser(payload);
  }

  return <OuterWrap>
    <NavBar>
      <div className="nav-bar__inner">
        <Image src="/static/mulla-logo-01.svg" alt="wallet" width={118} height={32}/>
      </div>
    </NavBar>
    <InnerWrap className='flex flex-col lg:flex-row'>
      <div className="w-full lg:w-1/2 px-6 lg:px-0">
        <HeadText>Enjoy borderless transactions, Join Mulla today!</HeadText>
        <SubHeadText className='mt-3 sm:mt-6'>Send and recieve money across Africa</SubHeadText>
        <div className="flex mt-12">
          <IlluCtn className='hidden sm:flex items-center justify-center'>
            <Image src="/static/wallet.png" alt="wallet" width={28} height={28}/>
          </IlluCtn>
          <IlluCtn className='flex sm:hidden items-center justify-center'>
            <Image src="/static/wallet.png" alt="wallet" width={22} height={22}/>
          </IlluCtn>
          <div className="flex flex-col ml-4">
            <FeatureHeadText>Secure payments</FeatureHeadText>
            <FeatureDescText className='mt-1 sm:mt-3'>Manage your payments and transaction safely
            </FeatureDescText>
          </div>
        </div>
        <div className="flex mt-8">
          <IlluCtn className='hidden sm:flex items-center justify-center'>
            <Image src="/static/arrow_up_down.png" alt="arrow" width={30} height={30}/>
          </IlluCtn>
          <IlluCtn className='flex sm:hidden items-center justify-center'>
            <Image src="/static/arrow_up_down.png" alt="arrow" width={24} height={24}/>
          </IlluCtn>
          <div className="flex flex-col ml-4">
            <FeatureHeadText>Seamless money transfers in around Africa</FeatureHeadText>
            <FeatureDescText className='mt-1 sm:mt-3'>Manage your payments and transaction safely
            </FeatureDescText>
          </div>
        </div>
        <div className="flex mt-12">
          <IlluCtn className='hidden sm:flex items-center justify-center'>
            <Image src="/static/badge.png" alt="badge" width={30} height={30}/>
          </IlluCtn>
          <IlluCtn className='flex sm:hidden items-center justify-center'>
            <Image src="/static/badge.png" alt="badge" width={24} height={24}/>
          </IlluCtn>
          <div className="flex flex-col ml-4">
            <FeatureHeadText>Premium customer service</FeatureHeadText>
            <FeatureDescText className='mt-1 sm:mt-3'>Manage your payments and transaction safely
            </FeatureDescText>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex mt-10 lg:mt-0">
        <FormWrap className='flex-1 lg:m-14'>
          <TabMenu.Group>
            <TabMenu>
              <TabMenu.Header className='sm:px-4'>
                <TabMenu.TabMenuItem className='w-1/2 text-lg' path='/1' isActive={true}>Individual</TabMenu.TabMenuItem>
                <TabMenu.TabMenuItem className='w-1/2 text-lg' path='/2'>Business</TabMenu.TabMenuItem>
              </TabMenu.Header>
              <TabMenu.Body>
                <TabMenu.TabContent className='pt-6' path='/1'>
                  <IndividualForm isLoading={isLoading} onSubmit={(values) => handleSubmit(values, 'INDIVIDUAL')}/>
                </TabMenu.TabContent>
                <TabMenu.TabContent className='pt-6' path='/2'>
                  <BusinessForm isLoading={isLoading} onSubmit={(values) => handleSubmit(values, 'BUSINESS')}></BusinessForm>
                </TabMenu.TabContent>
              </TabMenu.Body>
            </TabMenu>
          </TabMenu.Group>
        </FormWrap>
      </div>
    </InnerWrap>
  </OuterWrap>
}

export default CustomerRegistration
