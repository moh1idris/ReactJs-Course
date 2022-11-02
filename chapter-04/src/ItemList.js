// rafce 
// import React from 'react'
// import { FaTrashAlt } from 'react-icons/fa'

// const itemList = ({ items , handleCheck , handleDelete}) => {
//   return (
//     <ul>
//     {items.map((item) => (
//        <li className='item' key={item.id}>
//           <input 
//           type="checkbox"
//           onChange={() => handleCheck(item.id)}
//           checked={item.checked} 
//           />
//              <label
//              style={(item.checked) ? {textDecoration:
//              'line-through'} : null }
//              onDoubleClick={() => handleCheck(item.id)}          //--> double click on th ename it will get selected 
//              >{item.item}</label>
//              <FaTrashAlt 
//              onClick={() => handleDelete(item.id)}
//              role="button"
//              tabIndex="0"/>
//        </li>
//     ))}
//  </ul>
//   )
// }
// export default itemList

import React from 'react'
import LineItem from './LineItem'

const itemList = ({ items , handleCheck , handleDelete}) => {
  return (
    <ul>
      {items.map((item) => (
           <LineItem 
             key={item.id}                                     //--> as we are getting an error so we added it 
             item={item}
             handleCheck={handleCheck}
             handleDelete={handleDelete}
           />
      ))}
    </ul>
  )
}
export default itemList
