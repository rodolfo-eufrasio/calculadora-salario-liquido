 function calcsl() {
	var irrfResul, inssResul, inssSal, irrfSal;
	var	salHora = document.getElementById('txtsalhora').value;
	var	quantHoras = document.getElementById('txtqthoras').value;
	var	dep = document.getElementById('txtdep').value;
	var depResul = (dep * 189.59); //DEPENDENTES
	var salBrut = (salHora * quantHoras).toFixed(2); //SÁLARIO BRUTO

	// INICIO DA TABELA INSS
	var	inssPerc1 = (8 / 100);
	var	inssPerc2 = (9 / 100);
	var	inssPerc3 = (11 /100);
	var	inssValor01 = 1751.81;
	var	inssValor21 = 1751.82;
	var	inssValor22 = 2919.72;
	var	inssValor31 = 2919.73;
	var	inssValor32 = 5839.45;
	// FIM DA TABELA INSS

	// INICIO DA TABELA IRRF
	var	irrfPerc1 = (0 / 100);
	var	irrfPerc2 = (7.5 / 100);
	var	irrfPerc3 = (15 /100);
	var	irrfPerc4 = (22.5 /100);
	var	irrfPerc5 = (27.5 /100);
	var	irrfDedu1 = (0);
	var	irrfDedu2 = (142.8);
	var	irrfDedu3 = (354.8);
	var	irrfDedu4 = (636.13);
	var	irrfDedu5 = (869.36);
	var	irrfValor01 = 1903.98;
	var	irrfValor21 = 1903.99;
	var	irrfValor22 = 2826.65;
	var	irrfValor31 = 2826.66;
	var	irrfValor32 = 3751.05;
	var	irrfValor41 = 3751.06;
	var	irrfValor42 = 4664.68;
	// FIM DA TABELA IRRF

	//LÓGICA INSS
	if(salBrut <= inssValor01){
		inssSal = (salBrut * inssPerc1);
		inssResul = (salBrut - inssSal - depResul);
	 	inssmsg = inssSal.toFixed(2);
	 	porcinssmsg = (inssPerc1*100).toFixed(2);
	 }else if ((salBrut >= inssValor21) && (salBrut<= inssValor22)){
	 	inssSal = (salBrut * inssPerc2);
	 	inssResul = (salBrut - inssSal - depResul);
	 	inssmsg = inssSal.toFixed(2);
	 	porcinssmsg = (inssPerc2*100).toFixed(2);
	 }else if ((salBrut >= inssValor31) && (salBrut<= inssValor32)){
	 	inssSal = (salBrut * inssPerc3);
	 	inssResul = (salBrut - inssSal - depResul);
	 	inssmsg = inssSal.toFixed(2);
	 	porcinssmsg = (inssPerc3*100).toFixed(2);
	 }else if (salBrut > inssValor32){
	 	inssSal = (inssValor32*inssPerc3);
	 	inssResul = (salBrut - inssSal - depResul);
	 	inssmsg   = inssSal.toFixed(2) + " (TETO)";
	 	porcinssmsg = (inssPerc3*100).toFixed(2);
	 }
	 //FIM INSS

	 //LÓGICA IRRF
	 if (inssResul <= irrfValor01) {
	 	irrfSal = (inssResul * irrfPerc1);
	 	irrfResul = (irrfSal - irrfDedu1);
	 	irrfmsg   = irrfResul.toFixed(2);
	 	porcirrfmsg = (irrfPerc1*100).toFixed(2);
	 }else if ((inssResul >= irrfValor21) && (inssResul <= irrfValor22)){
	 	irrfSal = (inssResul * irrfPerc2);
	 	irrfResul = (irrfSal - irrfDedu2);
	 	irrfmsg   = irrfResul.toFixed(2);
	 	porcirrfmsg = (irrfPerc2*100).toFixed(2);

	 }else if ((inssResul >= irrfValor31) && (inssResul <= irrfValor32)){
	 	irrfSal = (inssResul * irrfPerc3);
	 	irrfResul = (irrfSal - irrfDedu3);
	 	irrfmsg = irrfResul.toFixed(2);
	 	porcirrfmsg = (irrfPerc3*100).toFixed(2);

	 }else if ((inssResul >= irrfValor41) && (inssResul <= irrfValor42)){
	 	irrfSal = (inssResul * irrfPerc4);
	 	irrfResul = (irrfSal - irrfDedu4);
	 	irrfmsg = irrfResul.toFixed(2);
	 	porcirrfmsg = (irrfPerc4*100).toFixed(2);

	 }else if (inssResul > irrfValor42){
	 	irrfSal = (inssResul * irrfPerc5);
	 	irrfResul = (irrfSal - irrfDedu5);
	 	irrfmsg = (irrfResul).toFixed(2);
	 	porcirrfmsg = (irrfPerc5*100).toFixed(2);

	 }
	 //FIM IRRF

	var salLiq = (salBrut - inssSal - irrfResul).toFixed(2); // CALCULO DO SÁLARIO LÍQUIDO

	document.getElementById('msg').innerHTML= (
		"Sálario Bruto é: R$ " + salBrut
		+ "<br />" 
		+ "INSS: "+porcinssmsg+"%"+", foi descontado: R$ " + inssmsg 
		+ "<br />" 
		+ "IRRF: "+porcirrfmsg+"%"+", foi descontado: R$ " + irrfmsg
		+ "<br />"
		+ "<br />"  
		+ "O Sálario Líquido é de: R$ " + salLiq);
}