import { useParams } from 'react-router-dom'
import useSortedRestaurents from '../../hooks/useSortedRestaurents'
import Restaurents from '../restaurents/Restaurents'

const SortContainer = () => {
    const sortby = useParams()
    useSortedRestaurents(sortby)

    return (
        <>
            <Restaurents />
        </>
    )
}

export default SortContainer