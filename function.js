
function createMem(num, url){
	if(url!=null){
		for(var i=0;i<num;i++){
			let mem = document.createElement("div");
				document.body.appendChild(mem);
				mem.style.position = "absolute";

				mem.style.height = "150px";
				mem.style.width="150px";

				mem.style.backgroundImage ="url("+url+")";
				mem.style.backgroundSize="100% 100%";

				mem.style.left=Math.floor(Math.random()*window.innerWidth) + "px";
				mem.style.top = Math.floor(Math.random()*window.innerHeight) + "px";
		}
	}else{
		for(var i=0;i<num;i++){
			let mem = document.createElement("div");
			document.body.appendChild(mem);
			mem.style.position = "absolute";

			mem.style.height = "150px";
			mem.style.width="150px";

			mem.style.backgroundImage ="url(images/mem.jpg)";
			mem.style.backgroundSize="100% 100%";

			mem.style.left=Math.floor(Math.random()*window.innerWidth) + "px";
			mem.style.top = Math.floor(Math.random()*window.innerHeight) + "px";
		}
	}
	
}


function createPlanet(x,y,url){
		let pl  = document.createElement("div");
		document.body.appendChild(pl);
		pl.style.position = "absolute";
		pl.style.left=x+"px";
		pl.style.top=y+"px";
		pl.style.width=200 + "px";
		pl.style.height = 200 + "px";
		pl.style.backgroundImage = "url("+url+")";
		pl.style.backgroundSize="100% 100%"
};