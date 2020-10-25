module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			production: {
				src: grunt.file.readJSON('files.json').js,
				dest: 'public/app.js',
			},
			templates: {
				options: {
					separator: '\n\n',
				},
				src: grunt.file.readJSON('files.json').templates,
				dest: 'public/templates.html'
			},
			css: {
				options: {
					separator: '\n\n',
				},
				src: grunt.file.readJSON('files.json').css,
				dest: 'public/app.css'
			}
		},
		uglify: {
			target: {
				files: {

				}
			}
		},
		watch: {
			files: ['js/**/*'],
			tasks: ['concat'],
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat']);
	grunt.registerTask('min',     ['concat', 'uglify']);
};
