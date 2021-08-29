module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    require('time-grunt')(grunt);
    
    grunt.initConfig({
        uglify: {
            js: {
                options: {
                    sourceMap: true,
                    sourceMapName: "./dist/SplitOnSteroids.map.js"
                  },
                files:[{
                    src: "./src/split.js",
                    dest: "./dist/SplitOnSteroids.min.js"
                }]
            },
        },
    })

    grunt.registerTask("compile", ["uglify"]);
}