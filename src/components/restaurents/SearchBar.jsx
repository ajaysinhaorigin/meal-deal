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

        <div className="text-center my-6">
            <input
                type="text"
                className="px-6  w-7/12 lg:w-3/12 py-2 lg:py-3 bg-gray-50   text-gray-600 focus:outline-none shadow-xl rounded-l-lg"
                placeholder="Find Your Favorite Restaurent"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button
                type="submit"
                className="py-2 lg:py-3 w-2/12 lg:w-1/12  bg-gray-600 text-white shadow-xl hover:bg-gray-500 rounded-r-lg"
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