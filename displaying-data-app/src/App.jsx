import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
  Displaying data:

JSX lets you put markup into JavaScript. Curly braces let you "escape back" into JavaScript. so that you can embed
some variable from your code and display it to the user. For example this will display "user.name"

  return (
    <h1>
        {user.name}
    </h1>
  );

You can also "escape into JavaScript" from JSX attributes, but you have to use curly braces instead of quotes. 
For example, "className='avatar'" passes the "avatar" string as the CSS class, but "src={user.imageUrl}" reads the 
JavaScript "user.imageUrl" variable value, and then passes that value as the "src" attribute. 

    return (
      <img
          className="avatar"
          src={user.imageUrl}
      />
    );
You can put more complex expressions inside the JSX curly braces too, for example, string concatenation:
*/
function App() {

  /*
    Creating a JavaScript object named "user" that contains three key-value pairs: name, imageUrl and imgeSize. 
    user.name gives us the value stored in the name attribute. 
  */
  const user = {
    name: 'Hedy Lamarr', 
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', 
    imageSize: 90,
  };

  return (
    /*
      Note 1: We are using fargment, "<></>", here  
      Note 2: we are using the object'name "user" dot key to get values for the user object above.  
    */
    <>
      <h1>{user.name}</h1>
      <img
          className='avatar'
          src={user.imageUrl}
          alt={'Photo of ' + user.name} 
        
        style={{
          width: user.imageSize, 
          height: user.imageSize
        }}
        />
    </>
  );
}

/*
In the above example, "style={{}}" is not a special syntax, but a regular "{}" object inside the "style={ }" JSX curly braces. 
You can use the "style" attribute when your styles depend on JavaScript variables. 
*/

export default App
