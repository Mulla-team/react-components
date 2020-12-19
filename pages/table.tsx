import * as React from 'react'
import styled from 'styled-components'
import Table from '../src/components/table/styled'
import FormContainer from '../src/components/formcontainer/styled'
import TextField from '../src/components/textfieldgroup'
import Button from '../src/components/button/styled'
import Avatar from '../src/components/avatar/styled'
import Pill from '../src/components/pill/styled'

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

export const Tables = () => {
  return <MainWrap>
    <FormContainer.Group>
      <FormContainer>
        <FormContainer.Header>
          Permission management
        </FormContainer.Header>
        <FormContainer.Body className='flex items-center justify-between'>
          <div style={{
            width: '300px'
          }}>
            <TextField
              fill
              placeholder='Search companies'
              appendIcon={< i className = 'uc-icon text-grey' >&#xeb12;</i>}/>
          </div>
          <Button>+ Add to Company</Button>
        </FormContainer.Body>
        <Table pageCount={30} pageNumber={1} id="customers">
          <Table.Tr>
            <Table.Th>Company</Table.Th>
            <Table.Th>Contact</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className='flex items-center'>
              <Avatar fullName='Dahabshill' className='mr-4'/>
              <div>
                <p className='text-base mb-2 font-family-med text-default'>Dahabshill</p>
                <p className='text-sm text-grey'>info@dahabshiil.com</p>
              </div>
            </Table.Td>
            <Table.Td>Maria Anders</Table.Td>
            <Table.Td>
              <div>
                <Pill variant='success'>active</Pill>
              </div>
            </Table.Td>
            <Table.Td>
              <Button variant='icon'>
                <i className="uc-icon text-grey">&#xe972;</i>
              </Button>
              <Button variant='icon' className='ml-4'>
                <i className="uc-icon text-grey">&#xe836;</i>
              </Button>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className='flex items-center'>
              <Avatar fullName='Kalisa Gilbert' className='mr-4'/>
              <div>
                <p className='text-base mb-2 font-family-med text-default'>Kalisa Gilbert</p>
                <p className='text-sm text-grey'>info@dahabshiil.com</p>
              </div>
            </Table.Td>
            <Table.Td>Christina Berglund</Table.Td>
            <Table.Td>
            <Pill variant='warning'>pending</Pill>
            </Table.Td>
            <Table.Td>
              <Button variant='icon'>
                <i className="uc-icon text-grey">&#xe972;</i>
              </Button>
              <Button variant='icon' className='ml-4'>
                <i className="uc-icon text-grey">&#xe836;</i>
              </Button>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className='flex items-center'>
              <Avatar fullName='Tyler Herro' className='mr-4'/>
              <div>
                <p className='text-base mb-2 font-family-med text-default'>Tyler Herro</p>
                <p className='text-sm text-grey'>info@dahabshiil.com</p>
              </div>
            </Table.Td>
            <Table.Td>Christina Berglund</Table.Td>
            <Table.Td>
            <Pill variant='danger'>declined</Pill>
            </Table.Td>
            <Table.Td>
              <Button variant='icon'>
                <i className="uc-icon text-grey">&#xe972;</i>
              </Button>
              <Button variant='icon' className='ml-4'>
                <i className="uc-icon text-grey">&#xe836;</i>
              </Button>
            </Table.Td>
          </Table.Tr>
        </Table>
      </FormContainer>
    </FormContainer.Group>
  </MainWrap>
}

export default Tables;
