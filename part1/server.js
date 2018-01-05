var express = require( 'express' );
var app = express();
var port = process.env.PORT || 8000;

app.get( '/hello', function ( req, res ) {
    res.send( 'Hello' )
} )

let createEndpoints = []

app.post( '/create/:id', function ( req, res ) {
    createEndpoints.push( req.params.id )
    res.json( {
        "id": createEndpoints.length,
        "name": createEndpoints[ createEndpoints.length - 1 ]
    } );
} )

app.use( function ( req, res ) {
    res.sendStatus( 404 );
} );

app.listen( port, function () {
    console.log( 'Listening on port', port );
} );