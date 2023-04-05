import useFetchRestaurents from '../hooks/useFetchRestaurents'
import Carosels from '../components/carosels/Carosels'
import SearchBar from '../components/restaurents/SearchBar'
import SortBar from '../components/sort/SortBar'
import { Outlet } from 'react-router-dom'

function Home() {
  const { allRestaurents, error } = useFetchRestaurents()

  if (!allRestaurents) null

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
