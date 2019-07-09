let userEmail, userPassword, passwordChange, oldPassword, newPassword, confirmNewPassword;
userEmail = prompt('Enter your email');
const minEmail = 6;
const minPassword = 5;

if (!userEmail) {
	alert('Canceled.');
} else if (userEmail.length < minEmail) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
    userPassword = prompt('Enter your password');
    if (!userPassword) {
		alert('Canceled.');
	} else if (userEmail === 'user@gmail.com' && userPassword === 'UserPass' 
		|| userEmail === 'admin@gmail.com' && userPassword === 'AdminPass') {
		passwordChange = confirm('Do you want to change your password?');
		if (passwordChange === false) {
			alert('You have failed the change');
		} else {
			oldPassword = prompt('Enter old password');
			if (!oldPassword || oldPassword !== userPassword) {
				alert('Wrong password');
			} else {
				newPassword = prompt('Enter new password');
				if (newPassword.length < minPassword) {
					alert('It\'s too short password. Sorry.');
				} else {
					confirmNewPassword = prompt('Enter new password again');
					if (confirmNewPassword === newPassword) {
						alert('You have successfully changed your password.');
					} else {
						alert('You wrote the wrong password.');
					}
				}
			}
		}
	} else {
		alert('Wrong password');
	}
} else {
    alert('I don\'t know you');
}