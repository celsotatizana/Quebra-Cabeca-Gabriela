var xIni, xFim;
var yIni, yFim;
var numDestino;
var pecaClicadaPrimeiro="";
var movendo=0;
var liga2;
var origem;
var cont=0;
var x;
var y;
var pos = -1;
var tira = 0;

var startMoveLiga = function(e) {
	e.preventDefault();
	if (pecaClicadaPrimeiro != this.id && this.name!="lock"){
		var num = this.id.replace("DLiga","");
		pos = (parseInt(num.substring(1))) - 1;
		if (pecaClicadaPrimeiro==""){//entra aqui quando não em nenhum outro liga
			movendo = 0;
			criarBorda(this);
			origem = this;
			pecaClicadaPrimeiro = this.id;
			
			aux = "1";
			if (parseInt(num.substring(0,1))==1){
				aux = "2";
			}
			
			numDestino = aux + num.substring(1);
			
			xIni = getPositionX(this);
			yIni = getPositionY(this);
			
			liga2 = FindObj("DLiga"+numDestino);
			
			xFim = getPositionX(liga2);
			yFim = getPositionY(liga2);
		} else {
			aux = "1";
			if (parseInt(num.substring(0,1))==1){
				aux = "2";
			}
			numDestino = aux + num.substring(1);
			liga2 = FindObj("DLiga"+numDestino);
		
			if (getPositionX(this) >= (xFim - (liga2.width)) && getPositionX(this) <= (xFim + (liga2.width)) && 
				getPositionY(this) >= (yFim - (liga2.height)) && getPositionY(this) <= (yFim + (liga2.height))){//checa se acertou no segundo touch
		
				jgLin[pos].clear();
				jgLin[pos].drawLine( (xIni + (this.width/2) - tira), (yIni + (this.height/2)), (xFim + (liga2.width/2) - tira),(yFim + (liga2.height/2)));
				jgLin[pos].paint();
				
				pecaClicadaPrimeiro="";
				removerBorda(origem);
				origem.name = "lock";
				liga2.name = "lock";
				
				origem.feito = 1;
				liga2.feito = 1;
				origem.atual = 1;
				liga2.atual = 1;
				
				pos=-1;
				
				
				if (somswf==0) {
					toca_somNovo(liga2.som, false);
				} else if (somswf==1) {
					toca_somNovoHTML5(liga2.som, false);
				} 
			}else{
				pecaClicadaPrimeiro="";
				removerBorda(this);
				pos=-1;
				
				errosAtuais = errosAtuais + 1;
			}
		}
	}
};
	
var moveMoveLiga = function(e) {
	e.preventDefault();
	
	if (this.name!="lock" && liga2.name!="lock"){
		if (pos>=0){
			var orig = e.originalEvent;
			movendo = 1;
			
			var num = this.id.replace("DLiga","");
			x = orig.changedTouches[0].pageX;
			y = orig.changedTouches[0].pageY;
			
			jgLin[pos].clear();
			jgLin[pos].drawLine((xIni + (this.width/2) - tira), (yIni + (this.height/2)), (x - tira), y);
			jgLin[pos].paint();
			setTimeout("gira()",10);
		}
	}
};
	
var endMoveLiga = function(e) {
	e.preventDefault();
	if (this.name!="lock" && liga2.name!="lock" && pos>=0){
		if ( (xFim >= x - (liga2.width+30)  && xFim <= x + (liga2.width+30)) &&
			 (yFim >= y - (liga2.height+30) && yFim <= y + (liga2.height+30)) ) {
			
			jgLin[pos].clear();
			jgLin[pos].drawLine( (xIni + (this.width/2) - tira), (yIni + (this.height/2)), (xFim + (liga2.width/2) - tira),(yFim + (liga2.height/2)));
			jgLin[pos].paint();
			
			pecaClicadaPrimeiro="";
			removerBorda(this);
			this.name = "lock";
			liga2.name = "lock";
			origem.name = "lock";
			
			origem.feito = 1;
			liga2.feito = 1;
			origem.atual = 1;
			liga2.atual = 1;
			
			if (somswf==0) {
				toca_somNovo(liga2.som, false);
			} else if (somswf==1) {
				toca_somNovoHTML5(liga2.som, false);
			} 
			
			pos=-1;
		}else if (pos>=0){
			jgLin[pos].clear();
			if (movendo==1){
				movendo = 0;
				pecaClicadaPrimeiro="";
				removerBorda(this);
				pos=-1;
				
				errosAtuais = errosAtuais + 1;
			}
		}
	}
};
	
