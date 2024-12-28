import { Component } from 'react'

import './app.css'

import AppInfo from '../app-info/app-info'
import AppSearch from '../app-search/app-search'
import AppFilter from '../app-filter/app-filter'
import AppEmployeeList from '../app-employees/app-employee-list/app-employee-list'
import AppAddNewEmployee from '../app-add-employee/app-add-new-employee'

// export default class App extends Component {
//   render() {
//     const data = [
//       {
//         id: 1,
//         name: "John Smith",
//         salary: 1000,
//         increase: false
//       },
//       {
//         id: 2,
//         name: "Alex Shepard",
//         salary: 950,
//         increase: false
//       },
//       {
//         id: 3,
//         name: "Tom Jackson",
//         salary: 645,
//         increase: false
//       },
//       {
//         id: 4,
//         name: "Adam Miller",
//         salary: 1245,
//         increase: false
//       },
//       {
//         id: 5,
//         name: "Mila Yohovich",
//         salary: 877,
//         increase: false
//       },
//     ];

//     return (
//       <div className="app">
//         <AppInfo />
//         <div className="search-and-filter block">
//           <h3>Search or Filter</h3>
//           <AppSearch />
//           <AppFilter />
//         </div>
//         <AppEmployeeList data={data} />
//         <AppAddNewEmployee />
//       </div>
//     );
//   }
// }

///first variant with state
// export default class App extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			data: [
// 				{ id: 1, name: 'John Smith', salary: 1000, increase: false },
// 				{ id: 2, name: 'Alex Shepard', salary: 950, increase: false },
// 				{ id: 3, name: 'Tom Jackson', salary: 645, increase: false },
// 				{ id: 4, name: 'Adam Miller', salary: 1245, increase: false },
// 				{ id: 5, name: 'Mila Yohovich', salary: 877, increase: false },
// 			],
// 		}
// 	}

// 	toggleIncrease = id => {
//    this.setState(({ data }) => ({
// 			data: data.map(employee =>
// 				employee.id === id
// 					? { ...employee, increase: !employee.increase }
// 					: employee
// 			),
// 		}))
// 	}

// 	render() {
// 		return (
// 			<div className='app'>
// 				 <AppInfo />

// 				<div className='search-and-filter block'>
// 				 <h3>Search or Filter</h3>
// 					 <AppSearch />
// 					 <AppFilter />

// 				</div>
// 					<AppEmployeeList
// 			 		data={this.state.data}
// 					onToggleIncrease={this.toggleIncrease}/>
// 				 <AppAddNewEmployee />

// 			</div>
// 		)
// 	}
// }
////////////////////////////////////second variant

// export default class App extends Component {
// 	data = [
// 		{ id: 1, name: 'John Smith', salary: 1000, increase: false },
// 		{ id: 2, name: 'Alex Shepard', salary: 950, increase: false },
// 		{ id: 3, name: 'Tom Jackson', salary: 645, increase: false },
// 		{ id: 4, name: 'Adam Miller', salary: 1245, increase: false },
// 		{ id: 5, name: 'Mila Yohovich', salary: 877, increase: false },
// 	]

// 	toggleIncrease = id => {
// 		const employee = this.data.find(emp => emp.id === id)
// 		if (employee) {
// 			employee.increase = !employee.increase
// 			this.forceUpdate() //is not recomended

// 		}
// 	}

// 	///////////////// not working
// 	// toggleIncrease = id => {
// 	// 	this.data = this.data.map(employee =>
// 	// 		employee.id === id
// 	// 			? { ...employee, increase: !employee.increase }
// 	// 			: employee
// 	// 	)
// 	// 	this.render()
// 	// }

// 	render() {
// 		return (
// 			<div className='app'>
// 				<AppInfo />
// 				<div className='search-and-filter block'>
// 					<h3>Search or Filter</h3>
// 					<AppSearch />
// 					<AppFilter />
// 				</div>
// 				<AppEmployeeList
// 					data={this.data}
// 					onToggleIncrease={this.toggleIncrease}
// 				/>
// 				<AppAddNewEmployee />
// 			</div>
// 		)
// 	}
// }
//adding newemployee
// export default class App extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			data: [
// 				{ id: 1, name: 'John Smith', salary: 1000, increase: false },
// 				{ id: 2, name: 'Alex Shepard', salary: 950, increase: false },
// 				{ id: 3, name: 'Tom Jackson', salary: 645, increase: false },
// 				{ id: 4, name: 'Adam Miller', salary: 1245, increase: false },
// 				{ id: 5, name: 'Mila Yohovich', salary: 877, increase: false },
// 			],
// 		}
// 	}

