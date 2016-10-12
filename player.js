var MAX_LIVES = 3;

var LEFT = 0;
var RIGHT = 1;

var ANIM_WALK_LEFT = 0;
var ANIM_WALK_RIGHT = 1;
var ANIM_WALK_UP = 2;
var ANIM_WALK_DOWN = 3;
var ANIM_MAX = 4;

var sfxWall;
sfxWall = new Howl(
{
    urls: ["wall.wav"],
    buffer: true,
    volume: 0.3,
});

var Player = function() 
{	
    this.sprite = new Sprite("hero.png");
	this.sprite.buildAnimation(13, 21, 25, 48, 0.05,
		[87, 88, 89, 90, 91, 92, 93, 94, 95]);
	this.sprite.buildAnimation(13, 21, 25, 48, 0.05,
		[69, 70, 71, 72, 73, 74, 75, 76, 77]);
	this.sprite.buildAnimation(13, 21, 25, 48, 0.05,
		[60, 61, 62, 63, 64, 65, 66, 67, 68]);
	this.sprite.buildAnimation(13, 21, 25, 48, 0.05,
		[78, 79, 80, 81, 82, 83, 84, 85, 86]);

	this.image = document.createElement("img");
	this.x = canvas.width/2;
	this.y = canvas.height/2; 	
	this.width = 159;
	this.height = 163;	

	this.image.src = "hero.png";   

    this.lives = MAX_LIVES;
};

Player.prototype.update = function(deltaTime)
{		
	this.sprite.update(deltaTime);

    if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
    {
        left = true;
        this.direction = LEFT;
        if(this.sprite.currentAnimation != ANIM_WALK_LEFT)
            this.sprite.setAnimation(ANIM_WALK_LEFT);
    }

    if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
    {
        right = true;
        this.direction = RIGHT;
        if(this.sprite.currentAnimation != ANIM_WALK_RIGHT)
            this.sprite.setAnimation(ANIM_WALK_RIGHT);
    }

    if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
    {
        up = true;
        this.direction = UP;
        if(this.sprite.currentAnimation != ANIM_WALK_UP)
            this.sprite.setAnimatino(ANIM_WALK_UP);
    }

    if(keyboard.isKeyDown(keyboard.key_DOWN) == true)
    {
        down = true;
        this.direction = DOWN;
        if(this.sprite.currentAnimation != ANIM_WALK_DOWN)
            this.sprite.setAnimation(ANIM_WALK_DOWN);
    }
}

Player.prototype.draw = function () 
{
    this.sprite.draw(context, this.position.x, this.position.y);
}