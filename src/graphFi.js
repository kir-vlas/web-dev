import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import {Bar} from 'react-chartjs-2';
import Info from '@material-ui/icons/Info';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1432,
    maxHeight: 800,
    padding: theme.spacing.unit * 2,
  },
   rightIcon: {
    	marginLeft: theme.spacing.unit,
    	color: grey[500],
  	},
});


class GraphFifth extends Component{
	constructor(props){
		super(props);
		this.state ={
			data: null,
			options: null,
		};
	}
	render(){
		this.data = {
        	datasets: [{
        		label: "Conversions",
                type:'line',
                fill: false,
        		backgroundColor: 'rgb(0, 183, 241)',
        		borderColor: 'rgb(0, 183, 241)',
        		data: [1647, 1505, 1831, 1537, 1842, 1858, 1743, 1519, 1562, 1291, 1983, 1777, 1055, 1011, 1084, 1710, 1976, 1294, 1367, 1396],
                yAxisID: 'y-axis-2'
        	},
        	{
        		label: "Conversions",
                type:'bar',
                fill: false,
        		backgroundColor: '#44B900',
        		borderColor: '#44B900',
        		data: [1912, 1904, 1357, 1176, 1560, 1829, 1690, 1448, 1046, 1509, 1106, 1443, 1436, 1915, 1561, 1582, 1504, 1133, 1772, 1980],
                yAxisID: 'y-axis-1'
        	}]
    	};
    	this.options = {
    		maintainAspectRatio: false,
            responsive: true,
            labels: [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
            tooltips: {
                mode: 'label'
            },
            elements: {
                line: {
                    fill: false
                }
            },
            scales: {
                 xAxes: [
                {
                    display: true,
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    },
                    labels: [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
                }
                ],
                yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    }
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true
                    }
                }
            ]
        }
    	}
		const { classes } = this.props;
		return(
				<Paper className={classes.root}>
					<div class="graph-rectangle-header">
						<span>CHANNEL PERFORMANCE</span>
						<Info className={classes.rightIcon} />
					</div>
					<Bar height={350} data={this.data} options={this.options} />
				</Paper>
			)
	}
}
export default withStyles(styles)(GraphFifth);