import FindRestaurentButton from '../common/FindRestaurentButton'
import { useRouteError } from 'react-router-dom'
const Error = () => {
  const err = useRouteError()
  return (
    <div className="flex justify-center">
      <div className=" my-28 text-center text-gray-600">
        <h1 className="text-3xl font-bold">Oops!!</h1>
        <h2 className="text-2xl font-bold">Something went wrong!!</h2>
        <h2 className="text-2xl font-bold">
          {err?.status} " : " {err?.statusText}
        </h2>
        <FindRestaurentButton />
      </div>
    </div>
  )
}

export default Error
