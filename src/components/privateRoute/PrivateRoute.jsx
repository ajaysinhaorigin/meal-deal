import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../../hooks/useAuthStatus"
import Spinner from "../shimmerUI/Spinner"
function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <p className="text-lg text-gray-700 font-medium p-3 m-3 h-screen">Loading...</p>
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute
