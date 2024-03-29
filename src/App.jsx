
import Header from './components/Header/Header';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import IntroSection from './components/IntroSection';
import TabSection from './components/TabSection';
import { useState } from 'react';
import FeedBackSection from './components/FeedBackSection';
// import { Fragment } from 'react';
// install lib for styles: npm i styled-components //look a Header.jsx



function App() {

  const [tab, setTab] = useState('feedback')

  return (
    <>
      <Header/>
      <main>
        <IntroSection/>
        <TabSection active = {tab} onChange={(current) => setTab(current)}/>

        {tab == 'main' && 
          <>
            <FirstSection/>
            <SecondSection/>
          </>
        }
        
        {tab == 'feedback' && 
          <FeedBackSection/>
        }

        
      </main>
    </>
  )
}

export default App
