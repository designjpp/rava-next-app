import { SeachTypes } from '../types'

export interface Category {
  name: string
}

export interface ISpeach {
  topic: string
  speaker: string
  category: Category[]
}

export interface SetSpeaches {
  type: SeachTypes.SetSpeaches
  payload: ISpeach[]
}

interface ICheckCategoryPayload {
  category: string
  checked: boolean | null
}

export interface CheckCategories {
  type: SeachTypes.CheckCategories
  payload: ICheckCategoryPayload
}

export interface SetSearch {
  type: SeachTypes.SetSearch
  payload: string | null
}
