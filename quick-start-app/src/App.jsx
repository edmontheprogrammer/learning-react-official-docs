import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton1() {
    return (
        <button>I'm a button</button>
    ); 
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there. <br/> How do you do?</p>
    </>
  );
}

function EdmonPhoto() {
  return (
      <>
      <img 
        className='edmonPhoto'
        src={require('src/assets/edmon_whie_shirt_photo.jpg')} 

        />

    </> 
    );
}

// creating a list of objects: three properties or key-value pairs (title, isFruit, id)
const products = [
  {title: 'Cabbage', isFruit: false, id: 1}, 
  {title: 'Garlic', isFruit: false, id: 2}, 
  {title: 'Apple', isFruit: true, id: 3}, 
]; 

/*
  Creating a component named ShoppingList
  listItems that maps products list to the "li" elements
*/
function ShoppingList() {
  const listItems = products.map(product => 
    <li  
      key={product.id}
      style= {{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
    {product.title}
    </li>); 

  return (
    <ul>{listItems}</ul>
  )
     
  }


  /*
   Creatin a component named "MyButton2". Not there's another function inside the "MyButton2" component
   named "handleClick". "handleClick" is an event handler that responds to the button being clicked. 
   It esseintally displays an alert box. 
  */
 function MyButton2() {
  function handleClick() {
    alert('You clicked me!'); 
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  ); 

 }

 function MyButton3() {

  /*
    [count, setCount] basically creates a variable named "count" and initializes it to "0" using the 
    built-in "useState()" method from "react". You use the "count" to get the value of the variable, but 
    by convention you use "setCount" to reinitialize or change teh value of the variable
  */ 
    const [count, setCount] = useState(0); 
  
  // this is a method that gets called when the button is clicked, event handler
  function handleClick() {
    // incrementing the value of count by 1 every time the button is clicked basically "count++"
    setCount(count + 1); 
  }

  return (
    <button onClick={handleClick}>
    {/*  this is the button label */}
      Clicked {count} times
    </button>
  ); 
  
}

function App() {
  

  return (
    <div className="App">
      {/* <h1>Welcome to my app</h1>
      <MyButton1 />
      <AboutPage />
      <ShoppingList />
      <MyButton2 /> */}
      <h1>Counters that updte separetly</h1>
      <MyButton3 />
      <MyButton3 />

    </div>
  )
}

export default App
