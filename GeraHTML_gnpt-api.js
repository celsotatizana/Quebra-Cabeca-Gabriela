/*
 * Grava Nota por Teste API
 * 
 * Allows the record of students answers for each question
 */

/////////////////
// Question Types
/////////////////

/**
 * @enum {String}
 */
QuestionTypes = {
  QUIZ: '1',
  FILL: '2',
  LABEL_FUNCTION: '3',
  IMAGE_FUNCTION: '4',
  DRAG_DROP_IMG: '5',
  DRAG_DROP: '6',
  DRAG_DIF_DROP: '7',
  TURNS_FIG: '8',
  LEAGUE_POINTS: '9',
  TEST: '10',
  ANIMATION_FUNCTION: '4'
};

///////////////////
// Question Classes
///////////////////

/*
 * Quiz
 * 
 * References to "Teste Vestibular"
 */

/**
 * @constructor
 * @param {String} description
 * @param {String} answer
 * @param {String} page
 * @returns {Quiz}
 */
function Quiz(description, answer, page) {
  this.questiontype = QuestionTypes.QUIZ;
  this.description = String(description);
  this.answer = String(answer);
  this.page = String(page);
  this.studentanswer = null;
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Quiz.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  return studentanswer === this.answer ? true : false;
};

/*
 * Fill
 * 
 * References to "Preenchimento de Lacunas"
 */

/**
 * @constructor
 * @param {String} description
 * @param {Array} answer
 * @param {String} page
 * @returns {Quiz}
 */
function Fill(description, answer, page) {
  this.questiontype = QuestionTypes.FILL;
  this.description = String(description);
  this.answer = answer;
  this.page = String(page);
  this.studentanswer = null;
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Fill.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  
  if (! this.answer instanceof Array) {
    throw "Not Array";
  }
  
  var l = this.answer.length;
  for (var i = 0; i < l; i++) {
    if (this.answer[i] === studentanswer) {
      return true;
    }
  }
  return false;
};

/*
 * Label_function
 *
 * References to "Rótulo com função de avaliação"
 */

/**
 * @constructor
 * @param {String} description
 * @param {String} answer
 * @param {String} page
 * @returns {Label_function}
 */
 function Label_function(description, answer, page) {
	this.questiontype = QuestionTypes.LABEL_FUNCTION;
	this.description = String(description);
	this.answer = answer;
	this.page = String(page);
	this.studentanswer = null;
 }

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Label_function.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  return studentanswer === this.answer ? true : false;
};
 
/*
 * Image_function
 *
 * References to "Imagem com função de avaliação"
 */

/**
 * @constructor
 * @param {String} description
 * @param {String} answer
 * @param {String} page
 * @returns {Image_function}
 */
function Image_function(description, answer, page) {
	this.questiontype = QuestionTypes.IMAGE_FUNCTION;
	this.description = String(description);
	this.answer = answer;
	this.page = String(page);
	this.studentanswer = null;
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Image_function.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  return studentanswer === this.answer ? true : false;
};

/*
 * Animation_function
 *
 * References to "Animação com função de avaliação"
 */

/**
 * @constructor
 * @param {String} description
 * @param {String} answer
 * @param {String} page
 * @returns {Animation_function}
 */
function Animation_function(description, answer, page) {
	this.questiontype = QuestionTypes.ANIMATION_FUNCTION;
	this.description = String(description);
	this.answer = answer;
	this.page = String(page);
	this.studentanswer = null;
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Animation_function.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  return studentanswer === this.answer ? true : false;
};

/*
 * Drag_drop_img
 *
 * References to "Arrastar - Soltar Imagem"
 */

/**
 * @constructor
 * @param {String} description
 * @param {String} answer
 * @param {String} page
 * @returns {Drag_drop_img}
 */
function Drag_drop_img(description, answer, page) {
	this.questiontype = QuestionTypes.DRAG_DROP_IMG;
	this.description = String(description);
	this.answer = answer;
	this.page = String(page);
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Drag_drop_img.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  return studentanswer === this.answer ? true : false;
};

/*
 * Drag_drop
 *
 * References to "Arrastar - Soltar"
 */

