import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main';

function App() {
    return (
        <div>
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

export default App;



