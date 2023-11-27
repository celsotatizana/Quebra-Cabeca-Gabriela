<!--
var verifica = true;
var somParabens = '';
var somRevejaTeste = '';
var somRevejaGira = '';
var somRevejaPreenche = '';
var somFaltaSelecionar = '';
var somFaltaPreenche='';
var somFaltaLiga='';
var somFaltaGira='';
var somFaltaArrastar='';
var somFaltaDiss='';
var somAlterIncorreta='';
var somFimEx='';
var somReveja='';
var tipoSomConv = 0;
var mensagem_tela_parabens='';
var mensagem_tela_revejateste='';
var mensagem_tela_revejagira='';
var mensagem_tela_revejapree='';
var mensagem_tela_faltaselecionar='';
var mensagem_tela_faltaliga='';
var mensagem_tela_faltapree='';
var mensagem_tela_faltagira='';
var mensagem_tela_faltaarrastar='';
var mensagem_tela_faltadis='';
var mensagem_tela_alterincorreta='';
var mensagem_tela_fimex='';
var considera_incorretas=0;
var tela_tentativas = 0;
var mensagem;
var acertosAtual;
var ligacao_param;
var link_param;
var avancar_param;
var org_param;
var novaJanela_param;
var pagCorreta = null;
var corretoExer = "";
var achou;
var possuiArr = false;
var preenBranco = false;
function VerificaExerc(ligacao, link, avancar, org, novaJanela)
{
possuiArr = false;
tentativas = tentativas + 1;
ligacao_param=ligacao;
link_param=link;
avancar_param=avancar;
org_param=org;
novaJanela_param=novaJanela;
if (isNaN(acertosAtual) == false)
  acertos += acertosAtual;
acertosAtual=0;
mensagem=''; preenche_errado=0;
var nota=0;
recoloqueArrastar = false;
var liga_errado=0;
var objPreen, objGir, objGirEf;
var primAvErr;
if((carregado==true) || (IE4))
{
 if(verifica==true)
 {
   if(FindObj('DArrastarImg1').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
           erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
   }
   if (FindObj('DArrastarImg1').atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(FindObj('DArrastarImg2').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
           erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
   }
   if (FindObj('DArrastarImg2').atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(FindObj('DArrastarImg3').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
           erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
   }
   if (FindObj('DArrastarImg3').atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(FindObj('DArrastarImg4').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
           erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
   }
   if (FindObj('DArrastarImg4').atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(FindObj('DArrastarImg5').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
           erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
   }
   if (FindObj('DArrastarImg5').atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(FindObj('DArrastarImg6').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
           erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
   }
   if (FindObj('DArrastarImg6').atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(FindObj('DArrastarImg7').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
           erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
   }
   if (FindObj('DArrastarImg7').atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(FindObj('DArrastarImg8').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
           erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
   }
   if (FindObj('DArrastarImg8').atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   if(FindObj('DArrastarImg9').atual == '1')
   {
       acertosAtual = acertosAtual + 1;
   }
   else
   {
       if (tela_tentativas == 0)
           errosAtuais = errosAtuais + 1;
       else
           erros = erros + 1;
       if (somFaltaArrastar!='') {
         somReveja=somFaltaArrastar;
       }
       if (mensagem_tela_faltaarrastar!='') {
         mensagem=mensagem_tela_faltaarrastar;
       } else {
         mensagem='Você não completou Arrastar-Soltar Imagem!';
       }
   }
   if (FindObj('DArrastarImg9').atual == -1) {
       if (somAlterIncorreta!='') {
         somReveja=somAlterIncorreta;
       }
       if (mensagem_tela_alterincorreta!='') {
         mensagem=mensagem_tela_alterincorreta;
       } else {
         mensagem='Existem alternativas incorretas. Refaça os exercícios.';
       }
       recoloqueArrastar = true;
   }
   acertos = acertos + acertosAtual; 
   if(acertosAtual!=9)
   {
      pagCorreta = false;
      var exibeMens = false;
      try {
          var cont = 1;
          while (cont > 0) {
              var dSol = FindObj('DSoltar' + cont);
              if (dSol != null) {
                  cont++;
                  if (dSol.feito == 0) {
                      cont = 0;
                      exibeMens = true;
                      possuiArr = true;
                  }
              } else {
                  if (cont == 1)
                      exibeMens = true;
                  cont = 0;
              }
          }
      } catch(e) {}
      if (considera_incorretas==1)
        exibeMens = false;
      if (preenBranco) {
        tentativas--;
        mensagem = 'Existe preenchimento em branco! Preencha antes de prosseguir';
      }
      if (exibeMens == false) {
      } else {
        if (somReveja!='') {
          if (tipoSomConv ==2) {
            tocaSomStreaming(somReveja);
          } else if (tipoSomConv ==1) {
            tocaSomObj2(somReveja);
          } else {
            toca_somNovo(somReveja, false);
          }
        }
        if (tentativas < maxTentativas || maxTentativas != 1 || possuiArr)
           alert(mensagem);
      }
          return continuaVerExec();
   }
   else
   {
      pagCorreta = true;
      if (somParabens!='') {
        if (tipoSomConv ==2) {
          tocaSomStreaming(somParabens);
        } else if (tipoSomConv ==1) {
          tocaSomObj2(somParabens);
        } else {
          toca_somNovo(somParabens, false);
        }
      }
      if (mensagem_tela_parabens!='') {
        alert(mensagem_tela_parabens);
      } else {
        alert('Parabéns');
      }
        if (temGnpt == 0)
            return null;
   }
 }
}
else
{
   alert('Aguarde até que a página seja carregada completamente.');
   return('Aguarde até que a página seja carregada completamente.');
}
}
function continuaVerExec() {
      if (considera_incorretas == 1) { return null; }
      if (maxTentativas != 0)
      {
         if (tentativas < maxTentativas)
         {
            if (preenBranco == false)
               alert('Tentativas Restantes: ' + (maxTentativas - tentativas));
            preenBranco = false;
            return(mensagem);
         }
         else
         {
            preenBranco = false;
            if (maxTentativas > 1)
               alert('Tentativas Esgotadas!');
            else {
               if (possuiArr)
                  return 1;
               else
                  return null;
            }
         }
      }
      else
      {
         if (considera_incorretas==1) {
           mensagem = null;
         }
         preenBranco = false;
         return(mensagem);
      }
}
// -->
