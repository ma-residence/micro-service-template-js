# Guide d'utilisation

## Creation d'un nouveau projet a partir du template-js

Se rendre sur https://github.com/ma-residence/micro-service-template-js et cliquer sur "use this template".

Choisir commme propietaire "ma-residence", indiquer le nom du nouveau projet et ajouter une description.

Finalement valider.

## Makefile

1. Forker le projet.
2. Metter le projet platform a jour puis creer une nouvelle branche
3. Editer le fichier Makefile et ajouter les variables **NOM_DU_PROJET** et **CD_NOM_DU_PROJET**.
4. Dans le meme fichier, recopier les 4 lignes de la commande "micro-service-template-js-install" et remplacer template-js par le nom de votre projet
5. Sauveagrder le fichier et lancer la nouvelle commande crée.

## Dockerfile & docker push

Le dossier de votre fichier doit maintenant se trouver dans le dossier platform.

Ajouter le nom du dossier au .gitignore de platform
Dans dossier du nouveau projet :

1. Créer une nouvelle branche
2. Recopier le fichier Dockerfile-TEMPLATE en Dockerfile et remplacer dans le fichier les variables entre ** par leur vrai valeur
3. Faites de meme pour Readme.md-TEMPLATE et Makefile-Template
4. docker build --tags maresidencefr/**NOM_DU_PROJET**:v1.0 .
5. docker push maresidencefr/**NOM_DU_PROJET**:v1.0

## Platform

### Dans le dossier platform

1. Ajouter le nouveau projet au fichier docker-compose.override.yml.dist
2. Ajouter au fichier .env.dist les variables
    WITH_**NOM_DU_PROJET**=false
  ainsi que les variables d'environnement utiles.
3. Ajouter le nom de domaine de developpement dans le fichier README.md et dans le fichier /etc/hosts
4. ajouter ce nom de domaine ainsi que la variable WITH_**NOM_DU_PROJET** au fichier docker-compose.yml.dist dans la partie "nginx"

### Dans le dossier docker/nginx

1. Ajouter un fichier dans le dossier vhosts pour le nouveau fichier
2. Ajouter la copie de ce fichier dans le fichier Dockerfile
3. Ajouter un bloc d'activation du nouveau projet dans fichier entrypoint.sh

### Dans le dossier docker lancer les commande suivantes

    docker build --tag maresidencefr/nginx:**NOM_DU_PROJET** nginx
    docker push maresidencefr/nginx:**NOM_DU_PROJET**

    git add
    git commit -am "xxxx"
    git push origin

### De nouveau dans le dossier platform

Dans le fichier docker-compose.yml.dist, modifier le nom de l'image nginx par le tag que vous venez de poussez, puis executer les commandes suivantes :

    cp docker-compose.yml docker-compose.yml.YYMMDDDD
    cp docker-compose.yml.dist docker-compose.yml
    cp docker-compose.override.yml docker-compose.override.yml.YYMMDDDD
    cp docker-compose.override.yml.dist docker-compose.override.yml
    cp .env .env.YYMMDDDD
    cp .env.dist .env

Pensez a reactiver les services dans le fichier .env et a recopier votre token Github.

    make upstart

    git add
    git commit -am "xxxx"
    git push origin

© Le Résidentiel Numérique 2019
