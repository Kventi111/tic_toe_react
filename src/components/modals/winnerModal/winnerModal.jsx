import * as React from 'react';

import Trophy from '../../../assets/trophy.png'

import './winnerModal.css';

export default function WinnerModal() {
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
          <button className='button primary'>Play Again</button>
        </div>
      </div>
    </div>
  );
}
