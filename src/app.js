import React, {Component} from 'react';
import Menu from './menu.js';
import InputForm from './form.js';
import Labels from './labels.js';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#44B900',},
    secondary: {main: '#FFFFFF'},
  },
});

class App extends Component{
	constructor(props) {
      super(props);
      this.state = { isMenuOpened: false };
    }
	toggleState() {
		this.setState({ isMenuOpened: !this.state.isMenuOpened });
    }
	render(){
		return (
			<MuiThemeProvider theme={theme}>
			<div id="main">
				<div id="menu-content" style={{display: this.state.isMenuOpened ? 'block' : 'none' }}>
					<Menu/>
				</div>
				<div id="main-content" style={{width: this.state.isMenuOpened ? 1771 : 2091 }}>
					<div id="header-main">
						<div id="header-form">
							<div id="menu-icon" onClick={this.toggleState.bind(this)} style={{display: this.state.isMenuOpened ? 'none' : 'flex' }}>
								<div class="menu-icon-rect"></div>
								<div class="menu-icon-rect"></div>
								<div class="menu-icon-rect"></div>
							</div>
							<div id="form">
								<span id="text-header">Analytics</span>
								<InputForm/>
							</div>
						</div>
						<div id="header">
							<Labels/>
							<img src="Photo/MaskGroup5.png" class="under"/>
							<img src="Photo/Rectangle2.png" class="over"/>
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
			</div>
			</MuiThemeProvider>
		)
	}
}
export default App;

ReactDOM.render(
    <App />,
    document.getElementById('react')
)