import { createSlice } from '@reduxjs/toolkit'

const restaurentSlice = createSlice({
  name: 'restaurents',
  initialState: {
    carosels: [],
    allRestaurents: [],
    filteredRestaurents: [],
    sortList: [],
    sortedRestaurents: [],
    loading: true,
    error: {
      show: false,
      msg: '',
    },
  },
  reducers: {
    getCarosels: (state, action) => {
      state.carosels = action.payload
      state.loading = false
      state.error.show = false
      state.error.msg = ''
    },
    getAllRestaurents: (state, action) => {
      state.allRestaurents = action.payload
      state.loading = false
      state.error.show = false
      state.error.msg = ''
    },
    getFilteredRestaurents: (state, action) => {
      state.filteredRestaurents = action.payload
      state.loading = false
      state.error.show = false
      state.error.msg = ''
    },
    getSortList: (state, action) => {
      state.sortList = action.payload
      state.loading = false
      state.error.show = false
      state.error.msg = ''
    },
    getSortedRestaurents: (state, action) => {
      state.sortedRestaurents = action.payload
      state.loading = false
      state.error.show = false
      state.error.msg = ''
    },
    getFilteredRestaurents: (state, action) => {
      state.filteredRestaurents = action.payload
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

export const {
  setLoading,
  getCarosels,
  getAllRestaurents,
  getFilteredRestaurents,
  getSortList,
  getSortedRestaurents,
  setError,
} = restaurentSlice.actions

export default restaurentSlice.reducer
