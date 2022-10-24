import { roundRect } from '../utils'

export default class Cell {
  constructor(x, y, width, height, pickType) {
    this.offsetX = 15;
    this.offsetY = 30;
    this.x = x + this.offsetX;
    this.y = y + this.offsetY;
    this.width = width - this.offsetY;
    this.height = height - this.offsetY;
    this.pickType = pickType;
    this.color = '#C4C4C4';
    this.picked = false;
  }

  show(ctx) {
    ctx.clearRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    roundRect(ctx, this.x, this.y, this.width, this.height, 20)
  }

  drawBorder(ctx, color) {
    ctx.fillStyle = color;
    roundRect(ctx, this.x, this.y, this.width, this.height, 20)
  }

  drawCross(ctx) {

    ctx.beginPath();
    ctx.fillStyle = '#E773FF';
    ctx.arc(
      this.x + this.width / 2,
      this.y + this.height / 2,
      this.width * 0.8 / 2,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.strokeStyle = '#5801C6';
    ctx.lineWidth = 8;

    ctx.moveTo(this.x + 30, this.y + 30);
    ctx.lineTo(this.x + this.width - 30, this.y + this.height - 30);

    ctx.moveTo(this.x + this.width - 30, this.y + 30);
    ctx.lineTo(this.x + 30, this.y + this.height - 30);
    ctx.stroke();
    ctx.closePath();
  }

  drawCircle(ctx) {
    ctx.beginPath();
    ctx.fillStyle = '#F9D967';
    ctx.arc(
      this.x + this.width / 2,
      this.y + this.height / 2,
      this.width * 0.8 / 2,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.fillStyle = '#FFF785';
    ctx.arc(
      this.x + this.width / 2,
      this.y + this.height / 2,
      this.width * 0.4 / 2,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
    ctx.closePath()
  }

  pick(type, ctx) {
    if (this.picked) return;

    if (type === 'o') {
      this.drawCross(ctx);
    }
    if (type === 'x') {
      this.drawCircle(ctx);
    }

    this.picked = true;
  }

  isIntersected(x, y) {
    const intersected =
      x < this.x ||
      x > this.x + this.width ||
      y < this.y ||
      y > this.y + this.height;

    return !intersected;
  }
}
