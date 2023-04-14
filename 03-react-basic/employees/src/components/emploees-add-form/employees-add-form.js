import './employees-add-form.css';

// function EmployeesAddForm() {

//     return (
//         <div className="app-add-form">
//             <h3>Add new employee</h3>
//             <form action="" className="add-form d-flex">
//                 <input type="text" className="form-control new-post-label" placeholder="Name" />
//                 <input type="text" className="form-control new-post-label" placeholder="Salary" />
//                 <button type="submit" className="btn btn-outline-light">Add</button>
//             </form>
//         </div>
//     );
// }

import { Component } from 'react';

// MANAGED COMPONENTS/ELEMENTS
//
// (1) STATE - 'NAME'
// (2) INPUT 'NAME' - LAUNCHES ON-CHANGE
// (3) ON-CHANGE UPDATES STATE
// (4) WHILE STATE CHANGED REACT RE-RENDER COMPONENT
// (5) ELEMENT VALUE SET FROM STATE
//
// WHEN YOU DON'T HAVE THIS CYCLE SPINNING ON COMPONENT, COMPONENT REFFERED AS UNMANAGED, 
// BECAUSE REACT STAYS ANAWARE OF DATA AND DATA STORED ONLY IN DOM

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    nameChange = (e) => {
        this.setState({name: e.target.value});
    }
    salaryChange = (e) => {
        this.setState({salary: parseFloat(e.target.value)});
    }
    render() {

        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form action="" className="add-form d-flex">
                    <input onChange={this.nameChange} value={name} type="text" className="form-control new-post-label" placeholder="Name" />
                    <input onChange={this.salaryChange} value={salary} type="text" className="form-control new-post-label" placeholder="Salary" />
                    <button type="submit" className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;