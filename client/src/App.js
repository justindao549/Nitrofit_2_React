import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClassesPage from './pages/ClassesPage';
import PricingPage from './pages/PricingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" exact element={<HomePage />} />
			</Routes>
			<AboutPage />
			<ClassesPage />
			<PricingPage />
			<Footer />
		</div>
	);
};

export default App;
