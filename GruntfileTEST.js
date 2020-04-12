module.exports = function (grunt) {
    
    grunt.initConfig({
        shell: {
            multiple: {
                command: [
                    'npm run build',
                    'cd build',
                    'ls',
                    'cd ..',
                    'cd ./test',
                    'rm -r *',
                    'cd ..'
                ].join('&&')
            }
        }
    });
     
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-scp');

    grunt.registerTask('build', function(){
        console.log("Running build on temninal");


    });
    grunt.registerTask('copy_tablet', function(){
        console.log("Copiando en la Tablet");
    });
    grunt.registerTask('delete_tablet', function(){
        console.log("Borrando en la Tablet");
        grunt.file.delete( "./build" );
    });
};
