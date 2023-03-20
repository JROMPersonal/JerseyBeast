import React, { useState } from 'react';
const jerseys = [
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Utah%20Jazz/UTA_IE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Sacramento%20Kings/SAC_IE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Orlando%20Magic/ORL_AE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Washington%20Wizards/WAS_IE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Atlanta%20Hawks/ATL_AE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Detroit%20Pistons/DET_SE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Brooklyn%20Nets/BKN_IE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Cleveland%20Cavaliers/CLE_AE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/New%20Orleans%20Pelicans/NOP_SE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/San%20Antonio%20Spurs/SAS_CLE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Sacramento%20Kings/SAC_SE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Boston%20Celtics/BOS_IE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/LA%20Clippers/LAC_IE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Oklahoma%20City%20Thunder/OKC_AE.jpg',
  'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Washington%20Wizards/WAS_CE.jpg',
];
function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [jersey1, setJersey1] = useState(getRandomJersey());
  const [jersey2, setJersey2] = useState(getRandomJersey());



  function getRandomJersey() {
    return jerseys[Math.floor(Math.random() * jerseys.length)];
  }

  function handleImageClick(image) {
    setSelectedImage(image);
  }

  function handleNewJerseys() {
    setJersey1(getRandomJersey());
    setJersey2(getRandomJersey());
    setSelectedImage(null);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>NBA Jersey Locker</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href = "https://www.nba.com/city-edition-jerseys/2022-23">
        <img
          src={jersey1}
          alt="Image 1"
          onClick={() => handleImageClick('image1')}
          style={{
            marginRight: '20px',
          }}
        />
        </a>
        <a href = "https://www.nba.com/city-edition-jerseys/2022-23">
        <img
          src={jersey2}
          alt="Image 2"
          onClick={() => handleImageClick('image2')}

          style={{
            marginLeft: '20px',

          }}
        />
        </a>
      </div>
      <button class="button" onClick={handleNewJerseys}>Get New Jerseys</button>
    </div>
  );
}

export default App;

