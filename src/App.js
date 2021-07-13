import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductListing from './components/ProductListing/ProductListing';
import ProductDetail from './components/ProuductDetail.js/ProductDetail';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={ProductListing} />
				<Route
					exact
					path='/product/:productId'
					component={ProductDetail}
				/>
				<Route path='*'>404 Not Found!</Route>
			</Switch>
		</Router>
	);
}

export default App;
