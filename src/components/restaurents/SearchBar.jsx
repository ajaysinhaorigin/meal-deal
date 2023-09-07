import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredRestaurents } from '../../features/restaurentSlice'


const SearchBar = () => {
    const { allRestaurents } = useSelector((store) => store.restaurent)
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const [topRating, SetTopRating] = useState(false)

    const filterData = (allRestaurents) => {
        console.log(allRestaurents)
        const data = allRestaurents?.filter((restaurant) => {
            const searchResults = restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())

            const topRatedRestaurent = topRating ? restaurant?.info?.avgRating > 4 : allRestaurents

            return searchResults && topRatedRestaurent

        }
        )
        return data
    }

    useEffect(() => {
        const data = filterData(allRestaurents)
        dispatch(getFilteredRestaurents(data))
    }, [searchText, topRating])

    if (allRestaurents.length === 0) null

    return (
        <div className="my-12 flex justify-center ">
            <div className='w-2/3 lg:w-1/3 mr-2 lg:mr-6' >
                <input
                    type="text"
                    className="w-full font-medium lg:text-lg px-4 py-2 text-gray-700 
                    focus:outline-orange-500 rounded-lg border-[2px] border-gray-700 "
                    placeholder="Find Your Favorite Restaurents.."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                {/* <button
                    type="submit"
                    className="font-medium px-2 py-2 w-3/12 lg:w-1/12   text-white hover:bg-gray-500 rounded-r-3xl border-[1px] border-l-0 border-gray-700 "
                >
                    Search
                </button> */}
            </div>
            <div className=' flex items-baseline text-sm lg:text-lg font-medium text-gray-700 my-auto' >
                <input className=" mx-2" type="checkbox" checked={topRating} onChange={() => SetTopRating(!topRating)}
                /><label>Top Rated</label>
            </div>
        </div>

    )
}

export default SearchBar
