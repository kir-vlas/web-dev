import React, {Component} from 'react';

class Menu extends Component{
	constructor(props) {
      super(props);
      this.state = { isOpened: false };
    }
	toggleState() {
		this.setState({ isOpened: !this.state.isOpened });
    }
	render(){
		let dropDown;
		if (this.state.isOpened){
			dropDown = <div id="dropdown-menu">OPENED</div>
		}
		return (
			<div onClick={this.toggleState.bind(this)}>
				Menu
				{dropDown}
			</div>
		)
	}
}
export default Menu;