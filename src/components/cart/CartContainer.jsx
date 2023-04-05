import CartCard from './CartCard'

const CartContainer = ({ cart }) => {
    return (
        <>
            <div className=' bg-gray-100 lg:w-1/2 lg:mr-28 mb-4 lg:mb-0 shadow-lg' >
                {
                    cart?.map((item) => <CartCard key={item.id} {...item} />)
                }
            </div>
        </>
    )
}

export default CartContainer