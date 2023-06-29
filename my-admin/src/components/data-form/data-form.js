import { useFormik } from 'formik';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";

import { entityUpdated } from '../redux/entitySlice';
import RequestState from '../services/request-state';
import useDate from '../services/use-date';

import './data-form.css';
import "react-datepicker/dist/react-datepicker.css";

const DataForm = ({setOpen, entityName, entityToEdit, requestMethod, setUpdateData}) => {

    const {requestState, setRequestState, renderRequestState} = RequestState();

    const ent = entityToEdit();  

    const values = {};

    if (ent) {        
        for (let [key, value] of Object.entries(ent)) {
            values[key] = value;
        }    
    }

    const formik = useFormik({
        initialValues: values,
        onSubmit: values => onSubmit(values)
    });
    const fargs = fieldArgs(formik);

    const dispatch = useDispatch();

    const onSubmit = values => {

        setRequestState('loading');

        if (!values.id) {
            values.id = uuidv4();
        }

        // console.log(JSON.stringify(values, null, 2));

        requestMethod(JSON.stringify(values, null, 2))
        .then(r => {
            setRequestState('success');
            dispatch(entityUpdated(values));
            setTimeout(() => {
                closeForm();
            }, 3000);
        })
        .catch(e => {
            setRequestState('error');
        });
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
    // eslint-disable-next-line  
    }, []);

    const btnState = () => {
        if (requestState === 'loading' || requestState === 'success') {
            return {disabled: true};
        }
        return {};
    }

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
                            Object.entries(values).filter(([key]) => key !== 'checked').map(([key]) => <Field key={key} name={key} fargs={fargs} formik={formik}/>) 
                        }                            
                        </div>
                        
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-outline-primary" {...btnState()}>Update</button>
                            <button onClick={closeForm} type="button" className="btn btn-outline-primary">Close</button>
                        </div>

                    </form>

                    {
                        renderRequestState()
                    }

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

const Field = ({name, fargs, formik}) => {

    const { myDate, setMyDate, formatDate } = useDate(formik.values[name]);

    const onDateChange = date => {
        setMyDate(date);
        formik.values[name] = formatDate(date);
    };

    return (
        <div className="form-group">
            <label htmlFor={name}>{name}:</label>
            <div className='d-flex'>
                <input className="form-control" {...fargs(name, 'string')}/>
                {
                    name === 'date' 
                    ? <DatePicker className='btn btn-outline-dark btn-calendar' 
                    selected={myDate}
                    onSelect={onDateChange} 
                    onChange={onDateChange}/> 
                    : null
                }
            </div>
        </div>        
    );
}

export default DataForm;