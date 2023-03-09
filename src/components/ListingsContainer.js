import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchBar }) {
  const [listedItems, setListedItems] = useState([])
  const url = 'http://localhost:6001/listings'

  useEffect(() => {
    fetch(url)
    .then((resp) => resp.json())
    .then((listedItems) => setListedItems(listedItems))
  },[])

  console.log(listedItems)

  function handleDelete(deletedItem){
    console.log(deletedItem)
    const updatedItems = listedItems.filter((item) => item.id !== deletedItem)
    setListedItems(updatedItems)
  }

  const filteredItems = listedItems.filter((items) => {
    return items.description.toLowerCase().includes(searchBar.toLowerCase())
  })

  const mappedItems = filteredItems.map((itemObj) =>{
    return <ListingCard key={itemObj.id} item={itemObj} onDeleteItem={handleDelete}/>
  })

  console.log(filteredItems)
  return (
    <main>
      <ul className="cards">
        {mappedItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
