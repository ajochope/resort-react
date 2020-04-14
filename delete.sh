#!/bin/bash

HOST=192.168.1.134
PORT=2121
USER=ksweb
PASSWD=ksweb

echo
echo "Delete htdocs on local FTP server $HOST"
checkfolder=$(
lftp -p $PORT -u $USER,$PASSWD $HOST <<EOF
ls 
EOF
)
if [ "$checkfolder" == "" ];
then
echo "Carpeta no hay ficheros"
else
echo "Veo fichero para borrar"
lftp -p $PORT -u $USER,$PASSWD $HOST <<EOF
glob -a rm -rf *
EOF
fi

