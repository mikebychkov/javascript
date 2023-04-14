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
            salary: '',
            salaryInvalid: false
        }
    }

    nameChange = (e) => {
        this.setState({name: e.target.value});

    }

    salaryChange = (e) => {
        // this.setState({salary: e.target.value});
        this.setState(state => {
            const newState = {salary: e.target.value};
            if (newState.salary && (newState.salary.match(/\D/g) || newState.salary <= 0)) {
                newState.salaryInvalid = true;
            } else {
                newState.salaryInvalid = false;
            }      
            return newState;
        });
    }

    addEmployee = (e) => {
        e.preventDefault();
        const {onAdd} = this.props;
        if (!this.state.name || !this.state.salary || this.state.salary.match(/\D/g) || this.state.salary <= 0) return;
        onAdd({
            name: this.state.name,
            salary: parseFloat(this.state.salary)
        });
    }
    
    render() {

        const {name, salary, salaryInvalid} = this.state;

        const inputStyle = {};
        if (salaryInvalid) {
            inputStyle.border = '2px solid red';
        }

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form action="" className="add-form d-flex">
                    <input onChange={this.nameChange} value={name} type="text" className="form-control new-post-label" placeholder="Name" />
                    <input onChange={this.salaryChange} value={salary} type="text" className="form-control new-post-label" placeholder="Salary" style = {inputStyle} />
                    <button onClick={this.addEmployee} type="submit" className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
