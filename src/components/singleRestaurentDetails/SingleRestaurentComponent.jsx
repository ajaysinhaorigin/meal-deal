import { useSelector } from 'react-redux'

const SingleRestaurentComponent = () => {
    const { name, cuisines, areaName, avgRating, costForTwoMessage, totalRatingsString
    } = useSelector((store) => store?.menu?.restaurentDetails)
    return (
        <div className='mx-2 lg:mx-48 mt-6' >
            <div className='flex justify-between border-b-2 border-dotted p-4' >
                <div>
                    <h1 className='font-bold text-xl text-gray-800' >{name}</h1>
                    <p className='text-sm text-gray-600' >{cuisines?.join(',')}</p>
                    <p className='text-sm text-gray-600' >{areaName}</p>
                </div>
                <div className='flex flex-col text-center border-2 border-gray-200 px-2 py-4 rounded-2xl'>
                    <p className='font-medium text-green-500'>{avgRating}</p>
                    <p className='text-xs font-bold text-gray-600' >{totalRatingsString}</p>
                </div>
            </div>
            <p className='p-4 ' >{costForTwoMessage}</p>
        </div>
    )
}

export default SingleRestaurentComponent