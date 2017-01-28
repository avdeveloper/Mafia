webpackHotUpdate(0,{

/***/ 265:
/*!***********************************!*\
  !*** ./src/client/stylesheet.css ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./stylesheet.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 268)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(/*! !./../../~/css-loader?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./stylesheet.css */ 266, function() {
				var newContent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[name]__[local]___[hash:base64:5]\"}!./stylesheet.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

})
//# sourceMappingURL=0.79aef7efb1987ef4dc0f.hot-update.js.map