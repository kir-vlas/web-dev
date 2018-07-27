import React, {Component} from 'react';
import Menu from './menu.js';
import ReactDOM from 'react-dom';

class App extends Component{
	render(){
		return (
			<div id="main">
				<div id="header-main">
					<div id="header-form">
						<Menu />
					</div>
					<div id="header">
					</div>
				</div>
				<div id="table-box">
				</div>
				<div class="graph-box">
					<div class="rectangle-graph-box">
					</div>
					<div class="circle-graph-box">
					</div>
				</div>
				<div class="graph-box">
					<div class="circle-graph-box">
					</div>
					<div class="rectangle-graph-box">
					</div>
				</div>
				<div id="diagram-box">
				</div>
			</div>
		)
	}
}
export default App;

ReactDOM.render(
    <App />,
    document.getElementById('react')
)