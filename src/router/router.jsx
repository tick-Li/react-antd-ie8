import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!components/Home/Home';
import Page from 'bundle-loader?lazy&name=page!components/Page/Page';

const Loading = function () {
    return <div></div>
};

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);

export default class GetRouter extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={createComponent(Home)}/>
				<Route path="/page" component={createComponent(Page)}/>
			</Switch>
		)
	}
};