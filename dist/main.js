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

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Character =\n/*#__PURE__*/\nfunction () {\n  function Character(ctx) {\n    _classCallCheck(this, Character);\n\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = \"assets/mc/mc-spritesheet-2x.png\";\n  }\n\n  _createClass(Character, [{\n    key: \"render\",\n    value: function render(stageProgress, mcState, direction, height, recovery, hitStun) {\n      // Walking left and right\n      var spriteRow;\n      var frames;\n\n      if (mcState === 'neutral') {\n        frames = stageProgress % 240;\n\n        if (direction === 'right') {\n          spriteRow = 0;\n        } else if (direction === 'left') {\n          spriteRow = 100;\n        } else {\n          spriteRow = 0;\n        }\n      } else if (mcState === 'hit') {\n        frames = hitStun * 4;\n        spriteRow = 200;\n      } else if (mcState === 'attacking') {\n        frames = recovery * 8;\n\n        if (direction === 'left') {\n          spriteRow = 400;\n        } else {\n          spriteRow = 300;\n        }\n      }\n\n      var charPos = Math.floor(frames / 60) * 100;\n      this.ctx.drawImage(this.sprite, charPos, spriteRow, 100, 100, 170, 270 - height, 100, 100);\n    }\n  }]);\n\n  return Character;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\n//# sourceURL=webpack:///./src/character.js?");

/***/ }),

/***/ "./src/collision.js":
/*!**************************!*\
  !*** ./src/collision.js ***!
  \**************************/
/*! exports provided: detectCollision, detectHit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectCollision\", function() { return detectCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectHit\", function() { return detectHit; });\n/* harmony import */ var _equipment_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipment_db */ \"./src/equipment_db.js\");\n\nfunction detectCollision(height, onScreen) {\n  var characterHurtBox = {\n    x1: 180,\n    x2: 224,\n    y2: 370 - height,\n    y1: 308 - height\n  };\n  var modifier = 20;\n  var beingHit = false;\n  onScreen.forEach(function (critter) {\n    if (critter.xPos + critter.size.x1 + modifier < characterHurtBox.x2 && critter.xPos + critter.size.x2 - modifier > characterHurtBox.x1 && critter.yPos + critter.size.y1 + modifier < characterHurtBox.y2 && critter.yPos + critter.size.y2 - modifier > characterHurtBox.y1) {\n      beingHit = true;\n    }\n  });\n  return beingHit;\n}\nfunction detectHit(height, onScreen, equipment_id) {\n  var equip = _equipment_db__WEBPACK_IMPORTED_MODULE_0__[\"equipmentArray\"][equipment_id];\n  var reach = equip.reach;\n  var damage = equip.damage;\n  var characterCenter = {\n    x: 220,\n    y: 320 - height\n  };\n  var inReach = [];\n  onScreen.map(function (critter) {\n    var critterCenter = {\n      x: critter.size.x2 / 2 + critter.xPos,\n      y: critter.size.y2 / 2 + critter.yPos\n    };\n    var dx = critterCenter.x - characterCenter.x;\n    var dy = critterCenter.y - characterCenter.y;\n\n    if (reach + critter.hitbox > Math.sqrt(dx * dx + dy * dy)) {\n      inReach.push([critter.xPos, critter.yPos, damage]);\n    }\n  });\n  return inReach;\n}\n\n//# sourceURL=webpack:///./src/collision.js?");

/***/ }),

/***/ "./src/critters/critter.js":
/*!*********************************!*\
  !*** ./src/critters/critter.js ***!
  \*********************************/
/*! exports provided: generateCritter, checkSpawn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateCritter\", function() { return generateCritter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkSpawn\", function() { return checkSpawn; });\n/* harmony import */ var _critter_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./critter_db */ \"./src/critters/critter_db.js\");\n/* harmony import */ var _stage_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stage/1 */ \"./src/stage/1.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Critter =\n/*#__PURE__*/\nfunction () {\n  function Critter(ctx, critter) {\n    _classCallCheck(this, Critter);\n\n    this.critter = _critter_db__WEBPACK_IMPORTED_MODULE_0__[\"critterArray\"][critter.critterId];\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = _critter_db__WEBPACK_IMPORTED_MODULE_0__[\"critterArray\"][critter.critterId].src;\n    this.xPos = critter.xPos;\n    this.yPos = critter.yPos;\n  }\n\n  _createClass(Critter, [{\n    key: \"render\",\n    value: function render(critter, idleFrames) {\n      var frames;\n      var spriteRow;\n\n      if (critter.critterState === 'neutral') {\n        frames = idleFrames;\n        spriteRow = 0;\n      } else if (critter.critterState === 'hit') {\n        frames = critter.critterHitstun;\n        spriteRow = 100;\n      }\n\n      var spriteSheetXPos = Math.floor(frames / 15) * this.critter.width;\n      this.ctx.drawImage(this.sprite, spriteSheetXPos, spriteRow, 100, 100, this.xPos, this.yPos, 100, 100);\n    }\n  }]);\n\n  return Critter;\n}();\n\nfunction generateCritter(ctx, critter, idleFrames) {\n  var spawn = new Critter(ctx, critter);\n  spawn.render(critter, idleFrames);\n}\nfunction checkSpawn(stageProgress) {\n  if (_stage_1__WEBPACK_IMPORTED_MODULE_1__[\"stage1\"][stageProgress] !== undefined) {\n    return _stage_1__WEBPACK_IMPORTED_MODULE_1__[\"stage1\"][stageProgress];\n  }\n}\n\n//# sourceURL=webpack:///./src/critters/critter.js?");

