import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaUser } from 'react-icons/fa'
function Navbar() {
    const totalItems = useSelector((store) => store?.cart?.totalItems)
    return (
        <div className="my-auto">
            <ul className="flex font-normal text-lg text-gray-700">
                <Link to='/offers/restaurant' ><li className="mr-3 lg:mr-8 hover:text-orange-600" >offers</li></Link>
                <Link to='/about' ><li className="mr-3 lg:mr-8 hover:text-orange-600" >About</li></Link>
                <Link to='/profile' >
                    <li className="mr-3 lg:mr-8 hover:text-orange-600 flex" >
                        <FaUser className='w-4 h-6 mr-1' /> <span> Profile</span>
                    </li>
                </Link>
                <Link to='/cart'><li className="mr-3 lg:mr-8 hover:text-orange-600"> {totalItems} Cart</li></Link>
            </ul>
        </div>
    )
}

export default Navbar