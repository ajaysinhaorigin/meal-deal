
import ImageComponent from "../../common/ImageComponent"
import QuantityButton from '../../common/QuantityButton'
const CartCard = ({ name, price, imageId, id, qty }) => {

    return (
        <div className="shadow-lg bg-white lg:mx-auto py-4 px-2 flex justify-between border-[1px] border-dotted">
            <div className="flex" >
                <div className="mr-2 rounded-lg border-[1px] border-gray-100 w-28 h-20" >
                    <ImageComponent cdn={imageId} />
                </div>
                <p className="text-sm font-bold w-32 my-auto ml-1" >{name}</p>
            </div>
            <div className="py-6" >
                <QuantityButton id={id} />
            </div>
            <p className="my-auto mx-3 text-gray-600 font-medium"  >Price: ₹ {price / 100 * qty}</p>
        </div>
    )
}

export default CartCard