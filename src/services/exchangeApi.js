import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const exhangeApiHeaders = {
  'requestURL': 'https://api.exchangerate.host'
}

const BaseUrl = 'https://api.exchangerate.host'

const createRequest = (url) => ({ url, headers: exhangeApiHeaders })

export const exchangeApi = createApi({
  reducerPath: 'exchangeApi',
  baseQuery: fetchBaseQuery({ BaseUrl }),

  endpoints: (builder) => {
      getExchange: builder.query({
      query: () => createRequest('/latest')
    })
  }
})

export const {
  useGetExchangeQuery,
} = exchangeApi;

// var requestURL = 'https://api.exchangerate.host/latest';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   var response = request.response;
//   console.log(response);
// }