import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  getSingleRestaurent,
  setLoading,
  getOfferDetails,
  getMenu,
  setError,
} from '../features/menuSlice'
import { CORS_URL, DESTKTOP_MENU_API, MOBILE_MENU_API } from '../common/config'
import { isMobile } from '../common/helperFunctions'
const useFetchSingleRestaurent = (id) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading())
    fetchSingleRestaurent()
  }, [])

  async function fetchSingleRestaurent() {
    try {
      const data = await fetch(
        isMobile()
          ? CORS_URL + MOBILE_MENU_API + id
          : CORS_URL + DESTKTOP_MENU_API + id
      )
      const json = await data.json()

      console.log(json.data)
      let menu
      if (isMobile()) {
        menu = json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      } else {
        menu = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      }
      dispatch(getSingleRestaurent(json.data.cards[0].card.card.info))
      dispatch(
        getOfferDetails(
          json.data.cards[1].card.card.gridElements.infoWithStyle.offers
        )
      )
      dispatch(getMenu(menu))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export default useFetchSingleRestaurent
