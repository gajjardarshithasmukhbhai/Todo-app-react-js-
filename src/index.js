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
		this.delete=this.delete.bind(this);
		this.editTask=this.editTask.bind(this);
	}
	editTask(array,neww)
	{
		var Task=this.state.Task;
		var Task=Task[array];
		Task['name']=neww;
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
	delete(re)
	{
		let Task=this.state.Task;
		Task.splice(re,1);
		this.setState({
			Task:Task,
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
					<p class="p">v 1.2</p>
						<form onSubmit={this.click}>
						<input type="text" class="text" value={this.state.update} onChange={this.addTask}/>
							<button type="button" class="add" onClick={this.click}>add+</button>
						</form>
						<div class="Todo">				
							<ul class="li">
							{
								this.state.Task.map((name,index)=>{
									return <Todo key={name.name}names={name} index={index} delete={this.delete} edit={this.editTask}/>}
									)
							}
							</ul>
						</div>
					</div>
				</div>
		);
	}
}
class Todo extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			Edit:false,
		}
		this.toggle=this.toggle.bind(this);
		this.reactfrom=this.reactfrom.bind(this);
		this.reactDom=this.reactDom.bind(this);
		this.updatechange=this.updatechange.bind(this);
	}
	toggle()
	{
		let {Edit}=this.state;
		return(
		this.setState({
			Edit:!Edit,
		})
		)
	}
	updatechange(event)
	{
		event.preventDefault();
    	this.props.edit(this.props.index,this.input.value);
    	this.toggle();
	}
	reactfrom()
	{
		return(
		<from onSubmit={this.updatechange}>
			<input type="text" ref={(value)=>{this.input=value}} defaultValue={this.props.names.name}/>
			<button onClick={this.updatechange}>Update</button>
		</from>
		)
	}
	reactDom()
	{
		return(
		<li>{this.props.names.name}
			<button type="button" class="remove" onClick={(event)=>{event.stopPropagation();this.props.delete(this.props.index)}}>remove</button>
			<button type="button" class="Edit" onClick={(event)=>{event.stopPropagation();this.toggle()}}>Edit</button>
		</li>	
		)				
	}
	render()
	{
		let {Edit}=this.state;
		return(
				<div>
				<br/>
				<section>
				{
					Edit?this.reactfrom():this.reactDom()

				}
				</section>
				</div>
		);
	}
}
ReactDOM.render(<Darshit/>,document.getElementById("root"));