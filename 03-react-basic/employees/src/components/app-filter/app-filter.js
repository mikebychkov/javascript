import './app-filter.css';

import { Component } from 'react';

class AppFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: "0"
        };
    }

    onBtnClick = (e) => {
        const filter = e.target.getAttribute('data-btn');
        this.setState({active: filter});
        this.props.filterUpdate(filter);
    }

    getBtnCls = (target, actual) => {
        return target === actual ? 'btn-light' : 'btn-outline-light';
    }

    render() {

        const {active} = this.state;

        const allBtnCls = `btn ${this.getBtnCls("0", active)}`;
        const topBtnCls = `btn ${this.getBtnCls("1", active)}`;
        const salBtnCls = `btn ${this.getBtnCls("2", active)}`;

        return (
            <div className="btn-group">
                <button className={allBtnCls} data-btn="0" onClick={this.onBtnClick} type="button">
                    All Employees
                </button>
                <button className={topBtnCls} data-btn="1" onClick={this.onBtnClick} type="button">
                    Top Employees
                </button>
                <button className={salBtnCls} data-btn="2" onClick={this.onBtnClick} type="button">
                    Salary filter
                </button>
            </div>
        );
    }
}
export default AppFilter;
