#!/bin/bash
echo ------------------------------------------------------
echo 0.Validate credentials
echo ------------------------------------------------------
REPO_BRANCH=master
BASE_DIR=demo-devops
SERVICE_NAME=$1
SERVICE_PORT=$2

if [[ $SERVICE_PORT ==  "" ]]; then
	echo SERVICE_PORT not found
	exit
fi
if [[ $SERVICE_NAME ==  "" ]]; then
	echo SERVICE_NAME not found
	exit
fi

echo ------------------------------------------------------
echo 1.Starting deploy...
echo ------------------------------------------------------

echo ::Cleaning containers
if [[ "$(docker ps | grep $SERVICE_NAME 2> /dev/null)" != "" ]]; then
	docker stop $SERVICE_NAME
fi

if [[ "$(docker ps -a | grep $SERVICE_NAME 2> /dev/null)" != "" ]]; then
	docker rm $SERVICE_NAME
fi

echo ::Cleaning images
if [[ "$(docker images | grep $SERVICE_NAME 2> /dev/null)" != "" ]]; then
	docker rmi $SERVICE_NAME
fi
echo ::Cleaning directory repo
if [[ "$(ls -a | grep $BASE_DIR 2> /dev/null)" != "" ]]; then
	rm -rf $BASE_DIR
fi

docker image prune -f

echo ------------------------------------------------------
echo 2.Pull to github repository...
echo ------------------------------------------------------

echo git clone https://github.com/soabel/demo-devops.git
git clone https://github.com/soabel/demo-devops.git

echo ------------------------------------------------------
echo 3.Building docker image...
echo ------------------------------------------------------

cd $BASE_DIR/$SERVICE_NAME/ && docker build -t $SERVICE_NAME .
docker images | grep $SERVICE_NAME

echo ------------------------------------------------------
echo 4.Running docker image...
echo ------------------------------------------------------
docker run -d -p $SERVICE_PORT --name $SERVICE_NAME $SERVICE_NAME
docker ps -a | grep $SERVICE_NAME
echo ------------------------------------------------------
echo 5.Show logs...
echo ------------------------------------------------------
docker logs $SERVICE_NAME
echo ------------------------------------------------------
pwd
cd ..
pwd
echo ------------------------------------------------------
echo 7.Cleaning temp files
echo ------------------------------------------------------
docker image prune -f
