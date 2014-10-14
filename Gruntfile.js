// # Gruntfile.js

var path = require('path');

module.exports = function(grunt) {
	'use strict';

	// # Project configuration.
	grunt.initConfig({

		// * Project metadata
		pkg:		grunt.file.readJSON( 'package.json' ),
		settings:	grunt.file.readYAML( 'settings.yml' ),
		site:		grunt.file.readYAML( 'site.yml' ),


		// * Before generating any new files, remove files from previous build.
		clean: {
			site:	[ '<%= settings.dest %>/*.html' ],
			doc:	[ '<%= settings.doc %>/*' ]
		},

		// * Lint JavaScript
		jshint: {
			all: [
				'Gruntfile.js', 
				'<%= settings.scripts %>/**/*.js', 
				'<%= settings.components %>/**/*.js',
				'!<%= settings.scripts %>/vendor/*.js', // exclude vendor scripts
				'!<%= settings.scripts %>/all.min.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// * Compile SASS
		sass: {
			options: {
				sourcemap: true
			},
			site: {
				files: {
					'<%= settings.assets %>/css/main.css': '<%= settings.style %>/main.scss'
				}
			}
		},

		// * Generate SASS import file with all atoms, molecules, organisms and templates
		sassimp: {
			site:{
				files: ['<%= settings.atoms %>/**/*.scss','<%= settings.molecules %>/**/*.scss','<%= settings.organisms %>/**/*.scss', '<%= settings.templates %>/**/*.scss'],
				dest: '<%= settings.style %>/_components.scss'
			}
		},

		// * Build HTML from templates and data
		assemble: {
			options: {
				flatten: true,
				production: false,
				assets: '<%= settings.assets %>',
				postprocess: require('pretty'),

				// > Metadata
				pkg: '<%= pkg %>',
				site: '<%= site %>',
				data: ['<%= settings.data %>'],

				// > Templates
				partials: '<%= settings.partials %>/*.hbs',
				layoutdir: '<%= settings.layouts %>',
				layout: '<%= settings.layout %>',

				// > Extensions
				helpers: '<%= settings.helpers %>'
			},
			site: {
				files: {'<%= settings.dest %>/': ['<%= settings.templates %>/**/*.hbs']}
			}
		},

		// * Watch files
		watch: {
			sass: {
				files: ['<%= settings.style %>/**/*.scss', '<%= settings.components %>/**/*.scss'],
				tasks: ['styles']
			},
			js: {
				files: ['Gruntfile.js', '<%= settings.scripts %>/**/*.js', '<%= settings.components %>/**/*.js', '!<%= settings.scripts %>/all.min.js'],
				tasks: ['scripts']
			},
			hbs: {
				files: ['<%= settings.templates %>/**/*.hbs', '<%= settings.components %>/**/*.hbs'],
				tasks: ['build']
			},
			docs: {
				files: [
					"README.md",
					"TODO.md",
					"Gruntfile.js",

					// > Scripts
					"<%= settings.scripts %>/**/*.js", 
					"<%= settings.atoms %>/**/*.js", 
					"<%= settings.molecules %>/**/*.js", 
					"<%= settings.organisms %>/**/*.js", 
					"<%= settings.templates %>/**/*.js", 

					// > SASS
					"<%= settings.style %>/**/*.scss", 
					"<%= settings.atoms %>/**/*.scss", 
					"<%= settings.molecules %>/**/*.scss", 
					"<%= settings.organisms %>/**/*.scss", 
					"<%= settings.templates %>/**/*.scss",

					// > Templates
					"<%= settings.atoms %>/**/*.hbs", 
					"<%= settings.molecules %>/**/*.hbs", 
					"<%= settings.organisms %>/**/*.hbs", 
					"<%= settings.templates %>/**/*.hbs",
					"<%= settings.layouts %>/**/*.hbs",
					"<%= settings.partials %>/**/*.hbs"
				],
				tasks: ['docs']
			}
		},

		// * Run multiple watch commands
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			site: {
				tasks: ['watch:sass', 'watch:js', 'watch:hbs']
			}
		},

		// * Compile scripts with Require JS
		requirejs: {
			compile: {
				options: {
					baseUrl: "<%= settings.scripts %>",
					mainConfigFile: "<%= settings.scripts %>/config.js",
					name: "main",
					out: "<%= settings.scripts %>/all.min.js"
				}
			}
		},

		// * Generate documentation
		groc: {
			site: [
				"README.md",
				"TODO.md",
				"Gruntfile.js",

				// > Scripts
				"<%= settings.scripts %>/**/*.js", 
				"<%= settings.atoms %>/**/*.js", 
				"<%= settings.molecules %>/**/*.js", 
				"<%= settings.organisms %>/**/*.js", 
				"<%= settings.templates %>/**/*.js", 

				// > SASS
				"<%= settings.style %>/**/*.scss", 
				"<%= settings.atoms %>/**/*.scss", 
				"<%= settings.molecules %>/**/*.scss", 
				"<%= settings.organisms %>/**/*.scss", 
				"<%= settings.templates %>/**/*.scss",

				// > Templates
				"<%= settings.atoms %>/**/*.hbs", 
				"<%= settings.molecules %>/**/*.hbs", 
				"<%= settings.organisms %>/**/*.hbs", 
				"<%= settings.templates %>/**/*.hbs",
				"<%= settings.layouts %>/**/*.hbs",
				"<%= settings.partials %>/**/*.hbs"
			],
			options: {
				"out": "<%= settings.doc %>/"
			}
		}

	});

	// ### Load npm plugins to provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-groc');
	grunt.loadNpmTasks('assemble');

	// ### Custom task to generate import statements of all components
	grunt.registerTask('sassimp', function(target){
		// * Get the options
		var options = grunt.config.get(this.name)[target];
		var files = [];
		// * Get all files matching the glob from options
		grunt.file.expand(options.files).map(function(filepath) {
			// * Get basename
			var ofile = path.basename(filepath),
				file = ofile.replace(".scss","").substr(1);
			// * Push SASS import statement into array
			files.push('@import "' + "../../" + filepath.replace(ofile,file) + '";');
		});
		// * Write results to destination file
		grunt.file.write(options.dest, files.join("\n"));
	});

	// ### Tasks
	// * Build HTML
	grunt.registerTask('build', ['clean:site', 'assemble:site']);
	// * Check for errors in javascript
	grunt.registerTask('scripts', ['jshint', 'requirejs']);
	// * Generate components import and compile SASS
	grunt.registerTask('styles', ['sassimp:site', 'sass:site']);
	// * Generate documentation
	grunt.registerTask('docs', ['clean:doc', 'groc:site']);
	// * Watch for changes and generate documentation
	grunt.registerTask('autodocs', ['watch:docs']);
	// * Watch for changes and automatically run tasks
	grunt.registerTask('automate', ['concurrent:site']);

	// * Default task
	grunt.registerTask('default', ['build', 'scripts', 'styles', 'docs', 'automate']);

};