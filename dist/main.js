/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backgrounds.js":
/*!****************************!*\
  !*** ./src/backgrounds.js ***!
  \****************************/
/*! exports provided: renderBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBackground\", function() { return renderBackground; });\nfunction renderWall(ctx, stageProgress) {\n  var wall = new Image();\n  wall.width = 204;\n  wall.height = 285;\n  wall.src = \"assets/bg/walls.png\";\n  wall.xPos = 0;\n  var wallArray = [wall, wall, wall, wall, wall, wall, wall, wall];\n  wallArray.map(function (section, i) {\n    section.xPos = section.width * i;\n    section.xPos -= stageProgress % 612 / 3;\n    ctx.drawImage(section, 0, 0, // start x, start y\n    section.width, section.height, // start width, start height \n    section.xPos, 50, // canvas position, x and y \n    section.width, section.height // canvas display width, height\n    );\n  });\n}\n\nfunction renderFloor(ctx, stageProgress) {\n  var floor = new Image();\n  floor.src = \"assets/bg/tiles2.png\";\n  var startPos = Math.floor(stageProgress % 4) * 800;\n  ctx.drawImage(floor, startPos, 0, // start x, start y\n  800, 200, // start width, start height \n  0, 330, // canvas position, x and y \n  800, 200 // canvas display width, height\n  );\n}\n\nfunction renderCeiling(ctx, stageProgress) {\n  var ceiling = new Image();\n  ceiling.src = \"assets/bg/ceiling.png\";\n  var startPos = Math.floor(stageProgress % 52);\n  ctx.drawImage(ceiling, startPos, 0, // start x, start y\n  800, 52, // start width, start height \n  0, 0, // canvas position, x and y \n  800, 52 // canvas display width, height\n  );\n  ctx.drawImage(ceiling, startPos, 0, // start x, start y\n  800, 52, // start width, start height \n  0, 459, // canvas position, x and y \n  800, 52 // canvas display width, height\n  );\n}\n\nfunction renderBackground(ctx, stageProgress) {\n  renderWall(ctx, stageProgress);\n  renderFloor(ctx, stageProgress);\n  renderCeiling(ctx, stageProgress);\n}\n\n//# sourceURL=webpack:///./src/backgrounds.js?");

/***/ }),

/***/ "./src/collision.js":
/*!**************************!*\
  !*** ./src/collision.js ***!
  \**************************/
/*! exports provided: checkIfBeingHit, checkIfHitting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfBeingHit\", function() { return checkIfBeingHit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkIfHitting\", function() { return checkIfHitting; });\n/* harmony import */ var _monster_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monster_db */ \"./src/monster_db.js\");\n\nfunction checkIfBeingHit(hero, heroState, monstersOnScreen, projectilesOnScreen, ctx) {\n  var allHostiles = monstersOnScreen.concat(projectilesOnScreen);\n  allHostiles.map(function (hostile) {\n    if (hostile.type === 'projectile') {\n      var bulletCenterX = hostile.xPos + 25;\n      var bulletCenterY = hostile.yPos + 25;\n      var dx = Math.abs(hero.centerX - bulletCenterX);\n      var dy = Math.abs(hero.centerY - heroState.height - bulletCenterY);\n      var distance = Math.sqrt(dx * dx + dy * dy);\n\n      if (distance < hostile.radius + hero.radius) {\n        if (heroState.state === 'normal') {\n          heroState.health -= 10;\n        }\n\n        heroState.state = 'hit';\n      }\n    } else if (hostile.state === 'normal' || hostile.state === 'attacking') {\n      var monster = _monster_db__WEBPACK_IMPORTED_MODULE_0__[\"monsterArray\"][hostile.type];\n      monster.centerX = hostile.xPos + monster.radius;\n      monster.centerY = hostile.yPos + monster.radius;\n\n      var _dx = Math.abs(hero.centerX - monster.centerX);\n\n      var _dy = Math.abs(hero.centerY - heroState.height - monster.centerY);\n\n      var _distance = Math.sqrt(_dx * _dx + _dy * _dy);\n\n      if (_distance < monster.radius + hero.radius) {\n        if (heroState.state === 'normal') {\n          heroState.health -= monster.damage;\n        }\n\n        heroState.state = 'hit';\n      } // DISPLAY HITBOX\n      // ctx.beginPath();\n      // ctx.arc(monster.centerX, monster.centerY, monster.radius, 0, 2 * Math.PI);\n      // ctx.fillStyle = 'rgba(166, 32, 32, 0.6)';\n      // ctx.fill();\n\n    }\n  });\n  return heroState;\n}\nfunction checkIfHitting(hero, heroState, monstersOnScreen, ctx) {\n  var newOnScreen = monstersOnScreen;\n\n  if (heroState.action === 'attacking') {\n    // DISPLAY HURTBOX\n    // ctx.beginPath();\n    // ctx.arc(hero.centerX, hero.centerY - heroState.height + 14, hero.radius + 50, 0, 2 * Math.PI);\n    // ctx.fillStyle = 'rgba(180, 191, 63, 0.6)';\n    // ctx.fill();\n    newOnScreen.map(function (hostile) {\n      var monster = _monster_db__WEBPACK_IMPORTED_MODULE_0__[\"monsterArray\"][hostile.type];\n      monster.centerX = hostile.xPos + monster.radius;\n      monster.centerY = hostile.yPos + monster.radius;\n      var dx = Math.abs(hero.centerX - monster.centerX);\n      var dy = Math.abs(hero.centerY - heroState.height + 14 - monster.centerY);\n      var distance = Math.sqrt(dx * dx + dy * dy);\n\n      if (distance < monster.radius + hero.radius + 40) {\n        if (hostile.state === 'normal' || hostile.state === 'attacking') {\n          hostile.health -= heroState.damage;\n          hostile.frame = 0;\n          hostile.state = 'hit';\n        }\n      }\n    });\n  }\n\n  return newOnScreen;\n}\n\n//# sourceURL=webpack:///./src/collision.js?");

