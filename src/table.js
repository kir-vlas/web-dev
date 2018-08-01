import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import Info from '@material-ui/icons/Info';

const styles = theme => ({
  rightIcon: {
    	marginLeft: theme.spacing.unit,
    	color: grey[500],
    	'align-self': 'center',
  	},
  root: {
    flexGrow: 1,
    maxWidth: 1432,
    maxHeight: 502.54,
    padding: theme.spacing.unit * 2,
  },
  table: {
    minWidth: 700,
    fontFamity: '\'Libre Franklin\', sans-serif',
  },
});

let id = 0;

class TableBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: null,
			checkedA: true,
    		checkedB: false,
    		checkedF: false,
		};
		this.handleChange = name => event => {
    	this.setState({ [name]: event.target.checked });
  		};
	}
	createData(camp, imnpr, clicks, conv, spend, goal, cpm, cpc, ctr, effic){
		id +=1;
		return {id, camp, imnpr, clicks, conv, spend, goal, cpm, cpc, ctr, effic};
	}
	render(){
		const { classes } = this.props;
		this.data = [
			this.createData('Roger pen', 1475298, 13935, 448, 4447, 40, 2.36, 2.36, 2.36, 7),
			this.createData('Roger pen', 1475298, 13935, 448, 4447, 40, 2.36, 2.36, 2.36, 7),
			this.createData('Roger pen', 1475298, 13935, 448, 4447, 40, 2.36, 2.36, 2.36, 7),
			this.createData('Roger pen', 1475298, 13935, 448, 4447, 40, 2.36, 2.36, 2.36, 7),
			this.createData('Roger pen', 1475298, 13935, 448, 4447, 40, 2.36, 2.36, 2.36, 7),
		];
		console.log(this.data);
		return(
			<Paper className={classes.root}>
				<div id="table-header">
					<span style={{'margin-left':20}}>CAMPAIGNS</span>
					<div id="table-options">
						<FormGroup style={{'float':'left'}} row>
							<FormControlLabel 
          						control={
            						<Checkbox
            							classes={{root: classes.root, checked: classes.checked}}
              							checked={this.state.checkedA}
              							onChange={this.handleChange('checkedA')}
             							value="checkedA"
             							color="primary"
            						/>
          						}
          						label="CRM"
        					/>
        					<FormControlLabel control={<Checkbox value="checkedB" color="primary" onChange={this.handleChange('checkedB')} classes={{root: classes.root, checked: classes.checked}} />} label="CPC" />
        					<FormControlLabel control={<Checkbox value="checkedF" color="primary" onChange={this.handleChange('checkedF')} classes={{root: classes.root, checked: classes.checked}} />} label="CTR" />
							<Info className={classes.rightIcon} />
						</FormGroup>
					</div>
				</div>
				<div id="table-main">
				<Table className={classes.table}>
        			<TableHead>
          				<TableRow style={{'height': '70px'}}>
            				<TableCell>Campaign</TableCell>
            				<TableCell numeric>Impressions</TableCell>
            				<TableCell numeric>Clicks</TableCell>
           					<TableCell numeric>Conversions</TableCell>
            				<TableCell numeric>Spend</TableCell>
            				<TableCell numeric>Goal Achievement </TableCell>
            				<TableCell numeric>CPM</TableCell>
            				<TableCell numeric>CPC</TableCell>
            				<TableCell numeric>CTR</TableCell>
            				<TableCell numeric>Efficiency Score</TableCell>
          				</TableRow>
        			</TableHead>
        		<TableBody>
          			{this.data.map(n => {
            		return (
              			<TableRow style={{'height': '70px'}} key={n.id}>
                			<TableCell component="th" scope="row">
                  				{n.camp}
                			</TableCell>
                			<TableCell numeric>{n.imnpr}</TableCell>
                			<TableCell numeric>{n.clicks}</TableCell>
                			<TableCell numeric>{n.conv}</TableCell>
                			<TableCell numeric>{n.spend}</TableCell>
                			<TableCell numeric>{n.goal}</TableCell>
                			<TableCell numeric>{n.cpm}</TableCell>
                			<TableCell numeric>{n.cpc}</TableCell>
                			<TableCell numeric>{n.ctr}</TableCell>
                			<TableCell numeric>
                				<div style={{'display':'flex'}}>
                					<div class="bar-value">{n.effic}/10</div>
                					<div class="table-bar"></div>
                					<div class="table-show-bar" style={{'width':n.effic*10}}></div>
                				</div>
                			</TableCell>
              			</TableRow>
            			);
          				})}
        			</TableBody>
      			</Table>
      			</div>
			</Paper>
		)
	}
}
export default withStyles(styles)(TableBox);