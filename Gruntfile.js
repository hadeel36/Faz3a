module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ';'
			},
			app: {
				src: ['myIonic/www/**/*.js'],
				dest: 'app/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files:{
					'dist/<%= pkg.name %>.min.js': ['<%= concat.app.dest %>']
				}
			}
		},

		jshint: {
			files: ['Gruntfile.js', 'myIonic/www/**/*.js', './*.js'],
			options: {
				force: 'true',
				jshintrc: 'jshintrc'
			}
		},

		watch: {
			scripts: {
				files: ['myIonic/www/**/*.js'],
				tasks: ['concat',
						'uglify']
			},
			css: {
				files: ['myIonic/www/**/*.css'],
				tasks: ['cssmin']
			}

		}
	});
	
	grunt.task.registerTask('concat', ['concat']);
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//grunt.task.registerTask('default' , ['jshint','concat','uglify','watch']);
}