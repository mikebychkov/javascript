import './search-panel.css';

import { Component } from 'react';

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    inputOnChange = (e) => {
        this.setState({term: e.target.value});
        this.props.termUpdate(e.target.value);
    }

    render() {

        return (
            <input type="text" 
                   className="form-control search-input"
                   placeholder="Employee search" 
                   value={this.state.term}
                   onChange={this.inputOnChange}/>
        );
    }
}
export default SearchPanel;