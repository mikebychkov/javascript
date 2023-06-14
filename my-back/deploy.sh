#!/bin/bash
./mvnw clean package \
&& scp -P 11033 -r ./target/ root@mike-bychkov.com:~/backend/ \
&& ssh -p 11033 root@mike-bychkov.com 'docker service update --force backend_app'
