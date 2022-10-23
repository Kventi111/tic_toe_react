import React from 'react'

import Player from './Player'
import PlayerScore from './PlayerScore'

import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <Player title="player one" />
            <PlayerScore player1Score={1} player2Score={2} />
            <Player title="player two" />
        </div>
    )
}