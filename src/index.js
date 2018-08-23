import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Media from "react-media";
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
				<Media
					query="(min-width: 576px)"
					render={()=>
					<div class="panel panel-primary pro">
					<div class="panel-body">
							<p class="text">v 1.2</p>
								<form onSubmit={this.click}>
								<input type="text" class="form-control sk" value={this.state.update} onChange={this.addTask}/>
									<br/><button type="button" class="btn th" onClick={this.click}>add+</button>
								</form>
								<br/>
								<div class="panel panel-primary kl">
									<div class="panel-heading mn">I am Darshit(cimsox owner) and his friends Todo</div>				
									<div class="panel-body ">
										<ul class="list-group">
										{
											this.state.Task.map((name,index)=>{
												return <Todo key={name.name}names={name} index={index} delete={this.delete} edit={this.editTask}/>}
												)
										}
									</ul>
									</div>
								</div>
							</div>
							</div>}/>
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
		<form onSubmit={this.updatechange}>
			<input type="text" class="form-control pp" ref={(value)=>{this.input=value}} defaultValue={this.props.names.name}/>
			<br/>
			<button onClick={this.updatechange} class="btn btn-primary">Update</button>
		</form>
		)
	}
	reactDom()
	{
		return(
		<li class="list-group-item hp">
		{this.props.names.name}&nbsp;
			<button type="button" class="btn btn-danger" onClick={(event)=>{event.stopPropagation();this.props.delete(this.props.index)}}>remove</button>
			&nbsp;<button type="button" class="btn btn-primary" onClick={(event)=>{event.stopPropagation();this.toggle()}}>Edit</button>
		</li>	
		)				
	}
	render()
	{
		let {Edit}=this.state;
		return(
			<Media
					query="(min-width: 576px)"
					render={()=>
				
				<div>
				<br/>
				<section>
				{
					Edit?this.reactfrom():this.reactDom()

				}
				</section>
				</div>
			}/>
		);
	}
}
ReactDOM.render(<Darshit/>,document.getElementById("root"));