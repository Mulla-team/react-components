import * as React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import TextField from '../../src/components/textfieldgroup'
import Button from '../../src/components/button'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import Image from 'next/image'
import classNames from 'classnames'
import useValidateToken from '../../src/hooks/use-validate-token'
import useCompleteRegistration from '../../src/hooks/use-complete-registration'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import NotificationBox from '../../src/components/notificationbox'
import * as yup from 'yup'

const OuterWrap = styled.div `
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormWrap = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  padding: 0 24px;
  max-width: 360px;
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
    width: 22rem;
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

interface UserResponseData {
  [s:string]: any
}

const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required('Username cannot be empty')
      .max(200),
    password: yup
      .string()
      .required('No password provided.') 
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

export const SetPassword = () => {
    const {register, handleSubmit, errors} = useForm({resolver: yupResolver(schema)});
    const router = useRouter()
    const { token } = router.query
    const [userData, setUserData] = React.useState<UserResponseData | null>(null)
    const [serverResponseMessage, setServerResponseMessage] = React.useState<{
      message: string,
      code?: number
    }| null>(null)

    const onTokenValidateSuccess = (userData: UserResponseData) => {
      console.log({userData})
      setUserData(userData)
    }

    const onTokenValidateError = (responseError: {
      code?: number,
      message: string
    }) => {
      setServerResponseMessage(responseError)
      console.log({responseError})
    }

    const onRegistrationCompleteSuccess = () => {
      console.log('SUCCESS')
    }

    const onRegistrationCompleteError = (errorData: { code?: number, message: string}) => {
      console.log({errorData})
      setServerResponseMessage(errorData)
    }

    const {mutate: handleValidateToken, isLoading: isValidatingToken, isError: isTokenError} = useValidateToken(`${token}___`, onTokenValidateSuccess, onTokenValidateError);
    
    const {mutate: handleCompleteRegistration, isLoading: isCompletingRegistration, isError: isRegisterError} = useCompleteRegistration(onRegistrationCompleteSuccess, onRegistrationCompleteError)
      

    React.useEffect(() => {
      if (token) {
        handleValidateToken(token as string)
      }
    }, [token])

    const submitForm = (data: any) => {
      if (userData)
        handleCompleteRegistration({username: data.username, password: data.password, customerNumber: userData.customerNumber})
    }

    return <OuterWrap>
        <FormWrap>
            <Image src="/static/mulla-logo-sm.svg" alt="wallet" width={40} height={150 * (32/118)}/>
            <TitleText className='my-6 w-full text-center'>Set a new password</TitleText>
            <TransitionGroup className='w-full'>
              {((isRegisterError || isTokenError) && serverResponseMessage?.message) && <CSSTransition classNames="notification-box-transform" timeout={100}><NotificationBox dangerouslySetInnerHTML={{__html: serverResponseMessage.message}} className='w-full'/></CSSTransition> }
            </TransitionGroup>
            <form className="w-full flex flex-col mt-6">
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
                    onClick={handleSubmit(submitForm)}
                    type='submit'
                    loading={isValidatingToken || isCompletingRegistration}
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