# Good finds

Welcome to Good finds - home to all of your 80s and 90s vintage threads! 

This is an example of a simple shopping cart app implemented in react and redux.

## Getting started

Install dependencies

```sh
npm install
```
Start local dev server

```sh
npm start
```

## Details
- Built with [React](https://github.com/facebookincubator/create-react-app)
- This app is using [Redux](https://redux.js.org/introduction/getting-started) for state management.
- Anticipating our application will grow in scale, I seperated the Actions, Reducers, Selectors, Components, and Styles out into their own repective folders to help the app be more maintainable.
    - The Actions have two simple functions, add and remove from cart with their repective Action type in the actionTypes folder.
    - The Components folder has all of our components and their styling tied together in their respective folders.
    - The Modules folder is their to handle the dispatching of actions and send it to app.js
    - The Reducers and Selectors have the Cart and Product files seperate for maintainability in each respective folder.
    - The Styles folder is where we house all of our scss variable and mixins, along with other global styling.
        - I am using [node-sass](https://www.npmjs.com/package/node-sass) for compliling .scss files into css.
        - For the animations througout the app I mostly used css, but I used the [gsap](https://greensock.com/) animation library for fading the products in after loading.
- I am using [Pa11y](https://www.npmjs.com/package/pa11y) for automated accessibility testing.

## Running pa11y

Ensure you have your local dev server is running in one terminal window/tab.

Open another terminal window/tab and run pa11y:

```sh
npm run pa11y
```
