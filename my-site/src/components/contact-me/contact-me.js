import './contact-me.css';

const ContactMe = () => {

	const onSubmit = e => {
		e.preventDefault();
		console.log('submitting email message');
	}

	return (
		<div className="contact-me">
			<a href="#contact-me" id="contact-me"><h2>Contact Me</h2></a>
			<div className="decor"></div>

			<form onSubmit={onSubmit}>

				<div className="form-group">
					<input type="email" className="form-control" placeholder="Enter email" id="email" name="email"/>
				</div>
				<div className="form-group">
					<textarea rows="10" className="form-control" placeholder="Enter message" id="emailmessage" name="emailmessage">
					</textarea> 
				</div>
				<button type="submit" className="btn btn-light">Send Message</button>                    

			</form>

		</div>
	);
}

export default ContactMe;
