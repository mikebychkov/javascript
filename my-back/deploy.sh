#!/bin/bash
./mvnw clean package \
&& scp -r ./target/ root@167.172.103.158:~/backend/ \
&& ssh root@167.172.103.158 'cd ~/backend/ && docker-compose down && docker-compose up -d'