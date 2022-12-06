# Reactjs

A JavaScript library for building user interfaces

## Create React App

Create React App doesn’t handle backend logic or databases; it only creates frontend.
You can use any database.
Under the hood, it uses Babel and webpack for compiling your code

When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder.

# Installing and Creating New React Application

- Install Nodejs
- VS code

Now create React folder in your computer eg. Desktop then open that in VS code editor .
Open the terminal in VS Code
and run below command.

```
npx create-react-app my-app
cd my-app
npm start
```

## Folder structure

## Introducing JSX

```
const element = <h1>Hello, world!</h1>;

```

Above code is called JSX, and it is a syntax extension to JavaScript.
JSX produces React “elements”

## Why JSX?

With JSX we can coupled UI and logic in same file.

## Embedding Expressions in JSX

You can put any valid JavaScript expression inside the curly braces in JSX

```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

```

.

In the example below, we embed the result of calling a JavaScript function, formatName(user), into an <h1> element.

```
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

```

## Rendering an Element into the DOM

Let’s say there is a <div> somewhere in your HTML file:

```
<div id="root"></div>

```

```
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);

```

## Components and Props

Component is just JavaScript function that returns UI. Component may have a logic along with UI.

1. Should return JSX
2. Component must be start with capital letter.

```
function HellowWorld(){
    return <h1> Hellofrom Component</h1>
}
```

```
function  App(){
return(
<div className="App">
<user name="dev" age={40} email="dev@gmail.com" />
<user name="bob" age={45} email="bob@gmail.com" />
<user name="Robert" age={60} email="robert@gmail.com" />
</div>
)
}

function User(props){
    return(
        <>
        <h1>name: {props.name} </h1>
        <h2>age: {props.age}</h2>
        <h2>email: {props.email}</h2>
        </>
    )
}
```

### Create Component County and render 4 time, pass the props (name, population, income)

## Props

Props are like parameters to a function
We use props to pass the data.

## How to implement CSS in react ?

css modules (import styled from './App.module.css')
(className = {styled.App})

css
StyledComponent
SASS

Tailwind
BootStrap

Any other css Library

## Ternary Operators and Lists
