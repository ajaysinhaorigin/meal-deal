
function Spinner() {
  return (
    <div className='bg-[#171A29]' >
      <div className='px-2 py-24 flex justify-center relative' >
        <div className="loadingSpinner w-16 h-16 border-8 animate-spin border-t-gray-300 border-b-gray-300 border-l-transparent border-r-transparent rounded-full">
        </div>
      </div>
    </div>
  )
}

export default Spinner