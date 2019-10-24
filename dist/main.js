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

/***/ "./src/characters/equipment.js":
/*!*************************************!*\
  !*** ./src/characters/equipment.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _equipment_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipment_db */ \"./src/characters/equipment_db.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Equipment =\n/*#__PURE__*/\nfunction () {\n  function Equipment(ctx) {\n    _classCallCheck(this, Equipment);\n\n    this.ctx = ctx;\n    this.sprite = new Image();\n  }\n\n  _createClass(Equipment, [{\n    key: \"render\",\n    value: function render(gameMode, equipment_id, mcState, stageProgress, mainChar) {\n      this.sprite.src = _equipment_db__WEBPACK_IMPORTED_MODULE_0__[\"equipmentArray\"][equipment_id].src;\n      var spriteSheetRow; // multiples of 100\n\n      var animationFrame;\n\n      if (mcState.state !== 'hit' && mcState.action !== 'attacking') {\n        animationFrame = stageProgress % 240;\n\n        if (mcState.direction === 'left') {\n          spriteSheetRow = 100;\n        } else {\n          spriteSheetRow = 0; // make a new row for neutral state if time allows and edit it here\n        }\n      } else if (mcState.action === 'attacking') {\n        animationFrame = mcState.recovery * 8;\n\n        if (mcState.direction === 'left') {\n          spriteSheetRow = 400;\n        } else {\n          spriteSheetRow = 300;\n        }\n      }\n\n      var spriteSheetXPos = Math.floor(animationFrame / 60) * 100;\n      var horizontalMovement;\n      gameMode.movement === 'free' ? horizontalMovement = stageProgress : horizontalMovement = 0;\n      this.ctx.drawImage(this.sprite, spriteSheetXPos, spriteSheetRow, // start x, start y\n      100, 100, // start width, start height \n      mainChar.xPos + horizontalMovement, mainChar.yPos - mcState.height, // canvas position, x and y \n      100, 100 // canvas display width, height\n      );\n    }\n  }]);\n\n  return Equipment;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Equipment);\n\n//# sourceURL=webpack:///./src/characters/equipment.js?");

/***/ }),

/***/ "./src/characters/equipment_db.js":
/*!****************************************!*\
  !*** ./src/characters/equipment_db.js ***!
  \****************************************/
/*! exports provided: equipmentArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"equipmentArray\", function() { return equipmentArray; });\nvar equipmentArray = {\n  0: {\n    name: \"Rusty Crowbar\",\n    src: \"assets/equip/rusty_crowbar-2x.png\",\n    width: 100,\n    height: 100,\n    attack: 5,\n    reach: 30\n  }\n};\n\n//# sourceURL=webpack:///./src/characters/equipment_db.js?");

/***/ }),

/***/ "./src/characters/mainCharacter.js":
/*!*****************************************!*\
  !*** ./src/characters/mainCharacter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Character =\n/*#__PURE__*/\nfunction () {\n  function Character(ctx) {\n    _classCallCheck(this, Character);\n\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = \"assets/mc/mc-spritesheet-2x.png\";\n    this.xPos = 170;\n    this.yPos = 350;\n    this.spriteFrame = 0;\n    this.fps = 4;\n    this.maxJumpHeight = 200;\n    this.jumpSpeed = 10;\n    this.fallSpeed = 10;\n    this.timer = 0;\n  }\n\n  _createClass(Character, [{\n    key: \"render\",\n    value: function render(gameMode, stageProgress, mcState) {\n      var spriteSheetRow; // multiples of 100\n\n      var animationFrame;\n\n      if (mcState.state !== 'hit' && mcState.action !== 'attacking') {\n        animationFrame = stageProgress % 240;\n\n        if (mcState.direction === 'left') {\n          spriteSheetRow = 100;\n        } else {\n          spriteSheetRow = 0; // make a new row for neutral state if time allows and edit it here\n        }\n      } else if (mcState.action === 'attacking') {\n        animationFrame = mcState.recovery * 8;\n\n        if (mcState.direction === 'left') {\n          spriteSheetRow = 400;\n        } else {\n          spriteSheetRow = 300;\n        }\n      }\n\n      var spriteSheetXPos = Math.floor(animationFrame / 60) * 100;\n      var horizontalMovement = 0;\n\n      if (gameMode.movement === 'free') {\n        stageProgress < 500 ? horizontalMovement = stageProgress : horizontalMovement = 500;\n      }\n\n      if (gameMode.mode !== 'intro') {\n        this.ctx.drawImage(this.sprite, spriteSheetXPos, spriteSheetRow, // start x, start y\n        100, 100, // start width, start height \n        this.xPos + horizontalMovement, this.yPos - mcState.height, // canvas position, x and y \n        100, 100 // canvas display width, height\n        );\n      }\n    }\n  }]);\n\n  return Character;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\n//# sourceURL=webpack:///./src/characters/mainCharacter.js?");

/***/ }),

