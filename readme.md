# Que fait le projet

```
GET /ping
```
Réponse: Json contenant les headers http de la requete, code 200
```
{"host":"localhost:3000","user-agent":"curl/7.88.1","accept":"*/*"}
```

Tout autre verbe HTTP et/ou route donne un code 404 avec une réponse vide

# Update dans le tp 2

Ce deuxième tp contient deux dockerfiles qui permettent de lancer notre application.

- Le fichier **Dockerfile.single** contient qu'un seul stage
- Le fichier **Dockerfile.multi** contient deux stages afin de pouvoir séparer les étapes de build et d'execution.

# Comment lancer le projet

Single stage:
- `docker build --no-cache -f Dockerfile.single -t api-single .`
- `docker run -d -p 3000:3000 --name single api-single`
- `docker rm -f single`

Multi stage:
- `docker build --no-cache -f Dockerfile.multi -t api-multi .`
- `docker run -d -p 3000:3000 --name multi api-multi`
- `docker rm -f multi`