function verificaPosicao(peca, e){
	var num;
	var numS;
	var arrastar;
	var soltar;	
	if (peca.id.indexOf("DArrastarImg")>=0){
		if (peca.id.indexOf("DArrastarImgN")>=0){
			num = peca.id.replace("DArrastarImgN","");
			numS = peca.id.replace(peca.id.substring(0,peca.id.length-1),"");
			arrastar = "DArrastarImgN"+num;
			soltar = "DSoltarImgN"+numS;
		}else{
			num = peca.id.replace("DArrastarImg","");
			arrastar = "DArrastarImg"+num;
			soltar = "DSoltarImg"+num;
		}
	}else{
		num = peca.id.replace("DArrastar","");
		arrastar = "DArrastar"+num;
		soltar = "DSoltar"+num;
	}
	
	
	objSoltar = FindObj(soltar);
	
	var acer = false;
	if (peca.id.indexOf("DArrastarImgN")<0 && peca.id.indexOf("DArrastarImg")<0) {
		try {
			var numero = 1;
			var objsolt, obs;
			while (acer == false) {
				objsolt = FindObj("DSoltar"+numero);
				obs = FindObj("Soltar"+numero);
				if ((getPositionX(peca) + x) >= getPositionX(objsolt) && (getPositionX(peca) + x) <= (getPositionX(objsolt) + objsolt.width) &&
				(getPositionY(peca) + y) >= getPositionY(objsolt) && (getPositionY(peca) + y) <= (getPositionY(objsolt) + objsolt.height) &&
				objsolt.feito == 0) {
					if (objsolt.caption == peca.caption) {
						acer = true;
						objsolt.feito = 1;
						
						peca.name = "lock";
						peca.style.left = (getPositionX(objsolt) - tira)+"px";
						peca.style.top = objsolt.offsetTop+"px";
						obs.src = objsolt.img;
						
						if(objsolt.som != ''){
							if (somswf==0) {
								toca_somNovo(objsolt.som, false);
							} else if (somswf==1) {
								toca_somNovoHTML5(objsolt.som, false);
							}
						}
						if (peca.indice_soltar != objsolt.indice_arrastar) {
							objsolt = FindObj("DSoltar"+peca.id.substring(9));
							objsolt.feito = 0;
						}
					}
				}
				numero++;
			}
		} catch (ex) {
		}
	} else {
		if ((getPositionX(peca) <= getPositionX(objSoltar) - objSoltar.width  || getPositionX(peca) >= getPositionX(objSoltar)  + objSoltar.width ||
			 getPositionY(peca) <= getPositionY(objSoltar) - objSoltar.height || getPositionY(peca) >= getPositionY(objSoltar)  + objSoltar.height ||
			 objSoltar.feito == 1)){
			//move peca
		}else{
			peca.name = "lock";
			if (peca.id.indexOf("DArrastarImgN")>=0){
				//peca.style.left = getPositionX(objSoltar)+(objSoltar.width/2)-(peca.width/2)+"px";
				//peca.style.top = objSoltar.offsetTop+(objSoltar.height/2)-(peca.height/2)+"px";
				peca.style.left = getPositionX(objSoltar)+"px";
				peca.style.top = objSoltar.offsetTop+"px";
				if(objSoltar.som != '')
					toca_somNovo(objSoltar.som, false);
			}else{
				peca.style.left = (getPositionX(objSoltar) - tira)+"px";
				peca.style.top = objSoltar.offsetTop+"px";
			}
			
			if(objSoltar.som != ''){
				if (somswf==0) {
					toca_somNovo(objSoltar.som, false);
				} else if (somswf==1) {
					toca_somNovoHTML5(objSoltar.som, false);
				}
			}
		}
	}
}
	
var startMoveArrSol = function(e) {
	e.preventDefault();

	var num;
	var arrastar;
	x = this.width/2;
	y = this.height/2;
	if (this.id.indexOf("DArrastarImg")>=0){
		if (this.id.indexOf("DArrastarImgN")>=0){
			num = this.id.replace("DArrastarImgN","");
			arrastar = "ArrastarImgN"+num;
		}else{
			num = this.id.replace("DArrastarImg","");
			arrastar = "ArrastarImg"+num;
		}
	}else{
		//num = this.id.replace("DArrastar","");
		arrastar = this.id;
	}
	
	obj = FindObj(arrastar);
	
	xIni = getPositionX(obj);
	yIni = getPositionY(obj);
};

