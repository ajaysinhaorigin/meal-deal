// import { useSelector } from 'react-redux'

const BuilingDetails = ({ cart }) => {
    const { totalItems, totalPrice } = cart
    return (
        <div className='bg-white shadow-lg lg:w-1/4 rounded-lg px-8 py-5 lg:mx-0' >
            <p className='text-xl font-bold text-gray-600 mr-2' >Total items:  <span className='text-gray-500' >{totalItems}</span>
            </p>
            <p className='text-xl font-bold text-gray-600 mr-2' >Total Price:  <span className='text-gray-500' >₹ {totalPrice}</span>
            </p>

        </div>
    )
}

export default BuilingDetails