<!--
var intervalo=0;
var NS = false;
var NS6 = false;
var NS4 = false;
var IE = false;
var IE4 = false;
var IE5 = false;
var carregado=false;
var nDeslocou=0;
var nDeslocouVertical=0;
var errosAtuais = 0;
var primeiraTela='Quebra';
var projeto = GetArgValue('projeto');
if (projeto == '') projeto='Quebra';
var codCurso = GetArgValue('codCurso');
var hyperlink = GetArgValue('lnk');
var erros = GetArgValue('rrs');
var acertos = GetArgValue('crts');
var WMP = GetArgValue('wmp');
var origem = GetArgValue('origem');
var sTempo = GetArgValue('tmp');
var sUsuario = GetArgValue('usuario');
var vettestevestibular = new Array();
var vetpreenchimento = new Array();
var vetrotuloava = new Array();
var vetimagemava = new Array();
var vetanimacaoava = new Array();
var vetarrsolimg = new Array();
var vetarrsol = new Array();
var vetarrdifsol = new Array();
var vetgira = new Array();
var vetliga = new Array();
var vetteste = new Array();
var vettestevestibular2 = null;
var vetpreenchimento2 = null;
var vetrotuloava2 = null;
var vetimagemava2 = null;
var vetarrsolimg2 = null;
var vetarrsol2 = null;
var vetarrdifsol2 = null;
var vetgira2 = null;
var vetliga2 = null;
var vetteste2 = null;
var vetanimacaoava2 = null;
var continua;
var temGnpt;
var usuario;
var usuarioPhp;
document.allLayers = new Array();
window.screen.updateInterval=0;
if(WMP=='true') {WMP=true;}
else {WMP=false;}
if (erros == '') erros = 0;
else erros = parseInt(erros);
if (acertos == '') acertos = 0;
else acertos = parseInt(acertos);
function verificaNavegador() {
   var versao = 4;
   if (navigator.appName == 'Netscape')
   {
     NS = true;
     if (navigator.appVersion == '4') navigator.plugins.refresh();
     versao = parseInt(navigator.appVersion);
     if(versao>=5) {NS6 = true;} else {NS4 = true;}
   }
   else if (navigator.appName == 'Microsoft Internet Explorer')
   {
     IE = true;
     versao = navigator.appVersion;
     if(parseInt(versao.substring(0,1)) < 4) {
        alert('Essa página é melhor visualizada no Internet Explorer 5 ou superior');
     }
     else if (versao.indexOf('MSIE') != -1)
     {
         var pos;
         pos = versao.indexOf('MSIE');
         if (parseInt(versao.substring(pos + 5, pos + 6)) >= 5) {
            IE5=true;
         }
         else if(parseInt(versao.substring(0,1)) == 4)
         {
            IE4=true;
         }
     }
   }
}
function getPositionX( oElement ) {
  if( typeof( oElement.offsetParent ) != 'undefined' ) {
    for( var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent ) {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
    return posX;
  } else {
    return posX;
  }
}
function getPositionY( oElement ) {
  if( typeof( oElement.offsetParent ) != 'undefined' ) {
    for( var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent ) {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
    return posY;
  } else {
    return posY;
  }
}
verificaNavegador();
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=='Netscape') && (parseInt(appVersion)==4)) {
     document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
function FindObj(name)
{
    if (document.getElementById)
    {
      if (navigator.appName.indexOf('; Microsoft; Internet; ')==-1){
        if (document.embeds && document.embeds[name]){
          return document.embeds[name];
        } else {
          return document.getElementById(name);
        }
      }
      else{
        return document.getElementById(name);
      }
    }
    else if (document.all)
    {
        return document.all[name];
    }
    else if (document.layers)
    {
        return document.layers[name];
    }
    else
    {
        return GetObj(name);
    }
}
function GetObj(n, d) { //v3.0
var p,i,x;
if(!d)
    d=document;
    if((p=n.indexOf('?')) > 0 && parent.frames.length) {
        d=parent.frames[n.substring(p+1)].document;
        n=n.substring(0,p);
    }
    if(!(x=d[n]) && d.all)
         x=d.all[n];
    for (i=0;!x&&i<d.forms.length;i++)
         x=d.forms[i][n];
    for(i=0; !x && d.layers && i<d.layers.length; i++)
         x=GetObj(n,d.layers[i].document);
    return x;
    }
function Janela_Load()
{
    intervalo = window.screen.updateInterval;
    CarregaCamadas();
    carregado=true;
}
function carregaGNPT(items) {
    for (i = 0; i < items.length; i++) {
        if (items[i].type == QuestionTypes.QUIZ) {
            if (vettestevestibular2 == null) {
                vettestevestibular2 = new Array();
            }
            vettestevestibular2.push(items[i]);
        }
        if (items[i].type == QuestionTypes.FILL) {
            if (vetpreenchimento2 == null) {
                vetpreenchimento2 = new Array();
            }
            vetpreenchimento2.push(items[i]);
        }
        if (items[i].type == QuestionTypes.LABEL_FUNCTION) {
            if (vetrotuloava2 == null) {
                vetrotuloava2 = new Array();
            }
            vetrotuloava2.push(items[i]);
        }
        if (items[i].type == QuestionTypes.IMAGE_FUNCTION) {
            if (vetimagemava2 == null) {
                vetimagemava2 = new Array();
            }
            vetimagemava2.push(items[i]);
        }
        if (items[i].type == QuestionTypes.DRAG_DROP_IMG) {
            if (vetarrsolimg2 == null) {
                vetarrsolimg2 = new Array();
            }
            vetarrsolimg2.push(items[i]);
        }
        if (items[i].type == QuestionTypes.DRAG_DROP) {
            if (vetarrsol2 == null) {
                vetarrsol2 = new Array();
            }
            vetarrsol2.push(items[i]);
        }
        if (items[i].type == QuestionTypes.DRAG_DIF_DROP) {
            if (vetarrdifsol2 == null) {
                vetarrdifsol2 = new Array();
            }
            vetarrdifsol2.push(items[i]);
        }
        if (items[i].type == QuestionTypes.TURNS_FIG) {
            if (vetgira2 == null) {
                vetgira2 = new Array();
            }
            vetgira2.push(items[i]);
        }
        if (items[i].type == QuestionTypes.LEAGUE_POINTS) {
            if (vetliga2 == null) {
                vetliga2 = new Array();
            }
            vetliga2.push(items[i]);
        }
        if (items[i].type == QuestionTypes.TEST) {
            if (vetteste2 == null) {
                vetteste2 = new Array();
            }
            vetteste2.push(items[i]);
        }
        if (items[i].type == QuestionTypes.ANIMATION_FUNCTION) {
            if (vetanimacaoava2 == null) {
                vetanimacaoava2 = new Array();
            }
            vetanimacaoava2.push(items[i]);
        }
    }
    remarcaOpcoes();
}
function limparLiga(){
     obj = document.getElementById('DLiga11');
     i = 1;
     x = 1;
     while (obj!=null){
            obj.errado = 0;
            obj.feito = null;
            obj.atual = null;
            j=0;
            while (j < jgLin.length){
                jgLin[j].xIni=0;
                jgLin[j].yIni=0;
                jgLin[j].feito=0;
                jgLin[j].clear();
                jgLin[j].paint();
                j++;
            }
        
        i = i + 1;
        obj = document.getElementById('DLiga'+x+i);
        if (obj==null){
            x = x + 1;
            i = 1;
            obj = document.getElementById('DLiga'+x+i);
        }
     }
    
}
function link_click(ligacao, larFilha, altFilha, link, avancar, org, novaJanela)
{
 var sLnk='';
 var sWMP='';
 continua=false;
 primAvEr=true;
 if (GetArgValue('rrs').length==0){
     erros = 0;
 }else{
    erros = parseInt(GetArgValue('rrs'));
}

 if (GetArgValue('crts').length==0){
    acertos = 0;
 }else{
    acertos = parseInt(GetArgValue('crts'));
}

   if(telaTemExercicio == true) {
     var verExer = VerificaExerc(ligacao, link, avancar, org, novaJanela);
     if(verExer==null || verExer===0)
           continua=true;
   }
   else continua=true;
   contExec(ligacao, link, avancar, org, novaJanela, larFilha, altFilha);
   try {
       var i;//necessário para evitar a 'queda' dos objetos no internet explorer
       for(i= 0; i < jgLin.length; i++){
           jgLin[i].drawLine( 0, 0, 0, 0);
           jgLin[i].paint();
       }
   } catch(e) {}
}
function consolelog() {
    console.log('passo');
}
function contExec(ligacao, link, avancar, org, novaJanela, larFilha, altFilha) {
   if(continua) {
      erros += errosAtuais;
      if (avancar==null) avancar=false;
      if (org==null) org=false;
      if ((avancar==true) && (hyperlink=='1')) 
          {ligacao = PrimeiroLink; link = 1;}
      if (org==true) {
           if(retOrigem()=='') {
              ligacao = primeiraTela + '.htm';}
           else {
              ligacao = retOrigem() + '.htm';}
          link = 0;
      }
      if(link==1 && retOrigem()=='') {origem = nomeTela}
      if(link==null) {sLnk='0';}
      else {sLnk=link;}
      if(WMP==true) {sWMP='true';}
      else {sWMP='false';}
      var parametros = '?origem=' + origem + '&wmp=' + sWMP + '&lnk=' + sLnk + '&codCurso=' + codCurso + '&projeto=' + projeto + '&usuario=' + sUsuario + '&tmp=' + sTempo + '&rrs=' + erros + '&crts=' + acertos;
      if(novaJanela == true && ligacao == 'finaliza.html') {
   if (acertos == 0 && erros == 0) {
   }
      else 
      if(novaJanela == true) {
       nomeJanela = get_random(10000);
       window.open(ligacao + parametros, nomeJanela, 'width=500, height=400, scrollbars=1, resizable=1');
   }
      }
      else
       if(novaJanela == true) {
         try {
           if (larFilha != 0 && altFilha != 0)
              if(ligacao!=null) window.open(ligacao + parametros, null, 'width='+ larFilha +', height='+ altFilha +', scrollbars=1, resizable=1');
           else
              if(ligacao!=null) window.open(ligacao + parametros, null, 'width=500, height=350, scrollbars=1, resizable=1');
         } catch(ex) {
           if(ligacao!=null) window.open(ligacao + parametros, null, 'width=500, height=350, scrollbars=1, resizable=1');
         }
      }
      else {
         if(ligacao!=null) window.location.href = ligacao + parametros;
      }
   }
}
function Hint(texto, visivel, e, larg, alt)
{
   if(!NS4)
   {
     var obj;
     obj = FindObj('rotuloMovel2');
      var sVisivel;
      if (visivel == true) sVisivel = 'visible';
      else sVisivel = 'hidden';
      if(obj.firstChild) {
        obj.firstChild.nodeValue=texto ;
      } else {
        obj.appendChild(document.createTextNode(texto));
      }
      var xAtu=0, yAtu=0;
      try {
        var xAtu = window.event.x + document.body.scrollLeft + 10;
        var yAtu = window.event.y + document.body.scrollTop + 10;
      } catch(err) {
        xAtu = e.clientX + document.body.scrollLeft+10;
        yAtu = e.clientY + document.body.scrollTop+10;
      }
      try {
        obj = lengthToPx(obj, texto, obj.style.fontSize, obj.style.fontFamily, larg, alt);
      } catch (ex) {}
      try{
        var tudo = FindObj('tudo');
        var vTela = tudo.offsetLeft + tudo.clientWidth;
      } catch (ex) {
        var tudo = null;
        var vTela = larTela;
      }
      var vRotulo = xAtu + obj.clientWidth;
      if (vRotulo > vTela) {
        xAtu -= (vRotulo - vTela);
      }
      if (tudo != null) {
        vTela = tudo.offsetTop + tudo.clientHeight;
      } else {
        vTela = altTela;
      }
      vRotulo = yAtu + obj.clientHeight;
      if (vRotulo > vTela) {
        yAtu -= (vRotulo - vTela);
      }
      if (navigator.appName == 'Microsoft Internet Explorer') {
        obj.style.posTop = yAtu;
        obj.style.posLeft = xAtu;
      } else {
        obj.style.left = String(xAtu) + 'px';
        obj.style.top = String(yAtu) + 'px';
      }
      obj.style.visibility = sVisivel;
   }
}
function lengthToPx(obj, text, fontSize, fontFamily, larg, alt)
{
    obj.style.width = 0;
    obj.style.height = 0;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    ctx.font = fontSize +" "+ fontFamily;
    if (larg == 0 && alt == 0) {
      var width = ctx.measureText(text).width;
      width += width * 0.2;
      ctx.width = width;
      obj.style.width = width;
      var height = 20;
      ctx.height = height;
      obj.style.height = height;
    } else {
      ctx.width = larg;
      var width = ctx.width;
      width += width * 0.2;
      obj.style.width = width;
      ctx.height = alt;
      var height = ctx.height;
      obj.style.height = height;
    }
    return obj;
}
function posiRotMovel(texto, x, y, e, larg, alt)
{
   if(!NS4)
   {
      var obj = FindObj('rotuloMovel2');
      if(obj.firstChild) {
        obj.firstChild.nodeValue=texto ;
      } else {
        obj.appendChild(document.createTextNode(texto));
      }
      if (navigator.appName == 'Microsoft Internet Explorer') {
        obj.style.posTop = y;
        obj.style.posLeft = x;
      } else {
        obj.style.left = String(x) + 'px';
        obj.style.top = String(y) + 'px';
      }
      try {
        obj = lengthToPx(obj, texto, obj.style.fontSize, obj.style.fontFamily, larg, alt);
      } catch (ex) {}
      obj.style.visibility = 'visible';
   }
}
function volta()
{
   window.history.go(-1)
}
function CarregaCamadasNS6(inicio)
{
    var i;
    with (inicio)
    {
       if (childNodes)
       {
          for (i=0; i<childNodes.length; i++)
          {
              if (childNodes[i].id && childNodes[i].id != '' && childNodes[i].style && childNodes[i].style.position)
              {
                 document.allLayers[document.allLayers.length]=childNodes[i];
              }
              CarregaCamadasNS6(childNodes[i]);
          }
       }
    }
}
function CarregaCamadas()
{
    with (document)
    {
      if (NS4)
      {
          for (i=0; i<layers.length; i++)
               allLayers[i]=layers[i];
          for (i=0; i<allLayers.length; i++)
               if(allLayers[i].document && allLayers[i].document.layers)
                     with (allLayers[i].document)
                        for(j=0; j<layers.length; j++)
                            allLayers[allLayers.length]=layers[j];
      }
      else if (NS6)
      {
          CarregaCamadasNS6(document);
      }
      else
      {
          for (i=0;i<all.length;i++)
               if (all[i].style && all[i].style.position)
                   allLayers[allLayers.length]=all[i];
      }
    }
}
function trocaCor(nomeObjeto, cor)
{
    if(!NS4) {
       var obj = FindObj(nomeObjeto);
       if(obj!=null) {
          if(IE) obj.style.color = '#' + cor;
          else   obj.color = '#' + cor;
       }
    }
}
function exibeObjeto(nomeObjeto)
{
    var obj = FindObj(nomeObjeto);
    if(obj!=null) {
       if(NS && (obj.style == null))
       {
          obj.visibility = 'visible';
       }
       else
       {
          obj.style.visibility = 'visible';
       }
    }
}
function escondeObjeto(nomeObjeto)
{
    var obj = FindObj(nomeObjeto);
    if(obj!=null) {
       if(obj.fixo == false) { 
          if(NS)
          {
             obj.visibility = 'hidden';
          }
          else
          {
             obj.style.visibility = 'hidden';
          }
       }
    }
}
function TiraPx(posicao)
{
     return(parseInt(posicao.substring(0,posicao.indexOf('px'))));
}
function Posiciona(NomeObj) {
   if(IE)
   {
      var Obj = FindObj(NomeObj);
      if(Obj.MM_sourcL!=null)
      {
          Obj.MM_sourcL = Obj.style.posLeft + nDeslocou;
      }
      if(Obj.MM_posXAnt!=null)
      {
          Obj.MM_posXAnt = Obj.MM_posXAnt + nDeslocou;
      }
      if((Obj.MM_targL != null) && (Obj.MM_targL != -1))
      {
          Obj.MM_targL = Obj.MM_targL + nDeslocou;
      }
      Obj.style.left = Obj.style.posLeft + nDeslocou;
      return(Obj);
   }
}
function Desloca(NomeObj)
{
   if(NS4)
   {
      var Obj = GetObj(NomeObj);
      Obj.left = Obj.left + 8;
      Obj.top = Obj.top + 8;
   }
}
function colocaBorda(NomeObj, iBorda)
{
   if (!NS4) {
      var obj = FindObj(NomeObj);
      if (iBorda > 0) obj.style.borderWidth = iBorda;
      obj.style.overflow = 'auto';
   }
}
function colocaEstiloFonte(NomeObj, nomeFonte, tamanhoFonte, sombraTexto, corSombra, nFonte, corFundo, estilo)
{
   if (!NS4 && !IE4) {
      var obj = FindObj(NomeObj);
      obj.style.fontFamily = nomeFonte;
      obj.style.fontSize = tamanhoFonte + 'pt';
      if(estilo == 1){
         if(!IE && !IE5)
           obj.style.background = corFundo;
      }
      if(nFonte == 6 || nFonte == 7) {
           //sombraTexto - espessura da sombra
           //corSombra - cor, só vai existir no parametro se existir o sombraTexto
           if(!IE && !IE5){
              var parametro = '', i;
               parametro = '1px 1px 0 '+corSombra;
               for(i = 2; i < sombraTexto + 2; i++)
                   parametro += ', '+i+'px '+i+'px 0 '+corSombra;
              obj.style.textShadow = parametro;
           }
           else{
               obj.style.height= '10em';
               obj.style.filter= 'Shadow(Color='+corSombra+',Direction=150,Strength='+(sombraTexto+1)+');';
           }
      }
      else{
           if(nFonte == 2){
               if(!IE && !IE5)
                   obj.style.textShadow = '1px 1px 0 #808080, 2px 2px 0 #808080';
               else{
                   obj.style.height= '10em';
                   obj.style.filter= 'Shadow(Color=#808080,Direction=150,Strength=2);';
               }
           }
           else{
               if(nFonte == 5){
                   if(!IE && !IE5)
                       obj.style.textShadow = '1px 1px 0 '+corSombra+', 2px 2px 0 '+corSombra;
                   else{
                       obj.style.height= '10em';
                       obj.style.filter= 'Shadow(Color='+corSombra+',Direction=150,Strength=2);';
                   }
               }
               else{
                   if(nFonte == 4){
                       if(!IE && !IE5)
                           obj.style.textShadow = '-1px -1px 0 #808080, -2px -2px 0 #808080';
                       else{
                           obj.style.height= '10em';
                           obj.style.filter= 'Shadow(Color=#808080,Direction=300,Strength=2);';
                       }
                   }
               }
           }
      }
   }
}
function removeHref(NomeObj, mao)
{
    if (!NS4)
    {
        var obj = FindObj(NomeObj);
        obj.removeAttribute('href', false);
        if (mao==true) obj.style.cursor = 'hand';
    }
}
function removeAlt(NomeObj)
{
    if (!NS4)
    {
        var obj = FindObj(NomeObj);
        obj.removeAttribute('alt', false);
    }
}
function GetArgValue (name)
{
   var arg = name + '=';
   var value;
   var posProx;
   var alen = arg.length;
   var posVar = window.location.href.indexOf(name + '=');
   if(posVar!=-1)
   {
      posProx = window.location.href.indexOf('&', posVar);
      if(posProx==-1) posProx = window.location.href.length;
      value = window.location.href.substring(posVar + alen, posProx);
      return(value);
   }
   else return('');
}
function retOrigem() {
   return(origem);
}
function chamaFinaliza() {
    link_click('finaliza.html', 0, 0, null, null, null, true); 
}
function get_random(maxNum) {
    var ranNum= Math.round(Math.random()*(maxNum-1));
    return ranNum;
}
function preloadImages() {
    var d=document; 
    if(d.images) { 
       if(!d.preLoaded) d.preLoaded=new Array();
       var i;; 
       var j=d.preLoaded.length;
       var arg=preloadImages.arguments;
       for(i=0; i<arg.length; i++) {
           d.preLoaded[j]=new Image; 
           d.preLoaded[j].src=arg[i];
           j++;
       }
    }
}
 function verificarErrosAcertos(){
 //PREENCHIMENTO
 obj = document.getElementById('DPreenchimento1');
 i = 1;
 while (obj!=null){
    str = 'Preenchimento'+i;
    if (VerificaPreenchimento(GetObj(str).value, vPreenchimento1,parseInt(objPreench.ignora_branco),parseInt(objPreench.caixa))=='1'){
        acertos = acertos + 1;
    }else{
        errosAtuais = errosAtuais + 1;
        alert('Existem preenchimentos incorretos. Refaça os exercícios.');
        return false;
    }
    i = i + 1;
    obj = document.getElementById('DPreenchimento'+i);
 }

 //ARRASTAR E SOLTAR IMAGENS
 obj = document.getElementById('DSoltarImg1');
 i = 1;
 while (obj!=null){
    if (obj.feito==1){
        acertos = acertos + 1;
    }else{
        errosAtuais = errosAtuais + 1;
        alert('Complete o exercício de arrastar e soltar imagens.');
        return false;
    }
    i = i + 1;
    obj = document.getElementById('DSoltarImg'+i);
 }

 //ARRASTAR E SOLTAR SIMPLES
 obj = document.getElementById('DSoltar1');
 i = 1;
 while (obj!=null){
     if (obj.feito==1){
        acertos = acertos + 1;
    }else{
        errosAtuais = errosAtuais + 1;
        alert('Complete o exercício de arrastar e soltar.');
        return false;
    }
    i = i + 1;
    obj = document.getElementById('DSoltar'+i);
 }

 //ROTULOS
 obj = document.getElementById('DRotulo1');
 i = 1;
 while (obj!=null){
    atual = 'DRotulo'+i+'atual';
    if (window[atual]!=undefined && window[atual] == '1'){
        acertos = acertos + 1;
    }else if (window[atual]!=undefined){
        errosAtuais = errosAtuais + 1;
        alert('Existem alternativas incorretas. Refaça os exercícios.');
        return false;
    }
    i = i + 1;
    obj = document.getElementById('DRotulo'+i);
 }

 //LIGA PONTO
 obj = document.getElementById('DLiga11');
 i = 1;
 while (obj!=null){
    if (obj.feito==1){
        acertos = acertos + 1;
    }else{
        errosAtuais = errosAtuais + 1;
        alert('Complete o exercício de ligar pontos');
        return false;
    }
    i = i + 1;
    obj = document.getElementById('DLiga1'+i);
 }

 //FILMES
 obj = document.getElementById('DFilme_tela1');
 i = 1;
 while (obj!=null){
    atual = 'DFilme_tela'+i+'atual';
    if (window[atual]!=undefined && window[atual] == '1'){
        acertos = acertos + 1;
    }else if (window[atual]!=undefined){
        errosAtuais = errosAtuais + 1;
        alert('Existem alternativas incorretas. Refaça os exercícios.');
        return false;
    }
    i = i + 1;
    obj = document.getElementById('DFilme_tela'+i);
 }

 //BOTAO TESTE
 obj = document.getElementById('BotaoTeste1A');

 i = 1;
 atual = 'teste'+i+'_atual';

 while (window[atual]!=undefined && obj!=null){
    correto = 'teste'+i+'_correto';
    if (window[atual].toUpperCase() == window[correto].toUpperCase()){
        acertos = acertos + 1;
    }else{
        errosAtuais = errosAtuais + 1;
        alert('Existem alternativas incorretas. Refaça os exercícios.');
        return false;
    }
    i = i + 1;
    atual = 'teste'+i+'_atual';
    obj = document.getElementById('BotaoTeste'+i+'A');
 }

 //TESTE VESTIBULAR
 obj = document.getElementById('DOptTesteVest_1_1');
 i = 1;
 atual = 'Teste_vest'+i+'_atual';

 while (window[atual]!=undefined && obj!=null){
    correto = 'Teste_vest'+i+'_correta';
    if (window[atual] == window[correto]){
        acertos = acertos + 1;
    }else{
        errosAtuais = errosAtuais + 1;
        alert('Existem alternativas incorretas. Refaça os exercícios.');
        return false;
    }
    obj.corrigido =  1 ;
    i = i + 1;
    atual = 'Teste_vest'+i+'_atual';
    obj = document.getElementById('DOptTesteVest_'+i+'_1');
 }

 //GIRA FIGURA
 obj = document.getElementById('DGiras_Efeito1');
i = 1;
 atual = 'Giras_Efeito'+i+'_atual';

while (window[atual]!=undefined && obj!=null){
    correto = 'Giras_Efeito'+i+'_correta';
    if (window[atual] == window[correto]){
        acertos = acertos + 1;
    }else{
        errosAtuais = errosAtuais + 1;
        alert('Existem figuras selecionadas incorretamente. Refaça os exercícios.');
        return false;
    }
    i = i + 1;
    atual = 'Giras_Efeito'+i+'_atual';
    obj = document.getElementById('DGiras_Efeito'+i);
 }
 return true;
 }
 function mostrarResultado(){
   if (verificarErrosAcertos()){
    var nota = 0;
    if (!(erros==0 && acertos==0))
    {
        nota = Math.round((acertos * 100) / (erros + acertos));
    }
    alert('Resultado:\n\n'
    +'Número de erros:   '+erros+'\n'
    +'Número de acertos: '+acertos+'\n'
    +'Nota final: '+nota+'%');

    window.location=window.location;
 }
}
 function abrePopUp(link){
    var width = 400;
    var height = 230;
    var left = ((screen.width - width)/2);
    var top = ((screen.height - height)/2);
    URL = link;
    window.open(URL,'popup', 'width='+width+', height='+height+', top='+top+', left='+left+', scrollbars=no, status=no, toolbar=no, location=no, directories=no,menubar=no, resizable=no, fullscreen=no');
}
// -->
