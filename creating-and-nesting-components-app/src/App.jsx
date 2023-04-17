import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
  React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and apperance. 
  A component can be as small as a button, or as large as an entire page. 

  React components are JavaScript functions that return markup:
*/

function MyButton() {
  return (
    <button>I'm a button</button>
  ); 
}

// Now that you've declared "MyButton", you can nest it into another component: 
// Note: In this case "MyApp" is the other component
function App() {

  return (
    <div className="App">
      <h1>Welcome to my app</h1>
        <MyButton />
        <AboutPage />
    </div>
  );
}

/*
  Notice that "<MyButton />" starts with a capital letter. That's how you know it's a React component. React component names must
  always start with a capital letter, while HTML tags must be lowercase. 

  The "export default" keywords specify the main component in the file. If you're not familiar with some piece of the JavaScript 
  syntax, MDN and javascript.info have great references. 

  Writing markup with JSX

  The markup syntax you've seen above is called JSX. It is optional, but most React projects use JSX for its convenience. 
  All of the tools we recommeded for local development support JSX out of the box. 

  JSX is stricter than HTML. You have to close tags like "<br />". Your component also can't return multipe JSX tags. You have to
  wrap them into a shared parent, like a "<div>...</div>" or an empty, fragement, "<>...</>" wrapper: 
*/

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there. <br />How do you do?</p>
    </>
  ); 
}

// If you have a lot of HTML to port to JSX, you can use an online converter. 

export default App
