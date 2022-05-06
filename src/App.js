import logo from './logo.svg';
import Home from './components/home';
import "./css/style.css";
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <div className='body'>
      <Header title="Nouvelles technologies de développement web et mobile"/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
