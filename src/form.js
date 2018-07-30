import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

class InputForm extends Component{
	render(){
		const { classes } = this.props;
		return (
			<div>
				<form class="form-inputs" noValidate autoComplete="off">
					<TextField style={{width: 250}} select label="Use Agency Yield"/>
					<TextField style={{width: 250}} select label="Australia Hearing"/>
					<TextField style={{width: 250}} select label="All campaigns"/>
					<TextField style={{width: 250}} select label="All layers"/>
					<Input style={{width: 250}} type="date"/>
				</form>
			</div>
			)
	}
}
export default InputForm;