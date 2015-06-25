module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['./public/javascripts/main.js']
        },
        concat: {
            dist: {
                src: ['./public/javascripts/main.js'],
                dest: './public/javascripts/tmp/scripts.js'
            }
        },
        uglify: {
            dist: {
                src: './public/javascripts/tmp/scripts.js',
                dest: './public/scripts.min.js'
            }
        },
        shell: {
            cleanTmp: {
                command: 'rm -f ./public/javascripts/tmp/*'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'shell:cleanTmp']);
};
