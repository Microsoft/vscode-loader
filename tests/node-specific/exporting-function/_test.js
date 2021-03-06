var loader = require('../_loader');
var control = require('../_control');

loader.config({
	nodeRequire: require,
	nodeMain: module.filename
});

loader(['a'], function(a) {
	if (typeof a === 'function') {
		control.ok();
	} else {
		control.err('Unexpected dependencies values');
	}
}, function(err) {
	control.err(err);
});