import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    restaurentDetails: {},
    offerDetails: [],
    menu: [],
    loading: true,
    error: {
      show: false,
      msg: '',
    },
  },
  reducers: {
    getSingleRestaurent: (state, action) => {
      state.restaurentDetails = action.payload
      state.loading = false
      state.error.show = false
      state.error.msg = ''
    },
    getOfferDetails: (state, action) => {
      state.offerDetails = action.payload
      state.error.show = false
      state.error.msg = ''
    },
    getMenu: (state, action) => {
      state.menu = action.payload
      state.error.show = false
      state.error.msg = ''
    },
    setLoading: (state) => {
      state.loading = true
    },
    setError: (state, action) => {
      state.loading = false
      state.error.show = true
      state.error.msg = action.payload
    },
  },
})

export const {
  getSingleRestaurent,
  setLoading,
  getOfferDetails,
  getMenu,
  setError,
} = menuSlice.actions

export default menuSlice.reducer
