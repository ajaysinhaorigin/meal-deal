import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'
import ImageComponent from '../../common/ImageComponent'
const imageCdn = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
function RestaurentCard({ id, name, cloudinaryImageId, cuisines, avgRating, costForTwoString, slaString, aggregatedDiscountInfo,
}) {

    return (
        <>
            <Link
                to={'/restaurent/' + id}
            >
                <div className="h-full hover:border-[1px] hover:shadow-lg border-gray-300 p-4">
                    <div className='w-full' >
                        {/* <img src={imageCdn + cloudinaryImageId} alt="image" className="w-full h-full" /> */}
                        <ImageComponent cdn={cloudinaryImageId} />
                    </div>
                    <div className='py-2' >
                        <p className='font-medium '>{name}</p>
                        <p className='text-xs text-gray-600' >
                            {
                                cuisines?.length >= 7 ? cuisines?.slice(0, 6)?.join(", ") + '...' : cuisines?.join(", ")
                            }
                        </p>
                    </div>
                    <div>
                        <ul className='flex justify-between text-sm py-2 text-gray-700'>
                            <li className={avgRating >= 4.0 ? "flex justify-between bg-green-400 px-1 text-white" : "flex justify-between bg-red-400 px-1 text-white"}>
                                <FaStar className='w-3 my-1 mr-1' />
                                <p className='my-auto'>{avgRating}</p>
                            </li>
                            <li>{slaString}</li>
                            <li>{costForTwoString}</li>
                        </ul>
                        {
                            aggregatedDiscountInfo?.shortDescriptionList
                            [0]?.meta && <p className='py-2 text-sm border-t-[1px] border-gray-300 text-red-800' > {aggregatedDiscountInfo?.shortDescriptionList
                            [0]?.meta}</p>
                        }
                    </div>
                </div >
            </Link>
        </>)




}

export default RestaurentCard
