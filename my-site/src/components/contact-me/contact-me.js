import { useFormik } from 'formik';
import * as yup from 'yup';

import DataService from '../services/data-service';

import './contact-me.css';

const ContactMe = ({token}) => {

	const { postEmail } = DataService(token);

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
		onSubmit: values => onSubmit(JSON.stringify(values, null, 2))
	});

	const onSubmit = body => {
		
		// MAYBE SPINNER HERE

		postEmail(body)
		.then(r => {

			// ON SUCCESS HERE
			console.log('POST EMAIL SUCCESS', r);

		});
	}

	const fargs = fieldArgs(formik);

	return (
		<div className="contact-me" id="contact-me">
			<a href="#contact-me"><h2>Contact Me</h2></a>
			<div className="decor"></div>

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
				<button type="submit" className="btn btn-light">Send Message</button>                    

			</form>

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
