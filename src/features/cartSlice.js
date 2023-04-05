import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    totalItems: 0,
    cart: [],
    loading: true,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
      state.loading = false
    },
    removeFromCart: (state, action) => {
      const cartItem = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      )
      state.cart = cartItem
      state.loading = false
    },
    changeQty: (state, action) => {
      const res = state.cart.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, qty: action.payload.qty }
          : { ...cartItem }
      )
      state.cart = res
      state.loading = false
    },
    setLoading: (state) => {
      state.loading = true
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload
    },
    clearCart: (state) => {
      state.cart = []
      state.loading = false
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  changeQty,
  setTotalItems,
  setTotalPrice,
  setLoading,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
