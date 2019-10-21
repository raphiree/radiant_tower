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

/***/ "./src/characters/mainCharacter.js":
/*!*****************************************!*\
  !*** ./src/characters/mainCharacter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Character =\n/*#__PURE__*/\nfunction () {\n  function Character(ctx) {\n    _classCallCheck(this, Character);\n\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = \"assets/mc/mc-spritesheet-2x.png\";\n    this.xPos = 170;\n    this.yPos = 350;\n    this.spriteFrame = 0;\n    this.fps = 4;\n    this.maxJumpHeight = 200;\n    this.jumpSpeed = 10;\n    this.fallSpeed = 10;\n    this.timer = 0;\n  }\n\n  _createClass(Character, [{\n    key: \"render\",\n    value: function render(stageProgress, mcState) {\n      var spriteSheetRow; // multiples of 100\n\n      var animationFrame = Math.floor(stageProgress % 240 / (240 / this.fps)) * 100;\n\n      if (mcState.state !== 'hit') {\n        if (mcState.direction === 'left') {\n          spriteSheetRow = 100;\n        } else {\n          spriteSheetRow = 0; // make a new row for neutral state if time allows and edit it here\n        }\n      }\n\n      this.ctx.drawImage(this.sprite, animationFrame, spriteSheetRow, // start x, start y\n      100, 100, // start width, start height \n      this.xPos, this.yPos - mcState.height, // canvas position, x and y \n      100, 100 // canvas display width, height\n      );\n    }\n  }]);\n\n  return Character;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\n//# sourceURL=webpack:///./src/characters/mainCharacter.js?");

/***/ }),

/***/ "./src/controls/controls.js":
/*!**********************************!*\
  !*** ./src/controls/controls.js ***!
  \**********************************/
/*! exports provided: Controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controls\", function() { return Controls; });\nfunction Controls(stageProgress) {\n  self = this;\n  self.rightPressed = false;\n  self.leftPressed = false;\n  self.upPressed = false;\n  self.fPressed = false;\n  self.mcState = 'normal';\n  self.direction = 'neutral';\n  document.addEventListener(\"keydown\", keyDownHandler, false);\n  document.addEventListener(\"keyup\", keyUpHandler, false);\n\n  function keyDownHandler(e) {\n    if (e.key === \"Right\" || e.key === \"ArrowRight\" || e.key === \"d\") {\n      self.rightPressed = true;\n      self.direction = 'right';\n    } else if (e.key === \"Left\" || e.key === \"ArrowLeft\" || e.key === \"a\") {\n      self.leftPressed = true;\n      self.direction = 'left';\n    } else if (e.key === \"Up\" || e.key === \"ArrowUp\" || e.key === \"w\" || e.key === \" \") {\n      self.upPressed = true;\n\n      if (self.mcState === 'normal') {\n        self.mcState = 'jumping';\n      }\n    } else if (e.key === \"f\") {\n      self.fPressed = true;\n      self.mcState = 'attacking';\n    }\n  }\n\n  function keyUpHandler(e) {\n    if (e.key === \"Right\" || e.key === \"ArrowRight\" || e.key === \"d\") {\n      self.rightPressed = false;\n    } else if (e.key === \"Left\" || e.key === \"ArrowLeft\" || e.key === \"a\") {\n      self.leftPressed = false;\n    } else if (e.key === \"Up\" || e.key === \"ArrowUp\" || e.key === \"w\" || e.key === \" \") {\n      self.upPressed = false;\n      self.mcState = 'normal';\n    } else if (e.key === \"f\") {\n      self.fPressed = false;\n      self.mcState = 'normal';\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/controls/controls.js?");

/***/ }),

/***/ "./src/core/core.js":
/*!**************************!*\
  !*** ./src/core/core.js ***!
  \**************************/
/*! exports provided: updateRunTime, updateStageProgress, updateMCState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateRunTime\", function() { return updateRunTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStageProgress\", function() { return updateStageProgress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMCState\", function() { return updateMCState; });\nfunction updateRunTime(runTime) {\n  var newRunTime;\n  runTime >= 59 ? newRunTime = 0 : newRunTime = runTime + 1;\n  return newRunTime;\n}\nfunction updateStageProgress(keyPress, stageProgress, moveSpeed) {\n  var currentStageProgress = stageProgress;\n\n  if (keyPress.leftPressed === true && stageProgress > 0) {\n    currentStageProgress -= moveSpeed;\n  } else if (keyPress.rightPressed === true) {\n    currentStageProgress += moveSpeed;\n  }\n\n  return currentStageProgress;\n}\nfunction updateMCState(mainChar, mcState, keyPress) {\n  var newState = mcState;\n  newState.direction = keyPress.direction;\n\n  if (mcState === 'hit') {\n    console.log('ohno');\n  } else {\n    // Jumping handler\n    if (keyPress.mcState === 'jumping' && newState.height === 0) {\n      newState.state = 'jumping';\n      newState.height += mainChar.jumpSpeed;\n    } else if (newState.state === 'jumping' && newState.height > 0) {\n      newState.height + mainChar.jumpSpeed > mainChar.maxJumpHeight ? newState.state = 'falling' : newState.height += mainChar.jumpSpeed;\n    } else if (newState.state === 'falling') {\n      if (newState.height - mainChar.fallSpeed < 0) {\n        newState.height = 0;\n        newState.state = 'normal';\n      } else {\n        newState.height -= mainChar.fallSpeed;\n      }\n    } // if (keyPress.mcState === 'attacking') {\n    //   newState.state = 'attacking';\n    // }\n\n  }\n\n  return newState;\n}\n\n//# sourceURL=webpack:///./src/core/core.js?");

/***/ }),

