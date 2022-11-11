var input = document.getElementById("link");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function check(){
	let link = document.getElementById('link').value;
	let regex_id = /^(?:https:\/\/www\.facebook\.com\/)(?:groups\/)?(?:profile.php\?id=)?(\w+(?:\.\w+)?)\/?$/;
	let id = link.match(regex_id);

	if(link.length === 0){
		document.getElementById('error').innerHTML = 'Please enter your facebook link';
	}
	else{
		if(regex_id.test(link) == false){
			document.getElementById('error').innerHTML = 'Invalid, please try again';
		}
		else{
			alert(`ID: ${id[1]}`)
		}
	}
}