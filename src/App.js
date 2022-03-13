import Header from "./Header";
import React from "react";
import data from './data';
import Content from "./Content";

function App() {
  <Header />
  const content = data.map(item => {
    return (
      <Content 
        item={item}
      />
    )
  })    
;
}

export default App;
