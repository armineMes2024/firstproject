import { Component } from 'react'
import './app-add-new-employee.css'

// export default class AppAddNewEmployee extends Component {
//   render() {
//     return (
//       <div className="add-new-employee block">
//         <h3>Add new Employee</h3>

//         <div className="add-new-employee-group">
//           <input type="text" placeholder="Employee name" />
//           <input type="text" placeholder="Employee salary" />
//           <button type="button">Add</button>
//         </div>
//       </div>
//     );
//   }
// }
/////////add newemployee

export default class AppAddNewEmployee extends Component {
	state = {
		name: '',
		salary: '',
	}

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()
		const { name, salary } = this.state

		if (name && salary) {
			this.props.onAdd(name, salary)
			this.setState({ name: '', salary: '' })
		}
	}

	render() {
		return (
			<div className='add-new-employee block'>
				<h3>Add New Employee</h3>

				<form onSubmit={this.handleSubmit}>
					<div className='add-new-employee-group'>
						<input
							type='text'
							name='name'
							placeholder='Name'
							value={this.state.name}
							onChange={this.handleInputChange}
						/>
						<input
							type='number'
							name='salary'
							placeholder='Salary'
							value={this.state.salary}
							onChange={this.handleInputChange}
						/>
						<button type='submit'>Add Employee</button>
					</div>
				</form>
			</div>
		)
	}
}
