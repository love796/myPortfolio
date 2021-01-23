import React from "react";

const Contact = () => {
	return (
		<div id="contact">
			<h2>Get in Touch</h2>
			<div id="contact-form">
				<form method="POST" action="#">
					<input type="hidden" name="subject" value="Contact request from personal website" />
					<input type="email" name="replyto" placeholder="Your email" required />
					<textarea name="message" placeholder="Your message" required></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
