import './contact-me.css';

const ContactMe = () => {
	return (
		<div class="contact-me">
			<a href="#contact-me" id="contact-me"><h2>Contact Me</h2></a>
			<div class="decor"></div>

			<form>

				<div class="form-group">
					<input type="email" class="form-control" placeholder="Enter email" id="email" name="email"/>
				</div>
				<div class="form-group">
					<textarea rows="10" class="form-control" placeholder="Enter message" id="emailmessage" name="emailmessage">
					</textarea> 
				</div>
				<button type="submit" class="btn btn-light">Send Message</button>                    

			</form>

		</div>
	);
}

export default ContactMe;
