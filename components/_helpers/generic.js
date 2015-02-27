module.exports.register = function (Handlebars, options, params) {
	'use strict';

	Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
		switch (operator) {
			case '==':
			case '===':
				return (v1 === v2) ? options.fn(this) : options.inverse(this);
			case '<':
				return (v1 < v2) ? options.fn(this) : options.inverse(this);
			case '<=':
				return (v1 <= v2) ? options.fn(this) : options.inverse(this);
			case '>':
				return (v1 > v2) ? options.fn(this) : options.inverse(this);
			case '>=':
				return (v1 >= v2) ? options.fn(this) : options.inverse(this);
			case '&&':
				return (v1 && v2) ? options.fn(this) : options.inverse(this);
			case '||':
				return (v1 || v2) ? options.fn(this) : options.inverse(this);
			default:
				return options.inverse(this);
		}
	});

	Handlebars.registerHelper('eachUpto', function(ary, max, options) {
		if(!ary || ary.length === 0){
			return options.inverse(this);
		}

		var result = [ ];
		for(var i = 0; i < max && i < ary.length; ++i){
			result.push(options.fn(ary[i]));
		}
		return result.join('');
	});
};