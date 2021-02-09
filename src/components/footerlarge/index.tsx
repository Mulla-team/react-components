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
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col w-1/4">
          <FooterHeadText className='mb-10'>Company and team</FooterHeadText>
          <ul>
            <FooterListItem><Link href='#'>Compony and team</Link></FooterListItem>
            <FooterListItem><Link href='#'>Carreers</Link></FooterListItem>
            <FooterListItem><Link href='#'>Afilliates and partnership</Link></FooterListItem>
          </ul>
        </div>
        <div className="flex flex-col w-1/4">
          <FooterHeadText className='mb-4'>Help and support</FooterHeadText>
          <ul>
            <FooterListItem><Link href='#'>Help center</Link></FooterListItem>
          </ul>
        </div>
        <div className="flex flex-col w-1/4">
          <FooterHeadText className='mb-4'>Reach out</FooterHeadText>
          <ul>
            <FooterListItem><Link href='#'>For partnerships & general enquires</Link></FooterListItem>
            <FooterListItem><Link href='#'>hello@mulla.app</Link></FooterListItem>
          </ul>
        </div>
      </div>
      <div className="flex mt-10">
        <DownloadAppButton className='mr-4'><Image src="/static/appstore.svg" alt="arrow" width={120} height={34}/></DownloadAppButton>
        <DownloadAppButton><Image src="/static/googleplay.svg" alt="arrow" width={120} height={34}/></DownloadAppButton>
      </div>
      <div className="flex mt-10">
        <FooterBottomLink><a href="#">@Mulla</a></FooterBottomLink>
        <FooterBottomLink className='ml-6'><a href="#">Terms of Service</a></FooterBottomLink>
        <FooterBottomLink className='ml-6'><a href="#">Privacy Policy</a></FooterBottomLink>
      </div>
    </InnerWrap>
  </OuterWrap>
}