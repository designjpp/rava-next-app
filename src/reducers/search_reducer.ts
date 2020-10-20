import produce from 'immer'
//import { ISpeach, Language, Difficulty } from "./types";
import { SeachTypes, SetSpeaches, CheckCategories, SetSearch, ISpeach } from '../actions'

type Actions = SetSpeaches | CheckCategories | SetSearch

export interface ISpeachesState {
  speaches: ISpeach[] | null
  categories: Boolean | null
  search: string | null
}

const initialState: ISpeachesState = {
  speaches: null,
  categories: false,
  search: null
}

/*export const speachesReducer = (
  state: ISpeachesState = initialState,
  action: Actions
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SeachTypes.SetSpeaches:
        draft.speaches = action.payload
        break
      case SeachTypes.CheckCategories:
        const { category, checked } = action.payload
        draft.categories[category] = checked
        break
      case SeachTypes.SetSearch:
        draft.search = action.payload
        break
    }
  })
}*/

function speachesReducer(
  state: ISpeachesState = initialState,
  action: Actions
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SeachTypes.SetSpeaches:
        draft.speaches = action.payload
        break
      case SeachTypes.CheckCategories:
        const { category, checked } = action.payload
        draft.categories[category] = checked
        break
      case SeachTypes.SetSearch:
        draft.search = action.payload
        break
    }
  })
}
export default speachesReducer
