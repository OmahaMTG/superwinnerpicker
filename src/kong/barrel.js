module.exports = {

  createBarrels : function(gameState){

	var barrels = gameState.game.add.group();
  	var barrel = barrels.create(100,  50, 'barrel');
  	barrel.scale.setTo(2.5, 2.5);

//  We need to enable physics on the player
	    gameState.game.physics.arcade.enable(barrel);
  		    barrel.body.bounce.y = 0.1;
	    barrel.body.gravity.y = 100;
	    barrel.body.collideWorldBounds = true;

	    return barrel;
  }

}