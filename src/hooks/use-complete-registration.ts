import { useMutation } from 'react-query'
import axios from 'axios'
import {v1 as uuid} from 'uuid'

interface UserResponseData {
  [s:string]: any
}

const completeRegistration = async (userData: {username: string, password: string, customerNumber: string}) => {
  console.log('HDHDHD', userData);
  const {data: authData} = await axios.post('https://li2142-101.members.linode.com:8061/user/login', {
  header: {
    'client': 'Statement',
    'realm': 'Project'
  },
  payload: {
    "username": "test",
    "password": "test@123"
  }
  }, {
    headers: {
      tenantCode: 'mula'
    }
  })
    
  return axios.post('https://li2142-101.members.linode.com:8061/customer/complete/registration', {
  header: {
    'requestId': uuid(),
    'realm': 'Project',
    'command': 'COMPLETEREGISTRATION_CUSTOMER'
  },
  payload: {
    "username": userData.username,
    "password": userData.password,
    "customerNumber": userData.customerNumber 
  }
  }, {
    headers: {
      tenantCode: 'mula',
      Authorization: `Bearer ${authData.payload.access_token}`
    }
  })
  
}

export default function useCompleteRegistration(handleSuccess: () => void, handleError: (errorData: { code?: number, message: string}) => void) {
  return useMutation(completeRegistration, {
      onSuccess: (data) => {
        handleSuccess()
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
