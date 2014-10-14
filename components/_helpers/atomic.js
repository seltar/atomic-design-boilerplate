/**
 * Handlebars Helper for Pattern Library
 *
 * Copyright (c) 2014 Yonas Sandbæk
 * Licensed under the MIT License (MIT).
 */
'use strict';

var path = require('path');
var fs = require('fs');
var file = require('fs-utils');
var _ = require('lodash');

module.exports.register = function (Handlebars, options, params) {

	options = options || {};

	var config = _.extend(options, options.data || {});

	var patterns = ['atom', 'molecule', 'organism'];

	var baseDir = process.cwd() + "/components";

	patterns.forEach(function(pattern) {
		var inflection = pattern + 's';
		var dir = baseDir + "/" + inflection;


		fs.readdir(dir, function (err, files) {
			if (err) {
				console.log(err);
				return;
			}
			console.log("#",inflection+": ");
			for(var i in files){
				if (!files.hasOwnProperty(i)){
					continue;
				}
				var name = dir+'/'+files[i];
				if (fs.statSync(name).isDirectory()){
					var template = file.readFileSync(name + "/" + files[i] + ".hbs");
					Handlebars.registerPartial(pattern + "-" + files[i], template);

					console.log(pattern + "-" + files[i], "registered");
				}
			}
		});

		Handlebars.registerHelper(pattern, function(name, context) {
			context = _.extend(config, context || {});

			var template = Handlebars.partials[pattern + '-' + name],
				data = _.extend(context, this);

			return new Handlebars.SafeString(template(data));
		});
	});
};