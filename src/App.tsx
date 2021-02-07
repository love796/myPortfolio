import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import PageNotFound from "./pages/page-not-found";
import Homepage from "./pages/homepage";

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/404-page-not-found" component={PageNotFound} />
				<Redirect to="/404-page-not-found" />
			</Switch>
		</Router>
	);
};

export default App;
