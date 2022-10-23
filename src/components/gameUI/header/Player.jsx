import React from 'react'
import './header.css'

import X1 from '../../../assets/X1.png'

export default function Player({ title }) {
    return (
        <div className='player'>
            <div className="playerTitle">
                {title}
            </div>
            <img src={X1} alt="" />
        </div>
    )
}