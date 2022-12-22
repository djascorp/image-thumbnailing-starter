# Node-Image-Thumbnailing

A mini server that serves images with the size that the users want.

## Installation

To install dependencies, run:

```bash
npm install
```

## Testing
To run tests, use:

```
npm run test
```

## Running the server
To start the server, use:

````
npm run start
````

## Endpoint
To request a thumbnail of an image, send a GET request to the following endpoint:
````
http://localhost:3000/api/images?filename=IMAGE_NAME&width=IMAGE_WIDTH&height=IMAGE_HEIGHT
````

Replace IMAGE_NAME with the name of the image you want to thumbnail, and IMAGE_WIDTH and IMAGE_HEIGHT with the desired dimensions for the thumbnail. The server will return the thumbnail as a JPEG image.

Note that the requested image must be stored in the server's images directory (**full**). Only `JPEG, PNG, and GIF` images are supported.

