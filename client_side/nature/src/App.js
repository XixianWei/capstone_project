import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import AudioPlayer from './components/AudioPlayer';
import YellowStone_img_1 from './background_images/Forest/YellowStone/YellowStone_img_1.jpg';
import YellowStone_img_2 from './background_images/Forest/YellowStone/YellowStone_img_2.jpg'; 
import YellowStone_img_3 from './background_images/Forest/YellowStone/YellowStone_img_3.jpg'; 
import YellowStone_img_4 from './background_images/Forest/YellowStone/Yellowstone_img_4.jpg';   

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <header>
      <nav>
        <span className="nav_bar">

          <div className="burger_menu" tabIndex={0} alt="Menu Icon" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          
          </div>
      
          <ul className="links">
            <li><a href="#" alt="Forest Header Link"> Forest</a></li>
            <li><a href="#" alt="Ocean Header Link"> Ocean</a></li>
            <li><a href="#" alt="Rainforest Header Link"> Rainforest</a></li>
            <li><a href="#" alt="Caves Header Link"> Caves</a></li>
          </ul>
          <button className="add_forest">Add a Forest</button>

          {isMenuOpen &&(
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

    <body>
      <AudioPlayer />
      
      <section className="container">
        <div className="slider_wrapper">
          <div className='slider'>
            <img id="slide_1" src={YellowStone_img_1} alt="YellowStone forest image 1" />
            <img id="slide_2" src={YellowStone_img_2} alt="YellowStone forest image 2" />
            <img id="slide_3" src={YellowStone_img_3} alt="YellowStone forest image 3" />
            <img id="slide_4" src={YellowStone_img_4} alt="YellowStone forest image 4" />
          </div>

          <div className="Slider_nav">
            <a href="#slide_1"></a>
            <a href="#slide_1"></a>
            <a href="#slide_1"></a>
            <a href="#slide_1"></a>
          </div>
        </div>
      </section>
    </body>
    </>

    
  );
}

export default App;
