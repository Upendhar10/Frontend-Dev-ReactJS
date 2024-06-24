# Chapter - 3 - Laying the foundation

## Articles

- Working of JSX - 1:30

# Theory :

- npx - used to execute the npm packages
- npm - used to install the npm packages into our project.
- Tree shaking - removing unwanted code.
- Babel - Babel converts new version of the code into suitable older versions; Babel uses 'browsers-list'; Babel also converts JSX into JS understandable code.
- Polyfill - replacement code for a newer version of the code
- babel-plugin-transform-remove-console : a plugin / package used to remove console.logs from the project; It is a dev-dependency
- Keys - used to uniquely identifies each child of the DOM. It is passed through props

## `JSX`?

- JSX stands for JavaScript XML. (unOfficially)
- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
- JSX makes it easier to write and add HTML in React.
- JSX converts HTML tags into react elements.

### Example-1 : using JSX:

```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

### Example-2 : Without JSX:

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

### Superpowers of `JSX`?

- By using JSX, we can write markup inside Javascript, providing us with a superpower to write logic and markup of a component inside a single .jsx file.
- JSX is easy to maintain and debug.

### Example :

```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```

## Role of type `attribute` in script tag? What `options can I use` there?

- The 'type' attribute specifies the type of the script.
- The 'type' attribute identifies the content between the <script> and </script> tags.
- It has a Default value which is “text/javascript”.

- 'type' attribute can be of the following types:

  1. text/javascript : It is the basic standard of writing javascript code inside the `<script> </script>`tag.

     Syntax : `<script type="text/javascript"></script>`

  2. text/ecmascript : this value indicates that the script is following the EcmaScript standards.

  - `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
  - `text/babel` : This value indicates that the script is a babel type and required babel to transpile it.
  - `text/typescript`: As the name suggest the script is written in TypeScript.

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

1. `{TitleComponent}`:

- This value describes the TitleComponent as a javascript expression or a variable.
- The {} can embed a javascript expression or a variable inside it.

2.  `<TitleComponent/>` :

    - This value represents a Component that is basically returning Some JSX value.
    - In simple terms TitleComponent a function that is returning a JSX value.
    - A component is written inside the `{<  />}` expression.

3.  `<TitleComponent></TitleComponent>` :

    - `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components.
    - The opening and closing tags are created to include the child components.

    ### Example :

         ```
         <TitleComponent>
             <FirstChildComponent />
             <SecondChildComponent />
             <ThirdChildComponent />
         </TitleComponent>
         ``

## Babel

- Babel is a JavaScript compiler that allows developers to write modern JavaScript code that is then transformed into a version that can run in older browsers or environments that may not support the latest JavaScript features.

### Key Features

1. Transpiling Modern JavaScript Syntax:

   - Babel can convert ECMAScript 2015+ (ES6+) code into a backward-compatible version of JavaScript.
   - This includes transforming arrow functions, classes, template literals, destructuring, and other modern features into equivalent ES5 code that older browsers can understand.

2. Support for JSX:

   - In React, JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code within JavaScript.
   - Babel can transform JSX into regular JavaScript function calls that create React elements. This is crucial for React development.

3. Polyfilling New Features:

   - Babel can include polyfills for new JavaScript features that do not have a direct ES5 equivalent.
   - For example, it can provide implementations for new methods or objects, ensuring that these features work in environments that do not natively support them.

4. Custom Plugins:

   - Babel is highly customizable through a rich ecosystem of plugins and presets.
   - Developers can use plugins to transform specific syntax or language features.
   - For instance, you can use a plugin to transform class properties, async/await syntax, or optional chaining.

5. Browser Compatibility:

   - Babel allows you to target specific browsers using its @babel/preset-env preset.
   - By configuring this preset, Babel can automatically determine the necessary transformations and polyfills based on the browsers you need to support.

6. Tooling Integration:

   - Babel integrates seamlessly with various build tools and bundlers like Webpack, Parcel, and others.
   - This integration ensures that your code is transpiled as part of the build process, making it easy to incorporate Babel into your development workflow.
