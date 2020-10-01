//var axios = require('axios')
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const wooApi = new WooCommerceRestApi({
  url: `${process.env.WORDPRESS_API_URL}`,
  consumerKey: `${process.env.CONSUMER_KEY}`,
  consumerSecret: `${process.env.CONSUMER_SECRET}`,
});

async function fetchAPI(fetch) {
  const res = wooApi.get(fetch)
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
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    return res
}

export async function getAllPostsForHome() {
  const data = await fetchAPI("products?brand=1889")
  return data
}

export async function getAllProduct() {
  const data = await fetchAPI("products?brand=1889&per_page=20")
  return data
}
