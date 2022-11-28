const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const date = document.getElementById('date');
const address = document.getElementById('address');
const hobbies = document.getElementById('hobbies');


form.addEventListener('submit', e => {
	// checkInputs();
	if(checkInputs() == false) {
		e.preventDefault();
	}
	// e.preventDefault();
	
});

function checkInputs() {
	// get the values from the inputs
	const fullnameValue = fullname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const dateValue = date.value.trim();
	const addressValue = address.value.trim();
	const hobbiesValue = hobbies.value.trim();
	let isError = false;

	if(fullnameValue === '') {
		// show error
		// add error class
		// !isFullname(fullnameValue) =[ isFullname(fullnameValue) == false ]
		setErrorFor(fullname, 'Fullname cannot be blank');
		isError = true;
	} else if(!isFullname(fullnameValue)) {
		// add success class
		setErrorFor(fullname, 'Fullname is not valid');
		isError = true;
	} else {
		setSuccessFor(fullname);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		isError = true;
	} else if(!isEmail(emailValue)) {
		setErrorFor(email, 'Email is not valid');
		isError = true;
	} else {
		setSuccessFor(email);
	}

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		isError = true;
	} else if(!isPassword(passwordValue)) {
		setErrorFor(password, 'Enter at least six numbers, letters');
		isError = true;
	} else {
		setSuccessFor(password);
	}

	if(dateValue === '') {
		setErrorFor(date, 'Date cannot be blank');
		isError = true;
	} else {
		setSuccessFor(date);
	}

	if(addressValue === '') {
		setErrorFor(address, 'Address cannot be blank');
		isError = true;
	} else {
		setSuccessFor(address);
	}

	if(hobbiesValue === '') {
		setErrorFor(hobbies, 'Hobbies cannot be blank');
		isError = true;
	} else {
		setSuccessFor(hobbies);
	}

	const gender = document.getElementsByName('gender');
	let errorGender = false;

	for(let i = 0; i < gender.length; i++){
		if(gender[i].checked){
			errorGender = true;
		}
	}

	if(!errorGender) {
		document.getElementById('error_gender').innerHTML = 'Please choose a gender';
		isError = true;
	} else {
		document.getElementById('error_gender').innerHTML = '';
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

function setErrorFor(input, message) {
	const formControl = input.parentElement; // .form-control
	const small = formControl.querySelector('small');

	// add error massage inside small
	small.innerText = message;

	// add error class
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isFullname(fullname) {
	return /^([A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ][a-zàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý]{1,6} ?)+$/.test(fullname);
}

function isEmail(email) {
	return /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function isPassword(password) {
	return  /^[\w-]{6,}$/.test(password);
}