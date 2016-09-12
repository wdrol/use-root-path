
var path = require( 'path' );

module.exports = ( function() {

    process.env.NODE_PATH = path.join( __filename + '../../../../' );

    return require( 'module' )._initPaths();

})();
