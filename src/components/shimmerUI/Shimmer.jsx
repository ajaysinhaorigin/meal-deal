const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 pt-8 py-8">
      {Array(16)
        .fill('')
        .map((e, index) => (
          <div key={index} className='mx-auto bg-gray-200 w-64 h-72'></div>
        ))}

    </div>
  )
}

export default Shimmer
