<!--
var exec;
function somInicio(surl, loop)
{
  try
  {
  window.onload=toca_somNovo(surl,loop);
  }
  catch(e)
  {
  }
}
<!--
function toca_somNovo(surl, loop)
{
  var monta_som = '';
  if (loop==false)
    monta_som += "<audio autoplay>";
  else
    monta_som += "<audio autoplay loop>";
  monta_som += "  <source src=\""+surl+"\" type=\"audio/mpeg\">";
  monta_som += "</audio>";
  document.getElementById('somspan').innerHTML = monta_som;
}
function para_somNovo()
{
  try
  {
  document.getElementById('somspan').innerHTML="<embed src=''>";
  }
  catch(e)
  {
  }
}
function toca_somNovoAnim(DobjAnim, objAnim, surl, loop)
{
  var monta_som = '';
  if (loop==false)
    monta_som += "<audio autoplay>";
  else
    monta_som += "<audio autoplay loop>";
  monta_som += "  <source src=\""+surl+"\" type=\"audio/mpeg\">";
  monta_som += "</audio>";
  document.getElementById('somspan').innerHTML = monta_som;
  try {
    var anim = document.getElementById(DobjAnim);
    if (anim.som_fim_anima == 1)
      exec = setInterval(function(){para_somNovoAnim(DobjAnim, objAnim)}, anim.tempoMili);
  } catch (ex) {}
}
function para_somNovoAnim(DobjAnim, objAnim)
{
  interrompe(DobjAnim);
  document.getElementById(DobjAnim).idFrame = 1;
  interrompe(DobjAnim);
  clearInterval(exec);
  try
  {
  document.getElementById('somspan').innerHTML="<embed src=''>";
  }
  catch(e)
  {
  }
}
function toca_som(_sndObj, sndFile, fundo, loop)
{
    if(fundo==null) fundo = false;
    if(loop==null) loop = 0;
        tocaSomFundo(sndFile, loop);
}
function play_sound(_sndObj, sndFile, loop)
{
  var i, n, method = '', sndObj, strEval; erro = 1; z=0;
  sndObj = FindObj(_sndObj);
  if (sndObj != null) 
  {
    if (NS) {
        method = 'Play';
        sndObj.setFileName(sndFile);
        sndObj.setLoop = loop;
    }
    else 
    {
      if (!WMP) 
      {
          for(i in sndObj) if (i == 'ActiveMovie') 
          {
             WMP = true; 
             break;
          }
      }
      if (WMP) {
          z=0;
          if (IE5) {
             strEval = 'while((erro==1) && (z < 100000)) { ';
             strEval = strEval + 'try {sndObj.fileName = \''+sndFile+'\'; erro=0} ';
             strEval = strEval + 'catch(e) {';
             strEval = strEval + ' z++; ';
             strEval = strEval + ' if(z==100000){ if(confirm(\'Não foi possível reproduzir o som. Deseja tentar novamente? (P1)\')==true) {z=0;}}';
             strEval = strEval + '}}';
             eval(strEval);
          }
          erro=1;
          method = 'Play';
          sndObj.loop = loop;
      }
      else if (sndObj.FileName) method = 'run';
    }
    z=0;
    if (IE) {
        strEval = 'while((erro==1) && (z < 100000)) { ';
        strEval = strEval + 'try {sndObj.'+method+'(); erro=0} ';
        strEval = strEval + 'catch(e) {';
        strEval = strEval + ' z++; ';
        strEval = strEval + ' if(z==100000){ if(confirm(\'Não foi possível reproduzir o som. Deseja tentar novamente? (P2)\')==true) {z=0;}}';
        strEval = strEval + '}}';
    }
    else strEval = 'sndObj.'+method+'()';
    if (method) eval(strEval);
    else window.location = sndFile;
  }
}
function tocaSomFundo(sndFile, loop) {
  try
  {
   var jSomFundo = window.open('', 'jSomFundo', 'width=310, height=140');
   window.focus();
   jSomFundo.document.body.innerHTML = '';
   jSomFundo.document.write ('<p align=center><font color=white size=+2>Som de Fundo</font></p>');
   jSomFundo.document.write ('<BODY BgColor=#000000>');
   jSomFundo.document.write ('<Embed Name=objSom id=objSom Volume=1 MasterSound ');
   jSomFundo.document.write (' Loop=' + loop);
   jSomFundo.document.write (' ShowStatusBar=1');
   if (sndFile != '')
       jSomFundo.document.write (' src=\'' + sndFile + '\'');
   jSomFundo.document.write ('>');
  }
  catch(e)
  {
  }
}
function tocaSomSwf(sndFile, loop) {
  try
  {
   jSomSwf.loadSound(sndFile, true);
   jSomSwf.start();
  }
  catch(e)
  {
  }
}
function tocaSomObj(som) {
  var flash=FindObj(som);
  try
  {
    flash.Play();
  }
  catch(e)
  {
  }
}
function tocaSomObj2(som) {
  var flash=FindObj(som);
  try
  {
    flash.Rewind();
    flash.GotoFrame(3);
  }
  catch(e)
  {
  }
}
function paraSomObj(som) {
  var flash=FindObj(som);
  try
  {
    flash.GotoFrame(1);
  }
  catch(e)
  {
  }
}
function tocaSomStreaming(som) {
  var flash=FindObj(som);
  try
  {
    flash.Rewind();
    flash.GotoFrame(3);
  }
  catch(e)
  {
  }
}
function paraSomStreaming(som) {
  var flash=FindObj(som);
  try
  {
    flash.GotoFrame(1);
  }
  catch(e)
  {
  }
}
// -->
