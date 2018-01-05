const express = require( 'express' );
const app = express();
const port = process.env.PORT || 8000;
const path = require( 'path' )


app.get( '/hello', function ( req, res ) {
    res.send( 'Hello' )
} )

app.get( '/verify/:id', function ( req, res ) {
    if ( !req.params.id ) {
        res.sendStatus( 404 );
    } else if ( isNaN( req.params.id ) ) {
        res.sendStatus( 404 );
    } else if ( req.params.id > 13 ) {
        res.sendStatus( 200 );
    } else {
        res.sendStatus( 403 );
    }
} )

app.get( '/', function ( req, res ) {
    res.sendFile( path.join( __dirname, './index.html' ) );
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