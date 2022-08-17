# Tutorial project: Symfony + React + Typescript

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

# install Typescript
npm install typescript ts-loader@^9.0.0 --save-dev

# run build
npm run build

# or run dev build
npm run dev

# or run development server
npm run dev-server

# run Symfony development server
symfony serve -d
~~~