import * as React from 'react'
import styled from 'styled-components'
import TextField from '@Components/textfieldgroup'
import Button from '@Components/button'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import classNames from 'classnames'
import NotificationBox from '@Components/notificationbox'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Link from 'next/link'

const LinkText = styled.p `
  font-size: 15px;
  color: ${props => props.theme.defaultTextColor};
  span {
    color: ${props => props.theme.primary};
    cursor: pointer;
    &:hover {
      text-decoration: underline
    }
  }
`

interface IFormInput {
  username: string;
  password: string;
  keepSignedIn?: boolean
}

interface Props {
  onSubmit : (values : IFormInput) => void,
  isLoading?: boolean,
  isError?: boolean,
  error?: {
    message: string,
    code?: number
  } | null
}

const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required('Username is required to login')
      .max(200),
    password: yup
      .string()
      .required('Password is required to login')
      .max(200),
  });

export const SignInForm = (props : Props) => {
  const {onSubmit, isError, error, isLoading} = props
  const {register, handleSubmit, errors} = useForm({resolver: yupResolver(schema)});

  const submit = (data: any) => {
    onSubmit(data as IFormInput)
  }

  React.useEffect(() => {
    // @ts-ignore
    document
      .body
      .classList
      .remove("pattern-bg");
  }, [])

  return <form onSubmit={submit} className="w-full flex flex-col">
    <TransitionGroup>
    {isError && error &&  error.message && <CSSTransition classNames="notification-box-transform" timeout={100}>
      <NotificationBox dangerouslySetInnerHTML={{__html: error.message}} className='mb-6'/>
      </CSSTransition>}
    </TransitionGroup>
    <div className='flex flex-col w-full'>
      <TextField.Group>
        <div
        className={classNames('w-full mb-3', {
        'sm:mb-2': !errors.username,
        'sm:mb-0': errors.username
        })}>
        <TextField.Label>Username *</TextField.Label>
        <TextField
          ref={register({required: true})}
          name='username'
          type='text'
          autoFocus={true}
          className='mt-3 w-full'
          placeholder='Set a username'
          error={errors.username
          ? errors.username.message
          : undefined}/>
        </div>
      </TextField.Group>
    </div>
    <div className='mt-2'>
      <TextField.Group>
        <div
        className={classNames('w-full mb-3', {
        'sm:mb-2': !errors.password,
        'sm:mb-0': errors.password
        })}>
        <TextField.Label>Password *</TextField.Label>
        <TextField
          ref={register({required: true})}
          name='password'
          type='password'
          className='mt-3 w-full'
          placeholder='Password'
          error={errors.password
          ? errors.password.message
          : undefined}/>
        </div>
      </TextField.Group>
    </div>
    <div className="w-full">
    <Button
      onClick={handleSubmit(submit)}
      type='submit'
      loading={isLoading}
      className='mt-4 flex items-center'
      fill>Sign in
    </Button>
    <LinkText className='mt-5 w-full text-center'>New to Mulla?
    &nbsp;<Link href='/register'><span>Sign up</span></Link>
    </LinkText>
    </div>
  </form>

}

export default SignInForm