/***/ }),

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/*! exports provided: Controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controls\", function() { return Controls; });\nfunction Controls(stageProgress) {\n  self = this;\n  self.rightPressed = false;\n  self.leftPressed = false;\n  self.upPressed = false;\n  self.fPressed = false;\n  self.mcState = 'normal';\n  self.mcAction = 'none';\n  self.direction = 'neutral';\n  self.restart = false;\n  document.addEventListener(\"keydown\", keyDownHandler, false);\n  document.addEventListener(\"keyup\", keyUpHandler, false);\n\n  function keyDownHandler(e) {\n    if (e.key === \"Right\" || e.key === \"ArrowRight\" || e.key === \"d\") {\n      self.rightPressed = true;\n      self.direction = 'right';\n    } else if (e.key === \"Left\" || e.key === \"ArrowLeft\" || e.key === \"a\") {\n      self.leftPressed = true;\n      self.direction = 'left';\n    } else if (e.key === \"Up\" || e.key === \"ArrowUp\" || e.key === \"w\" || e.key === \" \") {\n      self.upPressed = true;\n\n      if (self.mcState === 'normal') {\n        self.mcState = 'jumping';\n      }\n    } else if (e.key === \"f\") {\n      self.mcAction = 'attacking';\n      self.fPressed = true;\n    } else if (e.key === \"Enter\") {\n      self.restart = true;\n    }\n  }\n\n  function keyUpHandler(e) {\n    if (e.key === \"Right\" || e.key === \"ArrowRight\" || e.key === \"d\") {\n      self.rightPressed = false;\n    } else if (e.key === \"Left\" || e.key === \"ArrowLeft\" || e.key === \"a\") {\n      self.leftPressed = false;\n    } else if (e.key === \"Up\" || e.key === \"ArrowUp\" || e.key === \"w\" || e.key === \" \") {\n      self.upPressed = false;\n      self.mcState = 'normal';\n    } else if (e.key === \"f\") {\n      self.fPressed = false;\n      self.mcAction = 'none';\n    } else if (e.key === \"Enter\") {\n      self.restart = false;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/controls.js?");

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: updateStageProgress, updateMCState, updateScore, sortHighScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStageProgress\", function() { return updateStageProgress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMCState\", function() { return updateMCState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateScore\", function() { return updateScore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortHighScore\", function() { return sortHighScore; });\n/* harmony import */ var _monster_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monster_db */ \"./src/monster_db.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\nfunction updateStageProgress(keyPress, stageProgress, moveSpeed, heroState) {\n  var currentStageProgress = stageProgress;\n\n  if (keyPress.leftPressed === true && stageProgress > 0) {\n    currentStageProgress -= moveSpeed;\n  } else if (keyPress.rightPressed === true) {\n    currentStageProgress += moveSpeed;\n  }\n\n  if (heroState.state === 'hit' && heroState.hitstun === 1) {\n    currentStageProgress -= 10;\n  }\n\n  return currentStageProgress;\n}\nfunction updateMCState(mainChar, mcState, keyPress) {\n  var newState = mcState;\n  newState.direction = keyPress.direction;\n\n  if (newState.state === 'hit') {\n    if (newState.hitstun >= 60) {\n      newState.state = 'normal';\n      newState.hitstun = 0;\n    } else {\n      newState.hitstun += 1;\n    }\n\n    if (newState.height - mainChar.fallSpeed < 0) {\n      newState.height = 0;\n    } else {\n      newState.height -= mainChar.fallSpeed;\n    }\n  } else {\n    // Attack Handler\n    if (keyPress.mcAction === 'attacking' && newState.action === 'none') {\n      newState.action = 'attacking';\n      newState.recovery++;\n    } else if (newState.action === 'attacking' && newState.recovery > 0) {\n      newState.recovery++;\n\n      if (newState.recovery >= 30) {\n        newState.action = 'none', newState.recovery = 0;\n      }\n    } // Jumping handler\n\n\n    if (keyPress.mcState === 'jumping' && newState.height === 0) {\n      newState.state = 'jumping';\n      newState.height += mainChar.jumpSpeed;\n    } else if (newState.state === 'jumping' && newState.height > 0) {\n      newState.height + mainChar.jumpSpeed > mainChar.maxJumpHeight ? newState.state = 'falling' : newState.height += mainChar.jumpSpeed;\n    } else if (newState.state !== 'jumping') {\n      if (newState.height - mainChar.fallSpeed < 0) {\n        newState.height = 0;\n        newState.state = 'normal';\n      } else {\n        newState.height -= mainChar.fallSpeed;\n      }\n    }\n  }\n\n  return newState;\n}\nfunction updateScore(score, monstersOnScreen) {\n  var currentScore = score;\n  monstersOnScreen.map(function (monster) {\n    if (monster.state === 'dead' && monster.frame === 1) {\n      currentScore += _monster_db__WEBPACK_IMPORTED_MODULE_0__[\"monsterArray\"][monster.type].points;\n    }\n  });\n  return currentScore;\n}\nfunction sortHighScore(score, highScore, runTime) {\n  if (runTime === 1) {\n    if (highScore.length < 5) {\n      highScore.push(score);\n    } else if (Math.min.apply(Math, _toConsumableArray(highScore)) < score) {\n      highScore.pop();\n      highScore.push(score);\n      ;\n    }\n  }\n\n  return highScore.sort(function (a, b) {\n    return b - a;\n  });\n}\n\n//# sourceURL=webpack:///./src/core.js?");

