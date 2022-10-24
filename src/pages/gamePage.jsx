import React, { useRef, useCallback,createContext } from 'react';

import Header from '../components/gameUI/header'
import UseShowModal from '../hooks/useShowModal';
import useInitInstance from '../hooks/initGame';

import '../style.css';

export const InstanceContext = createContext({})

export function GamePage() {
  const canvasRef = useRef()
  const { gameInstance,rect,ctx } = useInitInstance(canvasRef)
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
    }

    if (gameInstance.checkGameGridIsFull()) {
      if (!win) {
        toogleModal('winModal');
      }
    }
  }, [gameInstance]);


  console.log('app', { isOpen, Modal,canvasRef,gameInstance,rect,ctx });

  return (
    <InstanceContext.Provider value={{ gameInstance,rect,ctx,toogleModal }}>
      <div className='game'>
        <Header />
        <canvas
          onClick={handleCanvasClick}
          ref={canvasRef}
          id="canvas"
          width="400"
          height="400"
        ></canvas>
        {isOpen && <Modal  />}
      </div>
    </InstanceContext.Provider>
  );
}
