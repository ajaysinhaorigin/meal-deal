import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  getSingleRestaurent,
  setLoading,
  getOfferDetails,
  getMenu,
  setError,
} from '../features/menuSlice'
import { CORS_URL, MENU_API } from '../common/config'

const useFetchSingleRestaurent = (id) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading())
    fetchSingleRestaurent()
  }, [])

  async function fetchSingleRestaurent() {
    try {
      const data = await fetch(CORS_URL + MENU_API + id)
      const json = await data.json()
      if (json?.statusCode === 0) {
        dispatch(getSingleRestaurent(json.data.cards[0].card.card.info))
        dispatch(
          getOfferDetails(
            json.data.cards[1].card.card.gridElements.infoWithStyle.offers
          )
        )
        dispatch(
          getMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
        )
      } else {
        dispatch(setError(json?.statusMessage))
      }
    } catch (error) {
      dispatch(setError(json?.statusMessage))
    }
  }
}

export default useFetchSingleRestaurent
