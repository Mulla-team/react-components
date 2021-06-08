import { useMutation } from 'react-query'
import axios from 'axios'

interface LoginResponseData {
    [s:string]: any
}

const loginUser = (payload: {username: string, password: string}) => {
	return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, {
	header: {
			'client': process.env.NEXT_PUBLIC_CLIENT,
			'realm': process.env.NEXT_PUBLIC_REALM
	},
	payload
	}, {
		headers: {
				tenantCode: process.env.NEXT_PUBLIC_TENANT_CODE
		}
	})
}

export default function useLoginUser(handleSuccess: (data: LoginResponseData) => void, handleError: (responseError: {
  code?: number,
  message: string
}) => void) {
	return useMutation(loginUser, {
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