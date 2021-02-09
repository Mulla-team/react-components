import { useMutation } from 'react-query'
import axios from 'axios'
import {v1 as uuid} from 'uuid'

interface UserResponseData {
  [s:string]: any
}

const validateToken = (token: string) => {
  return axios.post('https://li2142-101.members.linode.com:8061/customer/validate/token', {
    header: {
        'requestId': uuid(),
        'command': 'VALIDATETOKEN_CUSTOMER'
    },
    payload: {
      token
    }
    }, {
      headers: {
          tenantCode: 'mula'
      }
    })
}
  
  export default function useValidateToken(token: string, handleSuccess: (data: UserResponseData) => void, handleError: (responseError: {
    code?: number,
    message: string
  }) => void) {
    return useMutation(validateToken, {
        onSuccess: (data) => {
            const {data: {payload}} = data;
            handleSuccess(payload);
        },
        onError: (error: any) => {
          if (error && error.response.data && error.response.data.payload) {
            const {message, code} = error.response.data.payload
            handleError({
              code,
              message: `<span>${message}</span>`
            })
          } else {
            handleError({
              message: `<span>An error has occured, please contact our customer support team at <a mailto='mulla@support.io'>mulla@support.io</a></span>`
            })
          }
        }
    })
  }

