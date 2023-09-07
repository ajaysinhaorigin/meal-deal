import CartCard from './CartCard'

const CartContainer = ({ cart }) => {
    return (
        <>
            <div className='bg-white lg:mr-36 mb-4 lg:mb-0' >
                {
                    cart?.map((item) => <CartCard key={item.id} {...item} />)
                }
            </div>
        </>
    )
}

export default CartContainer