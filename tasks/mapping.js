var MD5File = require( "md5-file" ),
    Path    = require( "path" );

module.exports = function( grunt ) {
    grunt.registerMultiTask( "md5fileMapping" , "mapping file" , function() {
        var _self   = this,
            _fileExec   = new RegExp( _self.data.ext),
            _mappingHash= {};
        grunt.file.recurse( Path.join( _self.data.folderSrc ) , function( filePath , folder , d , fileName ) {
            var _hash,
                _fileName,
                _ext,
                _regexp;
            if( filePath.replace( _self.data.folderSrc , "" ).replace( /^[\\|\/]/ , "" ).split( /[\\|\/]/ ).length == 1 && _fileExec.test( fileName ) ) {
                _hash       = MD5File.sync( filePath );
                _ext        = fileName.replace( /.*(\..*)$/ , "$1" );
                _regexp     = new RegExp( "(.*)\\" + _ext );
                _fileName   = fileName.replace( _regexp , "$1." + _hash + _ext );
                _mappingHash[ fileName ]    = _fileName;
                grunt.file.write( Path.join( _self.data.folderDist , _fileName ) , grunt.file.read( filePath ) );
            }
        });
        grunt.file.write( Path.join( _self.data.dist ) , JSON.stringify( _mappingHash , null , "    " ) );
    });
};
