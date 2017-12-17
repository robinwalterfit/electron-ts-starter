
/**
 *
 */

const shell = require( 'shelljs' )

shell.cp( '-R', 'src/assets/icons', 'dist/assets/icons' )
shell.cp( '-R', 'src/assets/js', 'dist/assets/js' )
shell.cp( '-R', 'src/views', 'dist/views' )
