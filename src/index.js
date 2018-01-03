import React from 'react';
import ReactDom from 'react-dom';
import { Button, Checkbox } from 'antd';
import App from 'components/App/App';
import {HashRouter  as Router} from 'react-router-dom';
import './index.less';


ReactDom.render(
	<Router>
		<App/>
	</Router>,
	document.getElementById('app')
);