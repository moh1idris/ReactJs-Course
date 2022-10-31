
import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
   const [items, setItems] = useState([
      // eslint-disable-next-line
      {
          id: 1,
          checked: true,
          item: "One half pound bag of Cocoa Covered Almonds Unsalted"
      },
      {
          id: 2,
          checked: false,
          item: "Item 2"
      },
      {
          id: 3,
          checked: false,
          item: "Item 3"
      }
  ]);

  const handleCheck = (id) => {
   //   console.log(`key: ${id}`);          //--> this will change the id when u click on the button
    const listItems = items.map((item) => item.id === id ? { ...item, 
    checked: !item.checked } : item);       //--> here we are changing the status if the id maytches then change it to the cheked to false
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))          //--> this is noting but we are storing it to the local storgae if anything we change wil l be same n localaastrage
  }

  const handleDelete = (id) =>{
   // console.log(id);                  //--> this will show the id 
   const listItems  = items.filter((item) => item.id !== id)          //--> this will create only the item with the id which are not eqaul to ittem.id
   setItems(listItems)
   localStorage.setItem('shoppinglist', JSON.stringify(listItems))          //--> this is noting but we are storing it to the local storgae if anything we change wil l be same n localaastrage
  }
   
  return (
    <main>
      {items.length ? (

         <ul>
                  {items.map((item) => (
                     <li className='item' key={item.id}>
                        <input 
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked} 
                        />
                           <label
                           style={(item.checked) ? {textDecoration:
                           'line-through'} : null }
                           onDoubleClick={() => handleCheck(item.id)}          //--> double click on th ename it will get selected 
                           >{item.item}</label>
                           <FaTrashAlt 
                           onClick={() => handleDelete(item.id)}
                           role="button"
                           tabIndex="0"/>
                     </li>
                  ))}
               </ul>


      ) : (
           <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
           )}
       
    </main>
  )
}

export default Content
