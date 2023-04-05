import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, changeQty } from '../features/cartSlice'

const handleQty = (id, type, cart, dispatch) => {
  let { qty } = cart.filter((cartItem) => cartItem.id === id)[0]
  if (type === 'decrease') {
    if (qty === 1) {
      dispatch(removeFromCart(id))
    } else {
      dispatch(changeQty({ id, qty: qty - 1 }))
    }
  }
  if (type === 'increase') {
    dispatch(changeQty({ id, qty: qty + 1 }))
  }
}

const Quantity = ({ id }) => {
  const cart = useSelector((store) => store?.cart?.cart)
  const { qty } = cart.filter((cartItem) => cartItem.id === id)[0]

  const dispatch = useDispatch()

  return (
    <div className="flex justify-between mx-2 border-[1px] border-gray-200 shodow-lg bg-white -mt-2 px-4">
      <button
        className="font-medium text-xl p-1"
        onClick={() => {
          handleQty(id, 'decrease', cart, dispatch)
        }}
      >
        -
      </button>
      <span className="p-1 font-medium text-xl text-gray-400">{qty}</span>
      <button
        className="font-medium text-xl p-1"
        onClick={() => {
          handleQty(id, 'increase', cart, dispatch)
        }}
      >
        +
      </button>
    </div>
  )
}

export default Quantity
