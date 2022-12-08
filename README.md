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

In the example below, we embed the result of calling a JavaScript function,
formatName(user), into an <h1> element.

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

The ternary operator is a simplified conditional operator like if / else.

Syntax: condition ? <expression if true> : <expression if false>

Before

```
if (authenticated) {
  renderApp();
} else {
  renderLogin();
}
```

With Ternary Operator

```
authenticated ? renderApp() : renderLogin();

```

```
function App(){
    const age = 18;
    const isRed = false;
    return(
<div className="App">
{age >= 19 ? <h1>Over age</h1> : <h1> Under Age</h1>}
<h1 color={{color: isRed ? "red" : "green" }}>

</div>
    )
}

export default App;
```

List Example

```
const App = () =>{
const users = [
  {name:"dev", age: 40},
  {name:"John", age: 60},
  {name:"Ramesh", age: 35},
  {name: "Rupesh", age: 60}
]

  return(
    <>
    users.map((obj, key)=>{
      return(
        <User name={obj.name} age={obj.age}  />;
      )
    })

    </>
  )
}


const User =(props)=>{
  return(
    <>
      <h1>{props.name} and {props.age}</h1>
    </>
  )
}

export default App

```

Note: When ever your are creating new component you are creating new file for it.
We can talk more about folder structure in later course.

## What state are in React and some examples of state.

Just think state like a variable, which holds data.

The state is a built-in React object that is used to contain data or information about the component.
A component's state can change over time;
whenever it changes, the component re-renders.

## useState Hook

A stateof a component is a variable that holds some information that may
change over the lifetime of the component

When the value of the state changes, the component re-renders ifself with updated values.

There are many hook in react all the hook start with use Like useState, useEffect

Example 1

```
import {useState} from 'react

const App = () =>{
  const[age, setAge] = useState(0);
const increaseAge = ()=>{
  setAge(age+1)
}
  return(
    <div className = "App">
      <h1>Age: {age}</h1>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  )
}

export default App;

```

Example 2

```
import {useState} from 'react

const App = () =>{
  const[inputValue, setInputValue] = useState("");
const handleChange = (e) =>{
  setInputValue(e.target.value)
}
  return(
    <div className = "App">

      <input type="text" onChange={handleChange}>
      {inputValue}
    </div>
  )
}

export default App;

```

note : onChange there is a event is created which is passed to the function as argument and we can capture that in our function as a parameter.

Example 3 (Show/Hide text)

```
import {useState} from 'react

const App = () =>{
  const[showText, setShowText] = useState(false);

  return(
    <div className = "App">
    <button onClick={()=> setShowText(!showText)}> SHOW/HIDE</button>
    {showText ? <h1>This is a text</h1> : ""}
    </div>
  )
}

export default App;

```

- note: we can also use conditional operator && = showText && <h1>This is a text</h1>

Example 4:-

```
import {useState} from 'react

function App(){
  const[textColor, setTextColor] = useState("black")

  return(
    <div>
<button onClick={()=> {
  setColor(textColor === 'black' ? "red" : "black")
}}>

<h1 style={{color: textColor}}>Hello This will change the color </h1>
    </div>
  )
}

export default App;

```

## Project - (CRUD Application in react - TODO List App)

## How lifecycle of component work in react

- Lifecycle of the component generally happens from the birth of the component to the death of the component.
- There is 3 different stage in react component lifecycle
- Creating (Mounting) - component appearing in the web page
- Updating - componet update (due to state change or prop update)
- Unmounting - component removed from the page.

Example

```
import React from 'react';

import {useState} from 'react';
function  App(){
  const[showText, setShowText] = useState(false)


return (
  <div>
<button onClick={()=>setShowText(!showText)}>show-hide</button>
{showText && <Text />}
  </div>
)
}

const Test = () =>{
  const[text, setText] = useState("")
  return(
    <div>
    <input type='text' onChange={(e)=>setText(e.target.value)} />
     <h1>{text}</h1>
    </div>
  )
}

export default App;

```

## Using the Effect Hook

- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
- The Effect Hook lets you perform side effects in function components:

- Run code during the change in life cycle of a component.

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


```

## What is side effects.

Data fetching, setting up a subscription,
and manually changing the DOM in React components are all examples of side effects.
Whether or not you’re used to calling these operations “side effects” (or just “effects”),
you’ve likely performed them in your components before.

## Fetch data using useEffect()
