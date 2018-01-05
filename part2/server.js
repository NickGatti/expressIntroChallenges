const express = require( 'express' );
const app = express();
const fs = require( 'fs' )
const port = process.env.PORT || 8000;

app.post( '/create/:name/:age', function ( req, res ) {
    res.send( `You posted ${req.params.name} and ${req.params.age}` );
    let output = JSON.parse( fs.readFileSync( './storage.json', 'utf-8' ) )
    output.push( {
        "name": req.params.name,
        "age": req.params.age,
        "id": output.length.toString()
    } )
    fs.writeFileSync( './storage.json', JSON.stringify( output ) )
} );

app.get( '/', function ( req, res ) {
    let output = fs.readFileSync( './storage.json', 'utf-8' )
    res.send( output )
} )

app.get( '/:name', function ( req, res ) {
    let output = JSON.parse( fs.readFileSync( './storage.json', 'utf-8' ) )
    for ( var i = 0; i < output.length; i++ ) {
        if ( req.params.name === output[ i ].name ) {
            res.send( JSON.stringify( output[ i ] ) )
            return;
        }
    }
    res.sendStatus( 404 )
} )

app.use( function ( req, res ) {
    res.sendStatus( 404 );
} );

app.listen( port, function () {
    console.log( 'Listening on port', port );
} );