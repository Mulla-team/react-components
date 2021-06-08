import { useMutation } from 'react-query'
import axios from 'axios'

interface ArticlesResponseData {
  [s:string]: any
}

const fetchArticles = async(filters: {startDate?: string, endDate?: string, featured?: boolean}) => {
	const {data} = await axios.get('localhost:7000/articles')
	console.log({data})
	return data as ArticlesResponseData
}

export default function useFetchArticles(handleSuccess: (articles: ArticlesResponseData) => void, handleError: (errorData: { code?: number, message: string}) => void) {
    return useMutation(fetchArticles, {
        onSuccess: (data) => {
            const responseData = data as ArticlesResponseData
          handleSuccess(responseData)
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
