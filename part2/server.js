const express = require( 'express' );
const app = express();
const fs = require( 'fs' )
const port = process.env.PORT || 8000;

app.post( '/create/:name/:age', function ( req, res ) {
    res.send( `You posted ${req.params.name} and ${req.params.age}` );
    let output = fs.readFileSync( './storage.json', 'utf-8' )
    output += JSON.stringify( {
        "name": req.params.name,
        "age": req.params.age
    } )
    fs.writeFileSync( './storage.json', output )
} );

app.use( function ( req, res ) {
    res.sendStatus( 404 );
} );

app.listen( port, function () {
    console.log( 'Listening on port', port );
} );