/***/ "./src/controls/controls.js":
/*!**********************************!*\
  !*** ./src/controls/controls.js ***!
  \**********************************/
/*! exports provided: Controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controls\", function() { return Controls; });\nfunction Controls(stageProgress) {\n  self = this;\n  self.rightPressed = false;\n  self.leftPressed = false;\n  self.upPressed = false;\n  self.fPressed = false;\n  self.mcState = 'normal';\n  self.mcAction = 'none';\n  self.direction = 'neutral';\n  document.addEventListener(\"keydown\", keyDownHandler, false);\n  document.addEventListener(\"keyup\", keyUpHandler, false);\n\n  function keyDownHandler(e) {\n    if (e.key === \"Right\" || e.key === \"ArrowRight\" || e.key === \"d\") {\n      self.rightPressed = true;\n      self.direction = 'right';\n    } else if (e.key === \"Left\" || e.key === \"ArrowLeft\" || e.key === \"a\") {\n      self.leftPressed = true;\n      self.direction = 'left';\n    } else if (e.key === \"Up\" || e.key === \"ArrowUp\" || e.key === \"w\" || e.key === \" \") {\n      self.upPressed = true;\n\n      if (self.mcState === 'normal') {\n        self.mcState = 'jumping';\n      }\n    } else if (e.key === \"f\") {\n      self.mcAction = 'attacking';\n      self.fPressed = true;\n    }\n  }\n\n  function keyUpHandler(e) {\n    if (e.key === \"Right\" || e.key === \"ArrowRight\" || e.key === \"d\") {\n      self.rightPressed = false;\n    } else if (e.key === \"Left\" || e.key === \"ArrowLeft\" || e.key === \"a\") {\n      self.leftPressed = false;\n    } else if (e.key === \"Up\" || e.key === \"ArrowUp\" || e.key === \"w\" || e.key === \" \") {\n      self.upPressed = false;\n      self.mcState = 'normal';\n    } else if (e.key === \"f\") {\n      self.fPressed = false;\n      self.mcAction = 'none';\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/controls/controls.js?");

/***/ }),

/***/ "./src/core/core.js":
/*!**************************!*\
  !*** ./src/core/core.js ***!
  \**************************/
/*! exports provided: updateRunTime, updateStageProgress, updateMCState, updateGameMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateRunTime\", function() { return updateRunTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStageProgress\", function() { return updateStageProgress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMCState\", function() { return updateMCState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateGameMode\", function() { return updateGameMode; });\nfunction updateRunTime(runTime) {\n  var newRunTime;\n  runTime >= 59 ? newRunTime = 0 : newRunTime = runTime + 1;\n  return newRunTime;\n}\nfunction updateStageProgress(keyPress, stageProgress, moveSpeed, gameMode) {\n  var currentStageProgress = stageProgress;\n\n  if (keyPress.leftPressed === true && stageProgress > 0) {\n    currentStageProgress -= moveSpeed;\n  } else if (keyPress.rightPressed === true) {\n    if (gameMode.mode === 'tutorial' && stageProgress < 500) {\n      currentStageProgress += moveSpeed;\n    } else if (gameMode.mode !== 'tutorial') {\n      currentStageProgress += moveSpeed;\n    }\n  }\n\n  return currentStageProgress;\n}\nfunction updateMCState(mainChar, mcState, keyPress) {\n  var newState = mcState;\n  newState.direction = keyPress.direction;\n\n  if (newState.state === 'hit') {\n    console.log('ohno');\n  } else {\n    // Attack Handler\n    if (keyPress.mcAction === 'attacking' && newState.action === 'none') {\n      newState.action = 'attacking';\n      newState.recovery++;\n    } else if (newState.action === 'attacking' && newState.recovery > 0) {\n      newState.recovery++;\n\n      if (newState.recovery >= 30) {\n        newState.action = 'none', newState.recovery = 0;\n      }\n    } // Jumping handler\n\n\n    if (keyPress.mcState === 'jumping' && newState.height === 0) {\n      newState.state = 'jumping';\n      newState.height += mainChar.jumpSpeed;\n    } else if (newState.state === 'jumping' && newState.height > 0) {\n      newState.height + mainChar.jumpSpeed > mainChar.maxJumpHeight ? newState.state = 'falling' : newState.height += mainChar.jumpSpeed;\n    } else if (newState.state === 'falling') {\n      if (newState.height - mainChar.fallSpeed < 0) {\n        newState.height = 0;\n        newState.state = 'normal';\n      } else {\n        newState.height -= mainChar.fallSpeed;\n      }\n    }\n  }\n\n  return newState;\n}\nfunction updateGameMode(gameMode, keyPress) {\n  var newGameMode = gameMode;\n\n  if (gameMode.mode === 'intro' && keyPress.upPressed) {\n    newGameMode.mode = 'main';\n    newGameMode.movement = 'fixed';\n    return newGameMode;\n  } else {\n    return gameMode;\n  }\n}\n;\n\n//# sourceURL=webpack:///./src/core/core.js?");

/***/ }),

