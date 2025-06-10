# Blog API Sécurisé

Bienvenue sur le projet **Blog API Sécurisé** ! Ce projet est une API RESTful pour la gestion d'un blog, développée avec Node.js, Express, Sequelize et PostgreSQL. L'authentification sécurisée est assurée via Google OAuth2 et JWT.

## Fonctionnalités principales

- Authentification sécurisée (Google OAuth2, JWT)
- Gestion des utilisateurs
- Création, modification et suppression d'articles de blog
- Base de données PostgreSQL
- Sécurité renforcée (variables d'environnement, SSL, etc.)

## Architecture du projet

![Architecture du projet](https://raw.githubusercontent.com/github/explore/main/topics/api/api.png)

## Démarrage rapide

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-utilisateur/blog-api-securise.git
   cd blog-api-securise
   ```
2. **Configurer les variables d'environnement**
   - Copier `.env.example` en `.env` et renseigner les valeurs nécessaires.

3. **Installer les dépendances**
   ```bash
   npm install
   ```

4. **Lancer les migrations**
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Démarrer le serveur**
   ```bash
   npm start
   ```

## Exemple de flux d'authentification Google

![Flux Google OAuth2](https://developers.google.com/identity/images/sign-in/identity-sign-in-flow.png)

## Exemple de requête API

```http
POST /api/posts
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Mon premier article",
  "content": "Contenu de l'article."
}
```

## Structure du projet

```
config/           # Configuration (Sequelize, Passport, etc.)
migrations/       # Fichiers de migration de la base de données
models/           # Modèles Sequelize
seeders/          # Données de test
src/              # Code source principal (app.js, routes, etc.)
```

## Variables d'environnement

Voir le fichier `.env.example` pour la liste complète des variables nécessaires.

## Contribution

Les contributions sont les bienvenues !

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/ma-feature`)
3. Commitez vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez la branche (`git push origin feature/ma-feature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT.

---

*Pour toute question, contactez [votre email ou GitHub].*
