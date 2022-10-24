import { useContext } from 'react'

import Player from './Player'
import PlayerScore from './PlayerScore'
import { InstanceContext } from '../../../App'


import './header.css'

export default function Header() {
    const { gameInstance } = useContext(InstanceContext)
  
    return (
        <div className='header'>
            <Player title="player one" pickType="X" active={!gameInstance?.pickCross} />
            <PlayerScore player1Score={1} player2Score={2} />
            <Player title="player two" pickType="O" active={gameInstance?.pickCross} />
        </div>
    )
}