/***/ "./src/display/title.js":
/*!******************************!*\
  !*** ./src/display/title.js ***!
  \******************************/
/*! exports provided: displayTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayTitle\", function() { return displayTitle; });\nfunction displayTitle(gameMode, keyPress) {\n  if (document.getElementsByClassName('titleText')[0] === undefined) {\n    var container = document.getElementById('root');\n    var title = document.createElement('p');\n    var subtitle = document.createElement('p');\n    var titleText = document.createTextNode('Radiant Tower');\n    var subtitleText = document.createTextNode('Press \\'Spacebar\\' to begin');\n    container.appendChild(title);\n    title.appendChild(titleText);\n    title.classList.add('titleText');\n    container.appendChild(subtitle);\n    subtitle.appendChild(subtitleText);\n    subtitle.classList.add('subtitleText');\n  }\n\n  if (document.getElementsByClassName('titleText')[0] !== undefined && keyPress.upPressed) {\n    document.getElementsByClassName('titleText')[0].classList.add('hidden');\n    document.getElementsByClassName('subtitleText')[0].classList.add('hidden');\n  }\n}\n;\n\n//# sourceURL=webpack:///./src/display/title.js?");

/***/ }),

/***/ "./src/environment/environment.js":
/*!****************************************!*\
  !*** ./src/environment/environment.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _environment_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment_db */ \"./src/environment/environment_db.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Environment =\n/*#__PURE__*/\nfunction () {\n  function Environment(location, ctx) {\n    _classCallCheck(this, Environment);\n\n    this.ctx = ctx;\n    this.fps = _environment_db__WEBPACK_IMPORTED_MODULE_0__[\"environment\"][location].fps;\n    this.width = _environment_db__WEBPACK_IMPORTED_MODULE_0__[\"environment\"][location].width;\n    this.height = _environment_db__WEBPACK_IMPORTED_MODULE_0__[\"environment\"][location].height;\n    this.background = new Image();\n  }\n\n  _createClass(Environment, [{\n    key: \"render\",\n    value: function render(gameMode, stageProgress) {\n      this.background.src = _environment_db__WEBPACK_IMPORTED_MODULE_0__[\"environment\"][gameMode.mode].src;\n      var frameStart = 0;\n\n      if (_environment_db__WEBPACK_IMPORTED_MODULE_0__[\"environment\"][gameMode.mode].movement === 'scrolling') {\n        // for every 60 movement, background moves 30 pixels\n        frameStart += 0.5 * stageProgress;\n      } else if (_environment_db__WEBPACK_IMPORTED_MODULE_0__[\"environment\"][gameMode.mode].movement === 'fixed') {\n        // for every 60 movement, background cycles 4 frames\n        var currentFrame = stageProgress % 60;\n        frameStart = Math.floor(currentFrame / (60 / this.fps)) * this.width;\n      }\n\n      this.ctx.drawImage(this.background, frameStart, 0, this.width, this.height, 0, 0, this.width, this.height);\n    }\n  }]);\n\n  return Environment;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Environment);\n\n//# sourceURL=webpack:///./src/environment/environment.js?");

/***/ }),

