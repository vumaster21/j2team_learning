// var input = document.getElementById("input_number");
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("myBtn").click();
//   }
// });

function check(){
	let isError = false;
	
	// Name
	let name = document.getElementById('name').value;
	if(name.length === 0){
		document.getElementById('error_name').innerHTML = 'Please enter your full name'
		isError = true;
	}
	else{
		let regex_name = /^[A-Z][a-z]+(( [A-z][a-z]+)+)?$/
		if(regex_name.test(name) == false){
			document.getElementById('error_name').innerHTML = 'Invalid, please enter a valid name (Ex: Nhat Vu)'
			isError = true;
		}
		else{
			document.getElementById('error_name').innerHTML = ''
		}
	}

	// Gender
	let gender = document.getElementsByName('gender');
	let genderError = false;
	for(let i = 0; i < gender.length; i++){
		if(gender[i].checked){
			genderError = true;
		}
	}

	if(genderError == false){
		document.getElementById('error_gender').innerHTML = 'Please choose a gender';
		isError = true;
	}
	else{
		document.getElementById('error_gender').innerHTML = '';
	}

	// Address
	let address = document.getElementById('address').value;
	if(address.length === 0){
		document.getElementById('error_address').innerHTML = 'Please enter your address'
		isError = true;
	}
	else{
		document.getElementById('error_address').innerHTML = ''
	}

	// Email
	let email = document.getElementById('email').value;
	if(email.length === 0){
		document.getElementById('error_email').innerHTML = 'Please enter your email'
		isError = true;
	}
	else{
		let regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
		if(regex_email.test(email) == false){
			document.getElementById('error_email').innerHTML = 'Invalid, please enter a valid email (Ex: abc@gmail.com)'
			isError = true;
		}
		else{
			document.getElementById('error_email').innerHTML = ''
		}
	}

	// Password
	let password = document.getElementById('password').value;
	let regex_password = /^[\w-]{6,}$/;
	if(password.length === 0 || regex_password.test(password) == false){
		document.getElementById('error_password').innerHTML = 'Enter a combination of at least six numbers, letters'
		isError = true;
	}
	else{
		document.getElementById('error_password').innerHTML = ''
	}


	if(isError){
		console.log('0')
		return false;
	}
	else{
		console.log('1')
		return true;
	}
}