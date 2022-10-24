import React from 'react'
import './header.css'

import X1 from '../../../assets/X1.png'
import O1 from '../../../assets/O1.png'

export default function Player({ title,active,pickType }) {
    return (
        <div className={`player ${active ? 'active' : ''}`}>
            <div className="playerTitle">
                {title}
            </div>
            <img src={pickType === 'X' ? X1 : O1} alt="" />
        </div>
    )
}