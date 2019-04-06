

module.exports = function(grunt){

//    grunt.registerTask('speak', function(){
//        console.log("I'm speaking");
//    })
//    grunt.registerTask('yell', function(){
//     console.log("I'm YELLING!");
// })
// grunt.registerTask('default', ['speak','yell']);

grunt.initConfig({
    concat:{
        js:{
            src:['js/1.js','js/2.js'],
            dest:'build/script.js',
        },
        css:{
            src:['css/mian.css','css/themes.css'],
            dest:'build/script.js',
        },
    },
});

grunt.loadNpmTasks('grunt-contrib-concat');

};