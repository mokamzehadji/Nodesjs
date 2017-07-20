
var nodemailer = require('nodemailer');
var transport =  nodemailer.createTransport({
	service: 'gmail',
	auth: {
user: 'moka.investissement@gmail.com',
pass: 'Kdfms8080!'

	}
		
});

var mailOptions = {
	from: 'moka.investissement@gmail',
	to: 'kamalmze@gmail.com',
	subject: 'sending Email using Node.js',
	text: 'That was easy!'
	
	
};

transport.sendMail(mailOptions, function(error, info){
if(error){
	console.log(error);
}else {
	console.log('Email sent: '+ info.response);
	
	
}

	
});

	