import * as React from 'react'
import axios from 'axios'
import {v1 as uuid} from 'uuid'

interface registerState {
  isIdle?: boolean,
  isLoading?: boolean,
  isSuccess?: boolean,
  isError?: boolean,
  error?: any,
  data?: any
}

export default function useRegisterUser() {
  const [state,
    setState] = React.useReducer((_ : any, action : registerState) => action, {isIdle: true});
  const mutate = React.useCallback(async(values) => {
    setState({isLoading: true})
    try {
      const data = await axios.post('http://li2142-101.members.linode.com:8061/customer/onboard', {
        header: {
          'requestId': uuid(),
          'command': 'CREATE_CUSTOMER'
        },
        payload: values
      }, {
        headers: {
          tenantCode: 'mula'
        }
      }).then((res) => res.data)
      setState({isSuccess: true, data})
    } catch (error) {
      setState({isError: true, error})
    }
  }, [])

  return [mutate, state]
}