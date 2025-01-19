# Chapter - 02 : React - Dependencies

## Why should CDN links not be used to bring React and React-dom in the project ?

- If we use CDN links, then we will have to make a network call to
  bring React into our project.
- Currently we use React version 18 which is mentioned in the CDN
  link as well. So if in future, React version 19 comes, then we will
  have to change the CDN links again.
- We can install React using npm install react which will store React
  into node modules and will not cause any dependency issues.
- To get React from a CDN link, you will need to have a network
  (internet) connection

---

## What is NPM

- aka **Node Package Manager**.
- It is the world’s largest software registry.
- It is a package manager.
- It is used to install, share, and manage dependencies in node.js projects.
- It consists of three components:
  1. The website
  2. The command line interface
  3. The registry

### Main functions

- **Installing packages**
  - You can install packages globally or locally in your project.
  - For example, npm install loadash installs the loadash package locally, and npm install -g loadash installs it globally.
- **Managing dependencies**
  - It maintains a package.json file that lists all the dependencies of the project.
- **Running scripts**
  - You define scripts in package.json and run them using npm run script_name.
  - For example, npm run build could be a script to build your project.
- **Publishing packages**

  - It allows developers to publish their own packages to the npm registry.

- `npm` alternative is `yarn`

### How to initialize `npm`

> npm init

- `npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.

---

## What is a package.json file ?

- The `package.json` file is the heart of the node.js system.
- `package.json` is the configuration for npm.
- It is the **manifest** file of any node.js project and it contains the metadata of the project.
- This metadata information can be categorized into below categories:
  1. **Identifying metadata properties**:
  - It basically consists of the properties to identify module/project such as the name of the project, current version of the module, license, author of the project, description about the project, etc.
  2. **Functional metadata properties**:
  - It consists of the functional values/properties of the project/module such as entry/starting point of the module, dependencies in project scripts being used, repository link, etc.

---

## Browser scripts cannot have imports/exports

- When we install React into the application and remove the CDN links, then we will get an error which says `Uncaught ReferenceError: React is not defined`.
- This happens because we have installed React, but not imported it into our JavaScript file.
  > import React from ‘react’;
- When we do this, we get an error which says **Browser scripts cannot have imports or exports**.
- Since we are importing the `app.js` file in `index.html` using <script> tag, the browser considers it as a normal JavaScript file or a browser script.
- To make the browser understand that this is not a normal JavaScript file , but a **module**, we have to add an extra attribute
  into <script> tag.
  > <script type=’module’ src=’./app.js’></script>

---

## dependencies vs devDependencies

- `Dependencies` should contain library and framework in which your app is built on, needs to function effectively such as Vue, React, Angular, Express, JQuery and etc.
- `DevDependencies` should contain modules/packages a developer needs during development such as, `parcel, webpack, vite, mocha`.
- `DevDependencies` are `necessary only while we are developing our project`, not necessary for production.

To save a dependency as a devDependency on installation we need to do,

> npm install --save-dev

### `node_modules`

- `node_modules` folder is like a cache for the external modules that your project depends upon.
- When we `npm` install them, they are be downloaded from the web and copied into the node_modules folder and` Nodejs` is trained to look for them there when you import them (without a specific path).
- `Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.

---

## Bundlers - `Parcel/Webpack/Vite`

- `Parcel/Webpack/Vite` is type of a web application bundlers used for development and production purposes
- These bundlers power our application with different types of functionalities and features.
- They offers blazing fast performance utilizing multicore processing, and requires zero configuration.
- Parcel can take any type of file as an entry point, but using either HTML or JavaScript file is a good practise.

### Parcel Features:

- HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files immediately.
- File watcher algorithm - build using C++
- Minification - Optimises the code
- Cleaning our code
- Separate DEV and production Builds
- Super fast building algorithm
- Image optimization
- Caching while development
- Compresses
- Compatible with older version of browser
- HTTPS in dev
- Port Number
- Consistent hashing algorithm
- Zero Configuration
- Automatic code splitting

### Tree Shaking

- In computing, Tree shaking is a dead code elimination technique that is applied while optimizing code.
- `Tree shaking` is process of removing the unwanted code that we do not use while developing the application.

### Hot Module Replacement

