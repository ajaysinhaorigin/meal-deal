import { useSelector } from 'react-redux'
import OfferCard from './OfferCard'

const Offers = () => {
    const offers = useSelector((store) => store?.menu?.offerDetails)
    return (
        <>
            <div className='mx-4 lg:mx-48 mt-6 flex flex-wrap lg:justify-center' >
                {
                    offers?.map((offer) => <OfferCard key={offer?.info?.offerIds[0]
                    } {...offer.info} />)
                }
            </div>
        </>
    )
}

export default Offers