import * as React from 'react'
import styled from 'styled-components'
import TextField from '../../src/components/textfieldgroup'
import Button from '../../src/components/button'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import Image from 'next/image'
import classNames from 'classnames'
import * as yup from 'yup'

const OuterWrap = styled.div `
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormWrap = styled.div `
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  padding: 0 24px;
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    padding: 0;
  }
`

const TitleText = styled.h4 `
  font-family: var(--font-family-medium);
  font-size: 1em;
  color: ${props => props.theme.presentationTextColor};
  @media(min-width: ${props => props.theme.screenSize.tablet}) {
    font-size: 1.2em;
  }
`

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

const TermsText = styled.p `
  font-size: 13.5px;
  color: ${props => props.theme.iconGrey};
  line-height: 22px;
  span {
    color: ${props => props.theme.primary};
    cursor: pointer;
    &:hover {
      text-decoration: underline
    }
  }
`

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required('Email is required')
      .email('Email must be a valid email')
      .max(200),
    password: yup
      .string()
      .required('No password provided.') 
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });


export const SetPassword = () => {
    const {register, handleSubmit, errors} = useForm({resolver: yupResolver(schema)});

    return <OuterWrap>
        <FormWrap>
            <Image src="/static/mulla-logo-01.svg" alt="wallet" width={170} height={170 * (32/118)}/>
            <TitleText className='mt-6'>Set a new password</TitleText>
            <form className="w-full flex flex-col mt-12">
                <div className='flex flex-col w-full'>
                    <TextField.Group>
                        <div
                        className={classNames('w-full mb-3', {
                        'sm:mb-2': !errors.email,
                        'sm:mb-0': errors.email
                        })}>
                        <TextField.Label>Email address *</TextField.Label>
                        <TextField
                            ref={register({required: true, minLength: 20})}
                            name='email'
                            type='email'
                            autoFocus={true}
                            className='mt-3 w-full'
                            placeholder='jon@snow.com'
                            error={errors.email
                            ? errors.email.message
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
                            ref={register({required: true, minLength: 20})}
                            name='password'
                            type='password'
                            className='mt-3 w-full'
                            placeholder='Create password'
                            error={errors.password
                            ? errors.password.message
                            : undefined}/>
                        </div>
                    </TextField.Group>
                </div>
                <div>
                    <TermsText className='mt-5 w-full'>By signing up, I accept the Mulla &nbsp;<span>Terms of Service</span> and acknowledge the &nbsp;<span>Privacy Policy</span>.</TermsText>
                    <Button
                    onClick={() => {}}
                    type='submit'
                    loading={false}
                    className='mt-4 flex items-center'
                    fill>Set New Password
                    </Button>
                    <LinkText className='mt-5 w-full text-center'>Already have an account?
    &nbsp;<span>Log in</span>
    </LinkText>
                </div>
            </form>
        </FormWrap>
    </OuterWrap>
}

export default SetPassword