import RestaurentCard from './RestaurentCard'
import { useSelector } from 'react-redux'
import Shimmer from '../shimmerUI/Shimmer'

const Restaurents = () => {
    const { filteredRestaurents, loading } = useSelector((store) => store.restaurent)

    if (loading) return <Shimmer />

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-9 lg:px-16 my-8">
            {filteredRestaurents?.map((restaurant) => {
                return (
                    <RestaurentCard {...restaurant?.info} key={restaurant?.info?.id} />
                )
            })}
        </div>
    )
}

export default Restaurents