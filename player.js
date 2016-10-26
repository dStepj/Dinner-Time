var MAX_LIVES = 3;

var LEFT = 0;
var RIGHT = 1;
var UP = 2;
var DOWN = 3;

var MOVE_SPEED = 30;

var Player = function() 
{	
	this.image = document.createElement("img");
	
    this.position = new Vector2();
    this.position.set(32*3, 32*3);	

    this.direction = new Vector2();
    this.direction.set(0,0);

	this.width = 28;
	this.height = 48;	

	this.image.src = "hero.png";  

    this.lives = MAX_LIVES;
};

Player.prototype.update = function(deltaTime)
{		
    this.direction.set(0,0);

    /*if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
    {
        this.position.x -= 1;
    }

    if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
    {
        this.position.x += 1;
    }

    if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
    {
        this.position.y -= 1;
    }

    if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
    {
        this.position.y += 1;
    }*/

    if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
    {
        //left = true;
        //this.direction = LEFT;
        this.direction.x -= 1;
    }

    if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
    {
        //right = true;
        //this.direction = RIGHT;
        this.direction.x += 1;
    }

    if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
    {
        //up = true;
       //this.direction = UP;
       this.direction.y -= 1;
    }

    if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
    {
        //down = true;
        //this.direction = DOWN;
        this.direction.y += 1;
    }

    var tempx = this.position.x + (this.direction.x * MOVE_SPEED * deltaTime);
    var tempy = this.position.y + (this.direction.y * MOVE_SPEED * deltaTime);

    if(cellAtpixelCoord(0,tempx,tempy) == 0)
   {
        this.position.x = tempx;
        this.position.y = tempy;
    }
    else
    {
        console.log("I can't move there");
    }
}

Player.prototype.draw = function () 
{
    context.drawImage(this.image, this.position.x - (this.width/2), this.position.y - (this.height/2));
}

Player.prototype.reset = function ()
{
    this.position.set(32*3, 32*3);
}