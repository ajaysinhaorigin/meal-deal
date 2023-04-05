import { useSelector } from "react-redux"
import Shimmer from "../shimmerUI/Shimmer"
import RestaurentCard from "../restaurents/RestaurentCard"

const RestaurantOffers = () => {
    const { restaurantOffers, loading, error } = useSelector((store) => store?.restaurantOffer)

    if (loading) return <Shimmer />

    if (error.show) {
        return (
            <>
                <div className="flex justify-center">
                    <div className=" my-28 text-center text-gray-600">
                        <h1 className="text-3xl font-bold">{error.msg}</h1>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div >
                {
                    restaurantOffers[0]?.cardType === 'messageCard' && (
                        <>
                            <div className="px-10 lg:px-20 py-4" >
                                <p className="text-lg font-bold text-gray-800 mb-1" >{restaurantOffers[0]?.data?.data?.message}</p>
                                <p className="text-gray-800" >All offers and deals, from restaurants near you</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-16 py-4 mb-4">
                {restaurantOffers?.map((restaurant, i) => {
                    return (

                        <RestaurentCard {...restaurant?.data?.data} type={restaurant?.cardType} key={i} />

                    )
                })}
            </div>
        </>
    )
}

export default RestaurantOffers