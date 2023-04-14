import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({data, onDelete, onToggle}) {

    return (
        <ul className="app-list list-group">
            {
                data.map(item => {
                    //return <EmployeesListItem name={item.name} salary={item.salary}/>;
                    return <EmployeesListItem key={item.id} {...item} 
                                            onDelete={() => onDelete(item.id)} 
                                            onToggle={(e) => onToggle(item.id, e.currentTarget.getAttribute('data-toggle'))} />;
                })
            }
        </ul>
    );
}
export default EmployeesList;