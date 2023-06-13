import { useFormik } from 'formik';
import './data-form.css';
import { useEffect } from 'react';

const DataForm = ({setOpen, entityName, entityToEdit}) => {

    const ent = entityToEdit();    

    const values = {};
    for (let [key, value] of Object.entries(ent)) {
        values[key] = value;
    }

    const formik = useFormik({
        initialValues: values,
        onSubmit: values => onSubmit(values)
    });
    const fargs = fieldArgs(formik);

    const onSubmit = values => {

        console.log(JSON.stringify(values, null, 2));

        // STATUS HERE + BLOCK SUBMIT BUTTON IF RESPONSE OK + CLOSE BY TIMER IF RESPONSE OK

    }
    
    const closeForm = () => {
        setOpen(false);
    }

    const onEsc = e => {
        if (e.code === 'Escape') {
            closeForm();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onEsc);
            document.body.style.overflow = '';
        }    
    }, []);

    return (
        <div className="modal fade show" id="myModal">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                
                    <div className="modal-header">
                        <h4 className="modal-title header">{entityName}</h4>
                        <button onClick={closeForm} type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <form onSubmit={formik.handleSubmit}>

                        <div className="modal-body">

                        {
                            Object.entries(ent).filter(([key]) => key !== 'checked').map(([key]) => <Field key={key} name={key} fargs={fargs}/>)
                        }
                            
                        </div>
                        
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-outline-primary">Update</button>
                            <button onClick={closeForm} type="button" className="btn btn-outline-primary">Close</button>
                        </div>
                    
                    </form>

                </div>
            </div>
        </div>
    );
}

const fieldArgs = (formik) => {

    return (name, type) => ({
        id: name,
        name: name,
        type: type,
        value: formik.values[name],
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
    });
}

const Field = ({name, fargs}) => {

    return (
        <div className="form-group">
            <label htmlFor={name}>{name}:</label>
            <input className="form-control" {...fargs(name, 'string')}/>
        </div>        
    );
}

export default DataForm;