import { clearCart } from '../../features/cartSlice'
import { useDispatch } from 'react-redux'

const ClearCart = () => {
    const dispatch = useDispatch()

    return (
        <button className="px-4 py-2 bg-white shadow-lg rounded-lg lg:mx-24 my-4 hover:shadow-2xl text-lg text-gray-800 " onClick={() => dispatch(clearCart())} >Clear Cart</button>
    )
}

export default ClearCart