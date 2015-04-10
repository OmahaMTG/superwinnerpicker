/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var platform = __webpack_require__(1);


	var game = new Phaser.Game(1170, 700, Phaser.AUTO, 'stage', { preload: preload, create: create, update: update }, null, false, false);

	function preload() {

	    game.load.spritesheet('mario', 'img/mario.png', 34, 28);
	    game.load.image('platform', 'img/platform.png');
	    game.load.image('ladder', 'img/ladder.png');
	    game.load.spritesheet('kong', 'img/kong.png', 48, 34);
	}

	function create() {


	  platform(game) ;
	 


	}

	function update() {


	}






/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	


	function createPlatform2(game){
	  var platformHeight = 24;
	  var spaceBetweenPlatform = 120;
	  var kongPlatformSpace = 200;

	  platforms = game.add.group();
	  platforms.enableBody = true;
	  
	  var rowHeightOffset = game.world.height - platformHeight;
	  var totalRows = (game.world.height - platformHeight - kongPlatformSpace)/spaceBetweenPlatform

	  for(var rows = 0; rows < totalRows; rows++)
	  {
	    console.log("add row");
	    for(var cols = 0; cols < game.world.width/(15*3); cols++)
	    {
	      console.log("add col");
	      var ground = platforms.create(cols * (15*3),  rowHeightOffset, 'platform');
	      ground.scale.setTo(3, 3);
	      ground.body.immovable = true;
	    }
	    rowHeightOffset = rowHeightOffset - spaceBetweenPlatform
	  }

	  for(var cols = 0; cols < 6; cols++)
	    {
	      console.log("add col");
	      var ground = platforms.create(cols * (15*3),  rowHeightOffset, 'platform');
	      ground.scale.setTo(3, 3);
	      ground.body.immovable = true;
	    }


	}

	module.exports = createPlatform2;

/***/ }
/******/ ]);