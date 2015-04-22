var platform = require("./platform");
var kong = require("./kong.js");
var mario = require("./mario.js");
var barrel = require("./barrel.js")


var gameState = {};
gameState.game = new Phaser.Game(1170, 700, Phaser.AUTO, 'stage', { preload: preload, create: create, update: update }, null, false, false);


function preload() {

    gameState.game.load.spritesheet('mario', 'img/mario.png', 34, 28);
    gameState.game.load.image('platform', 'img/platform.png');
    gameState.game.load.image('barrel', 'img/barrel.png');
    gameState.game.load.spritesheet('kong', 'img/kong.png', 48, 34);
}

function create() {
    gameState.platforms = platform.createPlatform(gameState) ;
    gameState.kong = kong.createKong(gameState);
    gameState.mario = mario.createMario(gameState);
    gameState.barrels = barrel.createBarrels(gameState);

    console.log(gameState.platforms.platformRowsHeight);
}

function update() {

  gameState.game.debug.spriteInfo(gameState.mario, 20, 32);

  gameState.game.physics.arcade.collide(gameState.mario, gameState.platforms);
  gameState.game.physics.arcade.collide(gameState.kong, gameState.platforms);
  gameState.game.physics.arcade.collide(gameState.barrels, gameState.platforms);

  gameState.mario.updateMario();


}



