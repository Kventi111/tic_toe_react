import Cell from './cell';

export default class Game {
  constructor(width, height, col, row, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;

    this.gameGrid = [];
    this.pickCross = true;

    this.col = col || 3;
    this.row = row || 3;

    this.initGrid();
    this.renderGameField();
  }

  drawLine = (type) => {
    if (type === 'dioganal1') {
      console.log({ type });
      for (let i = 0; i < this.gameGrid.length; i++) {
        setTimeout(() => this.gameGrid[i][i].drawBorder(this.ctx, 'rgba(35,200,52,0.5)'), i * 100)
      }
    }

    if (type === 'dioganal2') {
      for (let i = 0, j = this.gameGrid.length - 1; i < this.gameGrid.length, j >= 0; i++, j--) {
        setTimeout(() => this.gameGrid[j][i].drawBorder(this.ctx, 'rgba(35,200,52,0.5)'), i * 100)
      }
    }

    if (type === 'col1') {
      for (let i = 0; i < this.gameGrid.length; i++) {
        setTimeout(() => this.gameGrid[0][i].drawBorder(this.ctx, 'rgba(35,200,52,0.5)'), i * 100)
      }
    }
    if (type === 'col2') {
      for (let i = 0; i < this.gameGrid.length; i++) {
        setTimeout(() => this.gameGrid[1][i].drawBorder(this.ctx, 'rgba(35,200,52,0.5)'), i * 100)
      }
    }
    if (type === 'col3') {
      for (let i = 0; i < this.gameGrid.length; i++) {
        setTimeout(() => this.gameGrid[2][i].drawBorder(this.ctx, 'rgba(35,200,52,0.5)'), i * 100)
      }
    }

    if (type === 'row1') {
      for (let i = 0; i < this.gameGrid.length; i++) {
        setTimeout(() => this.gameGrid[i][0].drawBorder(this.ctx, 'rgba(35,200,52,0.5)'), i * 100)
      }
    }
    if (type === 'row2') {
      for (let i = 0; i < this.gameGrid.length; i++) {
        setTimeout(() => this.gameGrid[i][1].drawBorder(this.ctx, 'rgba(35,200,52,0.5)'), i * 100)
      }
    }
    if (type === 'row3') {
      for (let i = 0; i < this.gameGrid.length; i++) {
        setTimeout(() => this.gameGrid[i][2].drawBorder(this.ctx, 'rgba(35,200,52,0.5)'), i * 100)
      }
    }
  };

  resetGame = () => {
    this.initGrid();
    this.renderGameField();
  };

  initGrid = () => {
    let gameGrid = this.gameGrid;

    for (let i = 0; i < this.col; i++) {
      gameGrid[i] = [];
      for (let j = 0; j < this.row; j++) {
        gameGrid[i][j] = new Cell(
          (i * this.width) / this.col,
          (j * this.height) / this.row,
          this.width / this.col,
          this.height / this.row,
          null
        );
      }
    }

  };

  renderGameField = () => {
    let gameGrid = this.gameGrid;

    for (let i = 0; i < gameGrid.length; i++) {
      for (let j = 0; j < gameGrid[i].length; j++) {
        gameGrid[i][j].show(this.ctx);
      }
    }
  };

  checkWinner = () => {
    let arr = [];
    let gameGrid = this.gameGrid;

    // check dioganal 1
    for (let i = 0; i < gameGrid.length; i++) {
      arr.push(gameGrid[i][i].pickType);
    }

    if (arr.every((i) => i === 'x') || arr.every((i) => i === 'o')) {
      return {
        win: true,
        type: 'dioganal1',
      };
    }
    arr = [];

    // check dioganal 2
    for (let i = 0; i < gameGrid.length; i++) {
      arr.push(gameGrid[gameGrid.length - 1 - i][i].pickType);
    }

    if (arr.every((i) => i === 'x') || arr.every((i) => i === 'o')) {
      return {
        win: true,
        type: 'dioganal2',
      };
    }
    arr = [];

    // check 1 col
    for (let i = 0; i < gameGrid.length; i++) {
      arr.push(gameGrid[0][i].pickType);
    }

    if (arr.every((i) => i === 'x') || arr.every((i) => i === 'o')) {
      return {
        win: true,
        type: 'col1',
      };
    }
    arr = [];

    // check 2 col
    for (let i = 0; i < gameGrid.length; i++) {
      arr.push(gameGrid[1][i].pickType);
    }

    if (arr.every((i) => i === 'x') || arr.every((i) => i === 'o')) {
      return {
        win: true,
        type: 'col2',
      };
    }
    arr = [];

    // check 3 col
    for (let i = 0; i < gameGrid.length; i++) {
      arr.push(gameGrid[2][i].pickType);
    }

    if (arr.every((i) => i === 'x') || arr.every((i) => i === 'o')) {
      return {
        win: true,
        type: 'col3',
      };
    }
    arr = [];

    // check 1 row
    for (let i = 0; i < gameGrid.length; i++) {
      arr.push(gameGrid[i][0].pickType);
    }

    if (arr.every((i) => i === 'x') || arr.every((i) => i === 'o')) {
      return {
        win: true,
        type: 'row1',
      };
    }
    arr = [];

    // check 2 row
    for (let i = 0; i < gameGrid.length; i++) {
      arr.push(gameGrid[i][1].pickType);
    }

    if (arr.every((i) => i === 'x') || arr.every((i) => i === 'o')) {
      return {
        win: true,
        type: 'row2',
      };
    }
    arr = [];

    // check 3 row
    for (let i = 0; i < gameGrid.length; i++) {
      arr.push(gameGrid[i][2].pickType);
    }

    if (arr.every((i) => i === 'x') || arr.every((i) => i === 'o')) {
      return {
        win: true,
        type: 'row3',
      };
    }
    arr = [];

    return {
      win: false,
      type: null,
    };
  };

  checkGameGridIsFull = () => {
    const arr = [];
    let gameGrid = this.gameGrid;

    for (let i = 0; i < gameGrid.length; i++) {
      for (let j = 0; j < gameGrid[i].length; j++) {
        arr.push(gameGrid[i][j].pickType);
      }
    }

    const isFullGrid =
      arr.filter((i) => i !== null).length === gameGrid.length * this.col;

    return isFullGrid;
  };
}
