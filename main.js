var player = new Player();
var keyboard = new Keyboard();

function drawMap()
{
    for(var layerIdx=0; layerIdx<LAYER_COUNT; layerIdk++)
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

function run()
{
    context.fillStyle = "#ccc";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var deltaTime = getDeltatime();

    player.update(deltaTime);
    player.draw();

    //UPDATE FRAME COUNTER
    fpsTime =+ deltaTime;
    fpsCount++;
    if(fpsTime >= 1)
    {
        fpsTime -= 1;
        fps = fpsCount;
        fpsCount = 0;
    }
    //DRAW THE FPS
    context.fillStyle = "f00";
    context.font="14px Arial";
    context.fillText("FPS: " + fps, 5, 20, 100);
}