/**
 * @constructor
 * @param {String} description
 * @param {String} answer
 * @param {String} page
 * @returns {Drag_drop}
 */
function Drag_drop(description, answer, page) {
	this.questiontype = QuestionTypes.DRAG_DROP;
	this.description = String(description);
	this.answer = answer;
	this.page = String(page);
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Drag_drop.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  return studentanswer === this.answer ? true : false;
};

/*
 * Drag_dif_drop
 *
 * References to "Arrastar diferente Soltar"
 */

/**
 * @constructor
 * @param {String} description
 * @param {Array} answer
 * @param {String} page
 * @returns {Drag_dif_drop}
 */
function Drag_dif_drop(description, answer, page) {
	this.questiontype = QuestionTypes.DRAG_DIF_DROP;
	this.description = String(description);
	this.answer = answer;
	this.page = String(page);
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Drag_dif_drop.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  
  if (! this.answer instanceof Array) {
    throw "Not Array";
  }
  
  var l = this.answer.length;
  for (var i = 0; i < l; i++) {
    if (this.answer[i] === studentanswer) {
      return true;
    }
  }
  return false;
};

/*
 * Turns_fig
 *
 * References to "Gira Figuras"
 */

/**
 * @constructor
 * @param {String} description
 * @param {Array} answer
 * @param {String} page
 * @returns {Turns_fig}
 */
function Turns_fig(description, answer, page) {
	this.questiontype = QuestionTypes.TURNS_FIG;
	this.description = String(description);
	this.answer = answer;
	this.page = String(page);
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Turns_fig.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  return studentanswer === this.answer ? true : false;
};

/*
 * League_points
 *
 * References to "Liga Pontos"
 */

/**
 * @constructor
 * @param {String} description
 * @param {String} answer
 * @param {String} page
 * @returns {League_points}
 */
function League_points(description, answer, page) {
	this.questiontype = QuestionTypes.LEAGUE_POINTS;
	this.description = String(description);
	this.answer = answer;
	this.page = String(page);
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
League_points.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  return studentanswer === this.answer ? true : false;
};

/*
 * Test
 *
 * References to "Teste"
 */
/**
 * @constructor
 * @param {String} description
 * @param {String} answer
 * @param {String} page
 * @returns {Test}
 */
function Test(description, answer, page) {
	this.questiontype = QuestionTypes.TEST;
	this.description = String(description);
	this.answer = answer;
	this.page = String(page);
}

/**
 * Checks the students answer
 * @param {String} studentanswer
 * @returns {Boolean}
 */
Test.prototype.isCorrect = function(studentanswer) {
  this.studentanswer = String(studentanswer);
  return studentanswer === this.answer ? true : false;
};

/**
 * Account the amount of char in a string
 * @param {String} str
 * @param {char} charCmp
 * @returns {Array()}
 */
function strCount(str, charCmp) {
	var cont = 0;
	var vet = new Array();
	for (i = 0; i < str.length; i++) {
		if (str.charAt(i) == charCmp) {
			vet[cont] = i;
			cont++;
		}
	}
	return vet;
}

/**
 * Returns a parameter of a string
 * @param {String} str
 * @param {int} num
 * @param {int} tipo
 * @returns {Undetermined}
 */
function getParam(str, num, tipo) {
	var sub = "";
	var ini = 0;
	if (num == 1) {
		sub = str.substring((ini+1), str.indexOf(','));
	} else {
		var n = num;
		var dec = true;
		while (n > 1) {
			if (str.charAt(ini) == '[')
				dec = false;
			else {
				if (str.charAt(ini) == ']')
					dec = true;
					if (str.charAt(ini) == ',' && dec)
						n--;
			}
			ini++;
		}
		ini--;
		if (num == 4) {
			sub = str.substring((ini+1), str.indexOf('}'));
		} else {
			if (tipo == 1 || num ==3) {
				str = str.substring((ini+1));
				n = 0;
				while (n < str.length && str.charAt(n) != ',') {
					sub += str.charAt(n);
					n++;
				}
			} else {
				ini += 2;
				var str2 = str.substring(ini);
				str2 = str2.substring(0, str2.indexOf("]") + 1);
				var indResp = strCount(str2, ",");
				sub = new Array();
				if (indResp.length == 0)
					sub[0] = str2.substring(0, str2.indexOf("]"));
				else {
					sub[0] = str2.substring(0, str2.indexOf(","));
					for (i = 0; i < indResp.length; i++) {
						if ((i + 1) == indResp.length)
							sub[i + 1] = str2.substring(indResp[i]+2, str2.substring((indResp[i]+1)).indexOf("]")+1);
						else
							sub[i + 1] = str2.substring(indResp[i]+2, str2.substring((indResp[i]+1)).indexOf(",")+1);
					}
				}
				return sub;
			}
		}
	}
	if (sub == '')
		sub = '\'\'';
	return sub;
}
 /**
  * Convert a String to the object Quiz
  * @param {String} vtv
  * @returns {Array()} Array from Quiz object
  */
