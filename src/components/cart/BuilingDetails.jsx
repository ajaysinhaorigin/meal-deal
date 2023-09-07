// import { useSelector } from 'react-redux'
import ClearCart from '../cart/ClearCart'
const BuilingDetails = ({ cart }) => {
    const { totalItems, totalPrice } = cart
    return (
        <div className=' bg-white lg:w-1/4 px-8 py-5 lg:mx-0 ' >
            <p className='text-xl font-bold text-gray-700 mr-2' >Total items:  {totalItems}
            </p>
            <p className='text-xl font-bold text-gray-700 mr-2' >Total Price: ₹ {totalPrice}
            </p>
            <ClearCart />
        </div>
    )
}

export default BuilingDetails