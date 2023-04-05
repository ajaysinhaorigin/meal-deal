import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useFetchSingleRestaurent from '../hooks/useFetchSingleRestaurent'
import Shimmer from '../components/shimmerUI/Shimmer'
import SingleRestaurentComponent from '../components/singleRestaurentDetails/SingleRestaurentComponent'
import Offers from '../components/singleRestaurentDetails/Offers'
import Menu from '../components/menu/Menu'

const SingleRestaurent = () => {
  const { id } = useParams()
  useFetchSingleRestaurent(id)

  const { loading, error } = useSelector((store) => store?.menu)

  if (loading) return <Shimmer />

  if (error.show)
    return (
      <>
        <div className="flex justify-center">
          <div className=" my-28 text-center text-gray-600">
            <h1 className="text-3xl font-bold">{error.msg}</h1>
          </div>
        </div>
      </>
    )

  return (
    <>
      <SingleRestaurentComponent />
      <Offers />
      <Menu />
    </>
  )
}

export default SingleRestaurent
