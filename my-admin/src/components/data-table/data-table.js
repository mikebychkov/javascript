import { useEffect, useState } from 'react';
import './data-table.css';
import DataForm from '../data-form/data-form';
import DeleteForm from '../delete-form/delete-form';
import { resolveEntityTemplate } from '../services/entity-resolve-service';

const DataTable = ({data, entityName}) => {

    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);
    const [addFormOpen, setAddFormOpen] = useState(false);
    const [editFormOpen, setEditFormOpen] = useState(false);
    const [deleteFormOpen, setDeleteFormOpen] = useState(false);

    useEffect(() => {
        setRows(data.map(r => {
            r.checked = false;
            return r;
        }));
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

    const rowOnClick = id => {
        const newData = rows.map(r => {
            if (r.id === id) {
                r.checked = !r.checked;
            }
            return r;
        });
        setRows(newData);
    }

    const entityToEdit = () => {

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].checked) {
                return rows[i];
            }
        }
        return null;
    }

    const checkedEntities = () => {

        const rsl = [];
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].checked) {
                rsl.push(rows[i]);
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
                        rows.map(r => <DataRow key={r['id']} cols={cols} row={r} rowOnClick={rowOnClick}/>)
                    }                    
                </tbody>
            </table>
            {
                addFormOpen ? <DataForm setOpen={setAddFormOpen} entityName={entityName} entityToEdit={() => resolveEntityTemplate(entityName)}/> : null
            }
            {
                editFormOpen ? <DataForm setOpen={setEditFormOpen} entityName={entityName} entityToEdit={entityToEdit}/> : null
            } 
            {
                deleteFormOpen ? <DeleteForm setOpen={setDeleteFormOpen} entityName={entityName} entitiesToDelete={checkedEntities}/> : null
            }
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
        <tr onClick={() => rowOnClick(row.id)}>
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