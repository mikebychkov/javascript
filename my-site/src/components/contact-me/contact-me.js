import { useFormik } from 'formik';
import * as yup from 'yup';
import DataService from '../services/data-service';
import RequestService from '../services/request-service';
import './contact-me.css';
import { useEffect, useState } from 'react';
import MySpinner from '../spinner/my-spinner';

const ContactMe = ({token}) => {

	const [sendStatus, setSendStatus] = useState('wait');
	const [ip, setIp] = useState();
	const { postEmail } = DataService(token);
	const { getWithoutAuth } = RequestService();

	const formik = useFormik({
        initialValues: {
			email: '',
			emailmessage: ''
		},
		validationSchema: yup.object({
			email: yup.string()
						.required('Required field')
						.email('Invalid e-mail address format'),
			emailmessage: yup.string()
						.required('Required field')
						.min(100, 'Minimum 100 symbols')
						.max(1000, 'Maximum 1000 symbols')
		}),
		onSubmit: values => onSubmit(values)
	});
	const fargs = fieldArgs(formik);

	const onSubmit = body => {
		
		setSendStatus('loading');

		const formatedBody = {
			address: body.email,
			message: body.emailmessage,
			ip: ip
		};		

		postEmail(JSON.stringify(formatedBody, null, 2))
		.then(r => {

			setSendStatus('success');
			formik.resetForm();

		}).catch(e => {

			setSendStatus('error');

		});
	}

	const sendStatusRender = (status) => {

		switch(status) {
			case 'loading': return (
				<MySpinner/>
			);
			case 'success': return (
				<span className="success">THANK YOU FOR YOUR MESSAGE</span>
			);
			case 'error': return (
				<span className="error">SOMETHING WENT WRONG</span>
			);
			default: return null;
		}
	}

	useEffect(() => {
		getWithoutAuth('https://api.ipify.org/?format=json')
		.then(res => setIp(res.ip))
	}, []);
  
	return (
		<div className="contact-me" id="contact-me">
			<a href="#contact-me"><h2>Contact Me</h2></a>
			<div className="decor"></div>

			{
				sendStatus==='success' ? (
					<div className="thanks flip-in-hor-bottom"></div>
				) : (
					<form onSubmit={formik.handleSubmit}>
						<div className="form-group">
							<input className="form-control" placeholder="Enter email" { ...fargs('email', 'email') }/>
							<ValidationError name="email" formik={formik}/>
						</div>
						<div className="form-group">
							<textarea rows="10" className="form-control" placeholder="Enter message" { ...fargs('emailmessage', 'string') } >
							</textarea> 
							<ValidationError name="emailmessage" formik={formik}/>
						</div>
						<div className="submit-group">
							<button type="submit" className="btn btn-light" disabled={sendStatus==='success'}>Send Message</button>
							{ sendStatusRender(sendStatus) }   
						</div>
					</form>
				)
			}

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

export default ContactMe;
