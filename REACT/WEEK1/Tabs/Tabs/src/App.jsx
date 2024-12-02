import React, { useState } from 'react';

import './App.css'

import Tabs from "./components/Tabs"


function App() {
  const [items, setItems] = useState([
    {content: "Tab1 content shown here"},
    {content: "Tab2 content shown here"},
    {content: "Tab3 content shown here"},
  ])
  
  return (
    <div className="App container">
      <Tabs items={items} />
    </div>
  );
}

export default App;