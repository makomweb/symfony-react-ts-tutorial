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
npm install react-router-dom
npm install react react-dom prop-types axios --dev
npm install @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime
~~~