import axios from 'axios'

const DEFAULT_STATE = {
  accessToken: null,
  refreshToken: null,
}
export const auth = {
  state: { ...DEFAULT_STATE },
  reducers: {
    SET_AUTH_STATE(state, payload) {
      return {
        ...state,
        ...payload
      }
    },
  },
  effects: (dispatch) => ({
    async login(payload) {
      const res = axios.post('LOGIN URL')
      const { access, refresh } = res
      dispatch.auth.SET_AUTH_STATE({
        accessToken: access,
        refreshToken: refresh
      })
    }
  })
}
