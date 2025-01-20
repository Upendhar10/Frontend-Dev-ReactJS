# Chapter - 03 : React Foundations

## Babel

- **Babel is a JavaScript compiler** that is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript, allowing your code to run in current and older browsers or environments.

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

## Installing Babel in our project

- To install Babel in our project, we need to run the following command:

  > npm install --save-dev @babel/preset-react

- To remove the console.log() in our production build, we need to run the following command:

  > npm installl -save-dev @babel-plugin-transform-remove-console

---

## What is `JSX`

- aka **JavaScript XML.** (unOfficially)
- JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
- It eliminates the need of writing `createElement()` (in React) and `appendChild()`(in Javascript) methods.
- The syntax is used by preprocessors (i.e. transpilers like babel) to transform HTML like syntax into standard JavaScript objects that a JavaScript engine will parse.
- `JSX` -> `React.createElement` -> `ReactElement` -> `JS Object` -> `HTML Element (render)`

## Why we need `JSX` in React ?

- Although creating a single child to a `div` seems simple in React, but the difficulty araises when we want to create a structure like below (nested div)

```html
<div>
  <h1>Hello World</h1>
  <ul>
    <li>Home</li>
    <li>About us</li>
    <li>Contact us</li>
  </ul>
</div>
```

- Inorder to solve this problem,
  - React allows another way to create elements i.e., JSX - JavaScriptXML (not Offical).
  - Using JSX, the idea is to write most of the HTML and logic in a single JavaScript file.
  - JSX has a HTML like syntax but it should not be considered as **JSX !== (HTML inside JS)**, hence its is unOffficial.

### Example-1 : Without JSX:

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

### Example-2 : using JSX:

```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

## Superpowers of `JSX`?

- JSX is the syntactic sugar for React.createElement
- JSX eliminates repeative code, making it more readable and maintainable than React.createElement, as a result it is Developer friendly.
- By using JSX, we can write markup inside Javascript, providing us with a superpower to write logic and markup of a component inside a single `.jsx` file.
- JSX is not a package and hence, there is no need to import it manually.
- JSX is easy to maintain and debug, powerful and secure (sanitaization)
- Any piece of Javascript code (expressions) can be written inside JSX using `{}`.

### Example :

```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```

---

## Role of `type` attribute in script tag? What `options can I use` there?

- The `type` attribute specifies the type of the script.
- The `type` attribute identifies the content between the `<script>` and `</script>` tags.
- Default value of type is `text/javascript`.

- `type` attribute can be of the following types:

  1. `text/javascript` : It is the basic standard of writing javascript code inside the `<script> </script>`tag.

     Syntax : `<script type="text/javascript"></script>`

  2. `text/ecmascript` : this value indicates that the script is following the EcmaScript standards.

  3. `module`: This value tells the browser that the script is a module that can **import** or **export** other files or modules inside it.

  4. `text/babel` : This value indicates that the script is a babel type and required babel to transpile it.

  5. `text/typescript`: As the name suggest the script is written in TypeScript.

---

## Functional Components in React.

1.  Functional component -> Modern way
2.  Class-based component -> legacy way/ older way

- Functional Component is nothing but a Javascript function by the end.
- Functional Component returns a JSX expression or a react Element.
- React Element is nothing a Javascript Object by the end.
- Name of the component should starts with capital letter (not mandatory, just a good practise).

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

1. `{TitleComponent}`:

- This value describes the TitleComponent as a javascript expression or a variable.
- The `{}` can embed a javascript expression or a variable inside it.

2.  `<TitleComponent/>` :

    - This value represents a Component that is basically returning Some JSX value.
    - In simple terms, **TitleComponent** is a function that is returning a JSX value.
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

---

## References:

- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
