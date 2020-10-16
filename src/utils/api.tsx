import axios from 'axios';

const config = {
  method: 'get',
  baseURL: `${process.env.WORDPRESS_API_URL}/wp-json/wc/v3/`,
  auth: {
    username: `${process.env.CONSUMER_KEY}`,
    password: `${process.env.CONSUMER_SECRET}`
  },
};

export async function wooApi(fetch) {
  const data = await axios(fetch, config)
  //console.log(`byslug ${data}`)
  return data
}
/*
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export const wooApi = new WooCommerceRestApi({
  url: `${process.env.WORDPRESS_API_URL}`,
  consumerKey: `${process.env.CONSUMER_KEY}`,
  consumerSecret: `${process.env.CONSUMER_SECRET}`,
  version: 'wc/v3',
  queryStringAuth: true
})

async function fetchAPI(fetch) {
  const res = wooApi
    .get(fetch)
    .then((response) => {
      // Successful request
      //console.log("Response Status:", response.status);
      //console.log("Response Headers:", response.headers);
      //console.log("Response Data:", response.data);
      //console.log("Total of pages:", response.headers['x-wp-totalpages']);
      //console.log("Total of items:", response.headers['x-wp-total']);
      return response.data
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
  return res
}

export async function getAllPostsForHome() {
  const data = await fetchAPI('products?brand=1889')
  return data
}

export async function getAllProduct() {
  const data = await fetchAPI('products?brand=1889&per_page=100')
  //console.log(data)
  return data
}

export async function getProductId(slug) {
  const data = await fetchAPI(`products?brand=1889&slug=${slug}`)
  //console.log(`byslug ${data}`)
  return data
}*/
