import { NavLink } from "react-router-dom"
const OffersBar = () => {
    return (
        <div className='py-6 border-b-[1px] border-gray-300'>
            <ul className="flex px-12 lg:px-20" >
                <li className="mr-8 text-lg font-bold text-gray-700 hover:text-gray-500" >
                    <NavLink to="/offers/restaurant"  >
                        Restaurant offers
                    </NavLink>
                </li>
                <li className=" text-lg font-bold text-gray-700 hover:text-gray-500" >
                    <NavLink to='/offers/payment' >
                        Payment offers/Coupons
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default OffersBar