// import axios from 'axios'

// const url = 'https://api.exchangerate.host';

// export const fetchDataExchange = async () => {
//   try {
//     const {data: {latest}} = await axios.get(`${url}/latest`)
//     return latest.map((last) => last.rates)
//   } catch (error) {
//     console.log(error);
//   }
// }

// try {
//   const {data: {countries}} = await axios.get(`${url}/countries`)
//   return countries.map((country) => country.name)
// } catch (error) {
//   console.log(error);
// }

// var requestURL = 'https://api.exchangerate.host/latest';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   var response = request.response;
//   console.log(response);
// }