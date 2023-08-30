import './styles/App.css'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

// Components that are added in first Bundle
import Shimmer from './components/shimmerUI/Shimmer'
import Header from './components/header/Header'
import Home from './pages/Home'
import Restaurents from './components/restaurents/Restaurents'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import Offers from './pages/Offers'
import About from './pages/About'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Footer from './components/footer/Footer'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// On Demand Loading | Lazy Loading | Data Chunking...
const Collection = lazy(() => import('./pages/Collection'))
const SingleRestaurent = lazy(() => import('./pages/SingleRestaurent'))
const SortContainer = lazy(() => import('./components/sort/SortContainer'))
const PaymentOffers = lazy(() => import('./components/offers/PaymentOffers'))
const RestaurantOffers = lazy(() =>
  import('./components/offers/RestaurantOffers')
)

// App
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
      <ToastContainer />
    </>
  )
}

// Routing For Different Pages
const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/',
            element: <Restaurents />,
          },
          {
            path: ':sort',
            element: (
              <Suspense fallback={<Shimmer />}>
                <SortContainer />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '/offers',
        element: <Offers />,
        children: [
          {
            path: '/offers/restaurant',
            element: (
              <Suspense fallback={<Shimmer />}>
                <RestaurantOffers />
              </Suspense>
            ),
          },
          {
            path: '/offers/payment',
            element: (
              <Suspense fallback={<Shimmer />}>
                <PaymentOffers />
              </Suspense>
            ),
          },
        ],
      },

      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/profile',
        element: <PrivateRoute />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/restaurent/:id',
        element: (
          <Suspense fallback={<Shimmer />}>
            <SingleRestaurent />
          </Suspense>
        ),
      },
      // {
      //   path: '/collection/:link',
      //   element: (
      //     <Suspense fallback={<Shimmer />}>
      //       <Collection />
      //     </Suspense>
      //   ),
      // },
    ],
  },
])

export default AppRouter
