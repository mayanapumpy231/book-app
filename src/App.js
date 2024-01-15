import React from 'react'
import Home from './components/Home'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Quotes from './components/Quotes';
import BookDetails from './components/bookDetail.jsx';
import NotFound from	 './components/notFound.jsx';

const App = () => {
  return (
		<div>
			<Router>
				<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/quotes' element={<Quotes />}></Route>
				<Route path='Books/:id' element={<BookDetails />}></Route>
				<Route path='*' element={<NotFound/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App
