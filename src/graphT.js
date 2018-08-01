import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import {Doughnut} from 'react-chartjs-2';
import Info from '@material-ui/icons/Info';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 585,
    maxHeight: 570,
    padding: theme.spacing.unit * 2,
  },
   rightIcon: {
        marginLeft: theme.spacing.unit,
        color: grey[500],
    },
});


class GraphThird extends Component{
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
                backgroundColor: ['rgb(0, 183, 241)','#F39C12'],
                data: [78, 22],
            }],
        };
        this.options = {
            maintainAspectRatio: false
        }
        const { classes } = this.props;
        return(
                <Paper className={classes.root}>
                    <div class="graph-rectangle-header">
                        <span>NEW VS. RETURNING</span>
                        <Info className={classes.rightIcon} />
                    </div>
                    <Doughnut height={380} data={this.data} options={this.options} />
                </Paper>
            )
    }
}
export default withStyles(styles)(GraphThird);