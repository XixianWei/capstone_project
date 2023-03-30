import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"

function App() {
  return (

    <header>
      <nav>
        <span className="nav_bar">
          <div className="burger_menu" tabIndex={0} alt="Menu Icon">
            <MenuIcon />
          </div>
          <ul className="links">
            <li><a href="#" alt="Forest Header Link"> Forest</a></li>
            <li><a href="#" alt="Ocean Header Link"> Ocean</a></li>
            <li><a href="#" alt="Rainforest Header Link"> Rainforest</a></li>
            <li><a href="#" alt="Caves Header Link"> Caves</a></li>
          </ul>
          <button className="donate_button">Add a Forest</button>
        </span>
      </nav>
    </header>

  );
}

export default App;