function parseQuiz(vtv) {//following this pattern: {'description','answer','page','studentanswer'},{...}
	var vetQuiz = new Array();
	if (vtv != '{\'\',\'\',\'\',\'\'}') {//is not empty
		var tam = strCount(vtv.toString(), '{');
		var j;
		for (j = 0; j < tam.length; j++) {
			vetQuiz[j] = new Quiz('','','');
			vetQuiz[j].description = getParam(vtv.substring(tam[j]), 1, 1);
			vetQuiz[j].answer = getParam(vtv.substring(tam[j]), 2, 1);
			vetQuiz[j].page = getParam(vtv.substring(tam[j]), 3, 1);
			vetQuiz[j].studentanswer = getParam(vtv.substring(tam[j]), 4, 1);
		}
	}
	return vetQuiz;
}
 /**
  * Convert a String to the object Fill
  * @param {String} vpl
  * @returns {Array()} Array from Fill object
  */
function parseFill(vpl) {//following this pattern: {'description',['answer1','answer2',...],'page','studentanswer'},{...}
	var vetFill = new Array();
	if (vpl != '{\'\',[\'\'],\'\',\'\'}') {//is not empty
		var tam = strCount(vpl.toString(), '{');
		var resp;
		var j;
		for (j = 0; j < tam.length; j++) {
			resp = getParam(vpl.substring(tam[j]), 2, 2);
			vetFill[j] = new Fill('',resp,'');
			vetFill[j].description = getParam(vpl.substring(tam[j]), 1, 2);
			vetFill[j].page = getParam(vpl.substring(tam[j]), 3, 2);
			vetFill[j].studentanswer = getParam(vpl.substring(tam[j]), 4, 2);
		}
	}
	return vetFill;
}
 /**
  * Convert a String to the object Label_function
  * @param {String} vlf
  * @returns {Array()} Array from Label_function object
  */
function parseLabel_function(vlf) {//following this pattern: {'description','answer','page','studentanswer'},{...}
	var vetLabel_function = new Array();
	if (vlf != '{\'\',\'\',\'\',\'\'}') {//is not empty
		var tam = strCount(vlf.toString(), '{');
		var j;
		for (j = 0; j < tam.length; j++) {
			vetLabel_function[j] = new Label_function('','','');
			vetLabel_function[j].description = getParam(vlf.substring(tam[j]), 1, 1);
			vetLabel_function[j].answer = getParam(vlf.substring(tam[j]), 2, 1);
			vetLabel_function[j].page = getParam(vlf.substring(tam[j]), 3, 1);
			vetLabel_function[j].studentanswer = getParam(vlf.substring(tam[j]), 4, 1);
		}
	}
	return vetLabel_function;
}
 /**
  * Convert a String to the object Image_function
  * @param {String} vif
  * @returns {Array()} Array from Image_function object
  */
function parseImage_function(vif) {//following this pattern: {'description','answer','page','studentanswer'},{...}
	var vetImage_function = new Array();
	if (vif != '{\'\',\'\',\'\',\'\'}') {//is not empty
		var tam = strCount(vif.toString(), '{');
		var j;
		for (j = 0; j < tam.length; j++) {
			vetImage_function[j] = new Image_function('','','');
			vetImage_function[j].description = getParam(vif.substring(tam[j]), 1, 1);
			vetImage_function[j].answer = getParam(vif.substring(tam[j]), 2, 1);
			vetImage_function[j].page = getParam(vif.substring(tam[j]), 3, 1);
			vetImage_function[j].studentanswer = getParam(vif.substring(tam[j]), 4, 1);
		}
	}
	return vetImage_function;
}
 /**
  * Convert a String to the object Drag_drop_img
  * @param {String} vddi
  * @returns {Array()} Array from Drag_drop_img object
  */
