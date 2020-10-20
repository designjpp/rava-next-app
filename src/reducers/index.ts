import { combineReducers } from 'redux'
import ProductReducer from './product_reducer'
import CategoryReducer from './category_reducer'
import InstagramReducer from './instagram_reducer'
//import SearchReducer from './search_reducer'

export const rootReducer = combineReducers({
  product: ProductReducer,
  category: CategoryReducer,
  instagram: InstagramReducer,
  //search: SearchReducer
})

export type AppState = ReturnType<typeof rootReducer>
