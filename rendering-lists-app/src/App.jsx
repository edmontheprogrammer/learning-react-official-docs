import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


/*
  Rendering lists

  You will rely on JavaScript features like "for loop" and the "array map() function" to render lists of components

  For example, let's say you have an array of products

  const products = [
    {title: 'Cabbage', id:1}, 
    {title: 'Garlic', id: 2}, 
    {title: 'Apple', id: 3},
  ];

  Inside your component, use the "map()" function to transform an array of products into an array of "<li>" items:


  const listItems = products.map(product => 
      <li key={product.id}>
          {product.title}
      </li>
    ); 

    return (
      <ul>{listItems}</ul>
    );

    Notice how "<li>" has a "key" attribute. For each item in a list, you should pass a string or a number uniquely identifies 
    that item among its sibilings. usually, a key should coming from your data, such as a database ID. React uses your keys to know
    what happened if you later insert, delete, or reorder the items

*/


function App() {

  // creating a list of objects. Each object has three attributes or key-value pairs: title,
  // isFruit and id that are assigned values
 const products = [
  {title: 'Cabbage', isFruit: false, id: 1}, 
  {title: 'Garlic', isFruit: false, id: 2}, 
  {title: 'Apple', isFruit: true, id: 3}, 
];

  /*
    Creating "listItems" and assigning it to a function call,map(), that runs on the objects array above. 
    it takes each objects in the products array and converts it into an HTMl list item with the given values. 
    <ul>{listItems}</ul> shows each list item on the web page. 
  */
  const listItems = products.map(product => 
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
      {product.title}

      </li>
    ); 
  
  return (
    
      <ul>{listItems}</ul>
  )
}

export default App
