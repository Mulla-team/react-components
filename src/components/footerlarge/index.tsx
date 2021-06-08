import Link from 'next/link'
import * as React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const OuterWrap = styled.footer `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFF;
`

const InnerWrap = styled.div `
  width: 100%;
  max-width: ${props => props.theme.xXLargeWindowSize};
  padding: 60px 0;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    padding: 80px 32px 96px;
  }
`

const FooterHeadText = styled.h3 `
  font-family: var(--font-family-medium);
  font-size: .9em;
  color: ${props => props.theme.defaultTextColor};
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: .9em;
  }
`

const FooterListItem = styled.li `
  font-family: var(--font-family-regular);
  font-size: .9em;
  color: ${props => props.theme.defaultTextColor};
  line-height: 34px;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: .9em;
  }
`

const FooterBottomLink = styled.button `
  font-family: var(--font-family-regular);
  font-size: .8em;
  color: ${props => props.theme.defaultTextColor};
  line-height: 34px;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: .8em;
  }
`

const DownloadAppButton = styled.span `
  background: #E9EAEF;
  border-radius: 13px;
  padding: 12px;
`


export default () => {
  return <OuterWrap>
    <InnerWrap>
      <div className="w-full flex flex-wrap lg:flex-nowrap lg:justify-between px-4 lg:px-0">
        <div className="flex flex-col w-1/3 lg:w1/4 mr-10 lg:mr-0">
          <FooterHeadText className='mb-8'>Company</FooterHeadText>
          <ul>
            <FooterListItem><Link href='#'>Company & team</Link></FooterListItem>
            <FooterListItem><Link href='#'>Carreers</Link></FooterListItem>
            <FooterListItem><Link href='#'>Afilliates and partnership</Link></FooterListItem>
          </ul>
        </div>
        <div className="flex flex-col w-1/3 lg:w1/4">
          <FooterHeadText className='mb-8'>Reach out</FooterHeadText>
          <ul>
            <FooterListItem><Link href='#'>For partnerships & general enquires</Link></FooterListItem>
            <FooterListItem><Link href='#'>hello@mulla.app</Link></FooterListItem>
          </ul>
        </div>
        <div className="flex flex-col w-1/3 lg:w1/4 mt-8 lg:mt-0">
          <FooterHeadText className='mb-8'>Help</FooterHeadText>
          <ul>
            <FooterListItem><Link href='#'>Help center</Link></FooterListItem>
          </ul>
        </div>
      </div>
      <div className="flex mt-10 px-4 lg:px-0">
        <DownloadAppButton className='mr-4'><Image src="/static/appstore.svg" alt="arrow" width={120} height={34}/></DownloadAppButton>
        <DownloadAppButton><Image src="/static/googleplay.svg" alt="arrow" width={120} height={34}/></DownloadAppButton>
      </div>
      <div className="flex mt-10 px-4 lg:px-0">
        <FooterBottomLink><a href="#">@Mulla</a></FooterBottomLink>
        <FooterBottomLink className='ml-6'><a href="#">Terms of Service</a></FooterBottomLink>
        <FooterBottomLink className='ml-6'><a href="#">Privacy Policy</a></FooterBottomLink>
      </div>
    </InnerWrap>
  </OuterWrap>
}