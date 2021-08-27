//@ts-nocheck
import { wooApi } from '../../utils/api'
import { Dispatch } from 'redux'
import { ProductTypes } from '../types'
import {
  FetchSaleProducts,
  FetchCategoryProducts,
  FetchProductById,
  FetchProductsByIds,
  FetchAllProducts
} from './product_interfaces'

export const fetchSaleProducts = (itemCount = 8) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await wooApi(`products?brand=1889&per_page=${itemCount}`)

      dispatch<FetchSaleProducts>({
        type: ProductTypes.fetchSaleProduts,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const total = await wooApi(`products?brand=1889`).then((response) => {
        return response.headers['x-wp-total']
      }).catch((error) => {
        // Invalid request, for 4xx and 5xx statuses
        console.log("Response Status:", error.response.status);
        console.log("Response Headers:", error.response.headers);
        console.log("Response Data:", error.response.data);
      })

      const response = await wooApi(`products?brand=1889&per_page=${total}`)

      dispatch<FetchAllProducts>({
        type: ProductTypes.fetchAllProducts,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}


export const fetchCategoryProducts = (
  categoryId: string,
  callback?: () => void
) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await wooApi(`products?category=${categoryId}`)

      dispatch<FetchCategoryProducts>({
        type: ProductTypes.fetchCategoryProducts,
        payload: response.data
      })
      callback()
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchProductById = (id: string, callback?: () => void) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await wooApi(`products/${id}`)

      dispatch<FetchProductById>({
        type: ProductTypes.fetchProductById,
        payload: response.data
      })
      callback()
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchProductsByIds = (ids: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await wooApi(`products?include=${ids}`)

      dispatch<FetchProductsByIds>({
        type: ProductTypes.fetchProductsByIds,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
