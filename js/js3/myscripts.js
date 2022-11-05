function print(){
	let nam = parseInt(document.getElementById('input_nam').value)

	if(isNaN(nam)){
		alert("Vui lòng nhập năm")
	}

	let can = (nam - 3) % 10
	let chi = (nam - 3) % 12

	if(can < 0){
		can = -can
	}

	if(chi < 0){
		chi = -chi
	}

	switch(can){
		case 0:
			can = 'Qúy';
			break;
		case 1:
			can = 'Giáp';
			break;
		case 2:
			can = 'Ất';
			break;
		case 3:
			can = 'Bính';
			break;
		case 4:
			can = 'Đinh';
			break;
		case 5:
			can = 'Mậu';
			break;
		case 6:
			can = 'Kỷ';
			break;
		case 7:
			can = 'Canh';
			break;
		case 8:
			can = 'Tân';
			break;
		case 9:
			can = 'Nhâm';
			break;
	}

	switch(chi){
		case 0:
			chi = 'Hợi';
			break;
		case 1:
			chi = 'Tý';
			break;
		case 2:
			chi = 'Sửu';
			break;
		case 3:
			chi = 'Dần';
			break;
		case 4:
			chi = 'Mão';
			break;
		case 5:
			chi = 'Thìn';
			break;
		case 6:
			chi = 'Tỵ';
			break;
		case 7:
			chi = 'Ngọ';
			break;
		case 8:
			chi = 'Mùi';
			break;
		case 9:
			chi = 'Thân';
			break;
		case 10:
			chi = 'Dậu';
			break;
		case 11:
			chi = 'Tuất';
			break;
	}
	document.getElementById('ket_qua').innerHTML = `${can} ${chi}`
}