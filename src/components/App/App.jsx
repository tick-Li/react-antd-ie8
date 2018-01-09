import React from 'react';
import Nav from 'components/Nav/Nav';
import GetRouter from 'router/router';

export default class App extends React.Component {
    render() {
        return (
			<div>
				<Nav />
				<GetRouter />
			</div>
        )
    }
};

/*(() => {
	$("body").niceScroll({
		cursorwidth:"5px",			
		cursorcolor: "#788087",		
		railalign: "right",			
		railvalign:"borrom",		
		cursorborder:"1px solid #fff",
		cursorborderradius:"5px",	
		background:"",				
		boxzoom: true,				
		scrollspeed:60,				
	}); 
})()*/




