import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getSingleRestaurent,
  setLoading,
  getOfferDetails,
  getMenu,
  setError,
} from '../features/menuSlice'

const useFetchSingleRestaurent = (id) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading())
    fetchSingleRestaurent()
  }, [])

  async function fetchSingleRestaurent() {
    try {
      const data = await fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.9873139&lng=77.04451030000001&restaurantId=${id}&submitAction=ENTER`
      )
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
