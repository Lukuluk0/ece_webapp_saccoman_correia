# Blogging application - ECE Webtech project

Nous vous présentons notre projet de portfolio web réalisé avec NextJS et une base de données Supabase.

NextJS est une bibliothèque JavaScript basée sur React qui nous a permis de créer facilement des applications web universnelles, c'est-à-dire qui s'exécutent tout aussi bien côté serveur que côté client. Cela a donné de meilleures performances et une meilleure expérience utilisateur, en particulier sur les appareils mobiles.

Pour gérer les données de notre portfolio, nous avons choisi d'utiliser Supabase, une plateforme qui offre un accès en temps réel à une base de données PostgreSQL via une API RESTful. Cela nous a permis de stocker et de gérer facilement les informations sur nos projets et nos compétences, et de les afficher dynamiquement sur notre site web grâce à NextJS.

En utilisant NextJS et Supabase, nous avons pu créer un portfolio professionnel moderne et performant, qui met en valeur nos réalisations et nos compétences de manière attrayante et facilement accessible. Nous espérons que vous apprécierez la visite !

## Production

- Vercel URL: <https://ece-webapp-saccoman-correia.vercel.app/>
- Supabase project URL: <https://app.supabase.com/project/asjviolucgyqjhebdilt>

## Usage

- Clone this repository, from your local machine:

``` bash
  git clone https://github.com/Lukuluk0/ece_webapp_saccoman_correia.git
  cd ece_webapp_saccoman_correia
```

- Start the the application

```bash
  cd app
  # Install dependencies (use yarn or npm)
  npm install
  npm run build
  npm start
```

- Start Supabase

```bash
  cd supabase
  docker compose up
```

## Authors

- Alexandre Correia, alexandre.correia@edu.ece.fr
- Lucas Saccoman, lucas.saccoman@edu.ece.fr

## Tasks

**Project management:**

- Naming convention
  - 2/2
  - Nous avons respecté les conventions
- Project structure
  - 2/2
  - Tous les fichiers sont ordonnés
- Git
  - 2/2
  - Utilisation des conventional commit
- Code quality
  - 4/4
  - Les documents sont formatés et il n'y a pas de white spaces
- Design, UX, and content
  - 4/4
  - Bonne utilisation de TailWindCSS et nous trouvons notre site plutot joli

**Application development:**

- Home page
  - 2/2
  - La page d'accueil est réfléchie et affichée sur notre site.
- Login and profile page
  - 4/4
  - Nous utilisons OAuth pour nous identifier, il est aussi possible de se connecter grâce à github
- New articles creation
  - 6/6
  - Il est possible de créer un nouvel article ainsi que d'annuler le formulaire de création à n'importe quel moment
- New comment creation
  - 4/4
  - Il est possible de créer un nouveau commentaire, cependant les utilisateurs non authentifiés ne peuvent pas laisser de commentaires. Les RLS ne permettent pas à une personne non authentifiée de laisser un commentaire comme précisé dans la consigne.
- Resource access control
  - 5/6
  - Les RLS sont activées et fonctionnent bien cependant elles ne sont pas activées pour certaines tables.
- Article modification
  - 4/4
  - Il est possible pour une personne ayant créée un projet de le modifier
- Article removal
  - 1/2
  - La suppression des projets marche et supprime aussi les commentaires liés au projet lors de sa suppression cependant cette feature ne semble pas fonctionner systématiquement avec les RLS activées.
- Comment modification
  - 2/2
  - Il est possible pour une personne ayant écrit un commentaire de le modifier
- Comment removal
  - 2/2
  - Il est possible pour une personne ayant écrit un commentaire de le supprimer
- Account settings
  - 4/4
  - Dans la page profil, il est possible de changer les settings (avec des valeurs préchargées) comme par exemple son username ou encore le choix de sa couleur préférée
- WYSIWYG integration
  - 1/2
  - WYSIWYG est seulement implémenté il n'est à aucun moment enregistré dans la base de données
- Gravatar integration
  - 2/2
- Light/dark theme
  - 2/2
  - Il prend le setting du système par défaut
- Accent color selection
  - 4/4
  - La couleur préférée de l'utilisateur est enregistrée dans la base de données

## Bonus

- Enregistrement d'images dans la base de données
  - Il est possible d'enregistrer une image dans la base de donnée et de la faire apparaitre lors de la création d'un projet