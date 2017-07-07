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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Dom = __webpack_require__(1);

window.$l = arg => {
  let NodeList = Array.prototype.slice.call(document.querySelectorAll(arg));
  if (arg instanceof HTMLElement){
    const domnode = new Dom([arg]);
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(Element) {
    this.elements = Element;
  }

  html (string) {
    if (string) {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i] = string;
      }
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty () {
    // this.Elements = "";
    this.html = "";
  }

  append (children) {
    if (this.elements.length === 0) return;
    if (typeof children === 'object' && !(children instanceof DOMNodeCollection)) {
      children = $l(children);
    }

    if (typeof children === "string") {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML += children;
      }
    } else if (children instanceof DOMNodeCollection) {
      for (var j = 0; j < this.elements.length; j++) {
        this.elements[j].appendChild(this.elements[j].cloneNode(true));
      }
    }
    this.innerHTML.append(this.elements.outerHTML);
  }

  attr () {
    let attrs = this.elements.attributes;
  }

  addClass () {
    
  }

  removeClass () {

  }

  children () {
    let children = this.elements.children;
  }

  parent() {
    let parents = this.elements.parents;
  }

  find(selectors) {
    let elementList = this.elements.querySelectorAll(selectors);
  }

  remove () {
    this.elements.remove();
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);