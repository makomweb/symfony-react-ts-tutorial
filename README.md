# Tutorial project: Symfony + React + Type-Script

~~~bash
# create skeleton
symfony new example-app --full

# create an SPA controller
php bin/console make:controller

# install Encore + React
composer require encore
npm install

# install React dependencies
npm install @babel/preset-react --dev
npm install react react-dom prop-types axios --dev
npm install @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime
~~~

## Run

~~~bash
# to install backend dependencies
composer install

# to install frontend dependencies
npm install

# create database
php bin/console doctrine:database:create

# create schema
php bin/console doctrine:schema:create

# create migration
php bin/console make:migration

# perform migration
php bin/console doctrine:migrations:migrate

# load fixtures
php bin/console doctrine:fixtures:load --no-interaction

# to serve the backend
symfony server:start -d

# to prepare the frontend
#npm run dev
#npm run build
#npm run watch
npm run dev-server
~~~

- open the browser on [https://127.0.0.1:8000](https://127.0.0.1:8000) to see the web site
