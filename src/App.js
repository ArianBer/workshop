import './App.css';
import React, {useState} from 'react';
import Sidebar from './Components/Sidebar';

function App() {
  const [categoryClicked, setCategoryClicked] = useState('');

  return (
    <div className="wsh-app">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Sidebar setCategoryClicked={setCategoryClicked}/>
          </div>
          <div className="col-lg-8">
            <p>{categoryClicked}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
