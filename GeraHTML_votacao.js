function gravarVoto(projeto, tela, indice, nome, mensagem) {
    var url = "servlet/AtualizaVotoHTML";
    var tot = url + "?projeto="+ projeto +"&tela="+ tela +"&indice="+ indice +"&nome="+ nome;
    var ajax;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.open("POST", tot, true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var values = ajax.responseText;
                if (values == "ok") {
                    alert(mensagem);
                } else {
                    alert(values);
                }
            } else {
                alert("Servidor de votação não encontrado");
            }
        }
    }
}
function apurarVotos(projeto, tela) {
    var url = "servlet/ListaVotoDBHTML";
    var tot = url + "?projeto="+ projeto +"&tela="+ tela;
    var ajax;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.open("POST", tot, true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var values = ajax.responseText;
                criaTabelaApuracao(values);
            } else {
                alert("Servidor de votação não encontrado");
            }
        }
    }
}
function gravaDetalhado(usuario, projeto, tela) {
    var json, text = '{ "exercicios" : ';
    var cont = false, prim = true, aux;
    var achou = false;
    try {
        if (vetarrsoltela != null && vetarrsoltela.length > 0) {
            cont = true;
            text += '[';
            for (var i = 0; i < vetarrsoltela.length; i++) {
                if (prim == false) {
                    text += ', ';
                }
                prim = false;
                text += '{ "usuario":"' + usuario + '" , ';
                text += '"projeto":"' + projeto + '" , ';
                text += '"tela":"' + tela + '" , ';
                text += '"tipoobj":8 , ';
                text += '"indice":' + (i + 1) + ' , ';
                text += '"indice_obj":0 , ';
                aux = '0';
                if (vetarrsoltela[i].answer == vetarrsoltela[i].studentanswer) {
                    aux = '1';
                }
                text += '"certoerrado":' + aux + ' , ';
                text += '"alternativa_selecionada":0 , ';
                text += '"resposta":"" , ';
                text += '"textopreenchido":"" , ';
                text += '"indice_soltar":' + (i + 1) + ' , ';
                text += '"indice_par":' + (i + 1) + ' , ';
                text += '"pendente":0 , ';
                text += '"peso":1 }';
            }
        }
    } catch (e) {}
    try {
        if (vetarrsolimgtela != null && vetarrsolimgtela.length > 0) {
            if (cont == false) {
                cont = true;
                text += '[';
            }
            for (var i = 0; i < vetarrsolimgtela.length; i++) {
                if (prim == false) {
                    text += ', ';
                }
                prim = false;
                text += '{ "usuario":"' + usuario + '" , ';
                text += '"projeto":"' + projeto + '" , ';
                text += '"tela":"' + tela + '" , ';
                text += '"tipoobj":10 , ';
                text += '"indice":' + (i + 1) + ' , ';
                text += '"indice_obj":0 , ';
                aux = '0';
                if (vetarrsolimgtela[i].answer == vetarrsolimgtela[i].studentanswer) {
                    aux = '1';
                }
                text += '"certoerrado":' + aux + ' , ';
                text += '"alternativa_selecionada":0 , ';
                text += '"resposta":"" , ';
                text += '"textopreenchido":"" , ';
                text += '"indice_soltar":' + (i + 1) + ' , ';
                text += '"indice_par":' + (i + 1) + ' , ';
                text += '"pendente":0 , ';
                text += '"peso":1 }';
            }
        }
    } catch (e) {}
    try {
        if (vetarrdifsoltela != null && vetarrdifsoltela.length > 0) {
            if (cont == false) {
                cont = true;
                text += '[';
            }
            for (var i = 0; i < vetarrdifsoltela.length; i++) {
                if (vetarrdifsoltela[i].studentanswer != null) {
                    if (prim == false) {
                        text += ', ';
                    }
                    prim = false;
                    text += '{ "usuario":"' + usuario + '" , ';
                    text += '"projeto":"' + projeto + '" , ';
                    text += '"tela":"' + tela + '" , ';
                    text += '"tipoobj":23 , ';
                    aux = vetarrdifsoltela[i].answer.substring((vetarrdifsoltela[i].answer.length - 1));
                    text += '"indice":' + aux + ' , ';
                    text += '"indice_obj":' + (i + 1) + ' , ';
                    aux = '0';
                    if (vetarrdifsoltela[i].answer == vetarrdifsoltela[i].studentanswer) {
                        aux = '1';
                    }
                    text += '"certoerrado":' + aux + ' , ';
                    text += '"alternativa_selecionada":0 , ';
                    text += '"resposta":"" , ';
                    text += '"textopreenchido":"" , ';
                    aux = vetarrdifsoltela[i].answer.substring((vetarrdifsoltela[i].answer.length - 1));
                    text += '"indice_soltar":' + aux + ' , ';
                    text += '"indice_par":' + aux + ' , ';
                    text += '"pendente":0 , ';
                    text += '"peso":1 }';
                }
            }
        }
    } catch (e) {}
    try {
        if (vetgiratela != null && vetgiratela.length > 0) {
            if (cont == false) {
                cont = true;
                text += '[';
            }
            for (var i = 0; i < vetgiratela.length; i++) {
                if (prim == false) {
                    text += ', ';
                }
                prim = false;
                text += '{ "usuario":"' + usuario + '" , ';
                text += '"projeto":"' + projeto + '" , ';
                text += '"tela":"' + tela + '" , ';
                text += '"tipoobj":13 , ';
                text += '"indice":' + (i + 1) + ' , ';
                text += '"indice_obj":0 , ';
                aux = '0';
                if (vetgiratela[i].answer == vetgiratela[i].studentanswer) {
                    aux = '1';
                }
                text += '"certoerrado":' + aux + ' , ';
                text += '"alternativa_selecionada":' + vetgiratela[i].studentanswer + ' , ';
                text += '"resposta":"" , ';
                text += '"textopreenchido":"" , ';
                text += '"indice_soltar":0 , ';
                text += '"indice_par":0 , ';
                text += '"pendente":0 , ';
                text += '"peso":1 }';
            }
        }
    } catch (e) {}
    try {
        if (vetimagemavatela != null && vetimagemavatela.length > 0) {
            achou = false;
            for (var i = 0; i < vetimagemavatela.length; i++) {
                if (vetimagemavatela[i].studentanswer == 'erro selecionado' || vetimagemavatela[i].studentanswer == 'acerto') {
                    achou = true;
                }
            }
            if (achou) {
                if (cont == false) {
                    cont = true;
                    text += '[';
                }
                for (var i = 0; i < vetimagemavatela.length; i++) {
                    if (prim == false) {
                        text += ', ';
                    }
                    prim = false;
                    text += '{ "usuario":"' + usuario + '" , ';
                    text += '"projeto":"' + projeto + '" , ';
                    text += '"tela":"' + tela + '" , ';
                    text += '"tipoobj":2 , ';
                    text += '"indice":' + (i + 1) + ' , ';
                    text += '"indice_obj":0 , ';
                    aux = '0';
                    if (vetimagemavatela[i].answer == vetimagemavatela[i].studentanswer) {
                        aux = '1';
                    }
                    text += '"certoerrado":' + aux + ' , ';
                    text += '"alternativa_selecionada":0 , ';
                    text += '"resposta":"" , ';
                    text += '"textopreenchido":"" , ';
                    text += '"indice_soltar":0 , ';
                    text += '"indice_par":0 , ';
                    text += '"pendente":0 , ';
                    text += '"peso":1 }';
                }
            }
        }
    } catch (e) {}
    try {
        if (vetligatela != null && vetligatela.length > 0) {
            if (cont == false) {
                cont = true;
                text += '[';
            }
            for (var i = 0; i < vetligatela.length; i++) {
                if (prim == false) {
                    text += ', ';
                }
                prim = false;
                text += '{ "usuario":"' + usuario + '" , ';
                text += '"projeto":"' + projeto + '" , ';
                text += '"tela":"' + tela + '" , ';
                text += '"tipoobj":15 , ';
                text += '"indice":' + (i + 1) + ' , ';
                text += '"indice_obj":0 , ';
                aux = '0';
                if (vetligatela[i].answer == vetligatela[i].studentanswer) {
                    aux = '1';
                }
                text += '"certoerrado":' + aux + ' , ';
                text += '"alternativa_selecionada":0 , ';
                text += '"resposta":"" , ';
                text += '"textopreenchido":"" , ';
                text += '"indice_soltar":' + (i + 1) + ' , ';
                text += '"indice_par":' + (i + 1) + ' , ';
                text += '"pendente":0 , ';
                text += '"peso":1 }';
            }
        }
    } catch (e) {}
    try {
        if (vetpreenchimentotela != null && vetpreenchimentotela.length > 0) {
            if (cont == false) {
                cont = true;
                text += '[';
            }
            for (var i = 0; i < vetpreenchimentotela.length; i++) {
                if (prim == false) {
                    text += ', ';
                }
                prim = false;
                text += '{ "usuario":"' + usuario + '" , ';
                text += '"projeto":"' + projeto + '" , ';
                text += '"tela":"' + tela + '" , ';
                text += '"tipoobj":4 , ';
                text += '"indice":' + (i + 1) + ' , ';
                text += '"indice_obj":0 , ';
                aux = '0';
                if (vetpreenchimentotela[i].answer == vetpreenchimentotela[i].studentanswer) {
                    aux = '1';
                }
                text += '"certoerrado":' + aux + ' , ';
                text += '"alternativa_selecionada":0 , ';
                text += '"resposta":"" , ';
                text += '"textopreenchido":"' + vetpreenchimentotela[i].studentanswer + '" , ';
                text += '"indice_soltar":0 , ';
                text += '"indice_par":0 , ';
                text += '"pendente":0 , ';
                text += '"peso":1 }';
            }
        }
    } catch (e) {}
    try {
        if (vetrotuloavatela != null && vetrotuloavatela.length > 0) {
            achou = false;
            for (var i = 0; i < vetrotuloavatela.length; i++) {
                if (vetrotuloavatela[i].studentanswer == 'erro selecionado' || vetrotuloavatela[i].studentanswer == 'acerto') {
                    achou = true;
                }
            }
            if (achou) {
                if (cont == false) {
                    cont = true;
                    text += '[';
                }
                for (var i = 0; i < vetrotuloavatela.length; i++) {
                    if (prim == false) {
                        text += ', ';
                    }
                    prim = false;
                    text += '{ "usuario":"' + usuario + '" , ';
                    text += '"projeto":"' + projeto + '" , ';
                    text += '"tela":"' + tela + '" , ';
                    text += '"tipoobj":3 , ';
                    text += '"indice":' + (i + 1) + ' , ';
                    text += '"indice_obj":0 , ';
                    aux = '0';
                    if (vetrotuloavatela[i].answer == vetrotuloavatela[i].studentanswer) {
                        aux = '1';
                    }
                    text += '"certoerrado":' + aux + ' , ';
                    text += '"alternativa_selecionada":0 , ';
                    text += '"resposta":"" , ';
                    text += '"textopreenchido":"" , ';
                    text += '"indice_soltar":0 , ';
                    text += '"indice_par":0 , ';
                    text += '"pendente":0 , ';
                    text += '"peso":1 }';
                }
            }
        }
    } catch (e) {}
    try {
        if (vettestevestibulartela != null && vettestevestibulartela.length > 0) {
            if (cont == false) {
                cont = true;
                text += '[';
            }
            for (var i = 0; i < vettestevestibulartela.length; i++) {
                if (prim == false) {
                    text += ', ';
                }
                prim = false;
                text += '{ "usuario":"' + usuario + '" , ';
                text += '"projeto":"' + projeto + '" , ';
                text += '"tela":"' + tela + '" , ';
                text += '"tipoobj":28 , ';
                text += '"indice":' + (i + 1) + ' , ';
                text += '"indice_obj":0 , ';
                aux = '0';
                if (vettestevestibulartela[i].answer == vettestevestibulartela[i].studentanswer) {
                    aux = '1';
                }
                text += '"certoerrado":' + aux + ' , ';
                text += '"alternativa_selecionada":' + vettestevestibulartela[i].studentanswer + ' , ';
                text += '"resposta":"" , ';
                text += '"textopreenchido":"" , ';
                text += '"indice_soltar":0 , ';
                text += '"indice_par":0 , ';
                text += '"pendente":0 , ';
                text += '"peso":1 }';
            }
        }
    } catch (e) {}
    text += ' ]}';
    if (prim == false) {
        json = JSON.parse(text);
        var url = "servlet/GravaTesteDetalheGeraHTML";
        var tot = url + "?tipo=2&usu="+ usuario +"&proj="+ projeto +"&status=2";
        var ajax;
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        ajax.open("POST", tot, true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
        ajax.send('json=' + text);
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                } else {
                }
            }
        }
    }
}
function gravaNota(usuario, projeto, tela) {
    var nota = 0;
    if (!(erros==0 && acertos==0)) {
        nota = Math.round((acertos * 100) / (erros + acertos));
    }
    var json, text = '';
    text = '{"tela":"' + tela + '",';
    text += '"nota":' + nota + ',';
    text += '"tempo":0,';
    text += '"erros":' + erros +',';
    text += '"acertos":' + acertos + '}';
    json = JSON.parse(text);    var url = "servlet/GravaNotaGeraHTML";
    var tot = url + "?usu="+ usuario +"&proj="+ projeto;
    var ajax;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    ajax.open("POST", tot, true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send('json=' + text);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
            } else {
            }
        }
    }
}
