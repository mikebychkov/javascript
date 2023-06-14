#!/bin/bash
npm run build \
&& scp -P 11033 -r ./build/* root@mike-bychkov.com:/etc/www/admin/ 