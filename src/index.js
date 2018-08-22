import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
class Darshit extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			Task:[{name:"Gajjar Darshit"}],
			update:"Gajjar Darshit"
		}
		this.Task=this.Task.bind(this);
		this.click=this.click.bind(this);
		this.addTask=this.addTask.bind(this);
	}
	addTask(newValue)
	{
		newValue.preventDefault();
		this.setState({
			update:newValue.target.value,
		})
	}
	Task()
	{
		this.setState({
			Task:this.state.Task,
		})
	}

	click(event)
	{
		event.preventDefault();
		let Task=this.state.Task;
		let update=this.state.update;
		Task.push({
			name:update,
			})
		this.setState({
			Task:Task,
		})
	}
	render()
	{
		return(
				<div>
					<div class="todo">
						<form onSubmit={this.click}>
						<input type="text" class="text" value={this.state.update} onChange={this.addTask}/>
							<button type="button" class="add" onClick={this.click}>add+</button>
						</form>
						<div class="Todo">				
							<ol class="li">
							{
								this.state.Task.map((name,index)=>{
									return <Todo key={name.name}names={name} index={index}/>}
									)
							}
							</ol>
						</div>
					</div>
				</div>
		);
	}
}
class Todo extends React.Component{
	render()
	{

		if(this.props.names.name=='Gajjar Darshit'){
			this.props.index+1;
		}
		return(
				<div>
					<li>{this.props.names.name}</li>
				</div>
		);
	}
}
ReactDOM.render(<Darshit/>,document.getElementById("root")) 