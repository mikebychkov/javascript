import './app-filter.css';

function AppFilter() {

    return (
        <div className="btn-group">
            <button className="btn btn-light" type="button">
                All Employees
            </button>
            <button className="btn btn-outline-light" type="button">
                Top Employees
            </button>
            <button className="btn btn-outline-light" type="button">
                Salary filter
            </button>
        </div>
    );
}
export default AppFilter;
