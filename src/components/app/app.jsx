import { Component } from "react";

import "./app.css";

import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import AppEmployeeList from "../app-employees/app-employee-list/app-employee-list";
import AppAddNewEmployee from "../app-add-employee/app-add-new-employee";

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


export default class App extends Component {
	data = [
		{ id: 1, name: 'John Smith', salary: 1000, increase: false },
		{ id: 2, name: 'Alex Shepard', salary: 950, increase: false },
		{ id: 3, name: 'Tom Jackson', salary: 645, increase: false },
		{ id: 4, name: 'Adam Miller', salary: 1245, increase: false },
		{ id: 5, name: 'Mila Yohovich', salary: 877, increase: false },
	]

	toggleIncrease = id => {
		const employee = this.data.find(emp => emp.id === id)
		if (employee) {
			employee.increase = !employee.increase
			this.forceUpdate() //is not recomended

		}
	}

	///////////////// not working
	// toggleIncrease = id => {
	// 	this.data = this.data.map(employee =>
	// 		employee.id === id
	// 			? { ...employee, increase: !employee.increase }
	// 			: employee
	// 	)
	// 	this.render() 
	// }

	render() {
		return (
			<div className='app'>
				<AppInfo />
				<div className='search-and-filter block'>
					<h3>Search or Filter</h3>
					<AppSearch />
					<AppFilter />
				</div>
				<AppEmployeeList
					data={this.data}
					onToggleIncrease={this.toggleIncrease}
				/>
				<AppAddNewEmployee />
			</div>
		)
	}
}
