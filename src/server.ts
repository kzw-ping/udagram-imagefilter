import express, { Router, Request, Response, response }  from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import fs from 'fs';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  app.get( "/filteredimage/", async ( req: Request, res: Response ) => {
    let {image_url} = req.query;
    if(!image_url)
    {
      res.status(400).send('Missing image url')
    }
  //    2. call filterImageFromURL(image_url) to filter the image
  const output = await filterImageFromURL(image_url);
  console.log('New file: '+output);
  
  //    3. send the resulting file in the response
  res.sendFile(output);
  //    4. deletes any files on the server on finish of the response
  const tmpFolder = __dirname + '/util/tmp/';
  const fs = require('fs');
  //retrieving filenames from tmp folder
  fs.readdir(tmpFolder, function (err: any, files: any[]) {
    if (err) {
      console.error(err);
    } else {
      deleteLocalFiles(files);
    }
  })
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1
} );
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();