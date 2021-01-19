/*
  @license
	Rollup.js v2.36.2
	Tue, 19 Jan 2021 08:05:05 GMT - commit 5d33573cdc2e5e2ad88bc4a921722a036ce68b15


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

require('./shared/rollup.js');
require('fs');
require('path');
require('./shared/mergeOptions.js');
var loadConfigFile_js = require('./shared/loadConfigFile.js');
require('crypto');
require('events');
require('url');



module.exports = loadConfigFile_js.loadAndParseConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
