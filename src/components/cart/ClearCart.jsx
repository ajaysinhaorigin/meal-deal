import { clearCart } from '../../features/cartSlice'
import { useDispatch } from 'react-redux'

const ClearCart = () => {
    const dispatch = useDispatch()

    return (
        <button className="flex justify-center px-8 py-1 text-lg font-medium text-gray-100 bg-gray-900 rounded-lg hover:bg-gray-800 mx-auto mt-10" onClick={() => dispatch(clearCart())} >Clear Cart</button>
    )
}

export default ClearCart