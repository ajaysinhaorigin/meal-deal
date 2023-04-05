import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useSelector } from 'react-redux'
import Spinner from '../shimmerUI/Spinner'
import CaroselCard from './CaroselCard'

const Carosels = () => {
    const { carosels, loading } = useSelector((store) => store.restaurant)
    const sliderSettings = {
        infinite: true,
        speed: 400,
        slidesToShow: carosels?.length >= 4 ? 4 : 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
    }

    if (loading && carosels?.length === 0) return <Spinner />

    return carosels?.length === 0 ? null : (
        <div className='bg-[#171A29] mb-6'>
            <div className={carosels?.length >= 4 ? 'mx-10' : 'lg:w-3/4 mx-auto'} >
                <Slider {...sliderSettings}>
                    {
                        carosels?.map((item) => <CaroselCard key={item?.data?.bannerId} {...item?.data} />)
                    }
                </Slider>
            </div>
        </div >
    )
}

export default Carosels