/***/ "./src/environment/environment_db.js":
/*!*******************************************!*\
  !*** ./src/environment/environment_db.js ***!
  \*******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"environment\", function() { return environment; });\nvar environment = {\n  \"intro\": {\n    name: \"intro\",\n    src: \"assets/bg/intro.png\",\n    fps: 4,\n    width: 800,\n    height: 475,\n    movement: 'none',\n    startPos: 0,\n    endPos: 0\n  },\n  \"tutorial\": {\n    src: \"assets/bg/entrance.png\",\n    fps: 4,\n    width: 800,\n    height: 475,\n    movement: 'scrolling',\n    startPos: 0,\n    endPos: 400\n  },\n  \"main\": {\n    src: \"assets/bg/stairs.png\",\n    fps: 4,\n    width: 800,\n    height: 475,\n    movement: 'fixed',\n    startPos: 0,\n    endPos: 0\n  }\n};\n\n//# sourceURL=webpack:///./src/environment/environment_db.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment/environment */ \"./src/environment/environment.js\");\n/* harmony import */ var _characters_mainCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters/mainCharacter */ \"./src/characters/mainCharacter.js\");\n/* harmony import */ var _characters_equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/equipment */ \"./src/characters/equipment.js\");\n/* harmony import */ var _controls_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/controls */ \"./src/controls/controls.js\");\n/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.js */ \"./src/core/core.js\");\n/* harmony import */ var _display_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display/title */ \"./src/display/title.js\");\n/* harmony import */ var _monsters_monster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monsters/monster */ \"./src/monsters/monster.js\");\n\n\n\n\n\n\n\n\nvar rootDoc = document.getElementById('root');\nvar canvas = document.getElementById('game-canvas');\nvar ctx = canvas.getContext(\"2d\"); // BACKGROUND FUNCTIONS\n\nvar keyPress = new _controls_controls__WEBPACK_IMPORTED_MODULE_4__[\"Controls\"](); // Keypress contains: right/left/up/f - Pressed booleans\n// GAMEPLAY VARIABLES\n\nvar runTime = 0;\nvar score = 0; // Current state of the game mode being rendered\n\nvar stageProgress = 0;\nvar moveSpeed = 5;\nvar gameMode = {\n  mode: 'intro',\n  movement: 'free'\n};\nvar currentEnvironment = new _environment_environment__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gameMode.mode, ctx); // Hostile objects being rendered\n\nvar onScreen = []; // Current state of the main character being rendered\n\nvar mainChar = new _characters_mainCharacter__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\nvar equipment = new _characters_equipment__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx);\nvar mcState = {\n  state: 'normal',\n  action: 'none',\n  direction: 'right',\n  height: 0,\n  hitstun: 0,\n  recovery: 0,\n  equipment_id: 0\n};\n\nfunction runMainGame() {\n  // TITLE SCREEN\n  if (gameMode.mode === 'intro') {\n    gameMode = _core_core_js__WEBPACK_IMPORTED_MODULE_5__[\"updateGameMode\"](gameMode, keyPress);\n    Object(_display_title__WEBPACK_IMPORTED_MODULE_6__[\"displayTitle\"])(gameMode, keyPress);\n  } // GAME VALUES UPDATE\n\n\n  runTime = _core_core_js__WEBPACK_IMPORTED_MODULE_5__[\"updateRunTime\"](runTime);\n  stageProgress = _core_core_js__WEBPACK_IMPORTED_MODULE_5__[\"updateStageProgress\"](keyPress, stageProgress, moveSpeed, gameMode); // SCREEN OBJECT VALUES UPDATE\n\n  mcState = _core_core_js__WEBPACK_IMPORTED_MODULE_5__[\"updateMCState\"](mainChar, mcState, keyPress);\n  onScreen = Object(_monsters_monster__WEBPACK_IMPORTED_MODULE_7__[\"spawnMonster\"])(onScreen, stageProgress);\n  onScreen = Object(_monsters_monster__WEBPACK_IMPORTED_MODULE_7__[\"updateMonster\"])(onScreen, keyPress, moveSpeed); // RENDERS\n\n  currentEnvironment.render(gameMode, stageProgress);\n  mainChar.render(gameMode, stageProgress, mcState);\n  equipment.render(gameMode, mcState.equipment_id, mcState, stageProgress, mainChar);\n  Object(_monsters_monster__WEBPACK_IMPORTED_MODULE_7__[\"renderAllhostiles\"])(ctx, onScreen, runTime, keyPress, moveSpeed); // TEST LOGS\n  // RUN GAME\n\n  requestAnimationFrame(runMainGame);\n}\n\nrunMainGame();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/monsters/monster.js":
/*!*********************************!*\
  !*** ./src/monsters/monster.js ***!
  \*********************************/