- `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload.
- This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.

### Build our app using Parcel

- Install parcel as a devDependency.
- `-D` is used for development and installed as a development dependency.

  > npm install -D parcel

- Parcel Commands :

  - run development build:
    > npx parcel `<entry_point>` // index.html
  - run production build :
    > npx parcel build `<entry_point>` // index.html

- When you run `npx parcel index.html`, **parcel** does the following:
- ### Development mode (default)
  - It starts a development server.
  - It serves the index.html file and watches for changes in your file.
  - It automatically reloads the browser when it detects the changes.
- ### Build mode (with additional options)
  - If you specify a build option (e.g., npx parcel build index.html), parcel will create an optimized, production-ready bundle.
  - It minifies the code and optimizes assets for better performance.

### How does parcel perform builds so quickly ?

- When we start the server using parcel for the first time, it creates a folder in the project named .parcel-cache.
- So the parcel uses caching. And after every subsequent build, it will update the cache.

- `.parcel-cache` is used by the parcel(bundler) to reduce the app building time.
- It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch.
- It's a key reason, why parcel can be so fast in development mode.

- The `/dist` folder contains the minimized version of the source code.
- The code present in the `/dist` folder is actually the code which is used on production web applications.
- Along with the minified code, the `/dist` folder also comprises of all the compiled modules that may or may not be used with other systems.

---

## What is npx ?

- `npx` - node package xecuter.
- `npx` is a tool that is used to execute the packages in Node.js environment.
- By default this tool is included in npm above 5.2.0 versions.
- It is an npm package runner that can execute any package that we want from the npm registry without even installing that package in our project.

---

## What is the role of the package-lock.json file ?

- The `package-lock.json` file in npm simply serves as a lockfile that captures the exact versions of packages and their dependencies.
- It ensures that the same version of packages is used across different installations or environments.
- This consistency prevents unexpected package versions and helps avoid compatibility issues.
- When you install or update packages using npm, it checks the `package-lock.json` file to ensure the specified versions are installed.
- This lockfile is especially important when collaborating on projects as it guarantees that all the contributors use consistent package versions.

### Why should I not modify `package-lock.json`?

- `package-lock.json` file contains the information about the dependencies and their versions used in the project.
- Deleting it would cause dependencies issues in the production environment.
- So don't modify it, It's being handled automatically by NPM.

---

## Executing `npx parcel index.html` or `npx parcel build index.html`

- When we execute `npx parcel index.html`, parcel creates a development build and stores it in the folder named dist.
- After every subsequent change, parcel will update this dist folder every time an app/component renders or every time we save new changes.
- The same thing happens when we execute `npx parcel build index.html`, The only difference is parcel creates a production build and stores it in the dist folder in this case.
- Note - Do not push the folders **dist** and **.parcel-cache** into git repo because they can be regenerated.

---

- ## Tilde (**~**) or Caret(**^**) in `package.json` file :

  These are used with the versions of the package installed.

  For example in `package.json` file:

  ```
  "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    }
  ```

- Tilde (~) Notation : **~** : `Approximately equivalent to version`

  - The Tilde (~) notation is employed to match the latest patch version while freezing the major and minor versions.
  - This notation is useful for automatically updating the bug fixes, considering that patch updates primarily update bugs.

- Caret (^) Notation : **^** : `Compatible with version`
  - It automatically updates both minor and patch updates.
  - This is used as default notation by npm.
  - If the current version of a package is ^1.2.4, and tomorrow if there is an upgrade in the package and we get a new version i.e. 1.2.5, then (^) will automatically upgrade 1.2.4 to 1.2.5.
  - **Caret** helps in upgrading the minor versions whereas **tilde** helps in upgrading the major versions.

---

## `browserslist`

- To make our app compatible with older/specific browsers, we can make use of browserslist.
- In the package.json file, we can create a list and give it name as browserslist and specify all the browsers/specific versions in the list.
- Browserslist is a package stored in node modules and parcel uses that to make the app compatible.
  Refer to [browserslist.dev](browserslist.dev)
- `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.
- It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

---

## `.gitignore` file

- The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`.
- The types of files we should consider adding to a `.gitignore` file are any files that do not need to get committed.
- for example, For security, the security key files and API keys should get added to the gitignore.
- `package-lock.json` should not be add into your `.gitignore` file. !Important

The entries in this file can also follow a matching pattern.

```
* is used as a wildcard match for selectoring all items at once.
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
```

This is an example of what the .gitignore file could look like:

```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```
