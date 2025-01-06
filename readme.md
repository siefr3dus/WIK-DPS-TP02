# Comment lancer le projet

1. Avoir npm d'installé
2. Le port par défault est 3000, pour le modifier, il faut executer cette commande `export PING_LIST_PORT="port voulu"`
3. Executer la commande `npm i && npx tsc && node build/index.js`

# Que fait le projet

```
GET /ping
```
Réponse: Json contenant les headers http de la requete, code 200
```
{"host":"localhost:3000","user-agent":"curl/7.88.1","accept":"*/*"}
```

Tout autre verbe HTTP et/ou route donne un code 404 avec une réponse vide