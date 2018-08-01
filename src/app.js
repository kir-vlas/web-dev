import React, {Component} from 'react';
import Menu from './menu.js';
import InputForm from './form.js';
import Labels from './labels.js';
import TableBox from './table.js';
import GraphFirst from './graphF.js';
import GraphSecond from './graphS.js';
import GraphThird from './graphT.js';
import GraphFourth from './graphFo.js';
import GraphFifth from './graphFi.js';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Icon from '@material-ui/core/Icon';
import AttachMoney from '@material-ui/icons/AttachMoney';
import grey from '@material-ui/core/colors/grey';
import createTypography from '@material-ui/core/styles/createTypography';
import createPalette from '@material-ui/core/styles/createPalette';

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
					<div id="menu-close" onClick={this.toggleState.bind(this)} style={{display: this.state.isMenuOpened ? 'block' : 'none' }}>
					</div>
					<div id="header-main">
						<div id="header-form">
							<div id="menu-icon" onClick={this.toggleState.bind(this)} style={{display: this.state.isMenuOpened ? 'none' : 'flex' }}>
								<div class="menu-icon-rect"></div>
								<div class="menu-icon-rect"></div>
								<div class="menu-icon-rect"></div>
							</div>
							<div id="form">
								<div id="form-header">
									<span id="text-header">Analytics</span>
									<div id="currency">
										<AttachMoney color="primary" /> AUD
									</div>
								</div>
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
						<TableBox />
					</div>
					<div class="graph-box">
						<div class="rectangle-graph-box">
							<GraphFirst/>
						</div>
						<div class="circle-graph-box">
							<GraphSecond/>
						</div>
					</div>
					<div class="graph-box">
						<div class="circle-graph-box">
							<GraphThird/>
						</div>
						<div class="rectangle-graph-box">
							<GraphFourth/>
						</div>
					</div>
					<div id="diagram-box">
						<GraphFifth/>
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