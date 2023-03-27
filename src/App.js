import React, { useState } from 'react';

function App() {


  const [jerseys, setJerseys] = useState([
    {
      id: 1,
      name:"Jazz",
      image:
      [
        {
          id: 1, link: 'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Utah%20Jazz/UTA_AE.jpg'
        },
        {
          id: 2, link:'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Utah%20Jazz/UTA_IE.jpg'
        },
        {
          id: 3, link:'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Utah%20Jazz/UTA_SE.jpg'
        },
        {
          id: 4, link: 'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Utah%20Jazz/UTA_CLE.jpg'
        }
      ]
    },
    {
      id: 2,
      name:"Kings",
      image:
      [
        {
          id: 1, link:'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Sacramento%20Kings/SAC_AE.jpg'
        },
        {
          id: 2, link:'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Sacramento%20Kings/SAC_IE.jpg'
        },
        {
          id: 3, link:'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Sacramento%20Kings/SAC_SE.jpg'
        },
        {
          id: 4, link:'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Sacramento%20Kings/SAC_CE.jpg'
        }
      ]
    },
    {
      id: 3,
      name:"Magic",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Orlando%20Magic/ORL_AE.jpg'
        },
      ]
    },
    {
      id: 4,
      name:"Wizards",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Washington%20Wizards/WAS_IE.jpg'
        },
      ]
    },
    {
      id: 5,
      name:"Hawks",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Atlanta%20Hawks/ATL_AE.jpg'
        },
      ]
    },
    {
      id: 6,
      name:"Pistons",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Detroit%20Pistons/DET_SE.jpg'
        },
      ]
    },
    {
      id: 7,
      name:"Nets",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Brooklyn%20Nets/BKN_IE.jpg'
        },
      ]
    },
    {
      id: 8,
      name:"Cavaliers",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Cleveland%20Cavaliers/CLE_AE.jpg'
        },
      ]
    },
    {
      id: 9,
      name:"Pelicans",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/New%20Orleans%20Pelicans/NOP_SE.jpg'
        },
      ]
    },
    {
      id: 10,
      name:"Spurs",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/San%20Antonio%20Spurs/SAS_CLE.jpg'
        },
      ]
    },
    {
      id: 11,
      name:"Kings",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Sacramento%20Kings/SAC_SE.jpg'
        },
      ]
    },
    {
      id: 12,
      name:"Celtics",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Boston%20Celtics/BOS_IE.jpg'
        },
      ]
    },
    {
      id: 13,
      name:"Clippers",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/LA%20Clippers/LAC_IE.jpg'
        },
      ]
    },
    {
      id: 14,
      name:"Thunder",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Oklahoma%20City%20Thunder/OKC_AE.jpg'
        },
      ]
    },
    {
      id: 15,
      name:"Wizards",
      image:
      [
        {
          'https://appimages.nba.com/p/tr:n-slnfre/2022/uniform/Washington%20Wizards/WAS_CE.jpg'
        },
      ]
    },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [jersey1, setJersey1] = useState(getRandomJersey());
  const [jersey2, setJersey2] = useState(getRandomJersey());
  function getRandomJersey() {
    return jerseys[Math.floor(Math.random() * jerseys.length)];
  }

  function getRandomPicFromImageArray(n) {
    return Math.floor(Math.random() * n.image.length);
  }

  function handleImageClick(image) {
    setSelectedImage(image);
  }
  var ranJersey = getRandomJersey();
  var ranPic_from_jersey = getRandomPicFromImageArray(ranJersey);

  function handleNewJerseys() {
    setJersey1(getRandomJersey());
    setJersey2(getRandomJersey());
    setSelectedImage(null);
  }

  var ranJersey = jerseys[0];
  var ranJersey2 = getRandomJersey();
  var ranPic_from_jersey = getRandomPicFromImageArray(ranJersey);
  var ranPic_from_jersey2 = getRandomPicFromImageArray(ranJersey2);



  return (
    <div style={{ textAlign: 'center' }}>
      <h1 >NBA Jersey Locker</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href = "https://www.nba.com/city-edition-jerseys/2022-23">
        <img
          src={ranJersey.image[ranPic_from_jersey].link}
          alt="Image 1"
          onClick={() => handleImageClick('image1')}
          style={{
            marginRight: '20px',
          }}
        />
        <h2>{ranJersey.name}</h2>
        </a>
        <a href = "https://www.nba.com/city-edition-jerseys/2022-23">
        <img
          src={ranJersey2.image[ranPic_from_jersey2].link}
          alt="Image 2"
          onClick={() => handleImageClick('image2')}

          style={{
            marginLeft: '20px',

          }}
        />
        <h2>{ranJersey2.name}</h2>
        </a>
      </div>
      <button class="button" onClick={handleNewJerseys}>Get New Jerseys</button>
    </div>
  );
}

export default App;

