import React, {Component} from 'react';
import NumberFormat from 'react-number-format';

class Labels extends Component{
	constructor(props){
		super(props);
		this.state = {
			impression: 1475298,
			clicks: 13935,
			goal:448,
			spend:4447
		};
	}
	render(){
		return (
			<div id="header-labels">
				<div class="label">
					<span class="label-head">
						IMPRESSIONS 
					</span>
					<br/>
					<span class="label-val">
						<NumberFormat value={this.state.impression} displayType={'text'} thousandSeparator={true} />
					</span>
				</div>
				<div class="label">
					<span class="label-head">
						CLICKS
					</span>
					<br/>
					<span class="label-val">
						<NumberFormat value={this.state.clicks} displayType={'text'} thousandSeparator={true}  />
					</span>
				</div>
				<div class="label">
					<span class="label-head">
						GOAL ACHIEVEMENT
					</span>
					<br/>
					<span class="label-val">
						<NumberFormat value={this.state.goal} displayType={'text'} thousandSeparator={true} suffix={'%'}  />
					</span>
				</div>
				<div class="label">
					<span class="label-head">
						SPENT BUDGET
					</span>
					<br/>
					<span class="label-val">
						<NumberFormat value={this.state.spend} displayType={'text'} thousandSeparator={true} prefix={'$'} />
					</span>
				</div>
			</div>
			)
	}
}
export default Labels;