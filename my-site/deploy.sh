#!/bin/bash
npm run build \
&& scp -r ./build/* root@167.172.103.158:/etc/www/frontend/ 