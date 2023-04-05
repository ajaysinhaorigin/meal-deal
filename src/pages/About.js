import AboutImg from '../assets/about_img.png'
import FindRestaurentButton from '../common/FindRestaurentButton'
const About = () => {
  return (
    <div className="bg-[#f7f7f7] pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-8 mx-8 lg:mx-12 py-8">
        <div className="my-auto">
          <h1 className="text-5xl font-bold text-gray-700 tracking-wide leading-tight  mb-4">
            Hungry? You're
            <br /> in the right place
          </h1>
          <p className="font-bold text-gray-400">
            The food we provide is supplied directly from our kitchen we
            gurantee the quality and freshness
          </p>
          <FindRestaurentButton />
        </div>
        <img src={AboutImg} className="text-gray-100" />
      </div>
    </div>
  )
}

export default About
