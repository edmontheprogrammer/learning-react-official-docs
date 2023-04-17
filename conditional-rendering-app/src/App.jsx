import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


/*
  Conditional rendering

In React, there is no special syntax for writing conditions. Instead, you'll use the same techniques as you use when writing 
regular JavaScript code. For example, you can use an "if" statement to conditionally include JSX  

  let content; 
  if (isLoggedIn) {
    content = <AdminPanel />
  } else {
    content = <LoginForm />
  }

  return (
    <div>
      {content}
    </div>
  ); 

  if you prefer more compact code, you can use the "conditional ? operator". Unlike "if", it works inside JSX: 

  <div>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}
  </dvi>


  When you don't need the "else" branch, you can also use a shorter "logical && syntax"

  <div>
          {isLoggedIn && <AdminPane; />}
  </div>

  All of these approaches also work for conditionally specifying attributes. If you're unfamiliar with some of this JavaScript 
  syntax, you can start by always using "if...else". 
*/
function App() {

  return (
    <div className="App">
      
    </div>
  )
}

export default App
