import React, { useRef, useEffect, useCallback } from 'react';

import Game from './game/game';

import Header from './components/gameUI/header'

import UseShowModal from './hooks/useShowModal';

import './style.css';

export default function App() {
  const canvas = useRef();
  let gameInstance = useRef();
  let ctx = useRef();
  let rect = useRef();
  const { Modal, toogleModal, isOpen } = UseShowModal();

  const handleCanvasClick = useCallback((event) => {
    for (let i = 0; i < gameInstance.gameGrid.length; i++) {
      for (let j = 0; j < gameInstance.gameGrid[i].length; j++) {
        let currentCell = gameInstance.gameGrid[i][j];

        if (
          currentCell.isIntersected(
            event.clientX - rect[0].left,
            event.clientY - rect[0].top,
            ctx
          )
        ) {
          currentCell.pick(gameInstance.pickCross ? 'x' : 'o', ctx);
          currentCell.pickType = gameInstance.pickCross ? 'x' : 'o';
          gameInstance.pickCross = !gameInstance.pickCross;
        }
      }
    }

    const { win, type } = gameInstance.checkWinner();

    if (win) {
      gameInstance.drawLine(type);

      toogleModal('winModal');
      // alert(gameInstance.pickCross ? 'Победил Крестик' : 'Победил Нолик');
    }

    if (gameInstance.checkGameGridIsFull()) {
      if (!win) {
        // Ui.showWinnerBanner('Победила дружба');
        // console.log('nit', { type });
        alert('Победила дружба');
      }
    }
  }, []);

  useEffect(() => {
    if (!canvas.current) return;

    ctx = canvas.current.getContext('2d');
    rect = canvas.current.getClientRects();
    gameInstance = new Game(
      canvas.current.width,
      canvas.current.height,
      3,
      3,
      ctx
    );
  }, [canvas]);

  console.log('app', { isOpen, Modal });

  return (
    <div className='game'>
      <Header />
      <canvas
        onClick={handleCanvasClick}
        ref={canvas}
        id="canvas"
        width="400"
        height="400"
      ></canvas>
      {isOpen && <Modal />}
    </div>
  );
}
