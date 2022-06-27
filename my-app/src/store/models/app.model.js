import axios from 'axios'

const DEFAULT_STATE = {
  productList: []
}

export const app = {
  state: DEFAULT_STATE,
  reducers: {
    SET_PRODUCT_LIST(state, payload) {
      return { ...state, productList: payload }
    }
  },
  effects: (dispatch) => ({
    async fetchProduct(payload) {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        const products = res?.data ?? []
        dispatch.app.SET_PRODUCT_LIST(products)
        return res
      } catch (error) {
        console.log(error, '<--- error')
      }
    },
  })
}
