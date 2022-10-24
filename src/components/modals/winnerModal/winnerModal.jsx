import { useCallback, useContext } from 'react';

import { InstanceContext } from '../../../App'

import Trophy from '../../../assets/trophy.png'

import './winnerModal.css';

export default function WinnerModal() {
  const { gameInstance,toogleModal } = useContext(InstanceContext)

  const handleResetGame = useCallback(() => {
    toogleModal('winModal')
    gameInstance.resetGame()
  },[])

  return (
    <div className="modalWrapper">
      <div className="modal">
        <div className="modalHeader">
          <div className="modalHeaderTitle">Player One Win!</div>
        </div>
        <div className="modalContent">
          <img src={Trophy} alt="" />
        </div>
        <div className="modalFooter">
          <button className='button primary'>back</button>
          <button onClick={handleResetGame} className='button primary'>Play Again</button>
        </div>
      </div>
    </div>
  );
}
