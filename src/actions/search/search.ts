import { Dispatch } from 'redux'
import { SeachTypes } from '../types'
import { CheckCategories, SetSearch, SetSpeaches } from './search_interfaces'

export function getSpeachesThunk(speaches) {
  return (dispatch: Dispatch) => {
    /*getSpeachesList().then((speaches) => {
      console.log(speaches)
      dispatch(new SetSpeaches(speaches))
    })*/
    console.log(speaches)
    dispatch<SetSpeaches>({
      type: SeachTypes.SetSpeaches,
      payload: speaches
    })
  }
}

export function resetFiltersThunk() {
  return (dispatch: Dispatch) => {
    dispatch<CheckCategories>({
      type: SeachTypes.CheckCategories,
      payload
    })

    dispatch<SetSearch>({
      type: SeachTypes.SetSearch,
      payload: null
    })
    /*dispatch(
      new CheckDifficulty({ difficulty: Difficulty.Hot, checked: false })
    )
    dispatch(
      new CheckCategories({
        difficulty: Difficulty.Intermediate,
        checked: false
      })
    )
    dispatch(
      new CheckDifficulty({ difficulty: Difficulty.Advanced, checked: false })
    )
    dispatch(
      new CheckDifficulty({ difficulty: Difficulty.Hardcore, checked: false })
    )
    dispatch(
      new CheckDifficulty({ difficulty: Difficulty.Academic, checked: false })
    )

    dispatch(new SetSearch(null))*/
  }
}