/*! exports provided: onScreenHostiles, renderAllhostiles, spawnMonster, updateMonster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onScreenHostiles\", function() { return onScreenHostiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAllhostiles\", function() { return renderAllhostiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spawnMonster\", function() { return spawnMonster; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMonster\", function() { return updateMonster; });\n/* harmony import */ var _monster_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monster_db */ \"./src/monsters/monster_db.js\");\n/* harmony import */ var _spawnMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spawnMap */ \"./src/monsters/spawnMap.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar onScreenHostiles = [];\n\nvar Monster =\n/*#__PURE__*/\nfunction () {\n  function Monster(ctx, monster) {\n    _classCallCheck(this, Monster);\n\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.monster = monster;\n    this.xPos = monster.xPos;\n    this.yPos = monster.yPos;\n  }\n\n  _createClass(Monster, [{\n    key: \"render\",\n    value: function render(xPos, runTime, keyPress, moveSpeed) {\n      var animationFrame = Math.floor(runTime % 60 / 15) * 50;\n      this.sprite.src = this.monster.property.src;\n      var dx = xPos;\n      var dy = 0;\n      this.ctx.drawImage(this.sprite, animationFrame, 0, // start x, start y\n      50, 50, // start width, start height \n      650 + dx, 200, // canvas position, x and y \n      50, 50 // canvas display width, height\n      );\n    }\n  }]);\n\n  return Monster;\n}();\n\nfunction renderAllhostiles(ctx, onScreen, runTime, keyPress, moveSpeed) {\n  for (var i = 0; i < onScreen.length; i++) {\n    var hostile = new Monster(ctx, onScreen[i]);\n    hostile.render(onScreen[i].xPos, runTime, keyPress, moveSpeed);\n  }\n}\nfunction spawnMonster(onScreen, stageProgress) {\n  // Spawns a new monster at 25% chance\n  var spawnRate = 100;\n  var newScreen = onScreen;\n\n  if (stageProgress > 200 && stageProgress % 200 === 0 && Math.floor(Math.random() * 100) < spawnRate) {\n    var monsterId = Math.ceil(Math.random() * 1);\n    var monster = _monster_db__WEBPACK_IMPORTED_MODULE_0__[\"monsterArray\"][monsterId];\n\n    if (monster.spawn === \"grounded\") {\n      newScreen.push({\n        spawnId: stageProgress,\n        property: monster,\n        xPos: 650,\n        yPos: 200\n      });\n    }\n  }\n\n  return newScreen;\n}\nfunction updateMonster(onScreen, keyPress, moveSpeed) {\n  var newScreen = [];\n  onScreen.map(function (monster) {\n    if (monster.xPos >= -850) {\n      newScreen.push(monster);\n    }\n  });\n\n  if (newScreen !== undefined) {\n    newScreen.map(function (monster) {\n      if (keyPress.rightPressed) {\n        monster.xPos -= moveSpeed;\n      } else if (keyPress.leftPressed) {\n        monster.xPos += moveSpeed;\n      }\n    });\n  }\n\n  return newScreen;\n}\n\n//# sourceURL=webpack:///./src/monsters/monster.js?");

/***/ }),

/***/ "./src/monsters/monster_db.js":
/*!************************************!*\
  !*** ./src/monsters/monster_db.js ***!
  \************************************/
/*! exports provided: monsterArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"monsterArray\", function() { return monsterArray; });\nvar monsterArray = {\n  0: {\n    name: \"test_monster\",\n    src: \"assets/critters/monster1.png\",\n    width: 100,\n    height: 100,\n    health: 10,\n    score: 1000000\n  },\n  1: {\n    name: \"octopus shooting at you\",\n    src: \"assets/critters/hardboiled_octopus.png\",\n    width: 50,\n    height: 50,\n    radius: 25,\n    health: 10,\n    moveSpeed: 3,\n    score: 100,\n    spawn: 'grounded'\n  },\n  2: {\n    name: \"something falling from the sky\",\n    src: \"assets/critters/placeholder.png\",\n    width: 50,\n    height: 50,\n    radius: 25,\n    health: 10,\n    moveSpeed: 3,\n    score: 100\n  },\n  3: {\n    name: \"a bat diveboming you\",\n    src: \"assets/critters/placeholder.png\",\n    width: 50,\n    height: 50,\n    radius: 25,\n    health: 10,\n    moveSpeed: 3,\n    score: 100\n  },\n  4: {\n    name: \"a flying shark \"\n  }\n};\n\n//# sourceURL=webpack:///./src/monsters/monster_db.js?");

/***/ }),

/***/ "./src/monsters/spawnMap.js":
/*!**********************************!*\
  !*** ./src/monsters/spawnMap.js ***!
  \**********************************/
/*! exports provided: spawnMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spawnMap\", function() { return spawnMap; });\nvar spawnMap = {\n  550: 1,\n  800: 1,\n  1050: 1,\n  1300: 1\n};\n\n//# sourceURL=webpack:///./src/monsters/spawnMap.js?");

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