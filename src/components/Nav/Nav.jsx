import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import './Nav.less';


export default class GetRouter extends React.Component {
	render() {
		return (
			<div className="header">
				<ul>
					<li><NavLink to="/" replace><Button type="primary">Home</Button></NavLink></li>
					<li><NavLink to="/page" replace><Button type="primary">Page</Button></NavLink></li>
				</ul>
			</div>
		)
	}
};