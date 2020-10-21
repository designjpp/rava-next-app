import {
  ProductTypes,
  Product,
  FetchSaleProducts,
  FetchCategoryProducts,
  FetchProductById,
  FetchProductsByIds,
  FetchAllProducts
} from '../actions'

type Actions =
  | FetchSaleProducts
  | FetchCategoryProducts
  | FetchProductById
  | FetchProductsByIds
  | FetchAllProducts

export interface ProductState {
  saleProducts: Product[]
  categoryProducts: Product[]
  currentProduct?: Product
  products: Product[]
}

export const initialState: ProductState = {
  saleProducts: [],
  categoryProducts: [],
  products: [],
  currentProduct: undefined
}

function fetchSaleProduts(state: ProductState = initialState, action: Actions) {
  switch (action.type) {
    case ProductTypes.fetchSaleProduts:
      //console.log(action.payload)
      return {...state, saleProducts:action.payload}
    case ProductTypes.fetchCategoryProducts:
      return { ...state, categoryProducts: action.payload }
    case ProductTypes.fetchProductById:
      return { ...state, currentProduct: action.payload }
    case ProductTypes.fetchAllProducts:
      //console.log(action.payload)
      return { ...state, products: action.payload }
    default:
      return state
  }
}
export default fetchSaleProduts
