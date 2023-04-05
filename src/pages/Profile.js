import { useState } from 'react'
import { getAuth } from 'firebase/auth'
// eslint-disable-next-line
import { useNavigate } from 'react-router-dom'

function Profile() {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
  const { name, email } = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  return (
    <div className="flex justify-center pb-8">
      <div className="">
        <header className="my-10">
          <p className="text-center text-xl font-bold ">My Profile</p>
        </header>

        <main className="border-2 rounded-lg shadow-lg lg:w-[500px] px-8 py-6 my-10">
          <p className="text-center my-2 text-xl font-bold text-gray-600 ">
            Personal Details
          </p>

          <div className="pr-28">
            <p className="text-lg font-bold text-gray-600">
              Name: <span className="text-gray-700">{name}</span>
            </p>
            <p className="text-lg font-bold text-gray-600">
              Email: <span className="text-gray-700">{email}</span>
            </p>
          </div>
        </main>
        <div className="text-center">
          <button
            type="button"
            onClick={onLogout}
            className="px-6 py-2 text-lg font-bold  text-gray-600 rounded-xl shadow-lg hover:shadow-xl mt-10"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
