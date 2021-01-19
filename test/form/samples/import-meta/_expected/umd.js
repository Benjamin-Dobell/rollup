(function (factory) {
	typeof define === 'function' && define.amd ? define(['module'], factory) :
	factory();
}((function (module) { 'use strict';

	console.log(({ url: (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : typeof module === 'object' ? new URL(module.uri, document.baseURI).href : (document.currentScript && document.currentScript.src || new URL('umd.js', document.baseURI).href)) }));

})));
