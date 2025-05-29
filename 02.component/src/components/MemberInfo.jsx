import React from 'react'

const MemberInfo = ({teamNm, name}) => {
  return (
    <div className='box'>
        <p>{teamNm}</p>
        <p>{name}</p>
    </div>
  )
}

export default MemberInfo