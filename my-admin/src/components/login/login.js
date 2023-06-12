import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import './login.css';
import DataService from '../services/data-service';
import MySpinner from '../spinner/my-spinner';

const Login = ({setToken}) => {

    const [loginState, setLoginState] = useState('');

    const formik = useFormik({
        initialValues: {
            username: '',
            pswd: ''
        },
        validationSchema: yup.object({
            username: yup.string().required('Required field'),
            pswd: yup.string().required('Required field')
        }),
        onSubmit: values => onSubmit(values)
    });

    const fargs = fieldArgs(formik);

    const onSubmit = values => {

        setLoginState('loading');

        const { getToken } = DataService();
        getToken(values.username, values.pswd)
            .then(json => {
                localStorage.at = json.token;
                setToken(json.token);
            }).catch(e => {
                setLoginState('error');
                console.error(e);
            });
    }

    const renderLoginState = () => {
        switch(loginState) {
            case 'loading': return <MySpinner/>;
            case 'error': return <div className="error">SOMETHING WENT WRONG</div>;
            default: return null;
        }
    }

    return (
        <div className="container login-container">
            <h2>MY ADMIN</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <input className="form-control" placeholder="Username" {...fargs('username', 'string')} autoComplete="user name"/>
                    <ValidationError name="username" formik={formik}/>
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Password" {...fargs('pswd', 'password')} autoComplete="user password"/>
                    <ValidationError name="pswd" formik={formik}/>
                </div>
                <div className="text-right">
                    <button type="submit" className="btn btn-outline-primary">LogIn</button>
                </div>
            </form>
            {renderLoginState()}
        </div>
    );
}

const ValidationError = ({name, formik}) => {

    return (
        formik.errors[name] && formik.touched[name] ? <div className="error">{formik.errors[name]}</div> : null
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

export default Login;