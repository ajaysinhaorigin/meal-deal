import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import visibilityIcon from '../assets/visibilityIcon.svg'

function SignIn() {
  const [showPassword, setShowPassword] = useState()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
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

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Bad User Credentials')
    }
  }

  return (
    <>
      <div className="bg-gray-100 px-16 py-20 w-full h-full">
        <header>
          <p className="text-2xl font-bold px-2 my-4">Welcome Back !</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
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
              <p className="">Sign In</p>
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
            to="/sign-up"
            className="flex justify-center mt-16 text-lg font-bold text-green-500"
          >
            Sign Up Instead
          </Link>
        </main>
      </div>
    </>
  )
}

export default SignIn
