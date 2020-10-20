import { combineReducers } from 'redux'
import ProductReducer from './product_reducer'
import CategoryReducer from './category_reducer'
import InstagramReducer from './instagram_reducer'

export const rootReducer = combineReducers({
  product: ProductReducer,
  category: CategoryReducer,
  instagram: InstagramReducer
})

export type AppState = ReturnType<typeof rootReducer>
