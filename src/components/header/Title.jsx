import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Title = () => (
  <div className='max-w-[50px] lg:max-w-[65px]    max-h-20' >
    <Link to="/">
      <img className="w-full h-full" alt="logo" src={Logo} />
    </Link>
  </div>
)

export default Title
