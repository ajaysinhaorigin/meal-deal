import { useSelector } from 'react-redux'
import MenuCard from './MenuCard'
const Menu = () => {
    const menu = useSelector((store) => store?.menu?.menu)
    return (
        <div className='mx-4 lg:mx-48 mt-6' >
            {
                menu?.map((menu, i) => <MenuCard key={i} {...menu?.card?.card} />)
            }
        </div>
    )
}

export default Menu