import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import MoveToInbox from '@material-ui/icons/MoveToInbox';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import green from '@material-ui/core/colors/green';
import PropTypes from 'prop-types';

const styles = theme => ({
  	leftIcon: {
    	marginRight: theme.spacing.unit,
  	},
  	rightIcon: {
    	marginLeft: theme.spacing.unit,
  	},
  	root: {
    	color: green[600],
    	'&$checked': {
      	color: green[500],
    	},
  	},
   	checked: {},
  	size: {
    	width: 40,
    	height: 40,
  	},
  	sizeIcon: {
    	fontSize: 20,
  	},
});

class InputForm extends Component{
	constructor(props) {
      	super(props);
      	this.state = {
    		checkedA: true,
    		checkedB: true,
    		checkedF: true,
    		checkedG: true,
  		};
  		this.handleChange = name => event => {
    	this.setState({ [name]: event.target.checked });
  		};
    }
	
	render(){
		const { classes } = this.props;
		return (
			<div>
				<div class="form-inputs">
					<TextField style={{width: 290}} select label="Use Agency Yield"/>
					<TextField style={{width: 290}} select label="Australia Hearing"/>
					<TextField style={{width: 290}} select label="All campaigns"/>
					<TextField style={{width: 290}} select label="All layers"/>
					<Input style={{width: 290}} type="date"/>
				</div>
				<FormGroup style={{width: 290,'float':'left'}}>
				<FormControlLabel 
          			control={
            			<Checkbox
            			classes={{root: classes.root, checked: classes.checked}}
              			checked={this.state.checkedA}
              			onChange={this.handleChange('checkedA')}
             			value="checkedA"
            			/>
          			}
          			label="Use Agency Yield"
        			/>
        			<FormControlLabel control={<Checkbox value="checkedC" classes={{root: classes.root, checked: classes.checked}} />} label="Conversion Breakdown" />
				</FormGroup>
				<Button style={{'float':'right','margin-top':'50px'}} color="primary" variant="contained" className={classes.button}>
        				<span style={{'color':'white'}}>Export Excel</span>
        				<MoveToInbox color="secondary" className={classes.rightIcon} />
      				</Button>
			</div>
			)
	}
}
export default withStyles(styles)(InputForm);