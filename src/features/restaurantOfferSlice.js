import { createSlice } from '@reduxjs/toolkit'

const restaurantOfferSlice = createSlice({
  name: 'restaurantOffer',
  initialState: {
    restaurantOffers: [],
    loading: true,
    error: {
      show: false,
      msg: '',
    },
  },
  reducers: {
    getRestaurantOffers: (state, action) => {
      state.restaurantOffers = action.payload
      state.loading = false
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

export const { getRestaurantOffers, setLoading, setError } =
  restaurantOfferSlice.actions

export default restaurantOfferSlice.reducer
