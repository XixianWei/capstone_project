import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"

function App() {
  return (

    <header>
      <nav>
        <span className="nav_bar">
          <div className="toggle_button" >
            <MenuIcon />
          </div>
          <ul className="links">
            <li><a href="#"> Forest</a></li>
            <li><a href="#"> Ocean</a></li>
            <li><a href="#"> Rainforest</a></li>
          </ul>
          <button className="donate_button">Add a Forest</button>
        </span>
      </nav>
    </header>

  );
}

export default App;
