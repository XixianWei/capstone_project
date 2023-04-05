import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';


function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <span className="nav_bar">
          <div className="burger_menu" tabIndex={0} alt="Menu Icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </div>

          <ul className="links">
            <li><a href="#" alt="Forest Header Link"> Temperate</a></li>
            <li><a href="#" alt="Ocean Header Link"> Subtropical</a></li>
            <li><a href="#" alt="Rainforest Header Link"> Tropical</a></li>
            <li><a href="#" alt="Caves Header Link"> Boreal</a></li>
          </ul>
        
          
          <button className="add_forest">Add a Forest</button>

          {isMenuOpen && (
            <div className="burger_menu_resp">
              <ul>
                <li><a href="#" alt="Forest Header Link"> Forest</a></li>
                <li><a href="#" alt="Ocean Header Link"> Ocean</a></li>
                <li><a href="#" alt="Rainforest Header Link"> Rainforest</a></li>
                <li><a href="#" alt="Caves Header Link"> Caves</a></li>
                <li><button className="add_forest">Add a Forest</button></li>
              </ul>
            </div>
          )}
        </span>
      </nav>
    </header>
  );
}

export default NavBar;
