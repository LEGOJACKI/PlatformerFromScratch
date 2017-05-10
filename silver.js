function SilverCanvas() {
  this.c = null;
  this.ctx = null;
  this.count = 1;
  this.bgFillStyle = "#FFFFFF";
  this.fpslock = true;
  this.update = function() {
  
  }
  this.setup = function(canvas) {
    this.c = document.getElementById(canvas);
    this.ctx = this.c.getContext("2d");
    if (fpslock) {
      this.update = function() {
        this.ctx.fillStyle = this.bgFillStyle;
        this.ctx.fillRect(0, 0, this.c.width, this.c.height);
        this.render();
        this.count++;
        window.setTimeout(this.update, 16.67);
      }
    } else {
      this.update = function() {
        this.ctx.fillStyle = this.bgFillStyle;
        this.ctx.fillRect(0, 0, this.c.width, this.c.height);
        this.render();
        this.count++;
        update();
      }
    }
  }
  
  this.render = function() {
    
  }
  
  this.rect = function(color, x, y, width, height) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
  }
  
  this.circle = function(color, x, y, radius) { 
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2*Math.PI);
    this.ctx.fill();
  }
  
  this.img = function(img, x, y) {
	var image = document.getElementById(img);
	this.ctx.drawImage(img, x, y);
  }
  
  this.line = function(color, x1, y1, x2, y2) {
	this.ctx.strokeStyle = color;
	this.ctx.moveTo(x1, y1);
	this.ctx.lineTo(x2, y2);
	this.ctx.stroke();
  }
  this.isCollidingBox = function(rect1, rect2) {

	if (rect1.x1 < rect2.x1 + rect2.width &&
		rect1.x1 + rect1.width > rect2.x1 &&
		rect1.y1 < rect2.y1 + rect2.height &&
		rect1.height + rect1.y1 > rect2.y1) {
		return true;
	} else return false;

  }
  return this;
  
}