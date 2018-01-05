var express = require( 'express' );
var app = express();
var port = process.env.PORT || 8000;

app.get( '/hello', function ( req, res ) {
    res.send( 'Hello' )
} )

app.use( function ( req, res ) {
    res.sendStatus( 404 );
} );

app.listen( port, function () {
    console.log( 'Listening on port', port );
} );