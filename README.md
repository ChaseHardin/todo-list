## Todo-List Application
The purpose of this application was to learn how to utilize ReactJs. 

## Folder Structure

After creation, your project should look like this:

```
todo-list/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    features/
        add-todo-item/
           add-todo-item.component.js
           add-todo-item.component.spec.js
        todo-form/
           todo-form.component.js
           todo-form.component.spec.js
        todo-items/
           todo-items.component.js
           todo-items.component.spec.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

### Install Dependencies
At the root directory, run: `npm update`

### Start Application
Starting the application requires the `npm start` command

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Testing Application
Testing the application requires the `npm test` command

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### Building Application
Building the application requires the `npm run build` command

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.