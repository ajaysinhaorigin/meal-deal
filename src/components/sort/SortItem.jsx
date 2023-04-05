import { NavLink } from "react-router-dom"
const SortItem = ({ item }) => {
    const { key, title } = item
    return (
        <>
            <NavLink to={`/sortBy=${key}`}>
                <li className="mx-2 lg:mx-3 text-gray-600 text-xs lg:text-base hover:text-gray-500 font-medium pb-2">{title}</li>
            </NavLink >

        </>
    )
}

export default SortItem