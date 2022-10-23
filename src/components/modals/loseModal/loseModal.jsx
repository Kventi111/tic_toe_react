import * as React from 'react';

import Sad from '../../../assets/sad.png'


import './loseModal.css';

export default function LoseModal() {
  return (
    <div className="modalWrapper">
    <div className="modal">
      <div className="modalHeader">
        <div className="modalHeaderTitle">You lose !</div>
      </div>
      <div className="modalContent">
        <img src={Sad} alt="sad icon" />
      </div>
      <div className="modalFooter">
        <button className='button danger'>back</button>
        <button className='button danger'>Play Again</button>
      </div>
    </div>
  </div>
  );
}
