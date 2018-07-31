import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';
import ChevronRight from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';

class Menu extends Component{
	constructor(props) {
		super(props);
		this.state = {
			name: 'Admin'
		};
	}
	render(){
		
		return (
			<div id="drop">
				<div id="menu-header">
					<img src="Photo/menu-head.png" id="logo"/>
					<img src="Icon/MaskGroup7.png" id="avatar"/>
					<span id="username">{this.state.name}</span>
				</div>
				<ul id="menu-items">
					<li class="menu-item">Agencies</li>
					<li class="menu-item">Advertisers</li>
					<li class="menu-item">Campaigns</li>
					<li class="menu-item">Analytics</li>
					<li class="menu-item">Analytics</li>
					<li class="menu-item">Discovery</li>
					<li class="menu-item">Partners</li>
					<li class="menu-item with-arrow">Tools <ChevronRight style={{'float':'right'}} color="secondary"/></li>
					<li class="menu-item with-arrow">Administration <ChevronRight style={{'float':'right'}} color="secondary"/></li>
					<li class="menu-item with-arrow" id="current">Dashboards <ChevronRight style={{'float':'right'}} color="secondary"/></li>
				</ul>
			</div>
		)
	}
}
export default Menu;