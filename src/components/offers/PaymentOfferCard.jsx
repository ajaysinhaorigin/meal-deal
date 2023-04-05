
const PaymentOfferCard = ({ couponCode, description, title, validTill, type }) => {

    if (type === 'couponCardV2') {
        return (
            <div className="p-6 border-[1px] border-gray-300 shadow-md" >
                <button className="px-5 py-2 border-[1px] border-gray-200 bg-[#f5eabf] mb-3" >{couponCode}</button>
                <p className="text-lg font-medium text-gray-800 mb-2" >{title}</p>
                <p className="text-sm text-gray-500 mb-2" >{description}</p>
                <p className="text-sm text-gray-700 mb-2" >{validTill}</p>
            </div>
        )
    }
}

export default PaymentOfferCard