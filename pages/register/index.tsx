import * as React from 'react'
import styled from 'styled-components'
import TabMenu from '../../src/components/tabMenu/styled'
import IndividualForm from './individualform'

const OuterWrap = styled.div `
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InnerWrap = styled.div `
  width: 100%;
  max-width: ${props => props.theme.xLargeWindowSize};
  padding: 134px 32px 0;
  @media(min-width: ${props => props.theme.tablet}) {
    padding: 100px 32px 96px;
  }
`

const HeadText = styled.h1 `
  font-family: var(--font-family-bold);
  font-size: 2.8em;
  line-height: 56.88px;
  color: ${props => props.theme.presentationTextColor}
`

const SubHeadText = styled.h4 `
  font-family: var(--font-family-regular);
  font-size: 1.23em;
  color: ${props => props.theme.presentationTextColor}
`

const FeatureHeadText = styled.strong `
  font-family: var(--font-family-medium);
  font-size: 1.20em;
  color: ${props => props.theme.presentationTextColor}
`

const FeatureDescText = styled.strong `
  font-family: var(--font-family-regular);
  font-size: 1.125em;
  color: ${props => props.theme.presentationTextColor}
`

const IlluCtn = styled.div `
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 5px 8px -2px rgba(157, 157, 157, 0.25);
`

const FormWrap = styled.div `
  width: 100px;
  padding: 41px;
  border-radius: 7px;
  background: #FFFFFF;
  margin-left: 60px;
  box-shadow: 0px 5px 8px -2px rgba(157, 157, 157, 0.25);
`

export const CustomerRegistration = () => {

  React.useEffect(() => {
    // @ts-ignore
    document
      .body
      .classList
      .add("bg-ocean-blue-trans");
  }, [])

  return <OuterWrap>
    <InnerWrap className='flex flex-col sm:flex-row'>
      <div className="w-100 sm:w-1/2">
        <HeadText>Enjoy borderless transactions, Join Mulla today!</HeadText>
        <SubHeadText className='mt-6'>Send and recieve money across Africa</SubHeadText>
        <div className="flex items-center mt-12">
          <IlluCtn className='flex items-center content-center'></IlluCtn>
          <div className="flex flex-col ml-4">
            <FeatureHeadText>Secure payments</FeatureHeadText>
            <FeatureDescText className='mt-3'>Manage your payments and transaction safely
            </FeatureDescText>
          </div>
        </div>
        <div className="flex items-center mt-8">
          <IlluCtn className='flex items-center content-center'></IlluCtn>
          <div className="flex flex-col ml-4">
            <FeatureHeadText>Seamless money transfers in around Africa</FeatureHeadText>
            <FeatureDescText className='mt-3'>Manage your payments and transaction safely
            </FeatureDescText>
          </div>
        </div>
        <div className="flex items-center mt-12">
          <IlluCtn className='flex items-center content-center'></IlluCtn>
          <div className="flex flex-col ml-4">
            <FeatureHeadText>Premium customer service</FeatureHeadText>
            <FeatureDescText className='mt-3'>Manage your payments and transaction safely
            </FeatureDescText>
          </div>
        </div>
      </div>
      <div className="w-100 sm:w-1/2 flex">
        <FormWrap className='flex-1'>
          <TabMenu.Group>
            <TabMenu>
              <TabMenu.Header className='px-4'>
                <TabMenu.TabMenuItem className='w-1/2 text-lg' path='/1' isActive={true}>Individual</TabMenu.TabMenuItem>
                <TabMenu.TabMenuItem className='w-1/2 text-lg' path='/2'>Business</TabMenu.TabMenuItem>
              </TabMenu.Header>
              <TabMenu.Body>
                <TabMenu.TabContent className='py-6' path='/1'>
                  <IndividualForm/>
                </TabMenu.TabContent>
                <TabMenu.TabContent className='py-6' path='/2'>Tab 2</TabMenu.TabContent>
              </TabMenu.Body>
            </TabMenu>
          </TabMenu.Group>
        </FormWrap>
      </div>
    </InnerWrap>
  </OuterWrap>
}

export default CustomerRegistration;