/***/ "./src/environment/environment.js":
/*!****************************************!*\
  !*** ./src/environment/environment.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _environment_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment_db */ \"./src/environment/environment_db.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Environment =\n/*#__PURE__*/\nfunction () {\n  function Environment(location, ctx) {\n    _classCallCheck(this, Environment);\n\n    this.ctx = ctx;\n    this.fps = _environment_db__WEBPACK_IMPORTED_MODULE_0__[\"environment\"][location].fps;\n    this.width = _environment_db__WEBPACK_IMPORTED_MODULE_0__[\"environment\"][location].width;\n    this.height = _environment_db__WEBPACK_IMPORTED_MODULE_0__[\"environment\"][location].height;\n    this.background = new Image();\n    this.background.src = _environment_db__WEBPACK_IMPORTED_MODULE_0__[\"environment\"][location].src;\n  }\n\n  _createClass(Environment, [{\n    key: \"render\",\n    value: function render(stageProgress) {\n      // for every 60 movement, background cycles 4 frames\n      var currentFrame = stageProgress % 60;\n      var frameStart = Math.floor(currentFrame / (60 / this.fps)) * this.width; // console.log(this.src);\n\n      this.ctx.drawImage(this.background, frameStart, 0, this.width, this.height, 0, 0, this.width, this.height);\n    }\n  }]);\n\n  return Environment;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Environment);\n\n//# sourceURL=webpack:///./src/environment/environment.js?");

/***/ }),

/***/ "./src/environment/environment_db.js":
/*!*******************************************!*\
  !*** ./src/environment/environment_db.js ***!
  \*******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"environment\", function() { return environment; });\nvar environment = {\n  \"tutorial\": {\n    src: \"assets/bg/tiles.png\",\n    fps: 4,\n    width: 800,\n    height: 475\n  },\n  \"main\": {\n    src: \"assets/bg/stairs.png\",\n    fps: 4,\n    width: 800,\n    height: 475\n  }\n};\n\n//# sourceURL=webpack:///./src/environment/environment_db.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment/environment */ \"./src/environment/environment.js\");\n/* harmony import */ var _characters_mainCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters/mainCharacter */ \"./src/characters/mainCharacter.js\");\n/* harmony import */ var _controls_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/controls */ \"./src/controls/controls.js\");\n/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.js */ \"./src/core/core.js\");\n\n\n\n\n\nvar rootDoc = document.getElementById('root');\nvar canvas = document.getElementById('game-canvas');\nvar ctx = canvas.getContext(\"2d\"); // BACKGROUND FUNCTIONS\n\nvar keyPress = new _controls_controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"](); // Keypress contains: right/left/up/f - Pressed booleans\n// GAMEPLAY VARIABLES\n\nvar runTime = 0;\nvar stageProgress = 0;\nvar moveSpeed = 5;\nvar currentEnvironment = new _environment_environment__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('main', ctx);\nvar mainChar = new _characters_mainCharacter__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\nvar mcState = {\n  state: 'normal',\n  direction: 'right',\n  height: 0\n};\n\nfunction runGame() {\n  // GAME VALUES UPDATE\n  runTime = Object(_core_core_js__WEBPACK_IMPORTED_MODULE_4__[\"updateRunTime\"])(runTime);\n  stageProgress = Object(_core_core_js__WEBPACK_IMPORTED_MODULE_4__[\"updateStageProgress\"])(keyPress, stageProgress, moveSpeed);\n  mcState = Object(_core_core_js__WEBPACK_IMPORTED_MODULE_4__[\"updateMCState\"])(mainChar, mcState, keyPress); // RENDERS\n\n  currentEnvironment.render(stageProgress);\n  mainChar.render(stageProgress, mcState); // SCREEN OBJECT VALUES UPDATE\n  // TEST LOGS\n  // console.log(mcState);\n  // RUN GAME\n\n  requestAnimationFrame(runGame);\n}\n\nrunGame();\n\n//# sourceURL=webpack:///./src/index.js?");

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