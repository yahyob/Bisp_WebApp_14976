import './App.css';

import Navbar from './components/navbar/index'
import Header from './components/header/index'
import UniFinder from './components/UniFinder/index'
import Chose from './components/Choose From/index'
import Footer from './components/footer/index'

function App() {
  return (
      <div>
        <Navbar/>
        <Header/>
        <UniFinder/>
        <Chose/>
        <Footer/>
      </div>
  );
}

export default App;
