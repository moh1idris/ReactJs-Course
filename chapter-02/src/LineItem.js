import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'


function LineItem({ item , handleCheck , handleDelete}) {
  return (
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
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
            />
    </li>
  )
}

export default LineItem