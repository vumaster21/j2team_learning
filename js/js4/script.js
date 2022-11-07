var input = document.getElementById("input_number");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

var count = 0;
function enter(){
	let input_number = parseFloat(document.getElementById('input_number').value);
	let array = [];

	if(Number.isInteger(input_number)){
		if(input_number % 2 == 0){
			document.getElementById('even_and_odd').innerHTML = `${input_number} là số chẵn`
		}
		else{
			document.getElementById('even_and_odd').innerHTML = `${input_number} là số lẻ`
		}
	}
	else{
		document.getElementById('even_and_odd').innerHTML = `${input_number} là số thập phân`
	}

	if(input_number == 2 || input_number == 3 || input_number ==5 || input_number > 1 && input_number % 2 != 0 && input_number % 3 !=0 && input_number % 5 != 0){
		document.getElementById('prime_number').innerHTML = `${input_number} là số nguyên tố`
	}
	else{
		document.getElementById('prime_number').innerHTML = `${input_number} không phải số nguyên tố`	
	}
	
	if(input_number >= 0){
		for(let i = 1; i <= input_number; i++){
			array.push(Math.ceil(i))
		}
	}
	else{
		for(let i = input_number; i <= 1; i++){
			array.push(Math.ceil(i))
		}
	}
	
	document.getElementById('array_numbers').innerHTML = array
	count += 1;
	document.getElementById('count_time').innerHTML = `Bạn đã nhập ${count} lần`
}