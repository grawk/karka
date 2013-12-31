'use strict';
var templateResolver = require('./lib/templateResolver');


function isExpress(obj) {
    return typeof obj === 'function' && obj.handle && obj.set;
}

exports.create = function (app, config) {
	console.info('entered into karka create, app:', app, ' config:', config);

	if (!isExpress(app)) {
        config = app;
        app = undefined;
    }

	return Object.create({
        templateResolver: templateResolver
    });
};