function parseDrag_drop_img(vddi) {//following this pattern: {'description','answer','page','studentanswer'},{...}
	var vetDrag_drop_img = new Array();
	if (vddi != '{\'\',\'\',\'\',\'\'}') {//is not empty
		var tam = strCount(vddi.toString(), '{');
		var j;
		for (j = 0; j < tam.length; j++) {
			vetDrag_drop_img[j] = new Drag_drop_img('','','');
			vetDrag_drop_img[j].description = getParam(vddi.substring(tam[j]), 1, 1);
			vetDrag_drop_img[j].answer = getParam(vddi.substring(tam[j]), 2, 1);
			vetDrag_drop_img[j].page = getParam(vddi.substring(tam[j]), 3, 1);
			vetDrag_drop_img[j].studentanswer = getParam(vddi.substring(tam[j]), 4, 1);
		}
	}
	return vetDrag_drop_img;
}
 /**
  * Convert a String to the object Drag_drop
  * @param {String} vdd
  * @returns {Array()} Array from Drag_drop object
  */
function parseDrag_drop(vdd) {//following this pattern: {'description','answer','page','studentanswer'},{...}
	var vetDrag_drop = new Array();
	if (vdd != '{\'\',\'\',\'\',\'\'}') {//is not empty
		var tam = strCount(vdd.toString(), '{');
		var j;
		for (j = 0; j < tam.length; j++) {
			vetDrag_drop[j] = new Drag_drop('','','');
			vetDrag_drop[j].description = getParam(vdd.substring(tam[j]), 1, 1);
			vetDrag_drop[j].answer = getParam(vdd.substring(tam[j]), 2, 1);
			vetDrag_drop[j].page = getParam(vdd.substring(tam[j]), 3, 1);
			vetDrag_drop[j].studentanswer = getParam(vdd.substring(tam[j]), 4, 1);
		}
	}
	return vetDrag_drop;
}
 /**
  * Convert a String to the object Drag_dif_drop
  * @param {String} vddd
  * @returns {Array()} Array from Drag_did_drop object
  */
function parseDrag_dif_drop(vddd) {//following this pattern: {'description',['answer1','answer2',...],'page','studentanswer'},{...}
	var vetDrag_dif_drop = new Array();
	if (vddd != '{\'\',\'\',\'\',\'\'}') {//is not empty
		var tam = strCount(vddd.toString(), '{');
		var resp;
		var j;
		for (j = 0; j < tam.length; j++) {
			resp = getParam(vddd.substring(tam[j]), 2, 1);
			vetDrag_dif_drop[j] = new Drag_dif_drop('',resp,'');
			vetDrag_dif_drop[j].description = getParam(vddd.substring(tam[j]), 1, 1);
			vetDrag_dif_drop[j].page = getParam(vddd.substring(tam[j]), 3, 1);
			vetDrag_dif_drop[j].studentanswer = getParam(vddd.substring(tam[j]), 4, 1);
		}
	}
	return vetDrag_dif_drop;
}
 /**
  * Convert a String to the object Turns_fig
  * @param {String} vtf
  * @returns {Array()} Array from Turns_fig object
  */
function parseTurns_fig(vtf) {//following this pattern: {'description','answer','page','studentanswer'},{...}
	var vetTurns_fig = new Array();
	if (vtf != '{\'\',\'\',\'\',\'\'}') {//is not empty
		var tam = strCount(vtf.toString(), '{');
		var j;
		for (j = 0; j < tam.length; j++) {
			vetTurns_fig[j] = new Turns_fig('','','');
			vetTurns_fig[j].description = getParam(vtf.substring(tam[j]), 1, 1);
			vetTurns_fig[j].answer = getParam(vtf.substring(tam[j]), 2, 1);
			vetTurns_fig[j].page = getParam(vtf.substring(tam[j]), 3, 1);
			vetTurns_fig[j].studentanswer = getParam(vtf.substring(tam[j]), 4, 1);
		}
	}
	return vetTurns_fig;
}
 /**
  * Convert a String to the object League_points
  * @param {String} vlp
  * @returns {Array()} Array from League_points object
  */
