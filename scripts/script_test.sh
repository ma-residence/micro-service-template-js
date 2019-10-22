#!/bin/bash

set -e

echo '####### Docker images #######'
cp tests/docker-compose.yml .
docker-compose pull
docker-compose up -d --remove-orphans
docker-compose ps

make test-travis
