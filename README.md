# Micro Service Template
Template de micro-service en Node.js

## Quickstart
Cette commande installe les dépendances npm.

    npm i

## Lancer le serveur de développement
Cette commande lance l'application sur `http://localhost:PORT`.

    npm run start

## Lancement des tests
    npm run test

## Les variables d'environnement
En mode développement, nous devons créer un fichier `.env` contenant les variables principales

    PORT
    LOG_LEVEL
    MICRO_SERVICE_API_HOST
    MICRO_SERVICE_CLIENT_ID
    MICRO_SERVICE_CLIENT_SECRET

## Documentation de l'API

#### Lancement
Après le lancement du projet, nous pouvons voir la doc sur `http://localhost:PORT/api-docs`.

#### Configuration
Dans le fichier `src/config/swagger.json`nous avons la configuration de la doc.
Pour a jouter une route a la doc il suffit juste d'ajouter un nouveau objet dans `paths`

    "paths": {
        "/notre-endpoint": {
            "get": {
                "tags": ["endpoint-name"],
                "summary": "endpoint-description",
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "400": {
                        "description": "Bad request"
                    }
                },
                "content": {
                    "application/json": {}
                }
            }
        }
    }

© Le Résidentiel Numérique 2019
