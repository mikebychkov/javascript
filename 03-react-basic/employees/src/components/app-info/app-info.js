import './app-info.css';

// function AppInfo() {

//     return (
//         <div className="app-info">
//             <h1>Employees management system</h1>
//             <h2>Employees number:</h2>
//             <h2>Employees bonuses:</h2>
//         </div>
//     );
// }

import { Component } from 'react';

class AppInfo extends Component {

    render() {

        const {total, bonus} = this.props;

        return (
            <div className="app-info">
                <h1>Employees management system</h1>
                <h2>Employees number: {total}</h2>
                <h2>Employees bonuses: {bonus}</h2>
            </div>
        );
    }
}
    
export default AppInfo;