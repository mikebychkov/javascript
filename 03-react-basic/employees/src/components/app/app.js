import './app.css';

import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploees-add-form/employees-add-form';

// function App() {

//     const data = [
//         {name: 'John W.', salary: 126000, increase: true, id: 1},
//         {name: 'Smith A.', salary: 221000, increase: false, id: 2},
//         {name: 'Jesica S.', salary: 175000, increase: false, id: 3},
//     ];
    
//     return (
//         <div className="app">
//             <AppInfo/>

//             <div className="search-panel">
//                 <SearchPanel/>
//                 <AppFilter/>
//             </div>

//             {/* PROPERTY DRILL - CHECK ON-DELETE */}
//             <EmployeesList data={data} onDelete={id => console.log(id)}/> 
//             <EmployeesAddForm/>
//         </div>
//     );
// }

class App extends Component {

    constructor(props) {
        super(props);
        const data = [
            {name: 'John W.', salary: 126000, increase: true, like: false, id: 1},
            {name: 'Smith A.', salary: 221000, increase: false, like: false, id: 2},
            {name: 'Jesica S.', salary: 175000, increase: false, like: false, id: 3},
        ];
        this.state = {
            data: data,
            term: '',
            filter: '0'
        }
    }

    termUpdate = (term) => {
        this.setState({term: term});
    }

    filterUpdate = (filter) => {
        this.setState({filter: filter});
    }

    searchEmployees = (arr, term) => {
        return arr.filter(it => it.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }

    filterEmployees = (arr, filter) => {
        switch (filter) {
            case '1': return arr.filter(it => it.like);
            case '2': return arr.filter(it => it.salary > 100000);
            default:
        }
        return arr;
    }

    deleteById = (id) => {
        this.setState(state => {
            const newData = state.data.filter(item => item.id !== id);
            return ({data: newData});
        });        
    }

    addEmployee = (emp) => {
        this.setState(state => {
            const newData = state.data.slice();
            const newId = state.data.map(it => it.id).reduce((a, b) => Math.max(a, b)) + 1;
            newData.push({
                name: emp.name,
                salary: emp.salary,
                increase: false,
                id: newId
            });
            return ({data: newData});
        });        
    }

    toggleById = (id, prop) => {
        this.setState(state => ({data: state.data.map(it => {
                if (it.id === id) {
                    return {...it, [prop]: !it[prop]};
                }
                return it;
            })
        }));
    }

    render() {

        const {data, term, filter} = this.state;
        const visibleData = this.searchEmployees(data, term);
        const filteredData = this.filterEmployees(visibleData, filter);

        return (
            <div className="app">
                <AppInfo total={data.length} bonus={data.filter(it => it.increase).length}/>
    
                <div className="search-panel">
                    <SearchPanel termUpdate={this.termUpdate}/>
                    <AppFilter filterUpdate={this.filterUpdate}/>
                </div>
    
                {/* PROPERTY DRILL - CHECK ON-DELETE */}
                <EmployeesList data={filteredData} onDelete={this.deleteById} onToggle={this.toggleById}/> 
                <EmployeesAddForm onAdd={this.addEmployee}/>
            </div>
        );
    }
}

export default App;