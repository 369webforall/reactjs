# Reactjs

## Chapter 1 - Reactjs Basic concept

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

# React JS Series

## Related Videos :

[React core concept](https://www.youtube.com/watch?v=s2skans2dP4)

[YTV-Reactjs-1](https://youtu.be/RKIeIljmnZQ)

[YTV-Reactjs-2](https://youtu.be/OxBhBFjYc34)

[YTV-Reactjs-3-part 1](https://youtu.be/mXfxyer_zvU)

[YTV-Reactjs-3-part 2](https://youtu.be/lX_0vAzvhls)

[YTV-Reactjs-4-components](https://youtu.be/2P008av4hNs)

[YTV-Reactjs-5-react-router-dom](https://youtu.be/4mFkZUGQc6s)

- **Assignment 1** : If we delete `node_modules`. How to run our app again successfully ?

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

In the example below, we embed the result of calling a JavaScript function,formatName(user), into an `<h1>` element.

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

## Chapter 2 - Components - JSX and Props

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

- **Assignment 1** : Create a simple React app for **RESUME Builder**. It will be static website. You have to make components like **Resume** as top level and under it - **Skills**, **Education**, **Experience** etc as components. All resume data will be under 1 big JavaScript object like which you can us in components via props. You can fix the number of items in **Skills**, **Education**, **Experience** or any section. Example you can say that only 3 experience items is allowed.

  ```
   resume = {
      experience : [ { year:2012, company:'xyz', role:'something' }],
      education:[ ],
      skills : [ 'react js', 'node js']
      .....
      ...
      }
  ```

  > You can choose any simple HTML layout and convert it to React Components

  Example Link : [ Resume HTML ](https://codepen.io/emzarts/pen/OXzmym)

## Props

### Create Component County and render 4 time, pass the props (name, population, income)

Props are like parameters to a function
We use props to pass the data.

1.  De-structuring Assignment
2.  Import/Export
3.  Spread Operator
4.  Logical AND (&&)
5.  Higher Order functions (map, filter, reduce):

## Chapter 3 - Conditional Rendering & Lists

- **Assignment 1** : Make a simple component which can conditionally render a list with **number** or **alphabets** or **_bullets_** in HTML for number. e..g. use a prop like `layout` for this. Also use a prop `items` for array of items in list.

```
< List layout="numbered" items={items}/>
< List layout="alpha"  items={items}/>
< List layout="bullet"   items={items}/>
```

# React Hooks

[React Hooks](https://www.w3schools.com/react/react_hooks.asp)

## Chapter 4 - State, useState Hooks

## Projct tic-tac-toe-game

## useState Hook

A stateof a component is a variable that holds some information that may
change over the lifetime of the component

When the value of the state changes, the component re-renders ifself with updated values.

There are many hook in react all the hook start with use Like useState, useEffect

In React, the `useState` hook is used to add state to functional components. It allows you to declare and update state variables within your component. Here's an example of how to use the `useState` hook:

```
import React, { useState } from 'react';

function ExampleComponent() {
  // Declare a state variable and its initial value using useState
  const [count, setCount] = useState(0);

  // Update the state variable when the button is clicked
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
```

In this example, the `useState` hook is used to add state to the `ExampleComponent` functional component. It initializes the `count` state variable with an initial value of 0. The `setCount` function returned by `useState` is used to update the `count` variable.

When the button is clicked, the `handleButtonClick` function is triggered, which calls `setCount` to increment the `count` state variable by 1. This triggers a re-render of the component, and the updated count value is displayed.

Note: Make sure to import `React` and `useState` from the 'react' package before using them in your code.

## More Example of useState Hook

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

- note: we can also use conditional operator && = showText && `<h1>This is a text</h1>`

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
function App(){
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

# useEffect Hook.

In React, the `useEffect` hook is used to perform side effects in functional components. Side effects may include fetching data, subscribing to events, or manually manipulating the DOM. Here's an example of how to use the `useEffect` hook:


```

import React, { useState, useEffect } from 'react';

function ExampleComponent() {
const [data, setData] = useState(null);

useEffect(() => {
const fetchData = async () => {
const response = await fetch('https://api.example.com/data');
const result = await response.json();
setData(result);
};

    fetchData();

}, []);

return (

<div>
{data ? (
<ul>
{data.map((item) => (
<li key={item.id}>{item.name}</li>
))}
</ul>
) : (
<p>Loading data...</p>
)}
</div>
);
}

export default ExampleComponent;

```

In this example, the `useEffect` hook is used to fetch data from an API when the component mounts. The `useEffect` function takes two arguments: a callback function and a dependency array.

Inside the callback function, the `fetchData` function is defined, which makes an asynchronous request to the API and updates the `data` state variable using the `setData` function.

The dependency array `[]` passed as the second argument ensures that the effect runs only once when the component mounts. If you want the effect to run whenever a specific dependency changes, you can include that dependency in the array.

The component's rendering logic handles the loading state. If `data` is not yet available, it displays a "Loading data..." message. Once the data is fetched, it maps over the array and renders each item's name in a list.

Note: Make sure to import `React`, `useState`, and `useEffect` from the 'react' package before using them in your code.


```