/***/ }),

/***/ "./src/critters/critter_db.js":
/*!************************************!*\
  !*** ./src/critters/critter_db.js ***!
  \************************************/
/*! exports provided: critterArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"critterArray\", function() { return critterArray; });\nvar critterArray = {\n  0: {\n    name: \"test_monster\",\n    src: \"assets/critters/monster1.png\",\n    width: 100,\n    height: 100,\n    health: 10\n  },\n  1: {\n    name: \"Hardboiled Octopus\",\n    src: \"assets/critters/hardboiled_octopus.png\",\n    width: 100,\n    height: 100,\n    health: 10,\n    hitbox: 50,\n    moveSpeed: 3\n  }\n};\n\n//# sourceURL=webpack:///./src/critters/critter_db.js?");

/***/ }),

/***/ "./src/environment.js":
/*!****************************!*\
  !*** ./src/environment.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Environment =\n/*#__PURE__*/\nfunction () {\n  function Environment(ctx, fps, displayWidth, displayHeight) {\n    _classCallCheck(this, Environment);\n\n    this.ctx = ctx;\n    this.displayWidth = displayWidth;\n    this.displayHeight = displayHeight;\n    this.fps = fps;\n    this.tileImage = new Image();\n    this.tileImage.src = \"assets/bg/tiles.png\";\n  }\n\n  _createClass(Environment, [{\n    key: \"render\",\n    value: function render(stageProgress) {\n      var frames = stageProgress % 60;\n      var tilePos = Math.floor(frames * this.fps / 60) * this.displayWidth;\n      this.ctx.drawImage(this.tileImage, tilePos, 0, this.displayWidth, this.displayHeight, 0, 250, this.displayWidth, this.displayHeight);\n    }\n  }]);\n\n  return Environment;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Environment);\n\n//# sourceURL=webpack:///./src/environment.js?");

/***/ }),

/***/ "./src/equipment.js":
/*!**************************!*\
  !*** ./src/equipment.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Equipment =\n/*#__PURE__*/\nfunction () {\n  function Equipment(ctx) {\n    _classCallCheck(this, Equipment);\n\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = \"assets/equip/rusty_crowbar-2x.png\";\n  }\n\n  _createClass(Equipment, [{\n    key: \"render\",\n    value: function render(stageProgress, mcState, direction, height, recovery, hitStun) {\n      // Walking left and right\n      var spriteRow;\n      var frames;\n\n      if (mcState === 'neutral') {\n        frames = stageProgress % 240;\n\n        if (direction === 'right') {\n          spriteRow = 0;\n        } else if (direction === 'left') {\n          spriteRow = 100;\n        } else {\n          spriteRow = 0;\n        }\n      } else if (mcState === 'hit') {\n        frames = hitStun * 4;\n        spriteRow = 200;\n      } else if (mcState === 'attacking') {\n        frames = recovery * 8;\n\n        if (direction === 'left') {\n          spriteRow = 400;\n        } else {\n          spriteRow = 300;\n        }\n      }\n\n      var charPos = Math.floor(frames / 60) * 100;\n      this.ctx.drawImage(this.sprite, charPos, spriteRow, 100, 100, 170, 270 - height, 100, 100);\n    }\n  }]);\n\n  return Equipment;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Equipment);\n\n//# sourceURL=webpack:///./src/equipment.js?");

/***/ }),

/***/ "./src/equipment_db.js":
/*!*****************************!*\
  !*** ./src/equipment_db.js ***!
  \*****************************/
