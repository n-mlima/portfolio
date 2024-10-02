
import Footer from './componets/Footer';
import Header from './componets/Header';
import NavMenu from './componets/NavMenu';
import Skills from './componets/Skills';
import Projects from './componets/Projects';
import './style/global.css';

const App = () => {
  return (
    <div className="App">
      <NavMenu/>
      <Header/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default App;
