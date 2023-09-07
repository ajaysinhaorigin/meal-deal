import useFetchRestaurents from '../hooks/useFetchRestaurents'
import Carosels from '../components/carosels/Carosels'
import SearchBar from '../components/restaurents/SearchBar'
import SortBar from '../components/sort/SortBar'
import { Outlet } from 'react-router-dom'
import useOnline from '../hooks/useOnline'
function Home() {
  const { allRestaurents, error } = useFetchRestaurents()
  const isOnline = useOnline()

  if (!allRestaurents) null

  if (!isOnline) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-xl font-bold lg:text-4xl text-gray-700">
          Oops,You are Offline
        </h1>
        <p className="font-medium my-2 text-gray-600">
          Please check your internet
        </p>
      </div>
    )
  }
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
      <Carosels />
      <SortBar />
      <SearchBar />
      <Outlet />
    </>
  )
}

export default Home
