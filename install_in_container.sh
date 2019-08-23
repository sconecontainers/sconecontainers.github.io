#!/bin/bash
#
# installs scones using the scone deb package
#
# (C) Christof Fetzer, 2017

set -x -e

KEYNAME="96B9BADB"
REPO="deb https://sconecontainers.github.io/SCONE ./"

sudo apt-get update
#sudo apt-get install -y linux-image-extra-$(uname -r) || echo "failed to install linux-image-extra-.. trying to continue anyhow!"
#sudo apt-get install -y linux-image-extra-virtual
sudo apt-get install -y apt-utils
sudo apt-get install -y dirmngr

sudo sudo apt-get install -y apt-transport-https ca-certificates
sudo apt-key adv \
  --keyserver hkp://ha.pool.sks-keyservers.net:80 \
  --recv-keys $KEYNAME

echo $REPO | sudo tee /etc/apt/sources.list.d/scone.list

sudo apt-get clean
sudo apt-get update

apt-cache policy scone

sudo apt-get install -y scone
