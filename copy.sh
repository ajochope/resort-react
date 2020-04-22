#!/bin/bash

HOST=192.168.1.135
PORT=2121
USER=ksweb
PASSWD=ksweb

echo
echo "Copy build on htdocs copylocal FTP server $HOST"
lftp -p $PORT -u $USER,$PASSWD $HOST -e "mirror -R ./build/ /; exit"