import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, setTotalItems, setTotalPrice } from '../../features/cartSlice'
import QuantityButton from '../../common/QuantityButton'
import ImageComponent from '../../common/ImageComponent'

const MenuItem = ({ name, price, description, imageId, id }) => {
    const cart = useSelector((store) => store?.
        cart)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(setTotalPrice(
            cart?.cart?.reduce(
                (acc, currentValue) =>
                    acc + Number(currentValue.price / 100) * currentValue.qty,
                0
            )
        ))
        dispatch(setTotalItems(cart?.cart?.reduce(
            (acc, currentValue) => acc + currentValue.qty,
            0
        )))
    }, [cart])

    return (
        <div className='pb-12 pt-6 flex justify-between border-b-[1px] border-gray-300 ' >
            <div>
                <h1 className='font-medium text-lg' >{name}</h1>
                <p className='text-gray-600 mb-2' >{price / 100} Rs.</p>
                <p className='text-xs text-gray-400 max-w-lg lg:max-w-2xl' >{description}</p>
            </div>
            <div className="mx-2 border-[1px] shadow-lg border-gray-100 w-32 h-20" >
                <ImageComponent cdn={imageId} />

                {
                    cart?.cart?.some((cartItem) => cartItem.id == id) ?
                        (
                            <QuantityButton id={id} />
                        ) :
                        <button className="mx-4 border-[1px] border-gray-200 shodow-lg bg-white -mt-2 px-8 py-1 "
                            onClick={() => { dispatch(addToCart({ name, price, imageId, id, qty: 1 })) }} >
                            Add
                        </button>
                }
            </div>
        </div>
    )
}

export default MenuItem