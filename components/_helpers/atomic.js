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
					// dette er {{ > atom-primary-header }}. 
					Handlebars.registerPartial(pattern + "-" + files[i], template);

					// dette er {{#atom-primary-header obj || '{json:"here"}' }}
					(function(name){
						
						Handlebars.registerHelper(name, function(data, options) {
							data = typeof data === "string" ? JSON.parse(data) : data || {};
							data = _.extend(data, options);
							var template = Handlebars.partials[name];
							if(typeof template === "string"){
								template = Handlebars.compile(template);
							}
							return new Handlebars.SafeString(template(data));
						});

					})(pattern + "-" + files[i]);

					console.log(pattern + "-" + files[i], "registered");
				}
			}
		});

		// dette er {{#atom 'primary-header' obj || '{json:"here"}' }}
		Handlebars.registerHelper(pattern, function(name, context) {
			context = _.extend(config, typeof context === "string" ? JSON.parse(context) : context || {});

			var template = Handlebars.partials[pattern + '-' + name],
				data = _.extend(context, this);

			if(typeof template === "string"){
				template = Handlebars.compile(template);
			}

			return new Handlebars.SafeString(template(data));
		});

		Handlebars.registerHelper(pattern+"-raw", function(name, context) {
			context = _.extend(config, typeof context === "string" ? JSON.parse(context) : context || {});

			var template = Handlebars.partials[pattern + '-' + name],
				data = _.extend(context, this);

			if(typeof template === "string"){
				template = Handlebars.compile(template);
			}

			var html = template(data);
			html = html.replace(new RegExp('<', 'g'), '&lt;').replace(new RegExp('>', 'g'), '&gt;');
			// TODO Fix indenting

			return html;
		});     
	});

};