/***/ }),

/***/ "./src/displays.js":
/*!*************************!*\
  !*** ./src/displays.js ***!
  \*************************/
/*! exports provided: displayHealthBar, displayGameOver, removeGameover, displayScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayHealthBar\", function() { return displayHealthBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayGameOver\", function() { return displayGameOver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeGameover\", function() { return removeGameover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayScore\", function() { return displayScore; });\nfunction displayHealthBar(ctx, currentHealth) {\n  var healthbar = new Image();\n  healthbar.src = \"assets/display/healthbar.png\";\n  ctx.drawImage(healthbar, 0, 0, // start x, start y\n  800, 475, // start width, start height \n  0, 0, // canvas position, x and y \n  800, 475 // canvas display width, height\n  );\n  ctx.beginPath();\n  ctx.rect(40, 40, currentHealth * 3, 15);\n  ctx.fillStyle = 'rgba(63, 191, 63, 1)';\n  ctx.fill();\n}\nfunction displayGameOver(ctx, runTime, highscore) {\n  var opacity = runTime / 180;\n  ctx.beginPath();\n  ctx.rect(0, 0, 800, 500);\n  ctx.fillStyle = \"rgba(0, 0, 0, \".concat(opacity, \")\");\n  ctx.fill();\n  ctx.closePath();\n\n  if (runTime === 60) {\n    var rootDoc = document.getElementById('root');\n    var gameText = document.createElement('h2');\n    gameText.classList.add('gameover');\n    var gameOverText = document.createTextNode('Game Over');\n    gameText.appendChild(gameOverText);\n    rootDoc.appendChild(gameText);\n    var scoreTitle = document.createElement('h3');\n    scoreTitle.classList.add('gameover');\n    var scoreTitleText = document.createTextNode('High Scores');\n    scoreTitle.appendChild(scoreTitleText);\n    rootDoc.appendChild(scoreTitle);\n    var restartText = document.createElement('h4');\n    restartText.classList.add('gameover');\n    var restartGameText = document.createTextNode('Press Enter to play again');\n    restartText.appendChild(restartGameText);\n    rootDoc.appendChild(restartText);\n    var scoreList = document.createElement('ol');\n    scoreList.classList.add('gameover');\n    highscore.map(function (score, i) {\n      var scores = document.createElement('li');\n      var scoreText = document.createTextNode(\"\".concat(score));\n      scores.appendChild(scoreText);\n      scoreList.appendChild(scores);\n    });\n    rootDoc.appendChild(scoreList);\n  }\n}\nfunction removeGameover() {\n  var toBeRemoved = document.getElementsByClassName('gameover');\n  var rootDoc = document.getElementById('root');\n  rootDoc.removeChild(toBeRemoved[3]);\n  rootDoc.removeChild(toBeRemoved[2]);\n  rootDoc.removeChild(toBeRemoved[1]);\n  rootDoc.removeChild(toBeRemoved[0]);\n}\nfunction displayScore(ctx, score) {\n  ctx.save();\n  ctx.font = \"15px 'Press Start 2P'\";\n  ctx.fillStyle = 'white';\n  ctx.lineWidth = 5;\n  ctx.strokeText(\"Score: \".concat(score), 30, 85);\n  ctx.fillText(\"Score: \".concat(score), 30, 85);\n  ctx.restore();\n}\n\n//# sourceURL=webpack:///./src/displays.js?");

/***/ }),