var moveMoveArrSol = function(e) {
	e.preventDefault();
	
	//Verifica se a pe�a N�O esta trancada ou seja no local correto sen�o estiver move ela
	if (this.name!='lockResizable'){
		var orig = e.originalEvent;
		$(this).css({
			top: (orig.changedTouches[0].pageY - y),
			left: (orig.changedTouches[0].pageX - x - tira)
		});
	}
};
	
var endMoveArrSol = function(e) {
	e.preventDefault();
	if (this.name!="lockResizable"){
		verificaPosicao(this,e);
		if (this.name!='lock'){
			this.style.left = (xIni - tira)+"px";
			this.style.top = yIni+"px";
			errosAtuais = errosAtuais + 1;
		}
		else{
			this.name = "lockResizable";
			
			var num;
			var numS;
			var arrastar;
			var soltar;	
			var soltarDiv;
			if (this.id.indexOf("DArrastarImg")>=0){
				if (this.id.indexOf("DArrastarImgN")>=0){
					num = this.id.replace("DArrastarImgN","");
					numS = this.id.replace(this.id.substring(0,this.id.length-1),"");
				
					num = this.id.replace("DArrastarImgN","");
					arrastar = "ArrastarImgN"+num;
					soltar = "SoltarImgN"+numS;
					soltarDiv = "DSoltarImgN"+numS;
				}else{
					num = this.id.replace("DArrastarImg","");
					arrastar = "ArrastarImg"+num;
					soltar = "SoltarImg"+num;
					soltarDiv = "DSoltarImg"+num;
				}
			}else{
				num = this.id.replace("DArrastar","");
				arrastar = this.id.replace("D","");
				soltar = "DSoltar"+num;
				soltarDiv = "DSoltar"+num;
			}
			
			objSoltar = FindObj(soltar);
			objSoltarDiv = FindObj(soltarDiv);
			objArr = FindObj(arrastar);
			
			if (this.id.indexOf("DArrastarImgN")==-1){
				objArr.style.height = objSoltar.height+"px";
				objArr.style.width = objSoltar.width+"px";
			}
			objArr.feito = 1;
			//Caso for Arrastar e Soltar Imagem entra no IF
			if (objArr.id.indexOf("DArrastar")<0)
				document.getElementById("D"+objArr.id).atual = 1;
			if (objArr.id.indexOf("ArrastarImgN")>=0){
				try {
					var mudou = false;
					var arr;
					var n = 1;
					while (true) {
						arr = FindObj("ArrastarImgN"+numS+""+n);
						if (arr.feito == 0)
							mudou = true;
						n++;
					}
				} catch (exception) {
				}
				if (mudou) {
					objSoltarDiv.feito = 1;
					objSoltar.feito = 1;
				}
			} else {
				if (objArr.id.indexOf("ArrastarImg")>=0) {
					objSoltarDiv.feito = 1;
					objSoltar.feito = 1;
				}
			}
			objSoltar.atual = 1;
			if (objSoltarDiv.id.indexOf("DSoltarImgN")>=0) {
				objSoltar.src = this.imagem;
				objArr.style.width = "0px";
				objArr.style.height = "0px";
			} else {
				if (objSoltarDiv.id.indexOf("DSoltarImg")>=0) {
				objArr.width = objSoltarDiv.width;
				objArr.height = objSoltarDiv.height;
				objArr.src = this.imagem;
				} else {
					objArr.style.width = "0px";
					objArr.style.height = "0px";
				}
			}
		}
	}
};

var moveMoveArrSolImagemFunc = function(e) {
	e.preventDefault();
	var orig = e.originalEvent;
	$(this).css({
		top: orig.changedTouches[0].pageY,
		left: orig.changedTouches[0].pageX
	});
};
	
function ajustarPosicao(obj){
	elemento = document.getElementById(obj);
	try{
		elemento.style.left = (elemento.offsetLeft + getPositionX(tudo))+"px";
	}catch(e){}
}

function criarBorda(image) {
	image.style.border='2px solid #78d685';
}	
   
function removerBorda(image) {
	image.style.border='0px solid #78d685';
}	
