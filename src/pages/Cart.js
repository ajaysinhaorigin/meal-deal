import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTotalItems, setTotalPrice } from '../features/cartSlice'
import BuilingDetails from '../components/cart/BuilingDetails'
import CartContainer from '../components/cart/CartContainer'
import ClearCart from '../components/cart/ClearCart'
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
      <div className="text-gray-600 bg-gray-100 text-center py-36">
        <p className="text-xl font-bold">Your Cart is Empty</p>
        <p className="font-medium my-2">
          You can go to home page to view more restaurants
        </p>
        <FindRestaurentButton />
      </div>
    )

  return (
    <>
      <div className="bg-gray-100 py-4 px-3 lg:px-20 w-full h-full mx-auto">
        <ClearCart />
        <div className=" flex flex-col items-start lg:flex-row justify-center ">
          <CartContainer cart={cart?.cart} />
          <BuilingDetails cart={cart} />
        </div>
      </div>
    </>
  )
}

export default Cart
