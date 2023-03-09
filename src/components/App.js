import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchBar, setSearchBar] = useState('')

  function handleSearch(newSearch){
    setSearchBar(newSearch)
  }
  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer searchBar={searchBar}/>
    </div>
  );
}

export default App;
