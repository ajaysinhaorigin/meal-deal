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
    <div className="bg-gray-100 flex justify-center py-8">
      <div className="bg-white p-4 m-3 my-12 shadow-lg">
        <main className="p-4">
          <p className="text-center mb-10 text-2xl font-bold text-gray-900">
            Personal Details
          </p>

          <div className="">
            <p className="text-lg font-medium text-gray-900">Name: {name}</p>
            <p className="text-lg font-medium text-gray-900">Email: {email}</p>
          </div>
        </main>
        <div className="text-center">
          <button
            type="button"
            onClick={onLogout}
            className="px-8 py-1 text-lg font-medium text-gray-100  bg-gray-900 rounded-lg hover:bg-gray-800 my-16"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
