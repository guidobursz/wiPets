const sendGridMail = require("@sendgrid/mail");
// require("dotenv").config();
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

/* ORIG
function getMessage(username, email) {
  const body = `Thanks ${username} for register....`;
  return {
    to: email,
    from: 'gmb99.ubuntu@gmail.com',
    subject: 'Register OK to Alkemy challenge',
    text: body,
    html: `<strong>${body}</strong>`,
  };
}
*/

async function sendEmail(name, email, newUserId) {
	let msg = {
		to: email,
		from: "wipet.website@gmail.com",
		subject: "thank you for registering",
		text: `Thanks ${name} for registering in the alkemy challenge test. Please click the link to confirm you email:
    http://localhost:3000/auth/${newUserId}/confirmauth  `,
	};
	try {
		await sendGridMail.send(msg);
		console.log("Test email sent successfully");
	} catch (error) {
		console.error("Error sending test email");
		console.error(error);
		if (error.response) {
			console.error(error.response.body);
		}
	}
}

(async () => {
	console.log("Sending test email");
	await sendEmail();
})();

module.exports = {
	sendEmail,
};
