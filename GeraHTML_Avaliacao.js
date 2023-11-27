<!--
function FixaBorda(objeto1, cor)
{
   if (objeto1.id.indexOf('DImagemEfeito')>-1){
       objeto1.style.width = objeto1.clientWidth + 2;
       objeto1.style.height = objeto1.clientHeight + 2;
   } else {
       if (objeto1.id.indexOf('DRotulo')>-1){
          var id = objeto1.id;
              id = 'DGroup'+id.substring(1, id.length);
              var group = FindObj(id);
              group.style.border = 'solid 2px #'+cor;
       } else {
              objeto1.style.border = 'solid 2px #'+cor;
       }
   }
}
function FixaBorda(objeto1, feitoatual, cor)
{
   if (feitoatual == '1'){
       objeto1.style.width = objeto1.clientWidth + 2;
       objeto1.style.height = objeto1.clientHeight + 2;
       objeto1.style.border = 'solid 2px #FF0000';
   }
}
function Mensagem(mens)
{
   alert(mens);
}
// -->
