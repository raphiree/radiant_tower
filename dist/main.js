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

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/*! exports provided: Controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controls\", function() { return Controls; });\nfunction Controls(stageProgress) {\n  self = this;\n  self.rightPressed = false;\n  self.leftPressed = false;\n  self.upPressed = false;\n  self.fPressed = false;\n  self.mcState = 'normal';\n  self.mcAction = 'none';\n  self.direction = 'neutral';\n  document.addEventListener(\"keydown\", keyDownHandler, false);\n  document.addEventListener(\"keyup\", keyUpHandler, false);\n\n  function keyDownHandler(e) {\n    if (e.key === \"Right\" || e.key === \"ArrowRight\" || e.key === \"d\") {\n      self.rightPressed = true;\n      self.direction = 'right';\n    } else if (e.key === \"Left\" || e.key === \"ArrowLeft\" || e.key === \"a\") {\n      self.leftPressed = true;\n      self.direction = 'left';\n    } else if (e.key === \"Up\" || e.key === \"ArrowUp\" || e.key === \"w\" || e.key === \" \") {\n      self.upPressed = true;\n\n      if (self.mcState === 'normal') {\n        self.mcState = 'jumping';\n      }\n    } else if (e.key === \"f\") {\n      self.mcAction = 'attacking';\n      self.fPressed = true;\n    }\n  }\n\n  function keyUpHandler(e) {\n    if (e.key === \"Right\" || e.key === \"ArrowRight\" || e.key === \"d\") {\n      self.rightPressed = false;\n    } else if (e.key === \"Left\" || e.key === \"ArrowLeft\" || e.key === \"a\") {\n      self.leftPressed = false;\n    } else if (e.key === \"Up\" || e.key === \"ArrowUp\" || e.key === \"w\" || e.key === \" \") {\n      self.upPressed = false;\n      self.mcState = 'normal';\n    } else if (e.key === \"f\") {\n      self.fPressed = false;\n      self.mcAction = 'none';\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/controls.js?");

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: updateStageProgress, updateMCState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateStageProgress\", function() { return updateStageProgress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMCState\", function() { return updateMCState; });\nfunction updateStageProgress(keyPress, stageProgress, moveSpeed) {\n  var currentStageProgress = stageProgress;\n\n  if (keyPress.leftPressed === true && stageProgress > 0) {\n    currentStageProgress -= moveSpeed;\n  } else if (keyPress.rightPressed === true) {\n    currentStageProgress += moveSpeed;\n  }\n\n  return currentStageProgress;\n}\nfunction updateMCState(mainChar, mcState, keyPress) {\n  var newState = mcState;\n  newState.direction = keyPress.direction;\n\n  if (newState.state === 'hit') {\n    console.log('ohno');\n  } else {\n    // Attack Handler\n    if (keyPress.mcAction === 'attacking' && newState.action === 'none') {\n      newState.action = 'attacking';\n      newState.recovery++;\n    } else if (newState.action === 'attacking' && newState.recovery > 0) {\n      newState.recovery++;\n\n      if (newState.recovery >= 30) {\n        newState.action = 'none', newState.recovery = 0;\n      }\n    } // Jumping handler\n\n\n    if (keyPress.mcState === 'jumping' && newState.height === 0) {\n      newState.state = 'jumping';\n      newState.height += mainChar.jumpSpeed;\n    } else if (newState.state === 'jumping' && newState.height > 0) {\n      newState.height + mainChar.jumpSpeed > mainChar.maxJumpHeight ? newState.state = 'falling' : newState.height += mainChar.jumpSpeed;\n    } else if (newState.state === 'falling') {\n      if (newState.height - mainChar.fallSpeed < 0) {\n        newState.height = 0;\n        newState.state = 'normal';\n      } else {\n        newState.height -= mainChar.fallSpeed;\n      }\n    }\n  }\n\n  return newState;\n}\n\n//# sourceURL=webpack:///./src/core.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Hero =\n/*#__PURE__*/\nfunction () {\n  function Hero(ctx) {\n    _classCallCheck(this, Hero);\n\n    this.ctx = ctx;\n    this.spritesheet = new Image();\n    this.spritesheet.src = \"assets/mc/mc-spritesheet-2x.png\";\n    this.xPos = 170;\n    this.yPos = 350;\n    this.spriteFrame = 0;\n    this.fps = 4;\n    this.maxJumpHeight = 200;\n    this.jumpSpeed = 10;\n    this.fallSpeed = 10;\n    this.timer = 0;\n  }\n\n  _createClass(Hero, [{\n    key: \"render\",\n    value: function render(stageProgress, heroState) {\n      var spriteSheetRow; // multiples of 100\n\n      var animationFrame;\n\n      if (heroState.state !== 'hit' && heroState.action !== 'attacking') {\n        animationFrame = stageProgress % 240;\n\n        if (heroState.direction === 'left') {\n          spriteSheetRow = 100;\n        } else {\n          spriteSheetRow = 0; // make a new row for neutral state if time allows and edit it here\n        }\n      } else if (heroState.action === 'attacking') {\n        animationFrame = heroState.recovery * 8;\n\n        if (heroState.direction === 'left') {\n          spriteSheetRow = 400;\n        } else {\n          spriteSheetRow = 300;\n        }\n      }\n\n      var spriteSheetXPos = Math.floor(animationFrame / 60) * 100;\n      var horizontalMovement = 0;\n      this.ctx.drawImage(this.spritesheet, spriteSheetXPos, spriteSheetRow, // start x, start y\n      100, 100, // start width, start height \n      this.xPos + horizontalMovement, this.yPos - heroState.height, // canvas position, x and y \n      100, 100 // canvas display width, height\n      );\n    }\n  }]);\n\n  return Hero;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\n//# sourceURL=webpack:///./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ \"./src/core.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ \"./src/controls.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n\n\n\n // import Environment from './environment';\n// import Equipment from './equipment';\n// import { spawnMonster, updateMonster, monstersOnScreens } from './monster';\n// GAMEPLAY VARIABLES\n\nvar runTime = 0;\nvar score = 0;\nvar maxHealth = 100; // BACKGROUND FUNCTIONS\n\nvar keyPress = new _controls__WEBPACK_IMPORTED_MODULE_2__[\"Controls\"](); // keypress returns: \n//  rightPressed = true/false\n//  leftPressed = true/false\n//  upPressed = true/false\n//  fPressed = true/false\n//  mcState =  normal/jumping\n//  mcAction = none/attacking\n//  direction = neutral/right/left\n// Current state of the game mode being rendered\n\nvar gameover = false;\nvar stageProgress = 0;\nvar moveSpeed = 5; // SETUP\n\nvar canvas = document.getElementById('game-canvas');\nvar ctx = canvas.getContext(\"2d\"); // BACKGROUND\n// let currentEnvironment = new Environment(ctx);\n// Monsters objects being rendered\n\nvar monstersOnScreen = [];\nvar projectilesOnScreen = []; // Current state of the main character being rendered\n\nvar hero = new _hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx);\nvar heroState = {\n  state: 'normal',\n  action: 'none',\n  direction: 'right',\n  height: 0,\n  hitstun: 0,\n  recovery: 0\n};\n\nfunction runGame() {\n  // GAME VALUES UPDATE\n  runTime += 1;\n  stageProgress = _core_js__WEBPACK_IMPORTED_MODULE_1__[\"updateStageProgress\"](keyPress, stageProgress, moveSpeed); // SCREEN OBJECT VALUES UPDATE\n\n  heroState = _core_js__WEBPACK_IMPORTED_MODULE_1__[\"updateMCState\"](hero, heroState, keyPress); // RENDERS\n\n  hero.render(stageProgress, heroState); // TEST LOGS\n  // RUN GAME\n\n  requestAnimationFrame(runGame);\n}\n\nrunGame();\n\n//# sourceURL=webpack:///./src/index.js?");

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