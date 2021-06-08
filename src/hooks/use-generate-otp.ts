import { useMutation } from 'react-query'
import axios from 'axios'
import {v1 as uuid} from 'uuid'

interface LoginResponseData {
  [s:string]: any
}

function generateOTP(accessToken: string) {
	return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, {
	header: {
      requestId: uuid(),
      command: 'GENERATE_OTP'
  },
  payload: {
    applicationId: "mulaapp"
  }
}, {
  headers: {
    tenantCode: process.env.NEXT_PUBLIC_TENANT_CODE,
    Authorization: `Bearer ${accessToken}`
  }
	})
}

export default function useGenerateOtp(handleSuccess: (data: LoginResponseData) => void, handleError: (responseError: {
  code?: number,
  message: string
}) => void) {
	return useMutation(generateOTP, {
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