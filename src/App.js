import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Products from './components/Products';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact/*' element={<Contact />} />
				<Route path='/products/*' element={<Products />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
