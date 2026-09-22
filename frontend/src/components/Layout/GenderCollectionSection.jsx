import React from 'react'
import menscollection from '../../assets/mens-collection.webp';

const GenderCollectionSection = () => {
  return (
    <div>
      <div className='bg-green-400 px-10 py-10 flex justify-around gap-5 '>
        <div className='border-2 border-black w-xl '><img src={menscollection} alt="" /></div>
        <div className='border-2 border-black w-xl '>right</div>
      </div>
    </div>
  )
}

export default GenderCollectionSection
