# Blog API Sécurisé

Bienvenue sur le projet **Blog API Sécurisé** ! Ce projet est une API RESTful pour la gestion d'un blog, développée avec Node.js, Express, Sequelize et PostgreSQL. L'authentification sécurisée est assurée via Google OAuth2 et JWT.

## Fonctionnalités principales

- Authentification sécurisée (Google OAuth2, JWT)
- Gestion des utilisateurs
- Création, modification et suppression d'articles de blog
- Base de données PostgreSQL
- Sécurité renforcée (variables d'environnement, SSL, etc.)

## Architecture du projet

![Architecture du projet](Architecture.png)

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

