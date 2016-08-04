/*!
 * author: bo.cheng
 */
module.exports = function( grunt ) {
    "use strict";
    grunt.initConfig({
        md5fileMapping : {
            one   : {
                folderSrc   : "src" ,
                folderDist  : "dist" ,
                ext         : ".*" ,
                dist        : "mapping.json"
            }
        }
      });

  grunt.loadNpmTasks( "../../" );

  grunt.registerTask( "default" , [ "md5fileMapping" ] );
}