import * as React from 'react'
import styled from 'styled-components'
import TextField from '../../src/components/textfieldgroup'
import SelectField from '../../src/components/selectfieldgroup'
import Button from '../../src/components/button'
import {useForm} from "react-hook-form";

const ArrowIconWrap = styled.span `
  svg {
    height: 11.5px;
    width: auto;
  }
`

const LoginLinkText = styled.p `
  font-size: 15px;
  color: ${props => props.theme.defaultTextColor};
  span {
    color: ${props => props.theme.primary};
    text-decoration: underline;
  }
`

interface IFormInput {
  firstname : string;
  lastname : string;
  email : string;
  phonenumber : string
}

export const IndividualRegiterForm = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (data : any) => {
    console.log('Hreee', data)
  };

  return <form onSubmit={onSubmit} className="w-100 flex flex-col">
    <div className='flex'>
      <TextField.Group>
        <div className='w-100 sm:w-1/2 pr-0 sm:pr-2'>
          <TextField.Label>First Name *</TextField.Label>
          <TextField
            ref={register({required: true, minLength: 20})}
            name='firstname'
            autoFocus={true}
            className='mb-4 mt-3'
            placeholder='Enter first name'/>
        </div>
      </TextField.Group>
      <TextField.Group>
        <div className='w-100 sm:w-1/2 pl-0 sm:pl-2'>
          <TextField.Label>Last Name *</TextField.Label>
          <TextField
            ref={register({required: true})}
            name='lastname'
            className='mb-4 mt-3'
            placeholder='Enter last name'/>
        </div>
      </TextField.Group>
    </div>
    <div className='flex mt-2'>
      <TextField.Group>
        <div className='w-100 sm:w-1/2 pr-0 sm:pr-2'>
          <TextField.Label>Email *</TextField.Label>
          <TextField
            ref={register({required: true})}
            name='email'
            type='email'
            className='mb-4 mt-3'
            placeholder='jon@stark.com'/>
        </div>
      </TextField.Group>
      <TextField.Group>
        <div className='w-100 sm:w-1/2 pl-0 sm:pl-2'>
          <TextField.Label>Phone number *</TextField.Label>
          <TextField
            ref={register({required: true})}
            name='phonenumber'
            className='mb-4 mt-3'
            placeholder='Enter phone number'/>
        </div>
      </TextField.Group>
    </div>
    <SelectField.Group>
      <div className='w-100 mt-2'>
        <SelectField.Label>Country *</SelectField.Label>
        <SelectField
          name='country'
          className='mb-4 mt-3'
          value={''}
          onChange={(event, _value) => {}}
          menuItems={[
          {
            label: 'Michael Jackson',
            value: 'MJackson'
          }, {
            label: 'Michael Jordan',
            value: 'MJordan'
          }, {
            label: 'Mike Tyson',
            value: 'MTyson'
          }
        ]}
          placeholder='Select a country'/>
      </div>
    </SelectField.Group>
    <Button
      onClick={handleSubmit(onSubmit)}
      type='submit'
      className='mt-4 flex items-center'
      fill>Sign up
      <ArrowIconWrap className='ml-2'>
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.63683 16L17.2479 8.38892L9.63683 0.777832L8.16845 2.23805L13.267 7.32842H0.459473V9.44941H13.267L8.16845 14.5479L9.63683 16Z"
            fill="white"/>
        </svg>
      </ArrowIconWrap>
    </Button>
    <LoginLinkText className='mt-5 w-100 text-center'>Aleady have an account?
      <span>&nbsp;Log in</span>
    </LoginLinkText>
  </form>
}

export default IndividualRegiterForm
