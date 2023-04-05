import useFetchPaymentOffers from "../../hooks/useFetchPaymentOffers"
import Shimmer from "../shimmerUI/Shimmer"
import PaymentOfferCard from "./PaymentOfferCard"

const PaymentOffers = () => {
    const { paymentOffers, loading, error } = useFetchPaymentOffers()

    if (loading) return <Shimmer />

    if (error.show) {
        return (
            <>
                <div className="flex justify-center">
                    <div className=" my-28 text-center text-gray-600">
                        <h1 className="text-3xl font-bold">{error.msg}</h1>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <div >
                {
                    paymentOffers[1]?.cardType === 'messageCard' && (
                        <>
                            <div className="px-10 lg:px-20 py-4 " >
                                <p className="text-lg font-bold text-gray-800 mb-1" >{paymentOffers[1]?.data?.data?.message}</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-16 py-4 mb-4" >
                {
                    paymentOffers?.map((offer, i) => <PaymentOfferCard key={i} {...offer?.data?.data} type={offer?.cardType} />)
                }
            </div>
        </div>
    )
}

export default PaymentOffers