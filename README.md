# Reactjs

- Project - (CRUD Application in react - TODO List App)
- Tic-Tac-Toe Game

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

[YTV-SCSS](https://youtu.be/tTcpN2lAU7o)

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

## Chapter 4 - State & Hooks

- useState Hook
- useEffect Hook
- useRef Hook
- useMemo Hook
- useLayoutEffect Hook
- use Context
- useReducer Hook
- Redux Toolkit

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

- Example 1

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

- Example 2

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

- Example 3 (Show/Hide text)

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

- Example 4:-

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

## How lifecycle of component work in react

- Lifecycle of the component generally happens from the birth of the component to the death of the component.
- There is 3 different stage in react component lifecycle
- Creating (Mounting) - component appearing in the web page
- Updating - componet update (due to state change or prop update)
- Unmounting - component removed from the page.

- Example

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

# Using the Effect Hook

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

```javascript
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

# useRef Hook

The `useRef` hook in React allows you to create a mutable reference that persists across re-renders of a component. It can be used to access and modify DOM elements, store values, or maintain other mutable data. Here's an example of how to use the `useRef` hook:

```javascript
import React, { useRef } from 'react';

function ExampleComponent() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Accessing the input element using the ref
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}

export default ExampleComponent;
```

In this example, the `useRef` hook is used to create a reference called `inputRef`. It is initialized with the value `null`.

The `inputRef` is then assigned to the `ref` prop of the `input` element. This allows you to access the DOM node for the input element using `inputRef.current`. In this case, when the button is clicked, the `handleButtonClick` function is called, which focuses the input element by calling `inputRef.current.focus()`.

Note that unlike state variables (`useState`), updating the `ref` value doesn't cause a re-render of the component. It allows you to store and access values that persist across renders without triggering re-renders.

`useRef` can also be used to store and access other mutable data that you want to persist across renders. For example:

```javascript
import React, { useRef, useEffect } from 'react';

function ExampleComponent() {
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start an interval when the component mounts
    intervalRef.current = setInterval(() => {
      console.log('Interval tick');
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>Check the console for interval ticks</p>
    </div>
  );
}

export default ExampleComponent;
```

In this example, the `useRef` hook is used to store the reference to an interval created using `setInterval`. The interval ID is stored in `intervalRef.current`.

The `useEffect` hook is used to start the interval when the component mounts by assigning the interval ID to `intervalRef.current`. The returned cleanup function is used to clear the interval when the component unmounts.

Note: Make sure to import `React` and `useRef` from the 'react' package before using them in your code.

# useMemo Hook

The `useMemo` hook in React is used to memoize the result of a computation so that it is only recomputed when its dependencies change. It is helpful for optimizing expensive calculations or complex data transformations. Here's an example of how to use the `useMemo` hook:

```javascript
import React, { useMemo } from 'react';

function ExampleComponent({ a, b }) {
  // Compute the result only when 'a' or 'b' changes
  const result = useMemo(() => {
    // Expensive computation or data transformation
    console.log('Computing result...');
    return a + b;
  }, [a, b]);

  return (
    <div>
      <p>Result: {result}</p>
    </div>
  );
}

export default ExampleComponent;
```

In this example, the `useMemo` hook is used to compute the value of `result` based on the values of `a` and `b`. The computation is performed inside the callback function passed to `useMemo`.

The dependencies of the memoized value are specified as an array `[a, b]`. This means that whenever the values of `a` or `b` change, the computation is re-executed. If the dependencies remain the same between re-renders, the memoized value is reused, preventing unnecessary calculations.

In the example, when `a` or `b` changes, the console log statement inside the `useMemo` callback will indicate that the result is being recomputed. If `a` and `b` remain the same between re-renders, the memoized value of `result` will be reused.

Note: `useMemo` should be used when you have expensive computations or data transformations that are only needed when specific dependencies change. If you simply need to store and access a value without recomputing it, you should use `useRef` instead.

# useLayoutEffect Hook

The `useLayoutEffect` hook in React is similar to the `useEffect` hook, but it runs synchronously immediately after the DOM has been updated but before the browser paints the screen. It's useful for performing DOM measurements or updates that require synchronous calculations and should be applied before the user sees the updated content. Here's an example of how to use the `useLayoutEffect` hook:

```javascript
import React, { useLayoutEffect, useRef } from 'react';

function ExampleComponent() {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    // Perform DOM measurement or updates here
    const element = elementRef.current;
    const width = element.offsetWidth;

    // Update DOM or trigger other synchronous actions
    // ...

    console.log('Element width:', width);
  });

  return (
    <div ref={elementRef}>
      <p>Example component</p>
    </div>
  );
}

export default ExampleComponent;
```

In this example, the `useLayoutEffect` hook is used to measure the width of the element and perform any necessary DOM updates or synchronous actions. The `elementRef` is created using the `useRef` hook and attached to the `div` element using the `ref` prop.

Inside the `useLayoutEffect` callback, the `offsetWidth` of the element is measured to get its width. You can perform any other DOM measurements or updates within this callback.

The `useLayoutEffect` hook is similar to `useEffect`, but it runs synchronously after DOM updates. This means that any changes you make within `useLayoutEffect` will be applied immediately, potentially blocking the browser from painting the screen until your code execution is complete. Use it judiciously and ensure that the code inside `useLayoutEffect` is optimized and doesn't cause performance issues.

Note: Make sure to import `React`, `useLayoutEffect`, and `useRef` from the 'react' package before using them in your code.

# useContext Hook

The `useContext` hook in React is used to access the value of a context created with the `createContext` API. It allows you to consume context values directly within functional components without the need for a context consumer. Here's an example of how to use the `useContext` hook:

```javascript
import React, { useContext } from 'react';