function parseLeague_points(vlp) {//following this pattern: {'description','answer','page','studentanswer'},{...}
	var vetLeague_points = new Array();
	if (vlp != '{\'\',\'\',\'\',\'\'}') {//is not empty
		var tam = strCount(vlp.toString(), '{');
		var j;
		for (j = 0; j < tam.length; j++) {
			vetLeague_points[j] = new League_points('','','');
			vetLeague_points[j].description = getParam(vlp.substring(tam[j]), 1, 1);
			vetLeague_points[j].answer = getParam(vlp.substring(tam[j]), 2, 1);
			vetLeague_points[j].page = getParam(vlp.substring(tam[j]), 3, 1);
			vetLeague_points[j].studentanswer = getParam(vlp.substring(tam[j]), 4, 1);
		}
	}
	return vetLeague_points;
}
 /**
  * Convert a String to the object Test
  * @param {String} vt
  * @returns {Array()} Array from Test object
  */
function parseTest(vt) {//following this pattern: {'description','answer','page','studentanswer'},{...}
	var vetTest = new Array();
	if (vt != '{\'\',\'\',\'\',\'\'}') {//is not empty
		var tam = strCount(vt.toString(), '{');
		var j;
		for (j = 0; j < tam.length; j++) {
			vetTest[j] = new Test('','','');
			vetTest[j].description = getParam(vt.substring(tam[j]), 1, 1);
			vetTest[j].answer = getParam(vt.substring(tam[j]), 2, 1);
			vetTest[j].page = getParam(vt.substring(tam[j]), 3, 1);
			vetTest[j].studentanswer = getParam(vt.substring(tam[j]), 4, 1);
		}
	}
	return vetTest;
}
 /**
 * Convert the object Quiz to String
 * @param {Array()} vettestevestibular
 * @returns {String}
 */
 function toStringQuiz(vettestevestibular) {
	if (vettestevestibular != null && vettestevestibular.length > 0) {
		var str = '';
		for (i = 0; i < vettestevestibular.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vettestevestibular[i].description == '')
				str += '\'\'';
			else
				str += vettestevestibular[i].description;
			str += ','+ vettestevestibular[i].answer;
			str += ','+ vettestevestibular[i].page;
			if (vettestevestibular[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vettestevestibular[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object Quiz to moodle String format
 * @param {Array()} vettestevestibular
 * @returns {String}
 */
 function toMoodleStringQuiz(vettestevestibular, i) {
	if (vettestevestibular != null && vettestevestibular.length > 0) {
		var str = 'question=';
		if (vettestevestibular[i].description == '')
			str += '';
		else
			str += vettestevestibular[i].description;
		str += '&type='+ QuestionTypes.QUIZ;
		if (vettestevestibular[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vettestevestibular[i].studentanswer;
		str += '&correctanswer='+ vettestevestibular[i].answer;
		str += '&page='+ vettestevestibular[i].page;
		return str;
	} else {
		return null;
	}
 }
 /**
 * Convert the object Fill to String
 * @param {Array()} vetpreenchimento
 * @returns {String}
 */
 function toStringFill(vetpreenchimento) {
	if (vetpreenchimento != null && vetpreenchimento.length > 0) {
		var str = '';
		for (i = 0; i < vetpreenchimento.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetpreenchimento[i].description == '')
				str += '\'\'';
			else
				str += vetpreenchimento[i].description;
			str += ',[';
			for (j = 0; j < vetpreenchimento[i].answer.length; j++) {
				if (j > 0)
					str += ',';
				str += vetpreenchimento[i].answer[j];
			}
			str += '],'+ vetpreenchimento[i].page;
			if (vetpreenchimento[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetpreenchimento[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',[\'\'],\'\',\'\'}';
	}
 }
 /**
 * Convert the object Fill to moodle String format
 * @param {Array()} vetpreenchimento
 * @returns {String}
 */
 function toMoodleStringFill(vetpreenchimento, i) {
	if (vetpreenchimento != null && vetpreenchimento.length > 0) {
		var str = 'question=';
		if (vetpreenchimento[i].description == '')
			str += '';
		else
			str += vetpreenchimento[i].description;
		str += '&type='+ QuestionTypes.FILL;
		if (vetpreenchimento[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vetpreenchimento[i].studentanswer;
		str += '&correctanswer=';
		for (j = 0; j < vetpreenchimento[i].answer.length; j++) {
			if (j > 0)
				str += '|';
			str += vetpreenchimento[i].answer[j];
		}
		str += '&page='+ vetpreenchimento[i].page;
		return str;
	} else {
		return null;
	}
 }
 /**
 * Convert the object Label_function to String
 * @param {Array()} vetrotulofuncao
 * @returns {String}
 */
 function toStringLabel_function(vetrotulofuncao) {
	if (vetrotulofuncao != null && vetrotulofuncao.length > 0) {
		var str = '';
		for (i = 0; i < vetrotulofuncao.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetrotulofuncao[i].description == '')
				str += '\'\'';
			else
				str += vetrotulofuncao[i].description;
			str += ','+ vetrotulofuncao[i].answer;
			str += ','+ vetrotulofuncao[i].page;
			if (vetrotulofuncao[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetrotulofuncao[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object Label_function to moodle String format
 * @param {Array()} vetrotulofuncao
 * @returns {String}
 */
 function toMoodleStringLabel_function(vetrotulofuncao, i) {
	if (vetrotulofuncao != null && vetrotulofuncao.length > 0) {
		var str = 'question=';
		if (vetrotulofuncao[i].description == '')
			str += '';
		else
			str += vetrotulofuncao[i].description;
		str += '&type='+ QuestionTypes.LABEL_FUNCTION;
		if (vetrotulofuncao[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vetrotulofuncao[i].studentanswer;
		str += '&correctanswer='+ vetrotulofuncao[i].answer;
		str += '&page='+ vetrotulofuncao[i].page;
		return str;
	} else {
		return null;
	}
 }
 /**
 * Convert the object Image_function to String
 * @param {Array()} vetimagemfuncao
 * @returns {String}
 */
 function toStringImage_function(vetimagemfuncao) {
	if (vetimagemfuncao != null && vetimagemfuncao.length > 0) {
		var str = '';
		for (i = 0; i < vetimagemfuncao.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetimagemfuncao[i].description == '')
				str += '\'\'';
			else
				str += vetimagemfuncao[i].description;
			str += ','+ vetimagemfuncao[i].answer;
			str += ','+ vetimagemfuncao[i].page;
			if (vetimagemfuncao[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetimagemfuncao[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object Image_function to moodle String format
 * @param {Array()} vetimagemfuncao
 * @returns {String}
 */
 function toMoodleStringImage_function(vetimagemfuncao, i) {
	if (vetimagemfuncao != null && vetimagemfuncao.length > 0) {
		var str = 'question=';
		if (vetimagemfuncao[i].description == '')
			str += '';
		else
			str += vetimagemfuncao[i].description;
		str += '&type='+ QuestionTypes.IMAGE_FUNCTION;
		if (vetimagemfuncao[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vetimagemfuncao[i].studentanswer;
		str += '&correctanswer='+ vetimagemfuncao[i].answer;
		str += '&page='+ vetimagemfuncao[i].page;
		return str;
	} else {
		return null;
	}
 }
 /**
 * Convert the object Animation_function to String
 * @param {Array()} vetanimacaofuncao
 * @returns {String}
 */
 function toStringAnimation_function(vetanimacaofuncao) {
	if (vetanimacaofuncao != null && vetanimacaofuncao.length > 0) {
		var str = '';
		for (i = 0; i < vetanimacaofuncao.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetanimacaofuncao[i].description == '')
				str += '\'\'';
			else
				str += vetanimacaofuncao[i].description;
			str += ','+ vetanimacaofuncao[i].answer;
			str += ','+ vetanimacaofuncao[i].page;
			if (vetanimacaofuncao[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetanimacaofuncao[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object Animation_function to moodle String format
 * @param {Array()} vetanimacaofuncao
 * @returns {String}
 */
 function toMoodleStringAnimation_function(vetanimacaofuncao, i) {
	if (vetanimacaofuncao != null && vetanimacaofuncao.length > 0) {
		var str = 'question=';
		if (vetanimacaofuncao[i].description == '')
			str += '';
		else
			str += vetanimacaofuncao[i].description;
		str += '&type='+ QuestionTypes.ANIMATION_FUNCTION;
		if (vetanimacaofuncao[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vetanimacaofuncao[i].studentanswer;
		str += '&correctanswer='+ vetanimacaofuncao[i].answer;
		str += '&page='+ vetanimacaofuncao[i].page;
		return str;
	} else {
		return null;
	}
 }
 /**
 * Convert the object Drag_drop_img to String
 * @param {Array()} vetarrsolimg
 * @returns {String}
 */
 function toStringDrag_drop_img(vetarrsolimg) {
	if (vetarrsolimg != null && vetarrsolimg.length > 0) {
		var str = '';
		for (i = 0; i < vetarrsolimg.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetarrsolimg[i].description == '')
				str += '\'\'';
			else
				str += vetarrsolimg[i].description;
			str += ','+ vetarrsolimg[i].answer;
			str += ','+ vetarrsolimg[i].page;
			if (vetarrsolimg[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetarrsolimg[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object Drag_drop_img to moodle String format
 * @param {Array()} vetarrsolimg
 * @returns {String}
 */
 function toMoodleStringDrag_drop_img(vetarrsolimg, i) {
	if (vetarrsolimg != null && vetarrsolimg.length > 0) {
		var str = 'question=';
		if (vetarrsolimg[i].description == '')
			str += '';
		else
			str += vetarrsolimg[i].description;
		str += '&type='+ QuestionTypes.DRAG_DROP_IMG;
		if (vetarrsolimg[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vetarrsolimg[i].studentanswer;
		str += '&correctanswer='+ vetarrsolimg[i].answer;
		str += '&page='+ vetarrsolimg[i].page;
		return str;
	} else {
		return null;
	}
 }
 /**
 * Convert the object Drag_drop to String
 * @param {Array()} vetarrsol
 * @returns {String}
 */
 function toStringDrag_drop(vetarrsol) {
	if (vetarrsol != null && vetarrsol.length > 0) {
		var str = '';
		for (i = 0; i < vetarrsol.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetarrsol[i].description == '')
				str += '\'\'';
			else
				str += vetarrsol[i].description;
			str += ','+ vetarrsol[i].answer;
			str += ','+ vetarrsol[i].page;
			if (vetarrsol[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetarrsol[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object Drag_drop to moodle String format
 * @param {Array()} vetarrsol
 * @returns {String}
 */
 function toMoodleStringDrag_drop(vetarrsol, i) {
	if (vetarrsol != null && vetarrsol.length > 0) {
		var str = 'question=';
		if (vetarrsol[i].description == '')
			str += '';
		else
			str += vetarrsol[i].description;
		str += '&type='+ QuestionTypes.DRAG_DROP;
		if (vetarrsol[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vetarrsol[i].studentanswer;
		str += '&correctanswer='+ vetarrsol[i].answer;
		str += '&page='+ vetarrsol[i].page;
		return str;
	} else {
		return null;
	}
 }
 /**
 * Convert the object Drag_dif_drop to String
 * @param {Array()} vetarrdifsol
 * @returns {String}
 */
 function toStringDrag_dif_drop(vetarrdifsol) {
	if (vetarrdifsol != null && vetarrdifsol.length > 0) {
		var str = '';
		for (i = 0; i < vetarrdifsol.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetarrdifsol[i].description == '')
				str += '\'\'';
			else
				str += vetarrdifsol[i].description;
			str += ','+ vetarrdifsol[i].answer;
			str += ','+ vetarrdifsol[i].page;
			if (vetarrdifsol[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetarrdifsol[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object Drag_dif_drop to moodle String format
 * @param {Array()} vetarrdifsol
 * @returns {String}
 */
 function toMoodleStringDrag_dif_drop(vetarrdifsol, i) {
	if (vetarrdifsol != null && vetarrdifsol.length > 0) {
		var str = 'question=';
		if (vetarrdifsol[i].description == '')
			str += '';
		else
			str += vetarrdifsol[i].description;
		str += '&type='+ QuestionTypes.DRAG_DIF_DROP;
		if (vetarrdifsol[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vetarrdifsol[i].studentanswer;
		str += '&correctanswer='+ vetarrdifsol[i].answer;
		str += '&page='+ vetarrdifsol[i].page;
		return str;
	} else {
		return null;
	}
 }
 /**
 * Convert the object Turns_fig to String
 * @param {Array()} vetgira
 * @returns {String}
 */
 function toStringTurns_fig(vetgira) {
	if (vetgira != null && vetgira.length > 0) {
		var str = '';
		for (i = 0; i < vetgira.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetgira[i].description == '')
				str += '\'\'';
			else
				str += vetgira[i].description;
			str += ','+ vetgira[i].answer;
			str += ','+ vetgira[i].page;
			if (vetgira[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetgira[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object Turns_fig to moodle String format
 * @param {Array()} vetgira
 * @returns {String}
 */
 function toMoodleStringTurns_fig(vetgira, i) {
	if (vetgira != null && vetgira.length > 0) {
		var str = 'question=';
		if (vetgira[i].description == '')
			str += '';
		else
			str += vetgira[i].description;
		str += '&type='+ QuestionTypes.TURNS_FIG;
		if (vetgira[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vetgira[i].studentanswer;
		str += '&correctanswer='+ vetgira[i].answer;
		str += '&page='+ vetgira[i].page;
		return str;
	} else {
		return null;
	}
 }
 /**
 * Convert the object League_points to String
 * @param {Array()} vetliga
 * @returns {String}
 */
 function toStringLeague_points(vetliga) {
	if (vetliga != null && vetliga.length > 0) {
		var str = '';
		for (i = 0; i < vetliga.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetliga[i].description == '')
				str += '\'\'';
			else
				str += vetliga[i].description;
			str += ','+ vetliga[i].answer;
			str += ','+ vetliga[i].page;
			if (vetliga[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetliga[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object League_points to moodle String format
 * @param {Array()} vetliga
 * @returns {String}
 */
 function toMoodleStringLeague_points(vetliga, i) {
	if (vetliga != null && vetliga.length > 0) {
		var str = 'question=';
		if (vetliga[i].description == '')
			str += '';
		else
			str += vetliga[i].description;
		str += '&type='+ QuestionTypes.LEAGUE_POINTS;
		if (vetliga[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vetliga[i].studentanswer;
		str += '&correctanswer='+ vetliga[i].answer;
		str += '&page='+ vetliga[i].page;
		return str;
	} else {
		return null;
	}
 }
  /**
 * Convert the object Test to String
 * @param {Array()} vetteste
 * @returns {String}
 */
 function toStringTest(vetteste) {
	if (vetteste != null && vetteste.length > 0) {
		var str = '';
		for (i = 0; i < vetteste.length; i++) {
			if (i > 0)
				str += ',';
			str += '{';
			if (vetteste[i].description == '')
				str += '\'\'';
			else
				str += vetteste[i].description;
			str += ','+ vetteste[i].answer;
			str += ','+ vetteste[i].page;
			if (vetteste[i].studentanswer == '')
				str += ',\'\'';
			else
				str += ','+ vetteste[i].studentanswer;
			str += '}';
		}
		return str;
	} else {
		return '{\'\',\'\',\'\',\'\'}';
	}
 }
 /**
 * Convert the object Test to moodle String format
 * @param {Array()} vetteste
 * @returns {String}
 */
 function toMoodleStringTest(vetteste, i) {
	if (vetteste != null && vetteste.length > 0) {
		var str = 'question=';
		if (vetteste[i].description == '')
			str += '';
		else
			str += vetteste[i].description;
		str += '&type='+ QuestionTypes.TEST;
		if (vetteste[i].studentanswer == '')
			str += '&useranswer=';
		else
			str += '&useranswer='+ vetteste[i].studentanswer;
		str += '&correctanswer='+ vetteste[i].answer;
		str += '&page='+ vetteste[i].page;
		return str;
	} else {
		return null;
	}
 }