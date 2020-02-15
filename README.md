# Project 1: Udagram Image Filtering Microservice

## Tasks

### Setup Node Environment

Create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

Created app.get( "/filteredimage/" endpoint in `./src/server.ts`  file.

```typescript
import express, { Router, Request, Response, response }  from 'express';
```

### Deploying to EB

Run `eb init` to create a new application and `eb create` a new environment to deploy image-filter service.

### Testing

http://localhost:8082/filteredimage?image_url=https://clipartart.com/images250_/udacity-logo-clipart-5.jpg