/*! exports provided: equipmentArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"equipmentArray\", function() { return equipmentArray; });\nvar equipmentArray = {\n  0: {\n    name: \"Rusty Crowbar\",\n    src: \"assets/equip/rusty_crowbar-2x.png\",\n    width: 100,\n    height: 100,\n    attack: 5,\n    reach: 30\n  }\n};\n\n//# sourceURL=webpack:///./src/equipment_db.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ \"./src/environment.js\");\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character */ \"./src/character.js\");\n/* harmony import */ var _critters_critter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./critters/critter */ \"./src/critters/critter.js\");\n/* harmony import */ var _critters_critter_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./critters/critter_db */ \"./src/critters/critter_db.js\");\n/* harmony import */ var _equipment_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipment_db */ \"./src/equipment_db.js\");\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collision */ \"./src/collision.js\");\n/* harmony import */ var _equipment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./equipment */ \"./src/equipment.js\");\n\n\n\n\n\n\n\n\nvar canvas = document.getElementById('root-game');\nvar ctx = canvas.getContext(\"2d\");\nvar idleFrames = 0;\nvar stageProgress = 0;\nvar moveSpeed = 10;\nvar mcState = 'neutral';\nvar direction;\nvar healthBar = '100';\nvar maxJumpHeight = 200;\nvar jumpSpeed = 20;\nvar fallSpeed = 10;\nvar height = 0;\nvar jumping = false;\nvar falling = false;\nvar hitStun = 0; // returning to neutral from being hit\n\nvar recovery = 0; // attack animation & return to neutral timer\n// Monster spawn check\n\nvar spawned = []; // checks to see if a monster spawn has already been triggered\n\nvar onScreen = []; // array of objects that should be on the screen\n// onScreen includes: {\n//   critterId: critterId,\n//   critterState: 'neutral',\n//     xPos: 850,\n//     yPos: 200 + (Math.random() * 100),\n//     size: { \n//       x1: 0, \n//       x2: critterArray[critterId].width, \n//       y1: 0, \n//       y2: critterArray[critterId].height }}\n\nvar beingHit = []; // contains xPos and yPos of the monster being hit\n// Keyboard Controls\n\nvar leftPressed = false;\nvar rightPressed = false;\nvar upPressed = false;\nvar fPressed = false; // keyDownHandler(e);\n// keyUpHandler(e);\n\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\n\nfunction keyDownHandler(e) {\n  if (e.key === \"Right\" || e.key === \"ArrowRight\" || e.key === \"d\") {\n    rightPressed = true;\n\n    if (mcState !== 'hit') {\n      direction = \"right\";\n    }\n  } else if (e.key === \"Left\" || e.key === \"ArrowLeft\" || e.key === \"a\") {\n    leftPressed = true;\n\n    if (mcState !== 'hit') {\n      direction = \"left\";\n    }\n  } else if ((e.key === \"Up\" || e.key === \"ArrowUp\" || e.key === \"w\" || e.key === \" \") && jumping === false && falling === false) {\n    if (mcState !== 'hit') {\n      upPressed = true;\n    }\n  } else if (e.key === \"f\") {\n    if (mcState !== 'hit') {\n      fPressed = true;\n      mcState = 'attacking';\n    }\n  } else {\n    console.log(e.key);\n  }\n}\n\nfunction keyUpHandler(e) {\n  if (e.key === \"Right\" || e.key === \"ArrowRight\" || e.key === \"d\") {\n    rightPressed = false;\n  } else if (e.key === \"Left\" || e.key === \"ArrowLeft\" || e.key === \"a\") {\n    leftPressed = false;\n  } else if (e.key === \"Up\" || e.key === \"ArrowUp\" || e.key === \"w\" || e.key === \" \") {\n    upPressed = false;\n  } else if (e.key === \"f\") {\n    fPressed = false;\n  }\n} // context, keyframe per 60 fps, display width, display height\n\n\nvar floortiles = new _environment__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, 4, 800, 200);\nvar mc = new _character__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\nvar crowbar = new _equipment__WEBPACK_IMPORTED_MODULE_7__[\"default\"](ctx);\n\nfunction runGame() {\n  idleFrames++;\n\n  if (idleFrames > 59) {\n    idleFrames = idleFrames % 60;\n  }\n\n  if (mcState === 'hit') {\n    hitStun++;\n\n    if (hitStun === 1 || hitStun === 29) {\n      stageProgress -= 30;\n      onScreen.map(function (critter) {\n        critter.xPos += 30;\n      });\n    }\n\n    if (hitStun >= 60) {\n      mcState = 'neutral';\n      hitStun = 0;\n    }\n  }\n\n  ctx.clearRect(0, 0, canvas.width, canvas.height); // move stage progression\n\n  if (rightPressed === true) {\n    stageProgress += moveSpeed;\n    onScreen.map(function (critter) {\n      critter.xPos -= _critters_critter_db__WEBPACK_IMPORTED_MODULE_4__[\"critterArray\"][critter.critterId].moveSpeed;\n    });\n  } else if (leftPressed === true & stageProgress - moveSpeed > 0) {\n    stageProgress -= moveSpeed;\n    onScreen.map(function (critter) {\n      critter.xPos += _critters_critter_db__WEBPACK_IMPORTED_MODULE_4__[\"critterArray\"][critter.critterId].moveSpeed;\n    });\n  } // attack state\n\n\n  if (mcState === 'attacking') {\n    recovery++;\n\n    if (recovery >= 30) {\n      mcState = 'neutral';\n      recovery = 0;\n    }\n  } // Remove critters moved past\n\n\n  onScreen.map(function (critter) {\n    if (critter.xPos < -200) {\n      onScreen.shift();\n    }\n  }); // Jumping logic - character still jumps infinitely if up is held\n\n  if (upPressed === true && jumping === false && falling === false) {\n    jumping = true;\n    falling = true;\n  }\n\n  if (jumping === true) {\n    if (height <= maxJumpHeight) {\n      height += jumpSpeed;\n    } else {\n      jumping = false;\n    }\n  }\n\n  if (falling === true) {\n    if (height <= 0) {\n      height = 0;\n      falling = false;\n    } else {\n      height -= fallSpeed;\n    }\n  } // pass in stage progress to background render\n\n\n  floortiles.render(stageProgress); // Checks to see if a monster should spawn\n\n  if (Object(_critters_critter__WEBPACK_IMPORTED_MODULE_3__[\"checkSpawn\"])(stageProgress) !== undefined && !spawned.includes(stageProgress)) {\n    spawned.push(stageProgress);\n    var critterId = Object(_critters_critter__WEBPACK_IMPORTED_MODULE_3__[\"checkSpawn\"])(stageProgress);\n    onScreen.push({\n      critterId: critterId,\n      critterState: 'neutral',\n      critterHealth: 10,\n      critterHitstun: 0,\n      xPos: 850,\n      yPos: 200 + Math.random() * 100,\n      size: {\n        x1: 0,\n        x2: _critters_critter_db__WEBPACK_IMPORTED_MODULE_4__[\"critterArray\"][critterId].width,\n        y1: 0,\n        y2: _critters_critter_db__WEBPACK_IMPORTED_MODULE_4__[\"critterArray\"][critterId].height\n      },\n      hitbox: _critters_critter_db__WEBPACK_IMPORTED_MODULE_4__[\"critterArray\"][critterId].hitbox\n    });\n  } // Checks to see if any monsters are on screen\n\n\n  if (onScreen.length !== 0) {\n    onScreen.map(function (critter) {\n      // Check to see if any of the monsters are being hit\n      if (beingHit.length !== 0) {\n        beingHit.map(function (coord) {\n          if (coord[0] === critter.xPos && coord[1] === critter.yPos && critter.critterState !== 'hit') {\n            critter.critterState = 'hit';\n            critter.critterHealth -= coord[2]; // takes off critter HP\n          }\n        });\n      } // Renders monsters\n\n\n      Object(_critters_critter__WEBPACK_IMPORTED_MODULE_3__[\"generateCritter\"])(ctx, critter, idleFrames);\n\n      if (critter.critterState === 'hit') {\n        critter.critterHitstun++;\n        critter.xPos += 1;\n\n        if (critter.critterHitstun >= 59) {\n          critter.critterHitstun = 0;\n          critter.critterState = 'neutral';\n        }\n      }\n    });\n  }\n\n  ; // render main character\n\n  mc.render(stageProgress, mcState, direction, height, recovery, hitStun);\n  crowbar.render(stageProgress, mcState, direction, height, recovery, hitStun);\n\n  if (Object(_collision__WEBPACK_IMPORTED_MODULE_6__[\"detectCollision\"])(height, onScreen) && mcState !== 'hit') {\n    mcState = 'hit';\n    healthBar -= 10;\n    console.log('-10 HP');\n  }\n\n  ;\n\n  if (mcState === 'attacking') {\n    beingHit = Object(_collision__WEBPACK_IMPORTED_MODULE_6__[\"detectHit\"])(height, onScreen, 0);\n  }\n\n  requestAnimationFrame(runGame);\n}\n\nrunGame();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/index.scss?");

/***/ }),

/***/ "./src/stage/1.js":
/*!************************!*\
  !*** ./src/stage/1.js ***!
  \************************/
/*! exports provided: stage1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stage1\", function() { return stage1; });\nvar stage1 = {\n  500: 1 // 1200: 1,\n  // 1800: 1,\n  // 2400: 1,\n  // 3000: 1,\n\n};\n\n//# sourceURL=webpack:///./src/stage/1.js?");

/***/ })

/******/ });