#!/usr/bin/env bash

git fetch
git stash
git rebase origin/master
git stash pop
perl -i -pe 's{ ( assets_version: \s+ ) (\d+) $ }{ $1 . ( 1 + $2 ) }xmse;' app/config/parameters.yml
sudo ./app/console cache:clear --env=prod
sudo ./app/console doctrine:schema:update --force
sudo service apache2 restart
sudo chmod -R 777 app/cache
sudo chmod -R 777 app/logs
