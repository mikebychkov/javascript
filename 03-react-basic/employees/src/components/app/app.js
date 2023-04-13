import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploees-add-form/employees-add-form';

function App() {

    const data = [
        {name: 'John W.', salary: 126000, increase: true},
        {name: 'Smith A.', salary: 221000, increase: false},
        {name: 'Jesica S.', salary: 175000, increase: false},
    ];
    
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}
export default App;