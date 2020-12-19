import * as React from 'react'
import styled from 'styled-components'
import TabMenu from '../src/components/tabMenu/styled'

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

export const TabMenuGroup = () => {
  return <MainWrap>
    <TabMenu.Group>
      <TabMenu>
        <TabMenu.Header>
          <TabMenu.TabMenuItem className='w-1/3' path='/1' isActive={true}>Tab 1</TabMenu.TabMenuItem>
          <TabMenu.TabMenuItem className='w-1/3' path='/2'>Tab 2</TabMenu.TabMenuItem>
          <TabMenu.TabMenuItem className='w-1/3' path='/3'>Tab 3</TabMenu.TabMenuItem>
        </TabMenu.Header>
        <TabMenu.Body>
          <TabMenu.TabContent path='/1'>Tab 1</TabMenu.TabContent>
          <TabMenu.TabContent path='/2'>Tab 2</TabMenu.TabContent>
          <TabMenu.TabContent path='/3'>Tab 3</TabMenu.TabContent>
        </TabMenu.Body>
      </TabMenu>
    </TabMenu.Group>
  </MainWrap>
}

export default TabMenuGroup;