#!/bin/bash
sed -i 's/\(return\|static\)//g' $1
sed -i 's/\({\)/:/g' $1
sed -i 's/\(()\|}\)//g' $1
sed -i "s/\(\u[[:alnum:]]\{1,\}'\)/&,/g" $1
