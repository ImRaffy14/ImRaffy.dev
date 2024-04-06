import { useState } from 'react';
import Header from './Header.jsx'
import Contents from './Contents.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Education from './Education.jsx'
import Footer from './Footer.jsx'
import Contacts from './Contacts.jsx'


function App() {
  const [isLight, setIsLight] = useState(false);

  const lightMode = () => {
    setIsLight(!isLight);
  };

  return (
    <>  
        <section>
          <Header isLight={isLight} toggleLightMode={lightMode}/>
        </section>

        <section>
          <Contents isLight={isLight}/>
        </section>

        <section>
          <Skills isLight={isLight}/>
        </section>

        <section>
          <Projects isLight={isLight}/>
        </section>

        <section>
          <Education isLight={isLight}/>
        </section>

        <section>
          <Contacts isLight={isLight}/>
        </section>

        <section>
          <Footer isLight={isLight}/>
        </section>


    </>
  )
}
 
export default App
