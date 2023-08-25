import ImageComponent from "../../common/ImageComponent"
// import { Link } from "react-router-dom"
function CaroselCard({ imageId, action }) {
    return (
        <div className="mx-4 py-8 lg:w-64 lg:h-72" >
            <ImageComponent cdn={imageId} />
        </div>
    )
}

export default CaroselCard