import * as React from 'react'
import styled from 'styled-components'
import TextField from '../../src/components/textfieldgroup'
import SelectField from '../../src/components/selectfieldgroup/styled'
import Button from '../../src/components/button'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import classNames from 'classnames'
import Link from 'next/link'
import * as yup from "yup"

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
  lastname?: string;
  email : string;
  phonenumber : string;
  residence : string
}

const schema = yup
  .object()
  .shape({
    firstname: yup
      .string()
      .required('First name is required')
      .max(200),
    lastname: yup
      .string()
      .required('Last name is required')
      .max(200),
    email: yup
      .string()
      .required('Email is required')
      .email('Email must be a valid email')
      .max(200),
    phonenumber: yup
      .string()
      .required('Phone number is required')
      .max(100),
    // country: yup   .string()   .required('Country is required')   .max(100)
  });

interface Props {
  onSubmit : (values : IFormInput) => void
}

export const IndividualRegiterForm = (props : Props) => {

  const [country,
    setCountry] = React.useState < string | undefined > (undefined)

  const {register, handleSubmit, errors} = useForm({resolver: yupResolver(schema)});

  const onSubmit = (data : any) => {
    const {onSubmit} = props
    const payload = {
      ...data,
      residence: `${country}`
    }
    onSubmit(payload as IFormInput)
  };

  return <form onSubmit={onSubmit} className="w-100 flex flex-col">
    <div className='flex flex-col sm:flex-row'>
      <TextField.Group>
        <div
          className={classNames('w-100 sm:w-1/2 pr-0 sm:pr-2 mb-3', {
          'sm:mb-2': !errors.firstname,
          'sm:mb-0': errors.firstname
        })}>
          <TextField.Label>First name *</TextField.Label>
          <TextField
            ref={register({required: true, minLength: 20})}
            name='firstname'
            autoFocus={true}
            className='mt-3'
            placeholder='Enter first name'
            error={errors.firstname
            ? errors.firstname.message
            : undefined}/>
        </div>
      </TextField.Group>
      <TextField.Group>
        <div
          className={classNames('w-100 sm:w-1/2 pl-0 sm:pl-2 mb-3', {
          'sm:mb-2': !errors.lastname,
          'sm:mb-0': errors.lastname
        })}>
          <TextField.Label>Last name *</TextField.Label>
          <TextField
            ref={register({required: true})}
            name='lastname'
            className='mt-3'
            placeholder='Enter last name'
            error={errors.lastname
            ? errors.lastname.message
            : undefined}/>
        </div>
      </TextField.Group>
    </div>
    <div className='flex flex-col sm:flex-row sm:mt-2'>
      <TextField.Group>
        <div
          className={classNames('w-100 sm:w-1/2 pr-0 sm:pr-2 mb-3', {
          'sm:mb-2': !errors.email,
          'sm:mb-0': errors.email
        })}>
          <TextField.Label>Email *</TextField.Label>
          <TextField
            ref={register({required: true})}
            name='email'
            type='email'
            className='mt-3'
            placeholder='jon@stark.com'
            error={errors.email
            ? errors.email.message
            : undefined}/>
        </div>
      </TextField.Group>
      <TextField.Group>
        <div
          className={classNames('w-100 sm:w-1/2 pl-0 sm:pl-2 mb-3', {
          'sm:mb-2': !errors.phonenumber,
          'sm:mb-0': errors.phonenumnber
        })}>
          <TextField.Label>Phone number *</TextField.Label>
          <TextField
            ref={register({required: true})}
            name='phonenumber'
            className='mt-3'
            placeholder='Enter phone number'
            error={errors.phonenumber
            ? errors.phonenumber.message
            : undefined}/>
        </div>
      </TextField.Group>
    </div>
    <SelectField.Group>
      <div
        className={classNames('w-100 sm:mt-2 mb-2', {
        'sm:mb-2': !errors.country,
        'sm:mb-0': errors.country
      })}>
        <SelectField.Label>Country *</SelectField.Label>
        <SelectField
          ref={register({required: true})}
          name='residence'
          className='mt-3'
          value={country}
          onChange={(event, _value) => {
          setCountry(event.target.value);
        }}
          menuItems={[
          {
            label: 'Rwanda',
            value: 'RWA'
          }, {
            label: 'Kenya',
            value: 'KE'
          }, {
            label: 'Uganda',
            value: 'UG'
          }
        ]}
          placeholder='Select a country'
          error={errors.country
          ? errors.country.message
          : undefined}/>
      </div>
    </SelectField.Group>
    <Button
      onClick={handleSubmit(onSubmit)}
      type='submit'
      loading={false}
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
    <LoginLinkText className='mt-5 w-100 text-center'>Already have an account?
      <span>&nbsp;Log in</span>
    </LoginLinkText>
  </form>
}

export default IndividualRegiterForm
