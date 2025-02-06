const frm = document.querySelector("form");

frm.addEventListener("submit", (e) =>{
	const primeiro = document.getElementById("inPrimeiro").value;
	const segundo = document.getElementById("inSegundo").value;
	const terceiro = document.getElementById("inTerceiro").value;
	const quarto = document.getElementById("inQuarto").value;
	const return1= document.querySelector("h3");
	
	const media = Number((primeiro * 1)) + Number((segundo * 2)) + Number((terceiro * 3 )) + Number((quarto * 4)) / ( 1 + 2 + 3 + 4 )  
	
	console.log(typeof(media));
	console.log(media);
	
	return1.innerText= `A média Ponderada  entre os valores ${primeiro} , ${segundo} , ${terceiro} , ${quarto} é de : ${media}`;
	
	e.preventDefault();
})
