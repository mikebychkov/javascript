import { useEffect, useState, useMemo } from 'react';
import './data-table.css';
import DataForm from '../data-form/data-form';
import DeleteForm from '../delete-form/delete-form';
import { resolveEntityTemplate } from '../services/entity-resolve-service';
import { useSelector, useDispatch } from 'react-redux';
import { selectAll, entityUpdated } from '../redux/entitySlice';

const DataTable = ({entityName, postRequest, deleteRequest}) => {

    const data = useSelector(selectAll);

    const [cols, setCols] = useState([]);
    const [addFormOpen, setAddFormOpen] = useState(false);
    const [editFormOpen, setEditFormOpen] = useState(false);
    const [deleteFormOpen, setDeleteFormOpen] = useState(false);

    useEffect(() => {

        const cols = [];
        if (data.length > 0) {
            for (const [key] of Object.entries(data[0])) {
                if (key !== 'checked') {
                    cols.push(key);
                }
            }
        }
        setCols(cols);
    }, [data]);

    const dispatch = useDispatch();

    const rowOnClick = row => {

        dispatch(entityUpdated({...row, checked: !row.checked}))
    }

    const entityToEdit = () => {

        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) {
                return data[i];
            }
        }
        return null;
    }

    const checkedEntities = () => {

        const rsl = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) {
                rsl.push(data[i]);
            }
        }
        return rsl;
    }

    const onAdd = () => {

        if (resolveEntityTemplate(entityName)) {
            setAddFormOpen(true);
        }
    }

    const onEdit = () => {

        if (entityToEdit()) {
            setEditFormOpen(true);
        }
    }

    const onDelete = () => {

        if (checkedEntities().length > 0) {
            setDeleteFormOpen(true);
        }
    }

    const addFormRender = useMemo(() => {
        return (
            addFormOpen ? 
            <DataForm setOpen={setAddFormOpen} entityName={entityName} requestMethod={postRequest} entityToEdit={() => resolveEntityTemplate(entityName)}/> 
            : null
        );
    // eslint-disable-next-line
    }, [addFormOpen]);

    const editFormRender = useMemo(() => {
        return (
            editFormOpen ? 
            <DataForm setOpen={setEditFormOpen} entityName={entityName} requestMethod={postRequest} entityToEdit={entityToEdit}/> 
            : null  
        );
    // eslint-disable-next-line
    }, [editFormOpen]);

    const deleteFormRender = useMemo(() => {
        return (
            deleteFormOpen ? 
            <DeleteForm setOpen={setDeleteFormOpen} entityName={entityName} requestMethod={deleteRequest} entitiesToDelete={checkedEntities}/> 
            : null
        );
    // eslint-disable-next-line
    }, [deleteFormOpen]);

    return (
        data.length > 0 ?
        <>
            <div className="btn-group">
                <button onClick={onAdd} type="button" className="btn btn-outline-primary">Add</button>
                <button onClick={onEdit} type="button" className="btn btn-outline-info">Edit</button>
                <button onClick={onDelete} type="button" className="btn btn-outline-danger">Delete</button>
            </div> 
            <table className="table table-hover">
                <thead>
                    <DataHeader cols={cols}/>
                </thead>
                <tbody>
                    {
                        data.map(r => <DataRow key={r['id']} cols={cols} row={r} rowOnClick={rowOnClick}/>)
                    }                    
                </tbody>
            </table>
            {addFormRender}
            {editFormRender} 
            {deleteFormRender}
       </>
        : null
    );
}

const DataHeader = ({cols}) => {

    return (
        <tr>
            <th>#</th>
            {
                cols.map((c, i) => <th key={i}>{c}</th>)
            }
        </tr>
    );
}

const DataRow = ({cols, row, rowOnClick}) => {

    return (
        <tr onClick={() => rowOnClick(row)}>
            <td>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" checked={row.checked} readOnly/>
                </div>
            </td>
            {
                cols.map((c, i) => <td key={i}>{row[c]}</td>)
            }
        </tr>
    );
}

export default DataTable;