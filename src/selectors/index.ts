import { useSelector } from 'react-redux'
import { AppState } from '../reducers'

export const useProductSelector = () =>
  useSelector((state: AppState) => state.product)

export const useCategorySelector = () =>
  useSelector((state: AppState) => state.category)

export const instagramSelector = () =>
  useSelector((state: AppState) => state.instagram)

