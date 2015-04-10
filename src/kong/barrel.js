module.exports = {

  createBarrels : function(gameState){

	var barrels = gameState.game.add.group();
  	var barrel = barrels.create(100,  50, 'barrel');
  	barrel.scale.setTo(2.5, 2.5);
  }

}