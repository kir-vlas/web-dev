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
    maxHeight: 570,
    padding: theme.spacing.unit * 2,
  },
   rightIcon: {
        marginLeft: theme.spacing.unit,
        color: grey[500],
    },
});


class GraphFourth extends Component{
    constructor(props){
        super(props);
        this.state ={
            data: null,
            options: null,
        };
    }
    render(){
        this.data = {
            labels: ["Video", "Social", "Social"],
            datasets: [{
                label: "Conversions",
                backgroundColor: 'rgb(0, 183, 241)',
                borderColor: 'rgb(0, 183, 241)',
                data: [3250, 2200],
            },
            {
                label: "Conversions",
                backgroundColor: '#44B900',
                borderColor: '#44B900',
                data: [2120],
            }]
        };
        this.options = {
            maintainAspectRatio: false
        }
        const { classes } = this.props;
        return(
                <Paper className={classes.root}>
                    <div class="graph-rectangle-header">
                        <span>CHANNEL PERFORMANCE</span>
                        <Info className={classes.rightIcon} />
                    </div>
                    <HorizontalBar height={380} data={this.data} options={this.options} />
                </Paper>
            )
    }
}
export default withStyles(styles)(GraphFourth);