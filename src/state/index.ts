import { createStore } from 'easy-peasy'
import { layoutModel, LayoutModel } from './layout'

export interface StoreModel {
  layout: LayoutModel
}

const storeModel: StoreModel = {
  layout: layoutModel,
}

const store = createStore(storeModel)

export default store
