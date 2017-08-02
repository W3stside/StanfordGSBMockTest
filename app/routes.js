import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Questions from './components/Questions';

export default (
	<Switch>
		<Route exact path="/" component={Questions} />
	</Switch>
);
