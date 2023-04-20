import './index.css';
import './App.css';
import {Header} from './index.js';
import {SearchBox} from './index.js';
import {CoatsOfArmsGallery} from './index.js';
import {Footer} from './index.js';
import {namesData} from './index.js';
import { useState } from 'react';



function App() {

  const [pageLanguage, setLanguage] = useState();    
  
  return (

    <div id='PageDiv'>
      <header>
        <Header language={pageLanguage} changeLanguage={setLanguage} changedLanguage/>
      </header>
      <main id='MainContent'>
      <section id='SearchElements'>
       <SearchBox placeHolder={pageLanguage ? "Hae..." : "Search"} coas={namesData}/>
      </section>
      <section>
        <CoatsOfArmsGallery/>
      </section>
      </main>
      <div style={{clear: "both"}}></div>
      <footer>
        <Footer/>
      </footer>
    </div>

  );
}

export default App;
