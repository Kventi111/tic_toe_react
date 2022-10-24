import { useEffect, useRef, useState } from 'react';
import Game from '../game/game';

export default function useInit(canvasRef) {
  let init = useRef(false);
  let [ctx, setCtx] = useState(undefined);
  let [rect, setRect] = useState(undefined);
  let [game, setGame] = useState(undefined);

  console.log({ init })

  useEffect(() => {
    if (!canvasRef.current) return;

    setCtx(canvasRef.current.getContext('2d'));
    setRect(canvasRef.current.getClientRects());

    if (ctx) {
      setGame(new Game(
        canvasRef.current.width,
        canvasRef.current.height,
        3,
        3,
        ctx
      ))

      init.current = true
    }





  }, [canvasRef, init, ctx]);

  return { gameInstance: game, rect, ctx, init };
}
