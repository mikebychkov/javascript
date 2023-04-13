import './employees-add-form.css';

function EmployeesAddForm() {

    return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form action="" className="add-form d-flex">
                <input type="text" className="form-control new-post-label" placeholder="Name" />
                <input type="text" className="form-control new-post-label" placeholder="Salary" />
                <button type="submit" className="btn btn-outline-light">Add</button>
            </form>
        </div>
    );
}
export default EmployeesAddForm;