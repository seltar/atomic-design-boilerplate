/**
 * Handlebars Helper for Pattern Library
 *
 * Copyright (c) 2014 Yonas Sandbæk
 * Licensed under the MIT License (MIT).
 */
'use strict';

module.exports.register = function (Handlebars, options, params) {

	Handlebars.registerHelper('safe', function (value, safeValue) {
		var out = value || safeValue;
		return new Handlebars.SafeString(out);
	});

};