/*var Player = {
    image: document.createElement("img"),
    x: SCREEN_WIDTH/2,
    y: SCREEN_HEIGHT/2,
    width: 93,
    height: 80,
    velocityX: 0,
    velocityY: 0,
    angularVelocity: 0,
    ritation: 0
}; 

player.image.src = "player.png"; */

var Player = function()
{
    this.image = document.createElement("img");
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 159;
    this.height = 163;
    this.velocityX = 0;
    this.velocityY = 0;
    this.angularVelocity = 0;
    this.rotation = 0;

    this.image.src = "player.png";
};

Player.prototype.update = function(deltaTime)
{
    if( typeof(this.rotation) == "undefined" )
        this.rotation = 0;
    
    if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
    {
        this.rotation -= deltaTime;
    }
    else
    {
        this.rotation += deltaTime;
    }
};