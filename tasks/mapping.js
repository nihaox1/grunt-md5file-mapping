var MD5File = require( "md5-file" ),
    Path    = require( "path" );
 
// md5File('LICENSE.md', (err, hash) => {
//   if (err) throw err
 
//   console.log(`The MD5 sum of LICENSE.md is: ${hash}`)
// })
 
// /* Sync usage */
// const hash = md5File.sync('LICENSE.md')
// console.log(`The MD5 sum of LICENSE.md is: ${hash}`)

module.exports = function( grunt ) {
    grunt.registerMultiTask( "md5fileMapping" , "mapping file" , function() {
        var _self   = this,
            _fileExec   = new RegExp( _self.data.ext),
            _mappingHash= {};
        grunt.file.recurse( Path.join( _self.data.folderSrc ) , function( filePath , folder , d , fileName ) {
            var _hash,
                _fileName;
            if( _fileExec.test( fileName ) ) {
                _hash    = MD5File.sync( filePath );
                _fileName= fileName.replace( /(.*)\.js/ , "$1." + _hash + ".js" );
                _mappingHash[ fileName ]    = _fileName;
                grunt.file.write( Path.join( _self.data.folderDist , _fileName ) , grunt.file.read( filePath ) );
            }
        });
        grunt.file.write( Path.join( _self.data.dist ) , JSON.stringify( _mappingHash ) );
    });
};
