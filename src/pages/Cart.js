import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTotalItems, setTotalPrice } from '../features/cartSlice'
import BuilingDetails from '../components/cart/BuilingDetails'
import CartContainer from '../components/cart/CartContainer'
import FindRestaurentButton from '../common/FindRestaurentButton'

const Cart = () => {
  const cart = useSelector((store) => store?.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      setTotalPrice(
        cart?.cart
          ?.reduce(
            (acc, currentValue) =>
              acc + Number(currentValue.price / 100) * currentValue.qty,
            0
          )
          .toFixed(2)
          .replace(/[/.,]0$/, '')
      )
    )
    dispatch(
      setTotalItems(
        cart?.cart?.reduce((acc, currentValue) => acc + currentValue.qty, 0)
      )
    )
  }, [cart])

  if (cart?.cart?.length === 0)
    return (
      <div className="bg-gray-100 text-center py-36 ">
        <p className="text-gray-900 text-xl font-bold">Your Cart is Empty</p>
        <p className="text-gray-700 font-medium my-2">
          You can go to home page to view more restaurants
        </p>
        <FindRestaurentButton />
      </div>
    )

  return (
    <>
      <div className="bg-gray-100 w-full h-full">
        <div className="flex flex-col lg:flex-row justify-center lg:items-start px-2 py-12 shadow-lg">
          <CartContainer cart={cart?.cart} />
          <BuilingDetails cart={cart} />
        </div>
      </div>
    </>
  )
}

export default Cart
