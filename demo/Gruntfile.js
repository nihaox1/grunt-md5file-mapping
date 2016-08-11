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
            } ,
            two   : {
                folderSrc   : "src" ,
                folderDist  : "dist" ,
                ext         : "\.html" ,
                dist        : "mapping.html.json"
            }
        }
      });

  grunt.loadNpmTasks( "../../" );

  grunt.registerTask( "default" , [ "md5fileMapping" ] );
}