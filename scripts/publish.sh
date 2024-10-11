#!/usr/bin/env bash

# Build variables.
export ENVIRONMENT=production

# Deployment variables.
export SERVER_HOST=13.126.106.144
export SERVER_DIR=/var/www/html 
export SERVER_USER=root


# Build app.
echo "Building the production build for the app...."
    npm run build --scripts-prepend-node-path &&
    echo "Production build for the app built!" &&
    echo "Uploading files to web server..." &&
    echo 'put -r out/*' | sftp $SERVER_USER@$SERVER_HOST:$SERVER_DIR &&
    echo "Uploaded files to web server!"    
