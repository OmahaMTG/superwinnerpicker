var platformRowsHeight = [];

module.exports = {

  createPlatform : function(gameState){
    var platformHeight = 24;
    var spaceBetweenPlatform = 120;
    var kongPlatformSpace = 200;


    var platforms = gameState.game.add.group();
    platforms.enableBody = true;
    
    var rowHeightOffset = gameState.game.world.height - platformHeight;
    var totalRows = (gameState.game.world.height - platformHeight - kongPlatformSpace)/spaceBetweenPlatform

    for(var rows = 0; rows < totalRows; rows++)
    {
      platformRowsHeight.push(rowHeightOffset);
      console.log("add row:" + rowHeightOffset);
      for(var cols = 0; cols < gameState.game.world.width/(15*3); cols++)
      {
        var ground = platforms.create(cols * (15*3),  rowHeightOffset, 'platform');
        ground.scale.setTo(3, 3);
        ground.body.immovable = true;
      }
      rowHeightOffset = rowHeightOffset - spaceBetweenPlatform
    }

    console.log("add kongs row:" + rowHeightOffset);
    for(var cols = 0; cols < 6; cols++)
    {
      var ground = platforms.create(cols * (15*3),  rowHeightOffset, 'platform');
      ground.scale.setTo(3, 3);
      ground.body.immovable = true;
    }

    platforms.platformRowsHeight = platformRowsHeight;

    return platforms;


  }

}
