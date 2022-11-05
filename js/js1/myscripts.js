function print(){
	let luong = parseInt(document.getElementById("input_luong").value);
	let tax;
	let luong_chuan;
	
	if(luong < 0 || isNaN(luong)){
		alert("Vui long nhap lai")
	}
	else {
		if(luong >= 15){
			tax = luong / 100 * 30
		}
		else if(luong >= 7 && luong < 15){
			tax = luong / 100 * 20
		}
		else if(luong < 7){
			tax = luong / 100 * 10
		}
		luong_chuan = luong - tax
		document.getElementById("ket_qua").innerHTML = `Luong: ${luong} | Thue: ${tax} | Luong chuan: ${luong_chuan}`
	}
}