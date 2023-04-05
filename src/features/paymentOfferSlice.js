import { createSlice } from '@reduxjs/toolkit'

const paymentOfferSlice = createSlice({
  name: 'paymentOffer',
  initialState: {
    paymentOffers: [],
    loading: true,
    error: {
      show: false,
      msg: '',
    },
  },
  reducers: {
    getPaymentOffers: (state, action) => {
      state.paymentOffers = action.payload
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

export const { getPaymentOffers, setLoading, setError } =
  paymentOfferSlice.actions

export default paymentOfferSlice.reducer
