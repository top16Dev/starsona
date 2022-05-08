#!/usr/bin/env bash
set -e
pwd=`pwd`; cd "${0%/*}"

docker build -f dockerfiles/base-nginx --tag ${REGISTRY}base-nginx${IMAGE_TAG} ..
docker build -f dockerfiles/base-letsencrypt --tag ${REGISTRY}base-letsencrypt${IMAGE_TAG} --build-arg REGISTRY=${REGISTRY} --build-arg IMAGE_TAG=${IMAGE_TAG} ..
docker build -f dockerfiles/base-node --tag ${REGISTRY}base-node${IMAGE_TAG} --build-arg REGISTRY=${REGISTRY} --build-arg IMAGE_TAG=${IMAGE_TAG} ..

cd $pwd
