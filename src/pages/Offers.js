import { Outlet } from 'react-router-dom'
import useFetchOffersRestaurants from '../hooks/useFetchOffersRestaurants'
import OfferBanner from '../components/offers/OfferBanner'
import OffersBar from '../components/offers/OffersBar'

const Offers = () => {
  useFetchOffersRestaurants()
  return (
    <>
      <OfferBanner />
      <OffersBar />
      <Outlet />
    </>
  )
}

export default Offers
