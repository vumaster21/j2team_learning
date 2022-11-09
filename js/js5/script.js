var input = document.getElementById("input_number");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
var arr = [];

function get_input(){
	let number = parseInt(document.getElementById("input_number").value);
	arr.push(number);
	document.getElementById('color_code').innerHTML = `Mã màu đang là #${number}`
	document.getElementById('color_code').style.color = `#${number}`
	document.getElementById('input_number').value = '';
}

function print(){
	let sum = 0;
	let max = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i]
		if(max < arr[i]){
			max = arr[i]
		}
	}
	document.getElementById("elements").innerHTML =`Các phần tử trong mảng là ${arr}`;
	document.getElementById("sum").innerHTML = `Tổng của mảng là ${sum}`;
	document.getElementById("max").innerHTML = `Phần tử lớn nhất trong mảng ${max}`;
}

function even_and_odd(){
	let even = [];
	let odd = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] % 2 == 0){
			even.push(arr[i])
		}
		else{
			odd.push(arr[i])
		}
	}
	document.getElementById("even").innerHTML = `Các phần tử chẵn trong mảng là ${even}`;
	document.getElementById("odd").innerHTML = `Các phần tử lẻ trong mảng là ${odd}`;
}

function isPrime(){
	let prime = [];

	for(let i = 0; i < arr.length; i++){
		if(arr[i] == 2 || arr[i] == 3 || arr[i] == 5 || arr[i] > 1 && arr[i] %2 !=0 && arr[i] %3 != 0 && arr[i] %5 != 0){
			prime.push(arr[i])
		}
		else{
			continue;
		}
		
	}
	document.getElementById("prime_number").innerHTML = `Các số nguyên tố trong mảng là ${prime}`

}