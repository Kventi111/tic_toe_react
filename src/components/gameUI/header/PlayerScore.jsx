import React from 'react'

import './header.css'

export default function PlayerScore({ player1Score,player2Score }) {
    return (
        <div className='playerScore'>{player1Score} : {player2Score}</div>
    )
}