
import ImageComponent from "../../common/ImageComponent"
import QuantityButton from '../../common/QuantityButton'
const CartCard = ({ name, price, imageId, id, qty }) => {
    let newPrice = (price / 100 * qty).toFixed(2)
    return (
        <div className="mx-auto py-4 px-3 flex justify-between">
            <div className="flex" >
                <div className="mr-3 border-[1px] bg-gray-50 border-gray-200 w-28 h-24" >
                    <ImageComponent cdn={imageId} />
                </div>
                <p className="text-sm lg:text-base font-medium my-auto max-w-[8rem]" >{name}</p>
            </div>

            <div className="lg:flex my-auto" >
                <QuantityButton id={id} />
                <p className="my-auto mx-2 text-gray-700 text-sm font-medium mt-2"  >Price: ₹ {newPrice}</p>
            </div>

        </div>
    )
}

export default CartCard