// Create a context
const MyContext = React.createContext();

// Create a provider component
function MyContextProvider(props) {
  const contextValue = {
    message: 'Hello from Context!',
    // Other context data...
  };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
}

// Consume the context within a component
function MyComponent() {
  const context = useContext(MyContext);

  return <p>{context.message}</p>;
}

// Wrap the component with the provider
function App() {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
}

export default App;
```

In this example, we first create a context using `React.createContext()` and name it `MyContext`. Then, we create a provider component `MyContextProvider` that wraps around the components that need access to the context. The provider component defines the value that will be available to the components within its tree.

Inside the `MyComponent` component, we use the `useContext` hook to consume the context. The `useContext` hook takes the context object as an argument and returns its current value. In this case, we access the `message` property from the context and render it within a paragraph tag.

Finally, in the `App` component, we wrap `MyComponent` with the `MyContextProvider` to make the context value available to `MyComponent` and any other components within its tree.

Note: The `useContext` hook can only be used inside functional components and cannot be used in class components. Additionally, make sure to import `React` and `useContext` from the 'react' package before using them in your code.

# useReducer Hook

The `useReducer` hook in React is used to manage complex state and state transitions in functional components. It is an alternative to the `useState` hook when the state logic becomes more intricate. `useReducer` follows the same principles as the `Reducer` concept in Redux. Here's an example of how to use the `useReducer` hook:

```javascript
import React, { useReducer } from 'react';

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
};

function ExampleComponent() {
  // Initialize the state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Define event handlers that dispatch actions
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ExampleComponent;
```

In this example, we define a reducer function that takes the current state and an action as parameters. The reducer function updates the state based on the action type. In this case, we have three actions: `INCREMENT`, `DECREMENT`, and `RESET`.

Inside the `ExampleComponent`, we initialize the state using the `useReducer` hook. It takes the reducer function and the initial state as arguments, and returns the current state and a `dispatch` function to trigger state updates.

We define event handlers (`increment`, `decrement`, `reset`) that dispatch actions using the `dispatch` function. When an action is dispatched, the reducer function is called with the current state and the action, and it returns the updated state.

The state returned by `useReducer` is accessed via `state.count` in this example. The UI elements use the event handlers to trigger state updates.

Note: Make sure to import `React` and `useReducer` from the 'react' package before using them in your code.

# State management using Redux toolkit

Sure! Redux Toolkit is a library that simplifies and optimizes state management with Redux by providing a set of tools and best practices. Here's an example of how to use Redux Toolkit for state management in a React application:

1. Install the necessary dependencies:

```shell
npm install @reduxjs/toolkit react-redux
```

2. Define a Redux slice using Redux Toolkit:

```javascript
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

In this example, we define a slice called `counterSlice` using `createSlice` from Redux Toolkit. It specifies the initial state of 0 and three reducer functions (`increment`, `decrement`, `reset`) that update the state based on the dispatched actions.

3. Configure the Redux store:

```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

In the store configuration file, we import the `configureStore` function from Redux Toolkit and combine our `counterReducer` into the store using the `reducer` field.

4. Wrap your application with the Redux Provider and provide the store:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

Here, we wrap our main component (`App`) with the `Provider` component from `react-redux` and pass the `store` as a prop.

5. Use Redux state in your components:

```javascript
// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
```

In this example, we use the `useSelector` hook to access the `counter` state from the Redux store, and the `useDispatch` hook to get the dispatch function. We can then dispatch the actions (`increment`, `decrement`, `reset`) using the dispatch function.

By following these steps, you'll have a Redux-powered state management setup in your React application using Redux Toolkit.

## example of redux

Redux Toolkit is a library that simplifies and optimizes Redux state management by providing utility functions and guidelines for creating actions, reducers, and the overall store setup. Here's an example of how to use Redux Toolkit for state management:

1. Install Redux Toolkit:

```shell
npm install @reduxjs/toolkit
```

2. Create a Redux store using Redux Toolkit:

```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

3. Create a slice with actions and reducers:

```javascript
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

4. Use the Redux store in your components:

```javascript
// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
```

In this example, we create a Redux store using `configureStore` from Redux Toolkit in `store.js`. We define a `counter` slice with initial state, reducers, and actions using `createSlice` in `counterSlice.js`.

The `App` component accesses the count value from the store using `useSelector` and dispatches actions using `useDispatch`. The actions (`increment`, `decrement`, `reset`) are imported from the `counterSlice`. When an action is dispatched, the corresponding reducer in the slice is called to update the state.

Finally, the component renders the count value and buttons that trigger the corresponding actions.

Note: Make sure to install Redux Toolkit (`@reduxjs/toolkit`) and import necessary functions (`configureStore`, `createSlice`, `useSelector`, `useDispatch`) before using them in your code.
