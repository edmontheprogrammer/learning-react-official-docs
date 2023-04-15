import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
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

function App() {

  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />

    </div>
  )
}

export default App
