import Article from "./Article";
import React from 'react';
import articles from '../fixtures'

function App() {
    return (
      <div>
      <h1>Hello, Mars!</h1>
            <h2>Houston, we have a problem</h2>
            <Article article={articles[0]}/>
      </div>
  
    );
  }
  export default App