import Header from "./Header";
import React from "react";
import data from './data';
import Content from "./Content";

function App() {
    const content = data.map(item => {
      return (
        <Content 
          item={item}
          
        />
      )
    });

    <>
        <div>
          <Header />
        </div>
    
    </>

}

export default App;
