#!/bin/bash

echo
echo "Delete htdocs on local FTP server $TABLET_IP"
checkfolder=$(
lftp -p $TABLET_PORT -u $TABLET_USER,$TABLET_PASS $TABLET_IP <<EOF
ls 
EOF
)
if [ "$checkfolder" == "" ];
then
echo "Carpeta no hay ficheros"
else
echo "Veo fichero para borrar"
lftp -p $TABLET_PORT -u $TABLET_USER,$TABLET_PASS $TABLET_IP <<EOF
glob -a rm -rf *
EOF
fi