// 	toggleIncrease = id => {
// 		this.setState(({ data }) => ({
// 			data: data.map(employee =>
// 				employee.id === id
// 					? { ...employee, increase: !employee.increase }
// 					: employee
// 			),
// 		}))
// 	}

// 	addNewEmployee = (name, salary) => {
// 		this.setState(({ data }) => {
// 			const newEmployee = {
// 				id: data.length + 1, // Generate new ID
// 				name,
// 				salary: parseFloat(salary), // Ensure salary is a number
// 				increase: false,
// 			}
// 			return { data: [...data, newEmployee] }
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className='app'>
// 				<AppInfo />
// 				<div className='search-and-filter block'>
// 					<h3>Search or Filter</h3>
// 					<AppSearch />
// 					<AppFilter />
// 				</div>
// 				<AppEmployeeList
// 					data={this.state.data}
// 					onToggleIncrease={this.toggleIncrease}
// 				/>
// 				<AppAddNewEmployee onAdd={this.addNewEmployee} />
// 			</div>
// 		)
// 	}
// }
/////////////

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					id: 1,
					name: 'John Smith',
					salary: 1100,
					increase: false,
					rise: false,
				},
				{
					id: 2,
					name: 'Alex Shepard',
					salary: 950,
					increase: false,
					rise: false,
				},
			],
			term: '',
			filter: 'all',
		}
		this.employeeId = 3
	}

	onDeleteEmployee = id => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id),
			}
		})
	}

	onAddNewEmployee = (name, salary) => {
		this.setState(({ data }) => {
			return {
				data: [
					...data,
					{
						id: this.employeeId++,
						name,
						salary,
						increase: false,
						rise: false,
					},
				],
			}
		})
	}

	// onToggleIncrease = id => {
	// 	this.setState(({ data }) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) return { ...item, increase: !item.increase }
	// 			return item
	// 		}),
	// 	}))
	// }

	// onToggleRise = id => {
	// 	this.setState(({ data }) => ({
	// 		data: data.map(item => {
	// 			if (item.id === id) return { ...item, rise: !item.rise }
	// 			return item
	// 		}),
	// 	}))
	// }
	////////////////////////refactoring
	onToggleProperty = (id, property) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) return { ...item, [property]: !item[property] }
				return item
			}),
		}))
	}
	onToggleIncrease = id => {
		this.onToggleProperty(id, 'increase')
	}

	onToggleRise = id => {
		this.onToggleProperty(id, 'rise')
	}
////////////////////////////
	onEmployeeSearch = (items, term) => {
		if (term.length === 0) return items

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = term => {
		this.setState({ term })
	}

	onEmployeeFilter = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise)
			case 'salary':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	onFilterSelect = filter => {
		this.setState({ filter })
	}

	render() {
		const { data, term, filter } = this.state
		const {
			onUpdateSearch,
			onFilterSelect,
			onEmployeeFilter,
			onEmployeeSearch,
			onDeleteEmployee,
			onToggleIncrease,
			onToggleRise,
			onAddNewEmployee,
		} = this
		const employees = data.length
		const increased = data.filter(e => e.increase).length
		const visibleData = onEmployeeFilter(onEmployeeSearch(data, term), filter)

		return (
			<div className='app'>
				<AppInfo employees={employees} increased={increased} />
				<div className='search-and-filter block'>
					<h3>Search or Filter</h3>
					<AppSearch onUpdateSearch={onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={onFilterSelect} />
				</div>
				{/* <AppEmployeeList
					data={visibleData}
					onDelete={onDeleteEmployee}
					onToggleIncrease={onToggleIncrease}
					onToggleRise={onToggleRise}
				/> */}
				<AppEmployeeList
					data={visibleData}
					onDelete={this.onDeleteEmployee}
					onToggleIncrease={id => this.onToggleProperty(id, 'increase')}
					onToggleRise={id => this.onToggleProperty(id, 'rise')}
				/>
				<AppAddNewEmployee onAdd={onAddNewEmployee} />
			</div>
		)
	}
}
