const OfferCard = ({ header, couponCode, description }) => {
    return (
        <div className="border-2 border-gray-300 rounded-lg px-4 py-2 m-2" >
            <div>
                <img src="" alt="" />
                <p className="text-sm font-bold text-gray-600" >{header}</p>
            </div>
            <span className="text-xs" >{couponCode}</span>
            <span className="text-xs" >{description}</span>
        </div>
    )
}

export default OfferCard