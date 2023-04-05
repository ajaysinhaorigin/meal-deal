import { Link } from 'react-router-dom'

const FindRestaurentButton = () => {
  return (
    <Link to="/">
      <button className="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-full shadow-lg my-4">
        SEE RESTAURANTS NEAR YOU
      </button>
    </Link>
  )
}

export default FindRestaurentButton
