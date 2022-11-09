var input = document.getElementById("input_number");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function calculate(){
	// Array
	let arr = [];
	let arrStr = '';
	let num = parseInt(document.getElementById('input_number').value);
	if(isNaN(num)){
		alert('Vui long nhap so phan tu')
		return;
	}

	for(let i = 0; i < num; i++){
		arr.push(Math.floor(Math.random() * 21));
		arrStr += arr[i] + ' ';
	}

	// Max - Min
	let max = arr[0];
	let min = arr[0];
	for(let i = 1; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i]
		}
		if(min > arr[i]){
			min = arr[i]
		}
	}

	// Sum
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i]
	}

	
	document.getElementById('array').value = arrStr;
	document.getElementById('max').value = max;
	document.getElementById('min').value = min;
	document.getElementById('sum').value = sum;
}