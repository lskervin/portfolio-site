import React, { useState, useEffect } from 'react';
import './portfolio.css';

const tabsContent = [
    {
      id: 1,
      title: 'Drinkologist Website',
      image: 'https://store.meteor.ie/assets/images/global/grey-x.svg',
      header: 'HTML, CSS, JavaScript, and node js',
      paragraphs: [
        'Sit by the fire sit in window and stare oooh, a bird, yum and groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked or meowing non stop for food. Destroy the blinds walk on car leaving trail of paw prints on hood and windshield but chew on cable sweet beast, and paw at beetle and eat it before it gets away lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr. oooh, a bird, yum purrrrrr.',
      ],
      iframe: 'https://lskervin.github.io/drinkologist/'
    },
    {
      id: 2,
      title: 'GameSphere Website',
      image: 'https://store.meteor.ie/assets/images/global/grey-x.svg',
      header: 'HTML, CSS, Vite React js, and node js',
      paragraphs: [
        'Ham hock boudin brisket shankle ball tip pig turkey, short ribs burgdoggen prosciutto ribeye sausage jerky pork chop. Shank pastrami bacon, salami cow shankle ham. Boudin picanha flank andouille kielbasa, pastrami bacon tongue. Rump boudin pork belly, jerky ball tip beef filet mignon cow shankle hamburger picanha salami ham pork turkey.',
      ],
      iframe: 'https://lskervin.github.io/GameSphere/'
    },
    {
      id: 3,
      title: 'Leasing App',
      image: 'https://store.meteor.ie/assets/images/global/grey-x.svg',
      header: 'HTML, CSS, Vite React js, FLASK-Python and node js',
      paragraphs: [
        'Dipshit with a nine-toed woman. Dolor sit amet, consectetur adipiscing elit praesent ac magna. You don’t go out and make a living dressed like that in the middle of a weekday. Justo pellentesque ac lectus quis. Yeah. Roadie for Metallica. Speed of Sound Tour. Elit blandit fringilla a ut turpis praesent felis. Keep your ugly fucking goldbricking ass out of my beach community! Ligula, malesuada suscipit malesuada non, ultrices non urna sed orci ipsum, placerat id.',
      ],
      iframe: 'https://lskervin.github.io/leasing-app/'
    },
    {
      id: 4,
      title: 'Ezfuel Website',
      image: 'https://store.meteor.ie/assets/images/global/grey-x.svg',
      header: 'HTML, CSS, Vite React js, FLASK-Python and node js',
      paragraphs: [
        'De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Panduntur brains portae rotting inferi. Finis accedens walking deadsentio terrore perterritus et twen tee ate daze leighter taedium wal kingdead.',
      ],
      iframe: 'https://lskervin.github.io/ezfuel/'
    }
  ];
  
  function Portfolio() {
    const [activeTab, setActiveTab] = useState(1);
    const [loading, setLoading] = useState();
  
    useEffect(() => {
      document.getElementById(`tab-${activeTab}`).classList.add('show-tab');
      document.querySelector(`.tab-name-${activeTab}`).classList.add('show-header');
      setLoading(true);
      setLoading(false);
    }, [activeTab]);
  
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };

    const handleIframeLoad = () => {
      setLoading(false);
      console.log(loading);
    };
    return (
      <main>
        <section className="challenge-name">
          <p>Portfolio</p>
          <hr />
        </section>
        <section id="tab-wrapper">
          {tabsContent.map(tab => (
            <article key={tab.id}>
              <h3 
                className={`tab-name tab-name-${tab.id} ${activeTab === tab.id ? 'show-header' : ''}`} 
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </h3>
              <section 
                id={`tab-${tab.id}`} 
                className={`tabs ${activeTab === tab.id ? 'show-tab' : ''}`}
              >
                <section className="text-wrapper">
                  <h2>{tab.header}</h2>
                  {tab.paragraphs.map((para, index) => (
                    <p style={{color:'white'}}key={index}>{para}</p>
                  ))}
                  {loading ? 
                  (<div className="loading">
                    <div class="line"></div>
                    <div class="line d1"></div>
                    <div class="line d2"></div>
                    <div class="line d3"></div>
                    <div class="line d4"></div>
                    <div class="line d5"></div>
                    <br/>
                    <div class="caption" style={{display: 'flex', alignItems: 'center'}}>
                        <p style={{margin: '0 -30rem 0 25px'}}>Loading</p>
                        <div style={{margin:0}} class="dot">..</div>
                        <div style={{margin:0}} class="dot">..</div>
                        <div style={{margin:0}} class="dot">..</div>
                    </div>
                  </div>): 
                  (<iframe
                    src={tab.iframe}
                    title={`Iframe ${tab.id}`}
                    width="95%"
                    height="1000px"
                    style={{ border: 'none', margin: '0 auto'}}
                    onLoad={handleIframeLoad}
                  ></iframe>)}
                </section>
              </section>
            </article>
          ))}
        </section>
      </main>
    );
  }

export default Portfolio;
