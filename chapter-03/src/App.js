
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

    const [newItem,setNewItem] = useState('')
    const [search,setSearch] = useState('')
     
    const setAndSaveItems = (newItems) => {
      setItems(newItems)
      localStorage.setItem('shoppinglist', JSON.stringify(newItems))          //--> this is noting but we are storing it to the local storgae if anything we change wil l be same n localaastrage
      }

    const handleCheck = (id) => {
      //   console.log(`key: ${id}`);          //--> this will change the id when u click on the button
      const listItems = items.map((item) => item.id === id ? { ...item, 
      checked: !item.checked } : item);       //--> here we are changing the status if the id maytches then change it to the cheked to false
      setAndSaveItems(listItems)
    }

    const handleDelete = (id) =>{
      // console.log(id);                  //--> this will show the id 
      const listItems  = items.filter((item) => item.id !== id)          //--> this will create only the item with the id which are not eqaul to ittem.id
      setAndSaveItems(listItems)
    }

    const addItem = (item) => {
      const id = items.length ? items[items.length -1].id + 1 : 1;       //--> here we are incremenet the id 
      const myNewItem = {id, checked: false, item };
      const listItems = [...items, myNewItem]
      setAndSaveItems(listItems)
    }


    const handleSubmit = (e) =>{
      e.preventDefault();
      // console.log('Submitted');
      if(!newItem) return;
      // console.log(newItem);  
      addItem(newItem)
      setNewItem('');
      }


  return (
    <div className="App">
     <Header title="Grocery List"/>                  {/*here we can set the normal props n as well as by destrucing it */ }
     {/* <Header />                                  here we ahve already settted it as a default titlt we do not need to do that  gaian  */}
     <AddItem 
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
     />
     <SearchItem 
       search={search}
       setSearch={setSearch}
     />
     <Content 
       items={items.filter(item => ((item.item).toLowerCase())
        .includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
     />
     <Footer length={items.length} />
    </div>
  );
}

export default App;
