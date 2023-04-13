import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({data}) {

    return (
        <ul className="app-list list-group">
            {
                data.map(item => {
                    //return <EmployeesListItem name={item.name} salary={item.salary}/>;
                    return <EmployeesListItem {...item}/>;
                })
            }
        </ul>
    );
}
export default EmployeesList;