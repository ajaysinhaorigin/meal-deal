import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getPaymentOffers,
  setLoading,
  setError,
} from '../features/paymentOfferSlice'
import { PAYMENT_OFFER_API } from '../common/config'

const useFetchPaymentOffers = () => {
  const { paymentOffers, loading, error } = useSelector(
    (store) => store?.paymentOffer
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading())
    fetchPaymentOffers()
  }, [])
  const fetchPaymentOffers = async () => {
    try {
      const res = await fetch(PAYMENT_OFFER_API)
      const json = await res.json()
      if (json?.statusCode === 0) {
        dispatch(getPaymentOffers(json?.data?.cards))
      } else {
        dispatch(setError(json?.statusMessage))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }
  return { paymentOffers, loading, error }
}

export default useFetchPaymentOffers
