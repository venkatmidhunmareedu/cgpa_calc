var inp_box = document.querySelector("#inp");
var btn = document.querySelector("#calculate");
var res = document.querySelector("#reset");
var sem = document.querySelectorAll("#sem");
inp_box.value = "0.0";
for(var i =0 ; i< sem.length;i++){
	sem[i].value = "0.0";
}

var loading_res = function(){
	res.classList.toggle("is-loading")
	setTimeout(function(){
		res.classList.toggle("is-loading")
	},200)
}
res.addEventListener("click" , function(){
	loading_res();
	inp_box.value = "0.0";
	for(var i =0 ; i< sem.length;i++){
	sem[i].value = "0.0";
}
});

var loading_btn = function(){
	btn.classList.toggle("is-loading")
	setTimeout(function(){
		btn.classList.toggle("is-loading")
	},200)
}

btn.addEventListener("click" , function(){
	loading_btn();
	var goal = parseFloat(inp_box.value);
	var given = [];
	for(var i =0;i<sem.length;i++){
		var temp = parseFloat(sem[i].value);
		console.log(temp)
		if(temp!=0.0){
			given.push(temp);
		}
	}
	var total = 0.0;
	for(var i =0;i<given.length;i++){
		total = total + given[i];
	}
	console.log(total);
	var rem = ((8*goal)-(total))/(sem.length-given.length);
	console.log(sem.length);
	console.log(given.length);
	console.log(rem);
	for(var i=0;i<sem.length;i++){
		var temp = parseFloat(sem[i].value);
		if(temp==0.0){
			sem[i].value = rem;
		}
	}
});
