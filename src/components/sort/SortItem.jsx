const SortItem = ({ query, sortby }) => {
    return (
        <>

            <button className="text-gray-700 text-xs mr-2 md:text-base lg:mx-2 lg:text-lg hover:text-orange-500 font-medium " onClick={() => sortby(query)} >{query}</button>

        </>
    )
}

export default SortItem