import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredRestaurents } from '../../features/restaurentSlice'

const filterData = (textInput, allRestaurants) => {
    const filteredData = allRestaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(textInput.toLowerCase())
    )

    return filteredData
}

const SearchBar = () => {
    const restaurants = useSelector((store) => store.restaurant)
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')

    return (

        <div className="text-center my-4">
            <input
                type="text"
                className="font-medium px-4 w-7/12 lg:w-3/12 py-2  text-gray-700 focus:outline-none rounded-l-3xl border-[1px] border-r-0 border-gray-300"
                placeholder="Find Your Favorite Restaurent"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button
                type="submit"
                className="font-medium px-2 py-2 w-3/12 lg:w-1/12  bg-gray-700 text-white hover:bg-gray-500 rounded-r-3xl border-[1px] border-l-0 border-gray-700 "
                onClick={() => {
                    const data = filterData(searchText, restaurants.allRestaurents)
                    dispatch(getFilteredRestaurents(data))
                }}
            >
                Search
            </button>
        </div>

    )
}

export default SearchBar