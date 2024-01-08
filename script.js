// your code here
// let name = document.getElementById("name");
// let year = document.getElementById("year");
let btn = document.getElementById("button");

btn.addEventListener("click",(event)=>{
	event.preventDefault();
	let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;
	if(name!="" && year!=""){
		document.getElementById("url").innerText = `https://localhost:8080/?name=${name}&year=${year}`
	}
	if(name=="" && year!=""){
		document.getElementById("url").innerText = `https://localhost:8080/?year=${year}`
	}
	if(name!="" && year==""){
		document.getElementById("url").innerText = `https://localhost:8080/?name=${name}`
	}
})