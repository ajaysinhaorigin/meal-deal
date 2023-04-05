import { configureStore } from '@reduxjs/toolkit'
import restaurentSlice from '../features/restaurentSlice'
import menuSlice from '../features/menuSlice'
import cartSlice from '../features/cartSlice'
import restaurantOfferSlice from '../features/restaurantOfferSlice'
import paymentOfferSlice from '../features/paymentOfferSlice'

const store = configureStore({
  reducer: {
    restaurant: restaurentSlice,
    menu: menuSlice,
    cart: cartSlice,
    restaurantOffer: restaurantOfferSlice,
    paymentOffer: paymentOfferSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