/***/ "./src/equipment.js":
/*!**************************!*\
  !*** ./src/equipment.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Equipment =\n/*#__PURE__*/\nfunction () {\n  function Equipment(ctx) {\n    _classCallCheck(this, Equipment);\n\n    this.ctx = ctx;\n    this.sprite = new Image();\n  }\n\n  _createClass(Equipment, [{\n    key: \"render\",\n    value: function render(mcState, stageProgress, mainChar) {\n      this.sprite.src = \"assets/equip/rusty_crowbar-2x.png\";\n      var spriteSheetRow; // multiples of 100\n\n      var animationFrame;\n\n      if (mcState.state !== 'hit' && mcState.action !== 'attacking') {\n        animationFrame = stageProgress % 240;\n\n        if (mcState.direction === 'left') {\n          spriteSheetRow = 100;\n        } else {\n          spriteSheetRow = 0; // make a new row for neutral state if time allows and edit it here\n        }\n      } else if (mcState.action === 'attacking') {\n        animationFrame = mcState.recovery * 8;\n\n        if (mcState.direction === 'left') {\n          spriteSheetRow = 400;\n        } else {\n          spriteSheetRow = 300;\n        }\n      }\n\n      var spriteSheetXPos = Math.floor(animationFrame / 60) * 100;\n\n      if (mcState.state !== 'hit') {\n        this.ctx.drawImage(this.sprite, spriteSheetXPos, spriteSheetRow, // start x, start y\n        100, 100, // start width, start height \n        mainChar.xPos, mainChar.yPos - mcState.height, // canvas position, x and y \n        100, 100 // canvas display width, height\n        );\n      }\n    }\n  }]);\n\n  return Equipment;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Equipment);\n\n//# sourceURL=webpack:///./src/equipment.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Hero =\n/*#__PURE__*/\nfunction () {\n  function Hero(ctx) {\n    _classCallCheck(this, Hero);\n\n    this.ctx = ctx;\n    this.spritesheet = new Image();\n    this.spritesheet.src = \"assets/mc/mc-spritesheet-2x.png\";\n    this.xPos = 170;\n    this.yPos = 325;\n    this.centerX = 200;\n    this.centerY = 375;\n    this.radius = 28;\n    this.spriteFrame = 0;\n    this.fps = 4;\n    this.maxJumpHeight = 200;\n    this.jumpSpeed = 10;\n    this.fallSpeed = 10;\n    this.timer = 0;\n  }\n\n  _createClass(Hero, [{\n    key: \"render\",\n    value: function render(stageProgress, heroState) {\n      // Just to check hitbox\n      this.ctx.beginPath();\n      this.ctx.arc(this.centerX, this.centerY - heroState.height, this.radius, 0, 2 * Math.PI);\n      this.ctx.fillStyle = 'rgba(46, 166, 32, 0.6)';\n      this.ctx.fill();\n      var spriteSheetRow; // multiples of 100\n\n      var animationFrame; // HERO IS WALKING\n\n      if (heroState.state !== 'hit' && heroState.action !== 'attacking') {\n        animationFrame = stageProgress % 240;\n\n        if (heroState.direction === 'left') {\n          spriteSheetRow = 100;\n        } else {\n          spriteSheetRow = 0; // make a new row for neutral state if time allows and edit it here\n        } // HERO IS ATTACKING\n\n      } else if (heroState.state !== 'hit' && heroState.action === 'attacking') {\n        animationFrame = heroState.recovery * 8;\n\n        if (heroState.direction === 'left') {\n          spriteSheetRow = 400;\n        } else {\n          spriteSheetRow = 300;\n        } // HERO IS HIT\n\n      } else if (heroState.state === 'hit') {\n        heroState.action = 'none';\n        animationFrame = heroState.hitstun * 4;\n        spriteSheetRow = 200;\n      }\n\n      var spriteSheetXPos = Math.floor(animationFrame / 60) * 100;\n      var horizontalMovement = 0;\n      this.ctx.drawImage(this.spritesheet, spriteSheetXPos, spriteSheetRow, // start x, start y\n      100, 100, // start width, start height \n      this.xPos + horizontalMovement, this.yPos - heroState.height, // canvas position, x and y \n      100, 100 // canvas display width, height\n      );\n    }\n  }]);\n\n  return Hero;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\n//# sourceURL=webpack:///./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ \"./src/core.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ \"./src/controls.js\");\n/* harmony import */ var _backgrounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backgrounds */ \"./src/backgrounds.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _equipment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipment */ \"./src/equipment.js\");\n/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monster */ \"./src/monster.js\");\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n/* harmony import */ var _displays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displays */ \"./src/displays.js\");\n\n\n\n\n\n\n\n\n // GAMEPLAY VARIABLES\n\nvar runTime = 0;\nvar maxHealth = 100;\nvar score = 0;\nvar highScore = [0, 0, 0, 0, 0]; // BACKGROUND FUNCTIONS\n\nvar keyPress = new _controls__WEBPACK_IMPORTED_MODULE_2__[\"Controls\"](); // keypress returns: \n//  rightPressed = true/false\n//  leftPressed = true/false\n//  upPressed = true/false\n//  fPressed = true/false\n//  mcState =  normal/jumping\n//  mcAction = none/attacking\n//  direction = neutral/right/left\n// Current state of the game mode being rendered\n\nvar gameover = false;\nvar stageProgress = 0;\nvar moveSpeed = 5; // SETUP\n\nvar canvas = document.getElementById('game-canvas');\nvar ctx = canvas.getContext(\"2d\"); // BACKGROUND\n// let currentEnvironment = new Environment(ctx);\n// Monsters objects being rendered\n\nvar monstersOnScreen = [];\nvar projectilesOnScreen = []; // Current state of the main character being rendered\n\nvar hero = new _hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"](ctx);\nvar weapon = new _equipment__WEBPACK_IMPORTED_MODULE_5__[\"default\"](ctx);\nvar heroState = {\n  health: maxHealth,\n  state: 'normal',\n  action: 'none',\n  direction: 'right',\n  height: 0,\n  hitstun: 0,\n  recovery: 0,\n  damage: 5\n};\n\nfunction runGame() {\n  if (gameover === false) {\n    // CLEAR SCREEN FOR REDRAWING\n    ctx.clearRect(0, 0, 800, 475); // GAME VALUES UPDATE\n\n    runTime += 1;\n    stageProgress = _core_js__WEBPACK_IMPORTED_MODULE_1__[\"updateStageProgress\"](keyPress, stageProgress, moveSpeed, heroState); // SETUP GAME VALUES/ENVIRONMENT\n\n    Object(_backgrounds__WEBPACK_IMPORTED_MODULE_3__[\"renderBackground\"])(ctx, stageProgress); // GAME PROGRESS\n\n    Object(_monster__WEBPACK_IMPORTED_MODULE_6__[\"spawnMonster\"])(monstersOnScreen, stageProgress);\n    Object(_monster__WEBPACK_IMPORTED_MODULE_6__[\"spawnProjectiles\"])(monstersOnScreen, projectilesOnScreen); // SCREEN OBJECT VALUES UPDATE\n\n    score = _core_js__WEBPACK_IMPORTED_MODULE_1__[\"updateScore\"](score, monstersOnScreen);\n    heroState = _core_js__WEBPACK_IMPORTED_MODULE_1__[\"updateMCState\"](hero, heroState, keyPress);\n    monstersOnScreen = Object(_monster__WEBPACK_IMPORTED_MODULE_6__[\"updateMonster\"])(monstersOnScreen, keyPress, moveSpeed, heroState);\n    projectilesOnScreen = Object(_monster__WEBPACK_IMPORTED_MODULE_6__[\"updateProjectiles\"])(projectilesOnScreen, keyPress, moveSpeed); // CHECK CONDITIONS\n\n    monstersOnScreen = Object(_collision__WEBPACK_IMPORTED_MODULE_7__[\"checkIfHitting\"])(hero, heroState, monstersOnScreen, ctx);\n    heroState = Object(_collision__WEBPACK_IMPORTED_MODULE_7__[\"checkIfBeingHit\"])(hero, heroState, monstersOnScreen, projectilesOnScreen, ctx); // RENDERS\n\n    Object(_displays__WEBPACK_IMPORTED_MODULE_8__[\"displayHealthBar\"])(ctx, heroState.health);\n    Object(_displays__WEBPACK_IMPORTED_MODULE_8__[\"displayScore\"])(ctx, score);\n    hero.render(stageProgress, heroState);\n    weapon.render(heroState, stageProgress, hero);\n    Object(_monster__WEBPACK_IMPORTED_MODULE_6__[\"renderAllMonsters\"])(ctx, monstersOnScreen, runTime);\n    Object(_monster__WEBPACK_IMPORTED_MODULE_6__[\"renderProjectiles\"])(ctx, projectilesOnScreen); // CHECK IF GAME OVER\n\n    if (heroState.health <= 0) {\n      gameover = true;\n      runTime = 0;\n    } // TEST LOGS\n    // RUN GAME\n\n  } else {\n    _core_js__WEBPACK_IMPORTED_MODULE_1__[\"sortHighScore\"](score, highScore, runTime);\n    Object(_displays__WEBPACK_IMPORTED_MODULE_8__[\"displayGameOver\"])(ctx, runTime, highScore);\n    runTime += 1;\n\n    if (keyPress.restart === true) {\n      gameover = false;\n      runTime = 0;\n      heroState = {\n        health: maxHealth,\n        state: 'normal',\n        action: 'none',\n        direction: 'right',\n        height: 0,\n        hitstun: 0,\n        recovery: 0,\n        damage: 5\n      };\n      score = 0;\n      stageProgress = 0;\n      monstersOnScreen = [];\n      projectilesOnScreen = [];\n      Object(_displays__WEBPACK_IMPORTED_MODULE_8__[\"removeGameover\"])();\n    }\n\n    ;\n  }\n\n  requestAnimationFrame(runGame);\n}\n\nrunGame();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/monster.js":
/*!************************!*\
  !*** ./src/monster.js ***!
  \************************/
/*! exports provided: onScreenHostiles, spawnMonster, updateMonster, spawnProjectiles, updateProjectiles, renderProjectiles, renderAllMonsters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onScreenHostiles\", function() { return onScreenHostiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spawnMonster\", function() { return spawnMonster; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMonster\", function() { return updateMonster; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spawnProjectiles\", function() { return spawnProjectiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProjectiles\", function() { return updateProjectiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjectiles\", function() { return renderProjectiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAllMonsters\", function() { return renderAllMonsters; });\n/* harmony import */ var _monster_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monster_db */ \"./src/monster_db.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar onScreenHostiles = [];\n\nvar Monster =\n/*#__PURE__*/\nfunction () {\n  function Monster(monster) {\n    _classCallCheck(this, Monster);\n\n    this.id = monster.spawnId;\n    this.type = monster.type;\n    this.xPos = monster.xPos;\n    this.yPos = monster.yPos;\n    this.sprite = new Image();\n    this.sprite.src = _monster_db__WEBPACK_IMPORTED_MODULE_0__[\"monsterArray\"][monster.type].src;\n  }\n\n  _createClass(Monster, [{\n    key: \"render\",\n    value: function render(ctx, runTime, toBeRendered) {\n      var animationFrame;\n      var spriteSheetRow;\n      var dx = this.xPos;\n      var dy = this.yPos;\n\n      if (toBeRendered.state === 'hit') {\n        animationFrame = Math.floor(toBeRendered.frame % 60 / 15) * 50;\n        spriteSheetRow = 50;\n        toBeRendered.frame === 1 ? dx += 10 : dx;\n      } else if (toBeRendered.state === 'normal') {\n        animationFrame = Math.floor(runTime % 60 / 15) * 50;\n        spriteSheetRow = 0;\n      } else if (toBeRendered.state === 'attacking') {\n        animationFrame = Math.floor(runTime % 60 / 15) * 50;\n        spriteSheetRow = 150;\n      } else if (toBeRendered.state === 'dying') {\n        animationFrame = Math.floor(runTime % 60 / 15) * 50;\n        spriteSheetRow = 100;\n      }\n\n      ctx.drawImage(this.sprite, animationFrame, spriteSheetRow, // start x, start y\n      50, 50, // start width, start height \n      0 + dx, 0 + dy, // canvas position, x and y \n      50, 50 // canvas display width, height\n      );\n    }\n  }]);\n\n  return Monster;\n}(); // Spawns a new random monster at the given chance\n// Only creates and adds the initial monster, does not change values\n\n\nfunction spawnMonster(onScreen, stageProgress) {\n  var spawnRate = 100;\n  var newScreen = onScreen;\n  var monsterTypes = Object.keys(_monster_db__WEBPACK_IMPORTED_MODULE_0__[\"monsterArray\"]).length;\n  var spawnSpacing = Math.ceil(Math.random() * 100) + 100;\n\n  if (stageProgress > 200 && stageProgress % spawnSpacing === 0 && Math.floor(Math.random() * 100) < spawnRate) {\n    var monsterId = Math.floor(Math.random() * monsterTypes); // let monsterId = 1;\n\n    var monster = _monster_db__WEBPACK_IMPORTED_MODULE_0__[\"monsterArray\"][monsterId];\n    var yPos = monster.yPos;\n\n    if (onScreen.length > 0) {\n      if (onScreen[onScreen.length - 1].spawnId + 200 < stageProgress) {\n        var startFrame;\n        monsterId === 0 ? startFrame = 150 : startFrame = 0;\n        newScreen.push({\n          spawnId: stageProgress,\n          type: monsterId,\n          health: monster.health,\n          xPos: 825,\n          yPos: yPos,\n          state: 'normal',\n          frame: startFrame,\n          attackTime: 60,\n          attackPoint: undefined\n        });\n      }\n    } else {\n      newScreen.push({\n        spawnId: stageProgress,\n        type: monsterId,\n        health: monster.health,\n        xPos: 825,\n        yPos: yPos,\n        state: 'normal',\n        frame: 0,\n        attackTime: 60,\n        attackPoint: undefined\n      });\n    }\n  }\n\n  return newScreen;\n}\nfunction updateMonster(onScreen, keyPress, moveSpeed, heroState) {\n  var newScreen = [];\n\n  if (onScreen.length > 0) {\n    onScreen.map(function (monster) {\n      var properties = _monster_db__WEBPACK_IMPORTED_MODULE_0__[\"monsterArray\"][monster.type];\n      keyPress.rightPressed ? monster.xPos -= moveSpeed : monster.xPos;\n      keyPress.leftPressed ? monster.xPos += moveSpeed : monster.xPos;\n\n      if (monster.state === 'hit') {\n        if (monster.frame > 60) {\n          monster.state = 'normal';\n          monster.frame = 0;\n        } else {\n          monster.frame += 1;\n        }\n      } // Diving Bird\n\n\n      if (monster.type === 1) {\n        if (monster.attackPoint === undefined) {\n          monster.attackPoint = Math.random() * 350 + 400;\n        } else if (monster.state === 'dying' || monster.state === 'hit') {\n          monster.yPos += 10;\n          monster.xPos += 2;\n        } else {\n          if (monster.state === 'normal' && monster.xPos < monster.attackPoint) {\n            monster.state = 'attacking';\n          } else if (monster.state === 'attacking') {\n            var heroX = 200;\n            var heroY = 375 - heroState.height;\n\n            if (monster.attackTime > 0) {\n              var xMove = Math.floor(Math.abs(monster.xPos - heroX) / monster.attackTime);\n              var yMove = Math.floor(Math.abs(monster.yPos - heroY) / monster.attackTime);\n              monster.xPos -= xMove;\n              monster.yPos += yMove;\n              monster.attackTime -= 1;\n            } else {\n              monster.xPos -= 5;\n            }\n          }\n        } // Dropping Rock\n\n      } else if (monster.type === 2) {\n        if (monster.state === 'normal' && monster.xPos < 310) {\n          monster.state = 'attacking';\n        } else if (monster.state !== 'normal') {\n          monster.yPos += 10;\n        } else {\n          monster.xPos -= properties.moveSpeed;\n        } // Bullet Shooter\n\n      } else if (monster.type === 0) {\n        monster.frame += 1;\n\n        if (monster.frame > 180 && monster.state === 'normal') {\n          monster.state = 'attacking';\n          monster.frame = 0;\n        } else if (monster.state === 'attacking' && monster.frame >= 60) {\n          monster.state = 'normal';\n          monster.frame = 0;\n        } // Others\n\n      } else {\n        monster.xPos -= properties.moveSpeed;\n      }\n\n      if (monster.health <= 0) {\n        if (monster.state === 'normal' || monster.state === 'attacking') {\n          if (monster.type === 0) {\n            monster.state = 'dying';\n          } else {\n            monster.state = 'dead';\n          }\n\n          monster.frame = 0;\n        } else if (monster.state === 'dying' && monster.frame > 60) {\n          monster.state = 'dead';\n          monster.frame = 0;\n        }\n\n        monster.frame += 1;\n      } // Remove monsters out of bounds\n\n\n      if (monster.xPos >= -250) {\n        if (monster.state !== 'dead') {\n          newScreen.push(monster);\n        } else if (monster.state === 'dead' && monster.frame < 60) {\n          newScreen.push(monster);\n        }\n      }\n    });\n  }\n\n  return newScreen;\n}\nfunction spawnProjectiles(onScreen, projectiles) {\n  var newProjectiles = projectiles;\n  onScreen.map(function (monster) {\n    if (monster.type === 0 && monster.state === 'attacking' && monster.frame === 0) {\n      var bullet = {\n        type: 'projectile',\n        xPos: monster.xPos,\n        yPos: monster.yPos,\n        frame: 0,\n        radius: 5\n      };\n      newProjectiles.push(bullet);\n    }\n  });\n  return newProjectiles;\n}\nfunction updateProjectiles(projectilesOnScreen, keyPress, moveSpeed) {\n  var newProjectiles = [];\n\n  if (projectilesOnScreen.length > 0) {\n    projectilesOnScreen.map(function (projectile) {\n      keyPress.rightPressed ? projectile.xPos -= moveSpeed : projectile.xPos;\n      keyPress.leftPressed ? projectile.xPos += moveSpeed : projectile.xPos;\n      projectile.xPos -= 3;\n      projectile.frame += 1; // Remove projectiles out of bounds\n\n      if (projectile.xPos >= -100 && projectile.state !== 'dead') {\n        newProjectiles.push(projectile);\n      }\n    });\n  }\n\n  return newProjectiles;\n}\nfunction renderProjectiles(ctx, projectilesOnScreen) {\n  var projectile = new Image();\n  projectile.src = \"assets/critters/projectile.png\";\n  projectilesOnScreen.map(function (bullet) {\n    var startFrame = Math.floor(bullet.frame % 60 / 15) * 50;\n    ctx.drawImage(projectile, startFrame, 0, // start x, start y\n    50, 50, // start width, start height \n    bullet.xPos, bullet.yPos, // canvas position, x and y \n    50, 50 // canvas display width, height\n    );\n  });\n}\nfunction renderAllMonsters(ctx, onScreen, runTime, heroState) {\n  for (var i = 0; i < onScreen.length; i++) {\n    var monster = new Monster(onScreen[i]);\n    monster.render(ctx, runTime, onScreen[i]);\n  }\n}\n\n//# sourceURL=webpack:///./src/monster.js?");

/***/ }),

/***/ "./src/monster_db.js":
/*!***************************!*\
  !*** ./src/monster_db.js ***!
  \***************************/
/*! exports provided: monsterArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"monsterArray\", function() { return monsterArray; });\nvar monsterArray = {\n  0: {\n    name: \"octopus shooting at you\",\n    src: \"assets/critters/hardboiled_octopus.png\",\n    width: 50,\n    height: 50,\n    radius: 25,\n    health: 10,\n    moveSpeed: 0,\n    points: 200,\n    yPos: 375,\n    damage: 5\n  },\n  1: {\n    name: \"bats diving at you\",\n    src: \"assets/critters/smiling_bat.png\",\n    width: 50,\n    height: 50,\n    radius: 25,\n    health: 5,\n    moveSpeed: 3,\n    points: 100,\n    yPos: 50,\n    damage: 10\n  },\n  2: {\n    name: \"slimes falling down\",\n    src: \"assets/critters/slime_drop.png\",\n    width: 50,\n    height: 50,\n    radius: 25,\n    health: 5,\n    moveSpeed: 0,\n    points: 150,\n    yPos: 50,\n    damage: 20\n  }\n};\n\n//# sourceURL=webpack:///./src/monster_db.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/index.scss?");

/***/ })

/******/ });