#!/bin/bash

HOST=192.168.1.134
PORT=2121
USER=ksweb
PASSWD=ksweb

echo
echo "Copy build on htdocs copylocal FTP server $HOST"
lftp -p 2121 -u ksweb,ksweb 192.168.1.134 -e "mirror -R ./build/ /; exit"