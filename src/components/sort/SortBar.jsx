import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import SortItem from './SortItem'
import { getFilteredRestaurents } from '../../features/restaurentSlice'
import { sortbyDefault, sortbyTime, sortbyLowToHigh, sortbyHighToLow } from '../../common/helperFunctions'

const sortByQuery = ['Relevance', 'Delivery Time', 'Cost: Low to High', 'Cost: High to Low']

const SortBar = () => {
    const { allRestaurents } = useSelector((store) => store?.restaurent)
    const [sortBy, setSortBy] = useState('')

    const dispatch = useDispatch()

    const sortRestaurents = () => {
        switch (sortBy) {
            case "Relevance": {
                dispatch(getFilteredRestaurents(sortbyDefault(allRestaurents)))
            }
            case "Delivery Time": {
                dispatch(getFilteredRestaurents(sortbyTime(allRestaurents)))
                break;
            }
            case "Cost: Low to High": {
                dispatch(getFilteredRestaurents(sortbyLowToHigh(allRestaurents)))
                break;
            }
            case "Cost: High to Low": {
                dispatch(getFilteredRestaurents(sortbyHighToLow(allRestaurents)))
                break;
            }
            default: dispatch(getFilteredRestaurents(allRestaurents))
        }
    }
    useEffect(() => {
        sortRestaurents()
    }, [sortBy])

    return (

        <ul className='flex align-baseline px-3 lg:px-4 py-2 justify-between'>
            {
                sortByQuery?.map((item, i) => <SortItem key={i} query={item} sortby={setSortBy} />)
            }
        </ul>
    )
}

export default SortBar