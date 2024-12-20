import { Component } from "react";
import AppEmployeeItem from "../app-employee-item/app-employee-item";

// export default class AppEmployeeList extends Component {
//   render() {
//     const { data } = this.props;
//     const employees = data.map(item => {
//       return <AppEmployeeItem key={item.id} {...item} />;
//     });
  
//     return (
//       <div className="block">
//         {employees}
//       </div>
//     );
//   }
// }
////////////////////////////////erkar tarberak state ov


// const AppEmployeeList = ({ data, onToggleIncrease }) => {
// 	return (
// 		<div className='block'>
// 			<div className='app-employee-list'>
// 				{data.map(employee => (
// 					<AppEmployeeItem
// 						key={employee.id}
// 						{...employee}
// 						onToggleIncrease={() => onToggleIncrease(employee.id)}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	)
// }

// export default AppEmployeeList

/////////////////////////////////2tarberak aveli karch


export default class AppEmployeeList extends Component {
	render() {
		const { data, onToggleIncrease } = this.props

		return (
			<div className='block'>
				<div className='app-employee-list'>
					{data.map(employee => (
						<AppEmployeeItem
							key={employee.id}
							{...employee}
							onToggleIncrease={() => onToggleIncrease(employee.id)}
						/>
					))}
				</div>
			</div>
		)
	}
}
