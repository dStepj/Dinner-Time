var Enemy = function (x, y) 
{
    this.image = document.createElement("img");

    this.position = new Vector2();
    this.position.set(x, y);

    this.velocity = new Vector2();

    this.moveRight = true;
    this.pause = 0;

    this.image.src = "enemy1.png"; 
}
Enemy.prototype.update = function (dt) 
{
    
}

Enemy.prototype.draw = function ()
{
    context.drawImage(this.image,this.position.x,this.position.y);
}