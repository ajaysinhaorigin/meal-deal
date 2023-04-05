import { useSelector } from 'react-redux'
import FilterItem from './SortItem'

const SortBar = () => {
    const sortList = useSelector((store) => store.restaurant.sortList)

    return (
        <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-16 pt-4 py-1 border-b-[1px] border-gray-300">
            <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-2" >restaurants</h1>
            <div>
                <ul className='flex'>
                    {
                        sortList?.map((item) => <FilterItem key={item?.key} item={item} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default SortBar