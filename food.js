var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var food = [apple, burger, cake, chicken, pizza, watermelon];

var apple = document.createElement("img");
apple.src="apple.png";

var burger = document.createElement("img");
burger.src="burger.png";

var cake = document.createElement("img");
cake.src="cake.png";

var chicken = document.createElement("img");
chicken.src="chicken.png";

var pizza = document.createElement("img");
pizza.src="pizza.png";

var watermelon = document.createElement("img");
watermelon.src="watermelon.png";

//HOW OFTEN THE OBJECT WILL SPAWN (IN MILLISECONDS)
var spawnRate = 7000;

//WHEN DID THE LAST OBJECT SPAWN?
var lastSpawn = -1;

var spawnLineY = 240;

var objects = [];

//SAVE STARTING TIME (USED TO CALCULATE ELAPSED TIME)
var startTime = Date.now();

animate();

function spawnRandomObject()
{
    var food;

    if (Math.random() < 0.50)
    {
        food = "red";
    }
    else
    {
        food = "blue"
    }
}

function animate()
{
    var time = Date.now();

    if(time > lastSpawn + spawnRate)
    {
        lastSpawn = time;
        spawnRandomObject();
    }

    requestAnimationFrame(animate);
}

var object = 
{
    type: food,
    x: Math.random() * (canvas.width - 30) + 15,
    y: spawnLineY,

    image: food[Math.floor(Math.random()*food.length)]
}

window.onload = function()
{
    animate();
}

for (var i = 0; i < objects.length; i++)
{
    var object = objects[i];
    object.y += spawnRateOfDescent;
    ctx.drawImage(object.food, object.x, object.y, 30,30);
}