import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './Nav.less';


export default class GetRouter extends React.Component {
	render() {
		return (
			<header>
				<ul>
					<li><Link to="/"><Button type="primary">Home</Button></Link></li>
					<li><Link to="/page"><Button type="primary">Page</Button></Link></li>
				</ul>
			</header>
		)
	}
};