module.exports = {

	createKong : function(gameState){
	    // The player and its settings
	    var kong = gameState.game.add.sprite(200, 0, 'kong');

	     var scaleX = 3;
	  var scaleY = 3;    
	  kong.scale.set(scaleX , scaleY );

	    //  We need to enable physics on the player
	    gameState.game.physics.arcade.enable(kong);

	    //  Player physics properties. Give the little guy a slight bounce.
	    kong.body.bounce.y = 0.2;
	    kong.body.gravity.y = 300;
	    kong.body.collideWorldBounds = true;

	    //  Our two animations, walking left and right.

	    kong.animations.add('wait', [ 2,3], 1, true);
	    kong.animations.add('angry', [ 0,1], 2, true);



	     kong.animations.play('wait', null, true);

	     // Set Anchor to the center of your sprite
	    kong.anchor.setTo(.5,.5);

	    // Invert scale.x to flip left/right
	    kong.scale.x *= -1;

	    return kong;

	}

}