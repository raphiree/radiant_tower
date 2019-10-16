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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Character =\n/*#__PURE__*/\nfunction () {\n  function Character(ctx, fps, displayWidth, displayHeight) {\n    _classCallCheck(this, Character);\n\n    this.ctx = ctx;\n    this.displayWidth = displayWidth;\n    this.displayHeight = displayHeight;\n    this.fps = fps;\n    this.sprite = new Image();\n    this.sprite.src = \"assets/mc/mc-spritesheet-2x.png\";\n  }\n\n  _createClass(Character, [{\n    key: \"render\",\n    value: function render(stageProgress, direction, height) {\n      // Walking left and right\n      var frames = stageProgress % 240;\n      var charPos = Math.floor(frames * this.fps / 240) * this.displayWidth;\n      var spriteRow;\n\n      if (direction === 'right') {\n        spriteRow = 0;\n      } else if (direction === 'left') {\n        spriteRow = 100;\n      } else {\n        spriteRow = 0;\n      }\n\n      this.ctx.drawImage(this.sprite, charPos, spriteRow, this.displayWidth, this.displayHeight, 170, 270 - height, this.displayWidth, this.displayHeight);\n    }\n  }]);\n\n  return Character;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\n//# sourceURL=webpack:///./src/character.js?");

/***/ }),

/***/ "./src/critter.js":
/*!************************!*\
  !*** ./src/critter.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _critter_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./critter_db */ \"./src/critter_db.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Critter = function Critter(ctx) {\n  _classCallCheck(this, Critter);\n\n  this.ctx = ctx;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Critter);\n\n//# sourceURL=webpack:///./src/critter.js?");

/***/ }),

/***/ "./src/critter_db.js":
/*!***************************!*\
  !*** ./src/critter_db.js ***!
  \***************************/
/*! exports provided: critterArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"critterArray\", function() { return critterArray; });\nvar critterArray = {\n  1: {\n    name: \"monster1\",\n    src: \"assets/critters/monster1.png\",\n    width: 50,\n    height: 50,\n    health: 10\n  }\n};\n\n//# sourceURL=webpack:///./src/critter_db.js?");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ \"./src/environment.js\");\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character */ \"./src/character.js\");\n/* harmony import */ var _critter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./critter */ \"./src/critter.js\");\n\n\n\n\nvar canvas = document.getElementById('root-game');\nvar ctx = canvas.getContext(\"2d\");\nvar stageProgress = 0;\nvar moveSpeed = 10;\nvar direction = 'neutral';\nvar maxJumpHeight = 200;\nvar jumpSpeed = 20;\nvar fallSpeed = 10;\nvar height = 0;\nvar jumping = false;\nvar falling = false; // Keyboard Controls\n\nvar leftPressed = false;\nvar rightPressed = false;\nvar upPressed = false;\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\n\nfunction keyDownHandler(e) {\n  if (e.key === \"Right\" || e.key === \"ArrowRight\") {\n    rightPressed = true;\n    direction = \"right\";\n  } else if (e.key === \"Left\" || e.key === \"ArrowLeft\") {\n    leftPressed = true;\n    direction = \"left\";\n  } else if ((e.key === \"Up\" || e.key === \"ArrowUp\") && jumping === false && falling === false) {\n    upPressed = true; // direction = \"neutral\";\n  }\n}\n\nfunction keyUpHandler(e) {\n  if (e.key === \"Right\" || e.key === \"ArrowRight\") {\n    rightPressed = false;\n  } else if (e.key === \"Left\" || e.key === \"ArrowLeft\") {\n    leftPressed = false;\n  } else if (e.key === \"Up\" || e.key === \"ArrowUp\") {\n    upPressed = false;\n  }\n} // context, keyframe per 60 fps, display width, display height\n\n\nvar floortiles = new _environment__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, 4, 800, 200);\nvar mc = new _character__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, 4, 100, 100);\n\nfunction runGame() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height); // move stage progression\n\n  if (rightPressed === true) {\n    stageProgress += moveSpeed;\n  } else if (leftPressed === true) {\n    stageProgress -= moveSpeed;\n  } // Jumping logic - character still jumps infinitely if up is held\n\n\n  if (upPressed === true && jumping === false && falling === false) {\n    jumping = true;\n    falling = true;\n  }\n\n  if (jumping === true) {\n    if (height <= maxJumpHeight) {\n      height += jumpSpeed;\n    } else {\n      jumping = false;\n    }\n  }\n\n  if (falling === true) {\n    if (height <= 0) {\n      height = 0;\n      falling = false;\n    } else {\n      height -= fallSpeed;\n    }\n  } // pass in stage progress to background render\n\n\n  floortiles.render(stageProgress); // render main character\n\n  mc.render(stageProgress, direction, height);\n  requestAnimationFrame(runGame);\n}\n\nrunGame();\n\n//# sourceURL=webpack:///./src/index.js?");

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