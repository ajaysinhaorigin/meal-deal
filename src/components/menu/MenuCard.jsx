import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import MenuItem from './MenuItem'

const MenuCard = ({ title, categories,
    itemCards }) => {
    const [sectionIsVisible, setSectionIsVisible] = useState(true)

    return (
        <>
            {
                title && (
                    <div className='mb-8 pb-8 border-b-8 border-gray-200' >
                        <div className='flex justify-between' >
                            <h1 className='text-xl font-bold text-gray-800 pb-4' >{title}
                                {
                                    categories && <>({categories?.length})</>
                                }
                                {
                                    itemCards && <>({itemCards?.length})</>
                                }
                            </h1>

                            {sectionIsVisible === true ? (
                                <button onClick={() => setSectionIsVisible(false)} className='text-lg pb-4 pr-12' >
                                    <FaChevronUp />
                                </button>
                            ) : (
                                <button onClick={() => setSectionIsVisible(true)} className='text-lg pb-4 pr-12' >
                                    <FaChevronDown />
                                </button>
                            )}

                        </div>
                        {sectionIsVisible &&
                            <>
                                {
                                    itemCards && itemCards?.map((item, i) => <MenuItem key={i} {...item?.card?.info} />)
                                }
                                {
                                    categories && categories?.map((menu, i) => <MenuCard key={i} {...menu} />)
                                }
                            </>
                        }
                    </div>)
            }
        </>
    )
}

export default MenuCard