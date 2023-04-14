import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({data, onDelete}) {

    return (
        <ul className="app-list list-group">
            {
                data.map(item => {
                    //return <EmployeesListItem name={item.name} salary={item.salary}/>;
                    return <EmployeesListItem key={item.id} {...item} onDelete={() => onDelete(item.id)} />;
                })
            }
        </ul>
    );
}
export default EmployeesList;