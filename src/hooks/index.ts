/* eslint-disable prefer-destructuring */
import { createTypedHooks } from 'easy-peasy'
import { StoreModel } from '@state'

const typedHooks = createTypedHooks<StoreModel>()

export const useStoreActions = typedHooks.useStoreActions

export const useStoreDispatch = typedHooks.useStoreDispatch

export const useStoreState = typedHooks.useStoreState

export { default as useSSRQuery } from './use-ssr-query'
