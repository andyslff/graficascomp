function Ship () {
  this.x = 0;
  this.y = 0;
  this.width = 238;
  this.height = 260;
  this.rotation = 0;
  this.showFlame = false;
}

Ship.prototype.draw = function (context) {
  var nave = new Image();
  nave.src ="shipi.png";
  var fuego= new Image();
  fuego.src="fuego.png";
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);

  context.drawImage(nave, -nave.width/2, -nave.height/2);

  if (this.showFlame) {
    context.drawImage(fuego, -fuego.width/2, -fuego.height/2);
  }
  context.restore();
};
