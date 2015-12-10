/**
 * Created by Mike on 12/10/2015.
 */
module.exports = function(grunt) {
// Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Because of keeping the dependency order of library, hard-code the list of 3rd vendors.
    // Other better solution is to use WebPack.
    var vendors = [
        'jquery.min.js',
        'pdf.js',
        'angular.min.js',
        'angular-route.min.js',
        'angular-cookies.min.js',
        'angular-block-ui.min.js',
        'angular-sanitize.min.js',
        'angular-ui-select.min.js',
        'jquery-ui.min.js',
        'angular-ui-grid.min.js',
        'angular-local-storage.min.js',
    ].map(function (path) {
        return 'tmp/vendors/' + path;
    });

    // Configurable paths
    var config = {
        app: 'app'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build', 'tmp'],
        sass: {
            app: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/sass',
                    src: ['*.scss'],
                    dest: 'app/assets/stylesheets',
                    ext: '.css'
                }]
            },
            options: {
                sourceMap: true,
                outputStyle: 'nested',
                imagePath: "../"
            }
        },
        watch: {
            sass: {
                files: ['app/assets/sass/{,*/}*.{scss,sass}'],
                tasks: ['sass']
            },
            options: {
                // Sets livereload to true for livereload to work
                livereload: true,
                spawn: false
            }
        },
        concat: {
            web: {
                files: [
                    {
                        dest: 'tmp/app.js',
                        src: [
                            'app/**/*.js',
                            '!app/develop_testing/**/*.js'
                        ]
                    },
                    {
                        dest: 'app/assets/stylesheets/main.css',
                        src: [
                            'bower_components/jquery-ui/themes/base/jquery-ui.css',
                            'app/assets/stylesheets/main.css'
                        ]
                    },
                    {
                        dest: 'tmp/min/vendors.min.js',
                        src: vendors
                    }
                ]
            }
        },
        uglify: {
            web: {
                files: [{
                    flatten: true,
                    expand: true,
                    //src: ['tmp/**/*.js','!app.js'],
                    src: ['tmp/app.js'],
                    dest: 'build/js',
                    ext: '.min.js'
                }],
                options: {
                    mangle: false
                }
            }
        },
        cssmin: {
            web: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'app/assets/stylesheets',
                    src: ['*.css', '!*.min.css'],
                    dest: 'build/assets/css',
                    ext: '.min.css'
                }]
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

       copy: {
           web:{
               files:[
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['assets/fonts/*.*'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       //cwd: 'tmp/min', //use uglify
                       cwd: 'tmp',
                       src: ['min/*.js','*.js'],
                       dest: 'build/assets/js'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['assets/images/*.*'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['components/**/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['leader-board/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['login/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['change-password/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['forgot-password/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['no-enroll/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['enroll/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['setup-enroll/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['dashboard/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['edit-corporation/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['corporation/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['invitation/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['corporation-profile/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['user-management/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['team-management/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['team-management-create/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['user-profile/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['view-user-profile/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['enroll-profile/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['team-profile/*.html'],
                       dest: 'build'
                   },
                   {
                       expand: true,
                       flatten: false,
                       cwd: 'app',
                       src: ['billing/*.html'],
                       dest: 'build'
                   }
               ]
           }
       },
        usemin: {
            html: ['build/index.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask("prepareModules", "Finds and prepares modules for concatenation.", function(src, dest) {

        // get all module directories
        grunt.file.expand(src).forEach(function (dir) {

            // get the module name from the directory name
            var dirName = dir.substr(dir.lastIndexOf('/')+1);

            // get the current concat object from initConfig
            var concat = grunt.config.get('concat') || {};

            // create a subtask for each module, find all src files
            // and combine into a single js file per module
            concat[dirName] = {
                src: [dir + '/**/*min.js', '!'+ dir + '/**/sizzle.min.js'],
                dest: dest + dirName + '.min.js'
            };

            // add module subtasks to the concat task in initConfig
            grunt.config.set('concat', concat);
        });
        grunt.task.run('concat');
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([
            'build',
            'connect:livereload',
            'watch'
        ]);
    });

    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('build', [
        'clean',
        'prepareModules:bower_components/*:tmp/vendors/',
        'sass',
        //'watch',
        'concat:web',
        'copy:web',
        //'uglify:web', //comment for dev debug
        'cssmin:web',
        //'imagemin',
        'usemin']);
};