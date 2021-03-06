import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import {HorizontalBar} from 'react-chartjs-2';
import Info from '@material-ui/icons/Info';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 827,
    maxHeight: 600,
    padding: theme.spacing.unit * 2,
  },
   rightIcon: {
    	marginLeft: theme.spacing.unit,
    	color: grey[500],
  	},
});


class GraphFirst extends Component{
	constructor(props){
		super(props);
		this.state ={
			data: null,
			options: null,
		};
	}
	render(){
		this.data = {
        	labels: ["Video", "Social"],
        	datasets: [{
        		label: "News",
        		backgroundColor: 'rgb(0, 183, 241)',
        		borderColor: 'rgb(0, 183, 241)',
        		data: [4500, 2120],
        	},
        	{
        		label: "Returning",
        		backgroundColor: 'rgb(243, 156, 18)',
        		borderColor: 'rgb(243, 156, 18)',
        		data: [],
        	}]
    	};
    	this.options = {
    		maintainAspectRatio: false
    	}
		const { classes } = this.props;
		return(
				<Paper className={classes.root}>
					<div class="graph-rectangle-header">
						<div>
							CHANNEL PERFORMANCE
							<Info className={classes.rightIcon} />
						</div>
						<div class="graph-select-box">
							<select class="select-graph">
								<option>Conversions</option>
							</select>
						</div>
					</div>
					<HorizontalBar height={380} data={this.data} options={this.options} />
				</Paper>
			)
	}
}
export default withStyles(styles)(GraphFirst);