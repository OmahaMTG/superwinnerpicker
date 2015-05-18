var isMovingRightToLeft = true;
var platforms;

function sortNumber(a,b) {
    return b - a;
}

function getNextRowHeight(currentHeight) 
{
	var platformHeights = platforms.platformRowsHeight.sort(sortNumber);

  for (var j = 0; j < platformHeights.length; j++){
  	console.log('currentHeight : ' + currentHeight + ', platformHeight : ' + platformHeights[j]);
    if(currentHeight > platformHeights[j])
    {
      return platformHeights[j];
    }
  }

  return platformHeights[0];
}

module.exports = {

	createMario : function(gameState){
		platforms = gameState.platforms;
    // The player and its settings
	    var player = gameState.game.add.sprite(100, gameState.game.world.height - 90, 'mario');

	     var scaleX = 3;
		 var scaleY = 3;    
		 player.scale.set(scaleX , scaleY );

	    //  We need to enable physics on the player
	    gameState.game.physics.arcade.enable(player);

	    //  Player physics properties. Give the little guy a slight bounce.
	    player.body.bounce.y = 0.2;
	    player.body.gravity.y = 300;
	    player.body.collideWorldBounds = false;

	    //  Our two animations, walking left and right.

	    player.animations.add('hammerleft', [ 5,7,6,8], 8, true);
	    player.animations.add('walftLeft', [ 1,2], 8, true);



	     player.animations.play('hammerleft', 8, true);

	     // Set Anchor to the center of your sprite
	    player.anchor.setTo(.5,.5);

	    // Invert scale.x to flip left/right
	    player.scale.x *= -1;

	    player.updateMario = function(){
	    	if(isMovingRightToLeft)
				player.x += 3;
			else
				player.x += -3;

		}

		player.checkWorldBounds = true;
		player.events.onOutOfBounds.add(this.reachedEndOfPlatform, this); 

	    return player;

	},

	reachedEndOfPlatform : function(player)	{
		
		player.scale.x *= -1;
		if(isMovingRightToLeft)
		{
			isMovingRightToLeft = false;
			player.x += 3;
		}
		else
		{
			isMovingRightToLeft = true;
			player.x += -3;
		}
		player.y = getNextRowHeight(player.y) - 50;
	}




}