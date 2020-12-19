import {BreadCrumb} from '@Components/breadcrumb/breadcrumb'
import * as React from 'react'
import styled from 'styled-components'
import Bread from '../src/components/breadcrumb/styled'

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

export const BreadCrumbs = () => {

  return <MainWrap>
    <Bread
      menuItems={[
      {
        title: 'Dashboard'
      }, {
        title: 'Management'
      }, {
        title: 'Users',
        isActive: true
      }
    ]}/>
  </MainWrap>
}

export default BreadCrumbs;