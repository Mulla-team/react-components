import * as React from 'react'
import styled from 'styled-components'
import Modal from '../src/components/modal/styled'

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

export const Modals = () => {
  const [isModalVisible,
    setIsModalVisible] = React.useState(true);
  return <MainWrap>
    <Modal.Group>
      <Modal
        isVisible={isModalVisible}
        onHide={() => {
        setIsModalVisible(!isModalVisible)
      }}>
        <Modal.Header>
          <h2>Hey doode!</h2>
        </Modal.Header>
      </Modal>
    </Modal.Group>
  </MainWrap>
}

export default Modals;