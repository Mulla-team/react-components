import * as React from 'react'
import axios from 'axios'
import {v1 as uuid} from 'uuid'

interface RegisterState {
  isIdle?: boolean,
  isLoading?: boolean,
  isSuccess?: boolean,
  isError?: boolean,
  error?: any,
  data?: any
}

export default function useRegisterUser(): RegisterState[] {
  const [state,
    setState] = React.useReducer((_ : any, action : RegisterState) => action, {isIdle: true});
  const mutate = React.useCallback(async(values) => {
    setState({isLoading: true})
    try {
      const data = await axios.post('https://li2142-101.members.linode.com:8061/customer/onboard', {
        header: {
          'requestId': uuid(),
          'command': 'CREATE_CUSTOMER'
        },
        payload: values
      }, {
        headers: {
          tenantCode: 'mula'
        }
      })
      setState({isSuccess: true, data})
    } catch (error) {
      if (error.response && error.response.data && error.response.data.payload) {
        const {message, code} = error.response.data.payload
        setState({isError: true, error: {
          code,
          message: `<span>${message}</span>`
        }});
      } else {
        const message =  (navigator && navigator.onLine) ? `<span>An error has occured, please contact our customer support team at <a mailto='mulla@support.io'>mulla@support.io</a></span>` : '<span>Seems like you are not connected to the internet.</span></br> <span>Please check you connection and try again.</span>'
        setState({isError: true, error: {
          message
        }});
      }
    }
  }, [])
  // @ts-ignore
  return [mutate, state]
}