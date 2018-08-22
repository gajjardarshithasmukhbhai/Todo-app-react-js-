import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
class Darshit extends React.Component{
	render()
	{
		return(
				<div>
					<div class="todo">
						<input type="text" class="text"/>
						<button type="button" class="add">add+</button>
						<Todo/>
					</div>
				</div>
		);
	}
}
class Todo extends React.Component{
	render()
	{
		return(
				<div>
					<div class="Todo">
					</div>
				</div>
		);
	}
}
ReactDOM.render(<Darshit/>,document.getElementById("root"))  