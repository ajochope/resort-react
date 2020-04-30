#!/bin/bash

echo
echo "Copy build on htdocs copylocal FTP server $TABLET_IP"
lftp -p $TABLET_PORT -u $TABLET_USER,$TABLET_PASS $TABLET_IP -e "mirror -R ./build/ /; exit"