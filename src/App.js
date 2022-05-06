import logo from './logo.svg';
import Home from './components/home';
import "./css/style.css";
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <div className='body'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
