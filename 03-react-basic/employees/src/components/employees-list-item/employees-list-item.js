import './employees-list-item.css';

// function EmployeesListItem(props) {

//     let classStr = 'list-group-item d-flex justify-content-between';
//     if (props.increase) classStr += ' increase';

//     return (
//         // <li className="list-group-item d-flex justify-content-between">
//         <li className={classStr}>
//             <span className="list-group-item-label">{props.name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={props.salary + '$'}/>
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button"
//                     className="btn-cookie btn-sm ">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button"
//                         className="btn-trash btn-sm ">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>        
//     );
// }

function EmployeesListItem(props) {

    const {name, salary, increase, like, onDelete, onToggle} = props;

    let listItemClassStr = 'list-group-item d-flex justify-content-between';
    if (increase) listItemClassStr += ' increase';
    if (like) listItemClassStr += ' like';

    return (
        // <li className="list-group-item d-flex justify-content-between">
        <li className={listItemClassStr}>
            <span onClick={onToggle} data-toggle="like" className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggle}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>        
    );    
}

export default EmployeesListItem;