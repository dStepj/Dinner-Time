var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

var player = document.createElement("img");
player.src = "player.png";

//MAP AND LEVEL VARIABLES:
var LAYER_COUNT = 2;
var MAP = {tw: 32, th: 32};
var TILE = 1
var TILESET_TILE = TILE * 1;
var TILESET_PADDING = 1;
var TILESET_SPACING = 2;
var TILESET_COUNT_X = 2;
var TILESET_COUNT_Y = 2;

//LOAD THE IMAGE FOR THE MAP
var tileset = document.createElement("img");
tileset.src = "Tileset_Basic.png";

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

//SPLASH SCREEN + GAME STATES
var splashTimer = 3;

var STATE_SPLASH = 0;
var STATE_PLAY = 1;
var STATE_LOSE = 2;
var STATE_WIN = 3;

var gameState = STATE_SPLASH;

//MUSIC AND SOUND EFFECTS
// -- insert music variables here -- //

function getDeltaTime()
{
    endFrameMillis = startFrameMillis;
    startFrameMillirs = Date.now();

    var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;

    if(deltaTime >1)
        deltaTime = 1;

    return deltaTime;
}

function drawMap()
{
    for(var layerIdx=0; layerIdx<LAYER_COUNT; layerIdx++)
    {
        var idx = 0;
        for(var y = 0; y < level1.layers[layerIdx].height; y++)
        {
            for(var x = 0; x < level1.layers[layerIdx].width; x++)
            {
                if(level1.layers[layerIdx].data[idx] !=0)
                {
                    var tileIndex = level1.layers[layerIdx].data[idx] - 1;
                    var sx = TILESET_PADDING + (tileIndex % TILESET_COUNT_X)*(TILESET_TILE + TILESET_SPACING);
                    var sy = TILESET_PADDING + (Math.floor(tileIndex / TILESET_COUNT_X)) * (TILESET_TILE + TILESET_SPACING);
                    context.drawImage(tileset, sx, sy, TILESET_TILE, TILESET_TILE, x*TILE, (y-1)*TILE, TILESET_TILE, TILESET_TILE);
                }
                idx++;
            }
        }
    }
}

var player = new Player();
var keyboard = new Keyboard();

function run()
{
    context.fillStyle = "#ff0000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMap();

    var deltaTime = getDeltaTime();

    player.update(deltaTime);
    player.draw();

    //UPDATE FRAME COUNTER
    /*fpsTime += deltaTime;
    fpsCount++;
    if(fpsTime >= 1)
    {
        fpsTime -= 1;
        fps = fpsCount;
        fpsCount = 0;
    }*/

    //DRAW THE FPS
    context.fillStyle = "black";
    context.font="14px Arial";
    context.fillText("FPS: " + fps, 5, 20, 100);
}

//initialize;

//DO NOT MODIFY ANYTHING BELOW HERE!

(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);