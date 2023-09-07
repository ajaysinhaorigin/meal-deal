import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import visibilityIcon from '../assets/visibilityIcon.svg'

function SignUp() {
  const [showPassword, setShowPassword] = useState()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong with registration')
    }
  }

  return (
    <>
      <div className="bg-gray-100 px-16 py-20">
        <header>
          <p className="text-2xl font-bold px-2 my-4">Create Your Account</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="w-full h-full px-4 py-2 mb-4 rounded-full border-none focus:border-none focus:outline-none"
              placeholder="Name"
              id="name"
              value={name}
              onChange={onChange}
            />
            <input
              type="email"
              className="w-full h-full rounded-full px-4 py-2 mb-4 border-none focus:border-none focus:outline-none"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full h-full rounded-full px-4 py-2 mb-4  border-none focus:border-none focus:outline-none"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              />

              <img
                src={visibilityIcon}
                alt="show password"
                className="absolute top-1 right-3"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            <div className="flex text-2xl font-bold m-3 ">
              <p className="">Sign Up</p>
              <button className="p-2 mx-5 rounded-full bg-green-500 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </form>

          <Link
            to="/sign-in"
            className="flex justify-center mt-16 text-lg font-bold text-green-500"
          >
            Sign In Instead
          </Link>
        </main>
      </div>
    </>
  )
}

export default SignUp
