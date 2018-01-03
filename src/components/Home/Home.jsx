import React from 'react';
import './home.less';
import Img from 'img/home/home';

export default class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<h2>我是Home页</h2>
				<p><img src={Img} /></p>
			</div>
		)
	}
}