webpackHotUpdate(0,{

/***/ 265:
/*!***********************************!*\
  !*** ./src/client/stylesheet.css ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./stylesheet.css */ 266);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 268)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(/*! !./../../~/css-loader?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./stylesheet.css */ 266, function() {
				var newContent = __webpack_require__(/*! !./../../~/css-loader?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./stylesheet.css */ 266);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 266:
/*!************************************************************************************************************************!*\
  !*** ./~/css-loader?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./src/client/stylesheet.css ***!
  \************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 267)();
	// imports
	
	
	// module
	exports.push([module.id, ".stylesheet__button___34BMc {\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color: white;\n    font-size: 15px;\n    border : 1px solid #C0C0C0 ;\n    border-radius: 4px;\n    padding: 10px 5px;\n    width: 15%;\n    \n}\n.stylesheet__center___9V4GT{\n    margin-right: auto;\n    margin-left: auto\n}\n\n.stylesheet__button___34BMc:hover {\n    border : 1px solid black ;\n    border-radius: 4px;\n}\n\n.stylesheet__Names___9YSm9 {\n    padding: 5px;\n    font-size: 25px;\n    width: 40%;\n}\n\n\n.stylesheet__Narrator___2jkvC {\n    padding: 1px;\n    font-size: 20px;\n    width: 18%;\n}\n\n\n.stylesheet__Dead___1Njy1 {\n    background-color: #AE0D11;\n}\n\n.stylesheet__Impact___31dHk {\n    font-family: 'Impact';\n    color : black;\n    font-size : 35px;\n}\n\n.stylesheet__red___XN4b- {\n    color:#AE0D11;\n}", ""]);
	
	// exports
	exports.locals = {
		"button": "stylesheet__button___34BMc",
		"center": "stylesheet__center___9V4GT",
		"Names": "stylesheet__Names___9YSm9",
		"Narrator": "stylesheet__Narrator___2jkvC",
		"Dead": "stylesheet__Dead___1Njy1",
		"Impact": "stylesheet__Impact___31dHk",
		"red": "stylesheet__red___XN4b-"
	};

/***/ },

/***/ 267:
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }

})
//# sourceMappingURL=0.5831365b2975512c59d7.hot-update.js.map